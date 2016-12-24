import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { RegistradosComponent } from './registrados/registrados.component';
import { RegistrarComponent } from './registrar/registrar.component';

const appRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'registrados', component: RegistradosComponent },
    { path: 'registrar', component: RegistrarComponent },
];

@NgModule({
    imports:[
        RouterModule.forRoot(appRoutes)
    ],
    exports:[
        RouterModule
    ]
})export class AppRoutingModule { }
