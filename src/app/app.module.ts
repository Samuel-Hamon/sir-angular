import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { FormsModule } from '@angular/forms';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { FilterPokemonPipePipe } from './filter-pokemon--pipe.pipe';
import { HttpClientModule } from '@angular/common/http'; // Ajoutez cette ligne
import { PokeApiService } from './poke-api.service';

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    PokemonListComponent,
    FilterPokemonPipePipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PokeApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
