import { Component, OnInit } from '@angular/core';
import { movies } from '../movies';
import { RecommendService } from '../service/recommend.service';

@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.css']
})
export class RecommendationComponent implements OnInit {

  Movies:movies[] = [];

  constructor(private recommendService : RecommendService) { }

  ngOnInit(): void {
    this.recommendService.getRecommendedMovies().subscribe(result => {
      this.Movies = result;
    })
  }

}
