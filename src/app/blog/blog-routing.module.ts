import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogListComponent } from './pages/blog-list/blog-list.component';
import { BlogItemComponent } from './components/blog-item/blog-item.component';
import { BlogFormComponent } from '../modules/blog/pages/blog-form/blog-form.component';
import { EditComponent } from './components/forms/edit/edit.component';


const routes: Routes = [
  {
    path: 'blog-list',
    component: BlogListComponent
  },{
    path: 'blog-item',
    component: BlogItemComponent
  },{
    path: 'blog/form/add',
    component: BlogFormComponent
  },{
    path: 'blog/form/edit/1',
    component: EditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }