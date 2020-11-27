import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'faz-chave/:nick',
    loadChildren: () => import('./faz-chave/faz-chave.module').then( m => m.FazChavePageModule)
  },
  {
    path: 'solicita/:nick',
    loadChildren: () => import('./solicita/solicita.module').then( m => m.SolicitaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
