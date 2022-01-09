import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SearchPhotosComponent} from "./photos/search-photos/search-photos.component";
import {BookmarksComponent} from "./photos/bookmarks/bookmarks.component";
import {AuthCardComponent} from "./auth/auth-card/auth-card.component";
import { AuthGuard } from './core/guards/guardAuth/auth.guard';
import {MainGuard} from "./core/guards/guardMain/main.guard";

const routes: Routes = [
  { path: '', component: AuthCardComponent,canActivate: [AuthGuard] },
  { path: 'search', component: SearchPhotosComponent,canActivate: [MainGuard] },
  { path: 'bookmark', component: BookmarksComponent,canActivate: [MainGuard]  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
