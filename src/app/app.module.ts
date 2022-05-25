import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainHeaderComponent } from './layout/main-header/main-header.component';
import { MainFooterComponent } from './layout/main-footer/main-footer.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, MainHeaderComponent, MainFooterComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
