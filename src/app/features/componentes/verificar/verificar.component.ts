import { Component } from '@angular/core';
import { ReferenciasMaterialModule } from '../../../shared/modulos/referencias-material.module';
import { NgIf } from '@angular/common';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';
import { VerificarService } from '../../servicios/verificar.service';

@Component({
  selector: 'app-verificar',
  standalone: true,
  imports: [
    ReferenciasMaterialModule,
    NgIf,
    MatSnackBarModule,
    FormsModule
  ],
  templateUrl: './verificar.component.html',
  styleUrl: './verificar.component.css'
})
export class VerificarComponent {
  
  public fechaIngresada: Date | null=null;
  public resultado: string | null=null;
  esFechaValida: boolean = false
  constructor(private snackBar:MatSnackBar, private verificarService:VerificarService){
    
  }
  public verificarFestivo(){
    if (this.fechaIngresada){
      const year=this.fechaIngresada.getFullYear()
      const month=this.fechaIngresada.getMonth()+1
      const day=this.fechaIngresada.getDate()
      this.verificarService.verificarFecha(year, month, day).subscribe({
        next: (respuesta: string) => {
          this.snackBar.open(respuesta, 'Cerrar', {
            duration: 3000,
            horizontalPosition: 'center',
            verticalPosition: 'top',
          });
        },
        error: (error) => {
          this.snackBar.open(`Error al verificar la fecha: ${error.message}`, 'Cerrar', {
            duration: 3000,
            horizontalPosition: 'center',
            verticalPosition: 'top',
          });
        },
      });
    }
    else{
      this.snackBar.open('la fecha no es valida', 'Cerrar', {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'top',})
    }
  }
}