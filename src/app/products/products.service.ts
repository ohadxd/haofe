import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from "@angular/fire/compat/firestore";
import { Subject } from 'rxjs';
import { ProductData } from '../shared/interfaces';


@Injectable({providedIn: 'root'})

export class ProductsService {

  productsList:  Subject<ProductData[] | null> = new Subject<ProductData[] | null>();
  private products: ProductData[];
  itemsCol: AngularFirestoreCollection<ProductData>;
  itemDoc: AngularFirestoreDocument;
  constructor(private db: AngularFirestore ) {

  }
  fetchProducts(category) {
    let productsList: ProductData[] = [];
    const snapshot = this.db.collection('products').get();
    snapshot.subscribe(data => {
      data.forEach( doc => {
        let product: ProductData = doc.data() as ProductData;
        productsList.push(doc.data() as ProductData)
      }, e => {
        console.log(e);
      });

      //Update the list
      this.products = productsList;
      //Stream the list
      this.productsList.next(productsList);
      console.log(productsList);
    });
  }

   getProduct(index: number) {
    return this.products[index];
  }

  getProducts(index: number) {
    return this.products.slice();
  }
  newProduct(product: ProductData) {
    this.itemsCol = this.db.collection(`products`);
    this.itemsCol.add(product).then((s)=> {
      console.log(s);
    }).catch( e => {
      console.log(e);
    });;
  }
  updateProduct(product: ProductData) {
    this.itemDoc = this.db.collection(`products`).doc(product.name);
    this.itemDoc.update(product).then((s)=> {
      console.log(s);
    }).catch( e => {
      console.log(e);
    });;
  }

  deleteProduct(product: ProductData) {
    this.itemDoc = this.db.collection(`products`).doc(product.name);
      this.itemDoc.delete().then((s)=> {
        console.log(s);
      }).catch( e => {
        console.log(e);
      });
  }

}
