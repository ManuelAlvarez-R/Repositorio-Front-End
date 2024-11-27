import { Routes } from '@angular/router';
import { VerificarComponent } from './features/componentes/verificar/verificar.component';
import { ListarPorYearComponent } from './features/componentes/listar-por-year/listar-por-year.component';

export const routes: Routes = [
    {path: "verificarDia", component:VerificarComponent},
    {path: "listarDias", component: ListarPorYearComponent}

];
