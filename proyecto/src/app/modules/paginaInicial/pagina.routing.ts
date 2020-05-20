//#region components
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';

//#endregion components

//#region modulos
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//#endregion modulos

const PolizasRoutes: Routes = [
  {
    path: 'Polizas',
    component: MainComponent,

    children: [


        
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'home', component: HomeComponent }
      ]
    }
  ];

@NgModule({
  imports: [RouterModule.forChild(PolizasRoutes)],
  exports: [RouterModule]
})
export class PolizasRoutingModule {}
