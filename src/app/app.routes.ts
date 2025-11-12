import { Routes } from '@angular/router';
import { Alimentacion } from './pages/alimentacion/alimentacion';
import { Ayudas } from './pages/ayudas/ayudas';
import { Contacto } from './pages/contacto/contacto';
import { Empieza } from './pages/empieza/empieza';
import { Entrenador } from './pages/entrenador/entrenador';
import { Entrenamiento } from './pages/entrenamiento/entrenamiento';
import { Formulario } from './pages/formulario/formulario';

export const routes: Routes = [
{ path: '', redirectTo: 'empezar', pathMatch: 'full' },
  { path: 'alimentacion', component: Alimentacion },
  { path: 'ayudas', component: Ayudas },
  { path: 'contacto', component: Contacto },
  { path: 'empezar', component: Empieza },
  { path: 'entrenador', component: Entrenador },
  { path: 'entrenamiento', component: Entrenamiento },
  { path: 'formulario', component: Formulario },
  { path: '**', redirectTo: 'empezar' }

];
