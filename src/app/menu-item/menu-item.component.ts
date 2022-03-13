import { Component, Input, OnInit } from '@angular/core';

interface IMenuItem {
  name: string;
  image: string;
  price: string;
}

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})

export class MenuItemComponent implements OnInit {

  @Input() menu: IMenuItem;

  constructor() {
    this.menu = {
      name: '',
      image: '',
      price: ''
    }
  }

  ngOnInit(): void {
  }

}
