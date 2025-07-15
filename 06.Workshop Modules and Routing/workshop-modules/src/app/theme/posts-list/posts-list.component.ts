import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Post } from 'src/app/types/post';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {

  posts: Post[] = [];
  loading:boolean = true;

  constructor(private api:ApiService){};

  ngOnInit(): void {
    this.api.getPosts(3).subscribe((posts) =>{
      console.log(posts)
      this.posts = posts;
      setTimeout(() => {
        this.loading = false;
      }, 3500);
    })
  }

}
