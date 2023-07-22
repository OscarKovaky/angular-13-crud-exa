import { Component, OnInit } from '@angular/core';
import { requestFacturaDto } from 'src/app/models/factura.model';
import { FacturaService } from 'src/app/services/factura.service';

@Component({
  selector: 'app-add-factura',
  templateUrl: './add-factura.component.html',
  styleUrls: ['./add-factura.component.css']
})
export class AddFacturaComponent implements OnInit {

  factura: requestFacturaDto = {
   facturaId: 0,
   fecha: "",
   monto : 0.0,
   usuarioId: 0,
  };
  submitted = false;

  constructor(private facturaService: FacturaService) { }

  ngOnInit(): void {
  }

  saveTutorial(): void {
    const data = {
      monto: this.factura.monto,
      usuarioId: this.factura.usuarioId
    };

    this.facturaService.create(data)
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
    this.factura = {
      monto: 0.0,
      usuarioId: 0,
    };
  }
}