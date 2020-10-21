import { Component, OnInit } from '@angular/core';
import { Veiculo } from '../common/veiculo';
import { VeiculoService } from '../services/veiculo.service';

@Component({
  selector: 'app-veiculos-list',
  templateUrl: './veiculos-list-bootstrap.component.html',
  styleUrls: ['./veiculos-list.component.css']
})
export class VeiculosListComponent implements OnInit {

  veiculos: Veiculo[];
  
  constructor(private veiculoService: VeiculoService) { }

  ngOnInit() {
    this.veiculoService.findAll().subscribe(data => {
      this.veiculos = data;
    })
  }
}
