import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';

const routes: Routes = [
  { path: 'homepage', component: HomepageComponent }, //creating path to homepage
  { path: '', redirectTo: '/homepage', pathMatch: 'full' }, // first page user sees is the homepage
  { path: 'user-profile', component: UserProfileComponent }, // user profile page
  { path: '**', component: PageNotFoundComponent }, // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
