import { Directive, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[easylist]',
})
export class NgEasyListDirective implements OnInit {
  constructor(
    private elementRef: ElementRef,
  ) {

  }

  ngOnInit() {
  }

}
