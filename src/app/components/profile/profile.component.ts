import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/interfaces/user.interface';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  usuario: User | undefined;

  constructor(
    private router: Router, 
    private activatedRoute: ActivatedRoute,
    private userService: UsersService) { 
  }

  ngOnInit( ): void {
    // SOLUCION USANDO RUTA Y EL SERVICIO
    this.activatedRoute.params.subscribe( params => {
      this.usuario = this.userService.getById(parseInt(params.idUser));
    })
    
    // SOLUCION USANDO LOCALSTORGAE
    // const id = Number(localStorage.getItem('logueado'));
    // this.usuario = this.userService.getById(id);
  }

  logOut(){
    //vacia localStora
    localStorage.removeItem('logueado');
    this.router.navigate(['/login']);
  }

}
