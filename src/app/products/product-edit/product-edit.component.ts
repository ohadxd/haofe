import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, Input, inject  } from '@angular/core';
import {FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Storage, ref, uploadBytesResumable, UploadTaskSnapshot, getDownloadURL } from '@angular/fire/storage';
import { ProductsService } from '../products.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProductData } from 'src/app/shared/interfaces';
@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})

// class to edit file profile
// the data will be exported as JSON
/**
 * @param productForm object contains the html form elements inputs
 */
export class ProductEditComponent {

  // private appCheck: AppCheck = inject(AppCheck);
  productForm: FormGroup = new FormGroup({});
  private readonly storage: Storage = inject(Storage);
  fileName: string = "";
  @Input()
  requiredFileType:string = "";
  uploadProgress:number = -1;
  uploadSub: Subscription = new Subscription;
  uploadTask: UploadTaskSnapshot | undefined;
  imgPath: string = "";

  previousCategory: string;
  id: string;
  editMode: boolean = false;

  constructor(private http: HttpClient, private productsService: ProductsService,
              private route: ActivatedRoute, private router: Router) {}


  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = params['id'];
          this.editMode = params['id'] != null;
          this.initForm();
        }
      );
  }
//this method initialize the form in edit mode with the params of the object to update
  private initForm() {
    if(this.editMode) {
      let product: ProductData = this.productsService.getProduct(this.id);
      this.previousCategory = product.category;
      this.productForm = new FormGroup({
        name: new FormControl(product.name, Validators.required),
        category: new FormControl(product.category, Validators.required),
        description: new FormControl(product.description, Validators.required),
        imgPath: new FormControl(product.imgPath, Validators.required),
        price: new FormControl(product.price, {validators: [Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/)]})
    });
  } else {
      this.productForm = new FormGroup({
        name: new FormControl('', Validators.required),
        category: new FormControl('', Validators.required),
        description: new FormControl('', Validators.required),
        imgPath: new FormControl('', Validators.required),
        price: new FormControl('', {validators: [Validators.required,
            Validators.pattern(/^[1-9]+[0-9]*$/)]})
      });
    }
  }
  /*
  handle the file select event
   */
  onFileSelected($event: any) {
    let file:File|null = null;

    if ($event.target.files[0] != null)
    file = $event.target.files[0];
    // if there is a file do the following tasks
    if (file) {
      // connect firebase
      const storageRef = ref(this.storage, file.name);
      // start Promise to upload files
      const uploadTask = uploadBytesResumable(storageRef, file).then((snapshot: UploadTaskSnapshot) => {
        //make the progress bar to appear and calculate the progress precentages
        this.uploadProgress = 0;
        this.uploadProgress = Math.round(100 * (snapshot.bytesTransferred /
          snapshot.totalBytes));
        this.uploadTask = snapshot;
        console.log(Math.round(100 * (snapshot.bytesTransferred /
          snapshot.totalBytes)));
        //promise provided by firebase to the static image url
        getDownloadURL(snapshot.ref).then((downloadURL => {
          this.imgPath = downloadURL;
          this.productForm.controls['imgPath'].setValue(downloadURL);
        })).catch(error => {
          console.log(error);
        })
      }).catch((e) => {
        console.log("error accured\n" + e);
      });
    }
    } // fileUpload
  cancelUpload() {
    if (this.uploadTask)
    this.uploadTask.task.cancel();
    this.reset();
  }

  reset() {
    this.uploadProgress = -1;
  }

  onCancel() {
    this.router.navigate(['/'] , {relativeTo: this.route});
  }
  onSubmit() {
    //get product object
    const product: ProductData = this.productForm.value;
    //check if edit mode
    if (this.editMode) {
      //check if need to change category
      if (this.previousCategory === product.category) { //edit in the same category
        this.productsService.updateProduct(product, this.id).then((s) => {
          console.log(s);
          this.router.navigate(['/'], {relativeTo: this.route});
        }).catch(e => {
          console.log(e);
        });
        return;
      } else { //delete from previous category
        this.productsService.deleteProduct(this.previousCategory, this.id);
        console.log('deleted')
      }

    }
      this.productsService.newProduct(product).then((s)=> {
        this.router.navigate(['/'] , {relativeTo: this.route});
      }).catch( e => {
        console.log(e);
      });
  }
}
