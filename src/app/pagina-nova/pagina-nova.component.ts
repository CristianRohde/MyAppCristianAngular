import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina-nova',
  templateUrl: './pagina-nova.component.html',
  styleUrls: ['./pagina-nova.component.css']
})
export class PaginaNovaComponent implements OnInit {

  public carros: any = ['BWM','FORD']
  constructor() { }

  ngOnInit() {
  }

}
