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
    const headers = new HttpHeaders();
		headers.append('Content-Type', 'application/json');
		return this.http.get<movies[]>(baseUrl+"homepage.php");
  }
}
