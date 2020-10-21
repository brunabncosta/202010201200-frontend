import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VeiculosListComponent } from './veiculos-list/veiculos-list.component';
import { HttpClientModule } from '@angular/common/http';
import { VeiculoService } from './services/veiculo.service';

@NgModule({
  declarations: [
    AppComponent,
    VeiculosListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [VeiculoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
