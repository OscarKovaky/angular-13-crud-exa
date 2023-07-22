import { Component, OnInit } from '@angular/core';
import { requestUser } from 'src/app/models/user.model';
import { FacturaService } from 'src/app/services/factura.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  user: requestUser = {
   nombre: "",
   apellidoMaterno: "",
   apellidoPaterno:"",
   identificacion: "",
  };
  submitted = false;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  saveTutorial(): void {
    const data = {
      nombre: this.user.nombre,
      apellidoMaterno: this.user.apellidoMaterno,
      apellidoPaterno: this.user.apellidoPaterno,
      identificacion: this.user.identificacion
    };

    this.userService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  newTutorial(): void {
    this.submitted = false;
    this.user = {
        nombre: "",
        apellidoMaterno: "",
        apellidoPaterno: "",
        identificacion: ""
    };
  }
}