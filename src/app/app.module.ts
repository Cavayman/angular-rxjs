import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LoginComponent} from './main/login/login.component';
import {PollComponent} from './main/poll/poll.component';
import {InformationComponent} from './main/information/information.component';
import {NumbersComponent} from './main/numbers/numbers.component';
import {MenuComponent} from './menu/menu.component';
import {MainComponent} from './main/main.component';
import {RouterModule} from '@angular/router';
import {SlimLoadingBarModule} from 'ng2-slim-loading-bar';
import {AppRoutingModule} from './app.routes';
import {
  MatButtonModule,
  MatCardModule, MatFormFieldModule,
  MatIconModule, MatInputModule,
  MatListModule,
  MatMenuModule, MatProgressSpinnerModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule} from '@angular/forms';
import {ThemeService} from './shared/services/theme.service';
import {OverlayContainer} from '@angular/cdk/overlay';
import {MetaInformationService} from './shared/services/meta-information.service';
import {UserStore} from './shared/services/user-store.service';
import {NumberStoreService} from './shared/services/number-store.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PollComponent,
    InformationComponent,
    NumbersComponent,
    MenuComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([]),
    SlimLoadingBarModule.forRoot(),
    AppRoutingModule,
    FlexLayoutModule,
    MatToolbarModule,
    HttpClientModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatCardModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    FormsModule,
    MatInputModule
  ],
  providers: [ThemeService, MetaInformationService, UserStore, NumberStoreService],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor() {
  }
}
