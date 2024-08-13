import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { movies } from '../movies';
import { Observable } from 'rxjs';

var baseUrl = 'http://localhost/';

@Injectable({
  providedIn: 'root'
})
export class RecommendService {

  constructor(private http : HttpClient) { }

  getMovies():Observable<movies[]>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
		return this.http.get<movies[]>(baseUrl+"homepage.php",{headers});
  }

  getRecommendedMovies():Observable<movies[]>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.get<movies[]>(baseUrl+"recommender.php",{headers});
  }

  rateMovies(movieId : number, rating : number):Observable<boolean>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    let movieDetails = {
			'movieId':movieId,
			'rating' : rating
		};
    return this.http.post<boolean>(baseUrl+"rateMovies.php",movieDetails,{headers});
  }
}
