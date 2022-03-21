
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import movies from 'dummy.json';
import { DetailsPopupComponent } from '../details-popup/details-popup.component';
import { MoviesServiceService } from '../movies-service.service';


@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

  id: number;

  movieList: {
    id: string,
    thumbnail: any,
    name: string,
    description: string,
    length: number,
    director: string,
    actors: string,
  }[] = movies;


  constructor(private dialog: MatDialog ,
    private movieService: MoviesServiceService) { }

  openDialog(id: any) {

    var movie = this.movieList.filter(x=> Number(x.id) == Number(id))[0];
    this.dialog.open(DetailsPopupComponent, {
      data: { id: movie.id, thumbnail: movie.thumbnail, name: movie.name, description: movie.description, length: movie.length, director: movie.director, actors: movie.actors },
      panelClass: 'dialog-container-custom'
    })
  }

  ngOnInit(): void {

  }




}