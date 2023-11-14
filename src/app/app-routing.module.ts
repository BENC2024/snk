import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EjemploComponent } from './ejemplo/ejemplo.component';
import { DetailTitanesComponent } from './detail-titanes/detail-titanes.component'

const routes: Routes = [
  { path:"listado", component: EjemploComponent },
  //{ path: '', component: EjemploComponent },
  { path: 'listado/:id', component: DetailTitanesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
