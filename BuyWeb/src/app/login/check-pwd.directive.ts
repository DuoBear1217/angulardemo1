import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCheckPwd]'
})
export class CheckPwdDirective {

  constructor(el: ElementRef) {
    // el.nativeElement
  }

}
