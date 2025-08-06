import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Theme } from 'src/app/types/theme';

@Component({
  selector: 'app-current-theme',
  templateUrl: './current-theme.component.html',
  styleUrls: ['./current-theme.component.css']
})
export class CurrentThemeComponent implements OnInit {

  theme = {} as Theme;

  constructor(
    private apiService: ApiService,
    private activatedRoute: ActivatedRoute
  ){}

  ngOnInit(): void {

    this.activatedRoute.params.subscribe((data) =>{
      const id = data['themeId']
      
          this.apiService.getTheme(id).subscribe((theme)=>{
            this.theme = theme;
    })

    })
  }

  addPost(form: NgForm) {
  if (form.invalid) return;

  const { postText } = form.value;

  this.apiService.createPost(this.theme._id, postText).subscribe((newPost) => {
    this.theme.posts.push(newPost);
    form.reset();
  });
}


}
