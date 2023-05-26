import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { GeneralProfileComponent } from './components/general-profile/general-profile.component';
import { AccountInfoTabComponent } from './components/account-info-tab/account-info-tab.component';
import { PersonalTabComponent } from './components/personal-tab/personal-tab.component';
import { PasswordTabComponent } from './components/password-tab/password-tab.component';
import { PrivacyTabComponent } from './components/privacy-tab/privacy-tab.component';
import { CustomTabComponent } from './components/custom-tab/custom-tab.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    PageNotFoundComponent,
    UserProfileComponent,
    GeneralProfileComponent,
    AccountInfoTabComponent,
    PersonalTabComponent,
    PasswordTabComponent,
    PrivacyTabComponent,
    CustomTabComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
