import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopComponent } from './top/top.component';
import { JoinComponent } from './join/join.component';
import { MypageComponent } from './mypage/mypage.component';
import { AuthModule } from "@auth0/auth0-angular";

@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    JoinComponent,
    MypageComponent
  ],
  imports: [
    BrowserModule,
    AuthModule.forRoot({
      domain: 'curly-pine-0081.us.auth0.com',
      clientId: 'VsKcAxFW5rbfF8dwkQkgho0iPKWb4Dkg',
      redirectUri: window.location.origin + "/mypage"
    }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
