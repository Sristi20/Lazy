import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {UserdataserviceService} from './userdataservice.service'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoggingInterceptor } from './logging.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,useClass: LoggingInterceptor,
      multi: true
    },UserdataserviceService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
