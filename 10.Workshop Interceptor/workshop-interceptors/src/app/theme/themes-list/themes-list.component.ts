import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { Theme } from '../../types/theme';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-themes-list',
  templateUrl: './themes-list.component.html',
  styleUrls: ['./themes-list.component.css']
})
export class ThemesListComponent implements OnInit{

  themes: Theme[] | null =[];
  loading: boolean = true;

  constructor(
    private api:ApiService,
    private userService:UserService
  ){};

  get isLogged():boolean{
    return this.userService.isLogged
  }
  ngOnInit(): void {
    this.api.getThemes().subscribe((themes) =>{
      console.log(themes);
      this.themes = themes

      const sortDatesCB = (
        a:{created_at: string},
        b:{created_at: string}
      ) =>(new Date(b.created_at) as any) - (new Date(a.created_at) as any)

      const temptThemes = themes.sort(sortDatesCB as any).slice(0,5);

      this.themes = temptThemes

      setTimeout(() => {
        this.loading=false
      }, 1500);
    })
  }

  isSubscribed(theme:Theme){
    const isSubscribedUser = theme.subscribers.find((s)=>{
      return s == this.userService.user?.id;
    })


    return !isSubscribedUser;
  }
}
