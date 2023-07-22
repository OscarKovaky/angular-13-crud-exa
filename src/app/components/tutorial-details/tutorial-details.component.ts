import { Component, Input, OnInit } from '@angular/core';
import { TutorialService } from 'src/app/services/tutorial.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Tutorial } from 'src/app/models/tutorial.model';
import { PersonaDto } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-tutorial-details',
  templateUrl: './tutorial-details.component.html',
  styleUrls: ['./tutorial-details.component.css']
})
export class TutorialDetailsComponent implements OnInit {

  @Input() viewMode = false;

  @Input() currentPersonas: PersonaDto = {
    nombre: '',
    apellidoPaterno: '',
    apellidoMaterno: '',
    identificacion: '',
  };
  
  message = '';

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getTutorial(this.route.snapshot.params["identificacion"]);
    }
  }

  getTutorial(identificacion: string): void {
    this.userService.findDetailByIdUser(identificacion)
      .subscribe({
        next: (data) => {
          this.currentPersonas = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

 /* updatePublished(status: boolean): void {
    const data = {
      nombre: this.currentPersonas.nombre,
      apellidoPaterno: this.currentPersonas.apellidoPaterno,
      apellidoMaterno: this.currentPersonas.apellidoMaterno,
      identificacion: this.currentPersonas.identificacion
    };

    this.message = '';

    this.tutorialService.update(this.currentTutorial.id, data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.currentTutorial.published = status;
          this.message = res.message ? res.message : 'The status was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }  */

 /* updateTutorial(): void {
    this.message = '';

    this.tutorialService.update(this.currentTutorial.id, this.currentTutorial)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'This tutorial was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  } */

  deleteTutorial(): void {
    this.userService.DeleteUser(this.currentPersonas.identificacion)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/tutorials']);
          window.location.reload(); 
        },
        error: (e) => console.error(e)
      });
  }

}
