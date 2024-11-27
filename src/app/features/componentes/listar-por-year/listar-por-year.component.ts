import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReferenciasMaterialModule } from '../../../shared/modulos/referencias-material.module';
import {MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { NgIf } from '@angular/common';
import { ColumnMode, NgxDatatableModule, SelectionType } from '@swimlane/ngx-datatable';
import { Festivo } from '../../../core/entidades/festivo';
import { tablaFestivosDto } from '../../../core/entidades/tablaFestivosDto';
import { ListarporyearService } from '../../servicios/listarporyear.service';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-listar-por-year',
  standalone: true,
  imports: [
    ReferenciasMaterialModule,
    FormsModule,
    MatSnackBarModule,
    NgIf,
    NgxDatatableModule,
    HttpClientModule
  ],
  templateUrl: './listar-por-year.component.html',
  styleUrl: './listar-por-year.component.css'
})
export class ListarPorYearComponent {
public yearIngresado: number | null = null;
esYearValido: boolean = false;
public festivos:tablaFestivosDto[]=[];
public columnas=[
  { name: "nombre del dia", prop: "nombrefestivo" },
  { name: "fecha", prop: "diacorrespondiente" }]
public modoColumna= ColumnMode;
public tipoSeleccion= SelectionType;
constructor(private snackBar: MatSnackBar, private festivoService:ListarporyearService){
}

public listarPorYear(){
  if (this.yearIngresado){
    if (this.yearIngresado<0){
      this.snackBar.open('el año no es valido', 'Cerrar', {
        duration: 3000, 
        horizontalPosition: 'center',
        verticalPosition: 'top',});
    }
    else{
      this.festivoService.listarporyear(this.yearIngresado).subscribe(
        {
          next: respuesta => {
            this.festivos = respuesta;
          },
          error: error => {
            window.alert(error.message);
          }
        }
      )
    }
  }
  else{
    this.snackBar.open('el año no es valido', 'Cerrar', {
      duration: 3000, // Duración en milisegundos
      horizontalPosition: 'center',
      verticalPosition: 'top',});
  }

}
}
