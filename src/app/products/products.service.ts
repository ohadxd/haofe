import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from "@angular/fire/compat/firestore";
import { FieldValue } from 'firebase/firestore';
import { Subject } from 'rxjs';
import { ProductData } from '../shared/interfaces';


@Injectable({providedIn: 'root'})

export class ProductsService {

  productsList:  Subject<{[key: string]:ProductData} | null> = new Subject<{[key: string]:ProductData} | null>();
  private products: {[key: string]:ProductData};
  itemsCol: AngularFirestoreCollection<ProductData>;
  itemDoc: AngularFirestoreDocument;
  constructor(private db: AngularFirestore ) {

  }
  fetchProducts(category) {
    let productsList: {[key: string]:ProductData} = {};
    const snapshot = this.db.collection(category).get();
    snapshot.subscribe(data => {
      data.forEach( doc => {
        console.log(doc.id)
        let product: ProductData = doc.data() as ProductData;
        productsList[doc.id] = product;
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

   getProduct(index: string) {
    return this.products[index];
  }

  getProducts(index: number) {
    return this.products;
  }
  newProduct(product: ProductData) {
    let category = product.category;
    this.itemsCol = this.db.collection(category);
    return this.itemsCol.add(product);
  }
  updateProduct(product: ProductData, id: string) {
    let category = product.category;
    this.itemDoc = this.db.collection(category).doc(id);
    return this.itemDoc.update(product);
  }

  thumbUp(id: string, category: string) {
    this.itemDoc = this.db.collection(category).doc(id);
    // return this.itemDoc.update();
  }

  deleteProduct(productCategory: string, productId: string) {
    this.itemDoc = this.db.collection(productCategory).doc(productId);
      this.itemDoc.delete().then((s)=> {
        console.log(productCategory + " : " + productId);
        console.log("finish to delete");
      }).catch( e => {
        console.log(e);
      });
  }

}
