import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"bank-one-1dec0","appId":"1:22398950512:web:35bebfc23c5c8830e3a8b5","databaseURL":"https://bank-one-1dec0-default-rtdb.europe-west1.firebasedatabase.app","storageBucket":"bank-one-1dec0.appspot.com","apiKey":"AIzaSyDoYEpkT_b6vn2p7xuK55Fn0GdW1fHinAA","authDomain":"bank-one-1dec0.firebaseapp.com","messagingSenderId":"22398950512"}))), importProvidersFrom(provideAuth(() => getAuth())), importProvidersFrom(provideFirestore(() => getFirestore())), importProvidersFrom(provideDatabase(() => getDatabase()))]
};
