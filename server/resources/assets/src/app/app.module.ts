import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { SearchMatchDirective } from './directive/search-match.directive';
import {APIMatchingService} from './service/apimatching.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SearchMatchDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [APIMatchingService, HttpClient, HttpClientModule ],
  bootstrap: [AppComponent]
})
export class AppModule { }
