import { Injectable } from '@angular/core';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  arrUsers: User[];

  constructor() { 
    this.arrUsers = [
      {
        id: 1,
        name: 'Juan Antonio',
        surname: 'Perez',
        age: 39,
        phone: 333666999,
        user: 'juanantonio',
        pass: '369',
      },
      {
        id: 2,
        name: 'Mario',
        surname: 'Giron',
        age: 37,
        phone: 222555888,
        user: 'mario',
        pass: '258',
      },
      {
        id: 3,
        name: 'Lucia',
        surname: 'lopez',
        age: 30,
        phone: 111444777,
        user: 'lucia',
        pass: '147',
      },
    ]
  }

  checkUser( pDatos : any) : any {
    let mensaje = false;
    const usuarioEncontrado = this.arrUsers.find(usuario => usuario.user === pDatos.user && usuario.pass === pDatos.pass);
    
    if (usuarioEncontrado){
      localStorage.setItem('logueado', String(usuarioEncontrado.id));
      return { estado: 'ok', id: usuarioEncontrado.id};
    } else {
      return { estado: 'El usuario no existe' };
    }
  }

  getById(pId: number) : User | undefined{
    return this.arrUsers.find(usuario => usuario.id === pId);
  }
}
