import { Component } from '@angular/core';
import { PostInterface } from './post.interface';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent {
posts: PostInterface[] = [{
  title: 'מדריך לגידול שמריים טבעיים עבור לחם מחמצת מושלם',
  url: 'assets/img2.webp'
},
  {
    title: 'שכחת להוסיף שמרים?',
    url: 'assets/img2.webp'
  },
  {
    title: 'בצק עלים ביתי',
    url: 'assets/img2.webp'
  }
  ]
}
