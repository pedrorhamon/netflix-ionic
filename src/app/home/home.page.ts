import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public stories: Array<any> = new Array<any>();
  public movies: Array<any> = new Array<any>();

  constructor(private httpClient: HttpClient) {}

  ngOnInit() { }

  ionViewDidEnter(){
    this.loadStories();
    this.loadMovies();
  }

  loadStories(){
    this.httpClient.get('http://www.omdbapi.com/?apikey=3a056eae&s=net&page=1').subscribe(data =>{
      const response: any = data;

      this.stories = response.Search;
    });
  }

  loadMovies() {
    this.httpClient.get('http://www.omdbapi.com/?apikey=3a056eae&s=net&page=1').subscribe(data =>{
      const response: any = data;

      this.movies = response.Search;
    });
  }
}
