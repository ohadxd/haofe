import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-richtext',
  templateUrl: './rich-text.component.html',
  styleUrls: ['./rich-text.component.scss']
})

export class RichTextComponent {
  constructor(private renderer: Renderer2) {
  }
  @ViewChild('richText') richText: ElementRef<HTMLInputElement> =  {} as ElementRef;
  alignRight: boolean = false;
  alignLeft: boolean = false;
  alignCenter: boolean = false;
  alignJustify: boolean = false;

  bold: boolean = false;


  alignRightClick() {


    this.alignRight = true;
    this.alignLeft = false;
    this.renderer.setStyle(this.richText.nativeElement, 'direction', 'rtl');
    // this.renderer.setProperty(this.richText.nativeElement, 'innerHTML',
    //   this.richText.nativeElement.innerHTML+'<strong>bold</strong>');
  }
  alignLeftClick() {
    this.alignRight = false;
    this.alignLeft = true;
    this.renderer.setStyle(this.richText.nativeElement, 'direction', 'ltr');

  }
  alignCenterClick() {
    this.alignCenter = true
    this.alignJustify = false;
    this.renderer.setStyle(this.richText.nativeElement, 'textAlign', 'center');

  }
  alignJustifyClick() {
    this.alignCenter = false
    this.alignJustify = true;
    this.renderer.setStyle(this.richText.nativeElement, 'textAlign', 'justify');

  }

  boldClick() {
//     const el:  HTMLInputElement = this.richText.nativeElement;
//     const newEl = document.createElement("b");
//     let selectedText: string = "";
//     const selectedObj = window.getSelection();
//     let range: Range = new Range();
//     if (selectedObj != null) {
//       selectedText = selectedObj.toString();
//       newEl.innerText = selectedText;
//       range = selectedObj.getRangeAt(0);
//       console.log(selectedObj);
//       range.deleteContents();
//       range.insertNode(newEl);
//     }
//   }
// diagnose(e: any) {
//     console.log(e);
    /*
    new logic
    */
    this.bold = !this.bold;
    if(this.bold) {
      const selectedObj = window.getSelection();
      let selectedText: string = "no bold";
      if (selectedObj != null) {
        selectedText = selectedObj.toString() === "" ? "bold" : selectedObj.toString();
        const bold = this.renderer.createElement('span');
        this.renderer.addClass(bold, 'fw-bold');
        this.renderer.appendChild(this.richText.nativeElement, bold);
        this.renderer.appendChild(bold, this.renderer.createText(selectedText));
        console.log("bold");
      }
    } else {
      const selectedObj = window.getSelection();
      let selectedText: string = "";
      if (selectedObj != null) {
        selectedText = selectedObj.toString() === "" ? "add text" : selectedObj.toString();
        const span = this.renderer.createElement('span');
        this.renderer.appendChild(this.richText.nativeElement, span);
        this.renderer.appendChild(span, this.renderer.createText(selectedText));
        console.log("no bold");
      }
    }
  }
}
