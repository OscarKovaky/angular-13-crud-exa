import { Component, OnInit, ViewChild} from '@angular/core';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FacturaService } from 'src/app/services/factura.service';
import { FacturaDto } from 'src/app/models/factura.model';



@Component({
    selector: 'factura-list-component',
    templateUrl: './factura-list.component.html',
    styleUrls: ['./factura-list.component.css']
  })

  export class FacturaListComponent implements OnInit {
    list: FacturaDto[] = [];
    public facturaId: any;
    public isDataInInputSearch:boolean = false;
    public textoDeInputSearch: string = "";
    



  constructor (private readonly service:FacturaService){

    }

  ngOnInit(): void {
   
  }

  private loadList(id:any){
      this.service.findByIdUser(id)
      .subscribe({
        next: (data) => {
          this.list = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
    }


  public reloadComponet(){
    this.isDataInInputSearch = false;
 }



 public SearchData(){
  let data  = Number(this.facturaId)
  if(data > 0){
      this.isDataInInputSearch = true;
      this.SeachPokemon(data)
  }
}


  public SeachPokemon(data:number){
    this.loadList(data);
  }

}