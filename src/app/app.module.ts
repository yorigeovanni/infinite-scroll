import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TweetsModule } from './tweets/tweets.module';
import { NotificationsComponent } from './notifications/notifications.component';

@NgModule({
  declarations: [AppComponent, NotificationsComponent],
  imports: [BrowserModule, AppRoutingModule, TweetsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
