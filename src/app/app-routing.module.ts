import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { Vista1Component } from './vista1/vista1.component';
import { Vista2Component } from './vista2/vista2.component';
import { PaginaNovaComponent } from './pagina-nova/pagina-nova.component';


const routes: Routes = [
  {path:'', redirectTo: '/principal',pathMatch:'full'},
{path:'principal', component: PrincipalComponent},
{path:'vista1', component: Vista1Component},
{path:'vista2', component: Vista2Component},
{path: '**', component:PaginaNovaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
