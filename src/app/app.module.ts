import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PagesModule } from './pages/pages.module';
import { DeleteUserModalComponent } from './pages/delete-user-modal/delete-user-modal.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    PagesModule,
    DeleteUserModalComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    DeleteUserModalComponent
  ]
})
export class AppModule { }
