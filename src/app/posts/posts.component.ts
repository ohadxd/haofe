import { Component } from '@angular/core';
import { PostInterface } from './post.interface';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent {
posts: PostInterface[] = [{
  title: 'some title',
  url: 'assets/img1.webp'
}]
}
