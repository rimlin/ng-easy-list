import {
  Directive,
  ElementRef,
  Input,
  NgIterable,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[easyListFor][easyListForOf]'
})
export class EasyListForDirective<T>  {
  @Input()
  set easyListForOf(value: NgIterable<T>) {
    this._easyListForOf = value;

    this.renderList(value as any[]);
  }

  get easyListForOf(): NgIterable<T> {
    return this._easyListForOf;
  }

  _easyListForOf: NgIterable<T>;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef,
    private elementRef: ElementRef,
  ) {
    console.log(elementRef);
  }

  private renderList(items: any[]) {
    console.log(items);

    items.forEach(record => {
      const view = this.viewContainerRef.createEmbeddedView(this.templateRef);
      this.viewContainerRef.insert(view);
      view.context.$implicit = record;
    });
  }
}
