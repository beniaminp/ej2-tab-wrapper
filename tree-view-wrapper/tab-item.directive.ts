import { Directive, Input, ContentChild, TemplateRef } from '@angular/core';

@Directive({
  selector: 'tab-item'
})
export class TabItemDirective {

  @Input('headerText') headerText;

  @ContentChild('template')
  public template: TemplateRef<string>;

  constructor() { }

}