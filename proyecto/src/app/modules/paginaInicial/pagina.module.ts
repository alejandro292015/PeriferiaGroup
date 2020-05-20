import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// modulos externos

import { FormsModule, ReactiveFormsModule } from "@angular/forms";


import { BrowserAnimationsModule } from "@angular/platform-browser/animations";


//#region rutas
import { RouterModule } from "@angular/router";
//#endregion rutas

// modulos internos

import { HttpClientModule } from "@angular/common/http";

// componentes
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';



@NgModule({
  declarations: [
    HomeComponent,
    MainComponent, 
    ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    BrowserAnimationsModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'})

  ], providers:[
  ]
})
export class ParametrosModule { }
