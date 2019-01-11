import {
  Directive,
  DoCheck,
  ElementRef,
  Input,
  IterableChangeRecord,
  IterableChanges,
  IterableDiffer,
  IterableDiffers,
  NgIterable,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[easyListFor][easyListForOf]'
})
export class EasyListForDirective<T> implements DoCheck {
  @Input()
  set easyListForOf(value: NgIterable<T>) {
    this._easyListForOf = value;

    if (!this.differ && value) {
      this.differ = this.differs.find(value).create(null);
    }
  }

  get easyListForOf(): NgIterable<T> {
    return this._easyListForOf;
  }

  _easyListForOf: NgIterable<T>;

  differ: IterableDiffer<T>;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef,
    private elementRef: ElementRef,
    private differs: IterableDiffers,
  ) {
  }

  ngDoCheck(): void {
    if (!this.differ) {
      return;
    }

    const changes = this.differ.diff(this.easyListForOf);

    if (changes) {
      this.applyChanges(changes);
    }
  }

  private applyChanges(changes: IterableChanges<T>) {
    changes.forEachAddedItem((record: IterableChangeRecord<T>) => {
      const view = this.viewContainerRef.createEmbeddedView(this.templateRef);
      this.viewContainerRef.insert(view);
      view.context.$implicit = record.item;
    });
  }
}
