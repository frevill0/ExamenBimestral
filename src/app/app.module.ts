import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, provideFirebaseApp(() => initializeApp({"projectId":"examenbimestral-55713","appId":"1:426699423403:web:b2917fff3cc3be66f241ee","storageBucket":"examenbimestral-55713.firebasestorage.app","apiKey":"AIzaSyBUeD3svFSpZ-z3gO18iPRx5TFDXcydZjk","authDomain":"examenbimestral-55713.firebaseapp.com","messagingSenderId":"426699423403","measurementId":"G-WWZRSGBZ9M"})), provideFirestore(() => getFirestore()), provideStorage(() => getStorage())],
  bootstrap: [AppComponent],
})
export class AppModule {}
