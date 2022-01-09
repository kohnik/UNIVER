import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './core/material/material.module';
import { AsideMenuComponent } from './shared/aside-menu/aside-menu.component';
import { SearchPhotosComponent } from './photos/search-photos/search-photos.component';
import { BookmarksComponent } from './photos/bookmarks/bookmarks.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { AuthCardComponent } from './auth/auth-card/auth-card.component';
import { AuthCardSigninComponent } from './auth/auth-card-signin/auth-card-signin.component';
import { AuthCardSignupComponent } from './auth/auth-card-signup/auth-card-signup.component';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AuthGuard } from './core/guards/guardAuth/auth.guard';
import { MainGuard } from './core/guards/guardMain/main.guard';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AsideMenuComponent,
    SearchPhotosComponent,
    BookmarksComponent,
    AuthCardComponent,
    AuthCardSigninComponent,
    AuthCardSignupComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    InfiniteScrollModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
  ],
  providers: [AuthGuard, MainGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
