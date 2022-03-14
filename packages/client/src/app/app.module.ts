import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopComponent } from './top/top.component';
import { JoinComponent } from './join/join.component';
import { MypageComponent } from './mypage/mypage.component';
// import {AuthHttpInterceptor, AuthModule} from "@auth0/auth0-angular";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    JoinComponent,
    MypageComponent
  ],
  imports: [
    BrowserModule,
    // HttpClientModule,
    // AuthModule.forRoot({
    //   domain: 'curly-pine-0081.us.auth0.com',
    //   clientId: 'VsKcAxFW5rbfF8dwkQkgho0iPKWb4Dkg',
    //   redirectUri: window.location.origin + "/mypage",
    //   audience: "https://curly-pine-0081.us.auth0.com/api/v2/",
      // scope: 'read:current_user',
      // httpInterceptor: {
      //   allowedList: [
      //     '/api/*',
      //     {
      //       uri: '/api/guest/*',
      //       allowAnonymous: true,
      //     },

      //   ]
      // }
    // }),
    AppRoutingModule
  ],
  providers: [
    // { provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
