import { Routes } from '@angular/router';
import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { LoginComponent } from './auth/pages/login/login.component';
import { RegistroComponent } from './auth/pages/registro/registro.component';
import { ListadoComponent } from './heroes/pages/listado/listado.component';
import { AgregarComponent } from './heroes/pages/agregar/agregar.component';
import { BuscarComponent } from './heroes/pages/buscar/buscar.component';
import { HeroeComponent } from './heroes/pages/heroe/heroe.component';
import { HomeComponent } from './heroes/pages/home/home.component';
import { authGuard } from './auth/guards/auth.guard';

export const routes: Routes = [
	{
    	path: 'auth', children: [
        	{ path: 'login', component: LoginComponent },
        	{ path: 'registro', component: RegistroComponent },
        	{ path: '**', redirectTo: 'login' }]
	},
	{
    	path: 'heroes',
    	component: HomeComponent, canActivate: [authGuard],
    	children: [
        	{ path: 'listado', component: ListadoComponent },
        	{ path: 'agregar', component: AgregarComponent },
        	{ path: 'editar/:id', component: AgregarComponent },
        	{ path: 'buscar', component: BuscarComponent },
        	{ path: ':id', component: HeroeComponent },
        	{ path: '**', redirectTo:'listado' }
    	]
	},
  { path: '', redirectTo: 'heroes', pathMatch: 'full' },
	{ path: '404', component: ErrorPageComponent },
	{ path: '**', redirectTo: '404' }
];
