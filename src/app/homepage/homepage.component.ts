import { Component, OnInit } from '@angular/core';
import { RecommendService } from '../service/recommend.service';
import { movies } from '../movies';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  Movies : movies[] = [];

  
  constructor(private recommendService : RecommendService) { 
  //constructor(){  
  this.Movies = [
      {
        id: 1,
        title:'title',
      descr:'Description',
      }
    ]
  }

  ngOnInit(): void {
    console.log('inside init');
    // this.recommendService.getMovies().subscribe(result => {
    //   console.log('hi');
    //   this.Movies = result;
    // });
  }

  rateMovie(formData : NgForm, movieId : number){
    // if(formData?.value?.rating && movieId){
    //   this.recommendService.rateMovies(movieId, formData.value.rating);
    // }
  }

}
