import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListsComponent } from './lists/lists.component';

const appRoutes: Routes = [
{
  path: 'lists',
  component: ListsComponent
}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
