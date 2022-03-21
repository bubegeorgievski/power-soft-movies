import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MoviesInterface } from './movies-interface';
import { Observable } from 'rxjs';
import { DetailsPopupComponent } from './details-popup/details-popup.component';


@Injectable({
  providedIn: 'root'
})
export class MoviesServiceService {
  
  constructor (
    private http: HttpClient,
  ) { }

    getMovieById(id:number) {
      console.log(id);
     return
    }

  
}



