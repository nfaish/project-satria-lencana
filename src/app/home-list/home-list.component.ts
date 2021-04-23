import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-list',
  template: `

<div class="card-body" style="text-align:center">
    <div class="container">
      <div class="row">
        <div class="col-md-5 px-2 mb-r">
          <div class="card grey">
            <div class="view">
              <a href="#">
              </a>
            </div>
            <div class="card-body">
              <mat-icon>stars</mat-icon>
              <h4 class="card-title white-text">Bintang 1</h4>
              <a class="btn btn-primary" routerLink="/bintang1">View Data</a>
            </div>
          </div>
        </div>
        <div class="col-md-5 px-2 mb-r">
          <div class="card orange lighten-1">
            <div class="view">
              <a href="#">
              </a>
            </div>
            <div class="card-body">
              <mat-icon>stars</mat-icon><mat-icon>stars</mat-icon>
              <h4 class="card-title white-text">Bintang 2</h4>
              <a class="btn btn-primary" routerLink="/bintang2">View Data</a>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-5 px-2 mb-r">
          <div class="card grey">
            <div class="view">
              <a href="#">
              </a>
            </div>
            <div class="card-body">
              <mat-icon>stars</mat-icon><mat-icon>stars</mat-icon><mat-icon>stars</mat-icon>
              <h4 class="card-title white-text">Bintang 3</h4>
              <a class="btn btn-primary" routerLink="/bintang3">View Data</a>
            </div>
          </div>
        </div>

        <div class="col-md-5 px-2 mb-r">
          <div class="card orange lighten-1">
            <div class="view">
              <a href="#">
              </a>
            </div>
            <div class="card-body">
              <mat-icon>stars</mat-icon><mat-icon>stars</mat-icon><mat-icon>stars</mat-icon><mat-icon>stars</mat-icon>
              <h4 class="card-title white-text">Bintang 4</h4>
              <a class="btn btn-primary" routerLink="/bintang4">View Data</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  `,
  styles: ['./home-list.component.css']
})
export class HomeListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
