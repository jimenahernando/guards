import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  login: boolean = false;
  id: number;

  constructor(){
    this.id = 0;
  }

  ngOnInit(): void {
  }
  
  ngDoCheck(): void{
    this.login = (localStorage.getItem('logueado') ? true : false );
    this.id = Number(localStorage.getItem('logueado'));
  }
}
 