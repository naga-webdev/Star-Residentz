// angular essentials
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// animation support for Angular material design material.angular.io
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// service worker registration to acheive PWA
import { environment } from '../environments/environment';
import { ServiceWorkerModule } from '@angular/service-worker';

// routing at root level module
import { AppRoutingModule } from './app-routing.module';

// bootstraping root component
import { AppComponent } from './app.component';

// firebase
import * as firebase from 'firebase';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

// modules of star residentz app
import { PreStayModule } from './pre-stay/pre-stay.module';
import { CheckInModule } from './check-in/check-in.module';
import { PostStayModule } from './post-stay/post-stay.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SharedModule } from './shared/shared.module';

import { AuthService } from './core/auth.service';
import { AuthGuard } from './core/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    RouterModule,
    HttpClientModule,
    // FormsModule,
    ReactiveFormsModule,

    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),

    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,


    // PreStayModule,
    // CheckInModule,
    // PostStayModule,
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
