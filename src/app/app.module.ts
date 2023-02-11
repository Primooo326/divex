import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";

import { IonicModule, IonicRouteStrategy } from "@ionic/angular";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { StoreModule } from "@ngrx/store";
import { ROOT_REDUCERS } from "./ngrx/app.state";
import { provideFirestore, getFirestore } from "@angular/fire/firestore";
import { provideFirebaseApp, initializeApp } from "@angular/fire/app";
import { environment } from "src/environments/environment.prod";
import { NgChartsModule } from "ng2-charts";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    StoreModule.forRoot(ROOT_REDUCERS),
    HttpClientModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    NgChartsModule,
    provideFirestore(() => getFirestore()),
    BrowserAnimationsModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
