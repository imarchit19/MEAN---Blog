import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BlogsListComponent } from './components/blogs-list/blogs-list.component';
import { BlogDetailsComponent } from './components/blog-details/blog-details.component';
import { AddBlogComponent } from './components/add-blog/add-blog.component';

const routes: Routes = [
  { path: '', redirectTo: 'blogs', pathMatch: 'full' },
  { path: 'blogs', component: BlogsListComponent },
  { path: 'blogs/:id', component: BlogDetailsComponent },
  { path: 'add', component: AddBlogComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
