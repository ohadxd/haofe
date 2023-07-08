import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})

export class SharedService {
  private isFooterExpanded: boolean =  false

  set expandFooter(expand: boolean) {
    this.isFooterExpanded = expand;
  }
  get isFooterEx() {
    return this.isFooterExpanded;
  }
}
