// angular essentials
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// animation support for Angular material design material.angular.io
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// service worker registration to acheive PWA
import { environment } from '../environments/environment';
import { ServiceWorkerModule } from '@angular/service-worker';

// routing at root level module
import { AppRoutingModule } from './app-routing.module';

// bootstraping root component
import { AppComponent } from './app.component';

// modules of star residentz app
import { PreStayModule } from './pre-stay/pre-stay.module';
import { CheckInModule } from './check-in/check-in.module';
import { PostStayModule } from './post-stay/post-stay.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),

    PreStayModule,
    CheckInModule,
    PostStayModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
