import { Component, OnInit, ContentChild } from '@angular/core';
import { TabItemsDirective } from '../tab-items.directive';

@Component({
  selector: 'tab-wrapper',
  templateUrl: './tab-wrapper.component.html',
  styleUrls: ['./tab-wrapper.component.css']
})
export class TabWrapperComponent implements OnInit {

  @ContentChild(TabItemsDirective) tabItems: TabItemsDirective;

  constructor() { }

  ngOnInit() {
  }

}