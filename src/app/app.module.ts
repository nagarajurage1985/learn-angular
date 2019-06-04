import { LoginGuardService } from './guards/login.guard.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { summaryPipe } from 'src/pipes/summary.pipe';
import { LoginComponent } from './account/login/login.component';
import { RegisterComponent } from './account/register/register.component';
import { ProductsComponent } from './product/products/products.component';
import { DetailsComponent } from './product/details/details.component';
import { ForgotpasswordComponent } from './account/forgotpassword/forgotpassword.component';
import { AuthService } from './service/auth.service';
import { PagenotfoundComponent } from './common/pagenotfound/pagenotfound.component';
import { PostsComponent } from './product/posts/posts.component';
import { HttpModule } from '@angular/http';
import { PostsService } from './service/posts.service';



@NgModule({
  declarations: [
    AppComponent,
    summaryPipe, 
    LoginComponent,
    RegisterComponent,
    ProductsComponent,
    DetailsComponent,
    ForgotpasswordComponent,
    PagenotfoundComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    AuthService,
    LoginGuardService,
    PostsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
