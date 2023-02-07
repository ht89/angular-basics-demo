import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ChildComponent } from './second/child/child.component';
import { ConfigComponent } from './config/config.component';
import { ConfigWithAsyncPipeComponent } from './config-with-async-pipe/config-with-async-pipe.component';
import { HostContextExampleComponent } from './host-context-example/host-context-example.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ChildComponent,
    ConfigComponent,
    ConfigWithAsyncPipeComponent,
    HostContextExampleComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
