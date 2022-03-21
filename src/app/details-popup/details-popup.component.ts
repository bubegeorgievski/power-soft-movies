import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import movies from 'dummy.json'
import { MoviesListComponent } from '../movies-list/movies-list.component';
import { MoviesServiceService } from '../movies-service.service';



@Component({
  selector: 'app-details-popup',
  templateUrl: './details-popup.component.html',
  styleUrls: ['./details-popup.component.css']
})


export class DetailsPopupComponent implements OnInit {


  movieList: {
    id: string,
    thumbnail: any,
    name: string,
    description: string,
    length: number,
    director: string,
    actors: string,
    genre: string,

  }[] = movies;

  id: any;
  movie: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<MoviesListComponent>,
    private activatedRoute: ActivatedRoute,
    private movieService: MoviesServiceService) {
  }



  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.id = params.get('id')
    })
    this.movie = this.movieList.filter(x => Number(x.id)==Number(this.data.id))[0];
  }

}



