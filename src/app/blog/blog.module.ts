import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';
import { BlogEditComponent } from './blog-edit/blog-edit.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import {RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared-modules/shared.module';
import { RichTextComponent } from '../accessories/rich-text/rich-text.component';

const blogRoutes: Routes =
  [{
    path: '', component: BlogComponent,
    children: [
      {path: '', component: BlogPostComponent},
      {path: 'new', component: BlogEditComponent}
    ]
  }]


@NgModule({
  declarations: [
    BlogComponent,
    BlogEditComponent,
    BlogPostComponent,
    RichTextComponent
  ],
  imports: [
    RouterModule.forChild(blogRoutes),
    SharedModule
  ]
})
export class BlogModule { }
