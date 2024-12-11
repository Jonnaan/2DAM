import { Routes } from '@angular/router';
import { LoginComponent } from './Auth/Pages/login/login.component';
import { RegistroComponent } from './Auth/Pages/registro/registro.component';
import { authGuard } from './Auth/guards/auth.guard';
import { HomeComponent } from './Errezetak/pages/home/home.component';
import { ListadoComponent } from './Errezetak/pages/listado/listado.component';
import { AgregarComponent } from './Errezetak/pages/agregar/agregar.component';
import { BuscarComponent } from './Errezetak/pages/buscar/buscar.component';
import { ErrezetakComponent } from './Errezetak/pages/errezetak/errezetak.component';
import { ErrorPageComponent } from './shared/error-page/error-page.component';

export const routes: Routes = [
	{
    	path: 'auth', children: [
        	{ path: 'login', component: LoginComponent },
        	{ path: 'registro', component: RegistroComponent },
        	{ path: '**', redirectTo: 'login' }]
	},
	{
    	path: 'errezeta',
    	component: HomeComponent,
    	children: [
        	{ path: 'listado', component: ListadoComponent },
        	{ path: 'agregar', component: AgregarComponent },
        	{ path: 'editar/:id', component: AgregarComponent },
        	{ path: 'buscar', component: BuscarComponent },
        	{ path: ':id', component: ErrezetakComponent },
        	{ path: '**', redirectTo:'listado' }
    	]
	},
	{ path: '404', component: ErrorPageComponent },
	{ path: '**', redirectTo: '404' }
];
