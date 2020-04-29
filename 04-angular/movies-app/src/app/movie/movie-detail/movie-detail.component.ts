import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit , OnDestroy{
  subscription: Subscription;
  movieId: any;
  movieDetail: any = {};

  constructor(
    private router: ActivatedRoute,
    private moviesService: MoviesService
  ) {
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.subscription = this.router.paramMap.subscribe(params => {
      this.movieId = params.get('id');

      this.moviesService.getMovie(this.movieId)
        .subscribe((movieDetail: any) => {
          this.movieDetail = movieDetail;
        })
    });

  }



}
