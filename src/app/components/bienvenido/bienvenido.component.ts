import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/Usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bienvenido',
  standalone: true,
  imports: [],
  templateUrl: './bienvenido.component.html',
  styleUrl: './bienvenido.component.scss'
})
export class BienvenidoComponent implements OnInit {
  mensaje:String = ""

  constructor(private router: Router) {}

  ngOnInit(): void {
    const strUsuario = localStorage.getItem("clase2UsuarioLogueado");
    const usuario: Usuario = JSON.parse(strUsuario!);
    if(usuario == null || usuario == undefined){
      this.goToLogin();
    }
    this.mensaje = "Bienvenido "+usuario.mail;
  }

  goToLogin():void{
    this.router.navigate(['/login']);
  }

  

  cerrarSesion():void{
    localStorage.removeItem("clase2UsuarioLogueado");
    this.goToLogin();
  }

}
