import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./components/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'items',
    loadComponent: () => import('./components/items/items.component').then(m => m.ItemsComponent)
  },
  {
    path: 'recipes',
    loadComponent: () => import('./components/recipes/recipes.component').then(m => m.RecipesComponent)
  },
  {
    path: 'menus',
    loadComponent: () => import('./components/menus/menus.component').then(m => m.MenusComponent)
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
