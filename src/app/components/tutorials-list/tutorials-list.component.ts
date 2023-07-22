import { Component, OnInit } from '@angular/core';
import { Tutorial } from 'src/app/models/tutorial.model';
import { PersonaDto } from 'src/app/models/user.model';
import { TutorialService } from 'src/app/services/tutorial.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-tutorials-list',
  templateUrl: './tutorials-list.component.html',
  styleUrls: ['./tutorials-list.component.css']
})
export class TutorialsListComponent implements OnInit {

  personas?: PersonaDto[];
  currentPersonas: PersonaDto = {};
  currentIndex = -1;
  identificacion = '';

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.retrieveUsers();
  }

  retrieveUsers(): void {
    this.userService.ListUser()
      .subscribe({
        next: (data) => {
          this.personas = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  refreshList(): void {
    this.retrieveUsers();
    this.currentPersonas = {};
    this.currentIndex = -1;
  }

  setActiveUsers(user: PersonaDto, index: number): void {
    this.currentPersonas = user;
    this.currentIndex = index;
  }

  removeAllTutorials(): void {
    this.userService.DeleteUser("test")
      .subscribe({
        next: (res) => {
          console.log(res);
          this.refreshList();
        },
        error: (e) => console.error(e)
      });
  }

  searchIdentificacion(): void {
    this.currentPersonas = {};
    this.currentIndex = -1;

    this.userService.findListByIdUser(this.identificacion)
      .subscribe({
        next: (data) => {
          this.personas = data;
          console.log(data);
          this.refreshList();
        },
        error: (e) => console.error(e)
      });
  }

}
