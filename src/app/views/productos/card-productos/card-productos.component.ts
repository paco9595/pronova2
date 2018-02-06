import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-productos',
  templateUrl: './card-productos.component.html',
  styleUrls: ['./card-productos.component.scss']
})
export class CardProductosComponent implements OnInit {
  currentRate = 4.34;
  readonly = false;
  constructor() { }

  ngOnInit() {
  }
  block() {
    this.readonly = true;
  }

}
