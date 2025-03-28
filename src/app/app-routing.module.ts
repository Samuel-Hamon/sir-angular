import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyComponentComponent } from './my-component/my-component.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';

const routes: Routes = [
  { path: '', component: MyComponentComponent },
  { path: 'pokemon', component: PokemonListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
