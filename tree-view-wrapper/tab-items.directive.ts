import { Directive, ContentChildren, QueryList } from '@angular/core';
import { TabItemDirective } from './tab-item.directive';

@Directive({
  selector: 'tab-items'
})
export class TabItemsDirective {

  @ContentChildren(TabItemDirective, {descendants: true}) 
  public tabItemsList: QueryList<TabItemDirective>;


  constructor() { }

}