import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private userService: UsersService, 
    private router: Router) {

   }

  ngOnInit(): void {
  }

  recogerDatos(pForm: any){
    // console.log(pForm.value)
    const mensaje = this.userService.checkUser(pForm.value);
    if (mensaje.estado !== 'ok'){
      alert('El usuario no existe')
    } else {
      this.router.navigate(['/profile', mensaje.id]);
    }
  }
}
