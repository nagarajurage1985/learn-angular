import { PostsComponent } from './product/posts/posts.component';
import { LoginGuardService } from './guards/login.guard.service';
import { PagenotfoundComponent } from './common/pagenotfound/pagenotfound.component';
import { DetailsComponent } from './product/details/details.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './account/login/login.component';
import { RegisterComponent } from './account/register/register.component';
import { ProductsComponent } from './product/products/products.component';
import { ForgotpasswordComponent } from './account/forgotpassword/forgotpassword.component';

const routes: Routes = [

    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: '', component: LoginComponent },
    { path: 'products', component: ProductsComponent },
    { path: 'details/:title', component: DetailsComponent, canActivate: [LoginGuardService] },
    { path: 'forgotpassword', component: ForgotpasswordComponent },
    { path: 'pagenotfound', component: PagenotfoundComponent},
    { path: 'posts', component: PostsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
