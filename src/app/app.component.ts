import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  login: boolean = false;
  idUser: string | null = '';

  constructor(){
  }

  ngOnInit(): void {
  }
  
  ngDoCheck(): void{
    this.login = (localStorage.getItem('logueado') ? true : false );
    if (localStorage.getItem('logueado')){
      this.idUser = localStorage.getItem('logueado');
    }
  }
}
 