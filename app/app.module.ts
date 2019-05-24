import { AutoCompleteAllModule } from '@syncfusion/ej2-angular-dropdowns';

import { NumericTextBoxAllModule } from '@syncfusion/ej2-angular-inputs';

import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';

import { DatePickerAllModule } from '@syncfusion/ej2-angular-calendars';

import { DialogAllModule } from '@syncfusion/ej2-angular-popups';

import { GridAllModule } from '@syncfusion/ej2-angular-grids';

import { TabAllModule } from '@syncfusion/ej2-angular-navigations';

import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from '../app.component';
import { TabWrapperComponent } from '../tree-view-wrapper/tab-wrapper/tab-wrapper.component';
import { TabItemsDirective } from '../tree-view-wrapper/tab-items.directive';
import { TabItemDirective } from '../tree-view-wrapper/tab-item.directive';

@NgModule({ declarations: [ AppComponent, TabWrapperComponent, TabItemsDirective, TabItemDirective ], imports: [ BrowserModule, NumericTextBoxAllModule, TabAllModule, GridAllModule, DialogAllModule, DatePickerAllModule, DropDownListModule, AutoCompleteAllModule], providers: [], bootstrap: [AppComponent]
})
export class AppModule { }
