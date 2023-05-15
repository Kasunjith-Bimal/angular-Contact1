import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';

import { CheckBoxModule } from '@syncfusion/ej2-angular-buttons';

import { DialogModule } from '@syncfusion/ej2-angular-popups';

import { UploaderModule } from '@syncfusion/ej2-angular-inputs';
import { HttpModule } from '@angular/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { AppComponent } from '../app.component';
import { FilterPipeUserNamePipe } from './filter-pipe-user-name.pipe';
import { FilterPipeEmailPipe } from './filter-pipe-email.pipe';
@NgModule({
  declarations: [AppComponent, FilterPipeUserNamePipe, FilterPipeEmailPipe],
  imports: [
    BrowserModule,
    CheckBoxModule,
    UploaderModule,
    DialogModule,
    DropDownListModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
