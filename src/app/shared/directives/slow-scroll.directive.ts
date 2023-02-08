import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appSlowScroll]'
})
export class SlowScrollDirective {

  constructor(private renderer: Renderer2, private eleRef: ElementRef) {
    console.log('constructed')
  }

  @HostListener("wheel", ["$event"])
  onWindowScroll(event: any) {
    event.preventDefault();
    console.log(this.eleRef.nativeElement.parentElement);
    if (event.deltaY > 0) {
      this.scrollIntoView(this.eleRef.nativeElement.parentElement, this.eleRef.nativeElement.nextElementSibling);
    } else {
      this.scrollIntoView(this.eleRef.nativeElement.parentElement, this.eleRef.nativeElement.previousElementSibling);
    }

    // this.renderer.setStyle(this.elRef,'top', '60');
  }

  scrollIntoView = (parent: HTMLElement, child: HTMLElement) => {

    const parentBounding = parent.getBoundingClientRect(),
      clientBounding = child.getBoundingClientRect();
    const parentBottom = parentBounding.bottom,
      parentTop = parentBounding.top,
      clientBottom = clientBounding.bottom,
      clientTop = clientBounding.top;

    if (parentTop >= clientTop) {
      this.scrollTo(parent, -(parentTop - clientTop), 2000);

    } else if (clientBottom > parentBottom) {
      this.scrollTo(parent, clientBottom - parentBottom, 2000);
      console.log(parentBottom);
      console.log(clientBottom);


    }
  };
  scrollTo = (element: HTMLElement, to: number, duration: number) => {

    let start = element.scrollTop,
      currentTime = 0,
      increment = 200,
      val = 0;


setTimeout(()=> {
  currentTime =+ increment;
  console.log(currentTime);
}, currentTime);
        currentTime =+ increment;
        console.log(currentTime);
         val = this.easeInOutQuad(currentTime, start, to, duration);
        this.renderer.setProperty(element, 'scrollToY', 1000);
        // element.scrollTo(0,val);
        console.log(val);

        // element.scrollTop = val;


  }

  easeInOutQuad(time: number, startPos: number, endPos: number, duration: number) {
    time /= duration / 2;
    if (time < 1) return (endPos / 2) * time * time + startPos;
    time--;
    return (-endPos / 2) * (time * (time - 2) - 1) + startPos;
  }

}
