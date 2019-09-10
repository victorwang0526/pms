import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BarcodeScanner} from "@ionic-native/barcode-scanner/ngx";
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import {IonicStorageModule} from "@ionic/storage";
import {AuthenticationService} from "./services/authentication.service";
import {AuthGuard} from "./guards/auth.guard";


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot({
      backButtonText: '后退'
    }),
    IonicStorageModule.forRoot(),
    AppRoutingModule,

  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },

    //native
    BarcodeScanner,
    ScreenOrientation,

    //service
    AuthenticationService,
    AuthGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
