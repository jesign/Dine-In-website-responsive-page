import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Talino Exercise';
  showSidebar = false;
  menus = [
    {
      image: '/assets/images/menu-1.png',
      name: 'Avocado Salad',
      price: 'BHD 4.800'
    },
    {
      image: '/assets/images/menu-2.jpeg',
      name: 'Avocado Salad',
      price: 'BHD 4.800'
    },
    {
      image: '/assets/images/menu-3.jpeg',
      name: 'Avocado Salad',
      price: 'BHD 4.800'
    },
    {
      image: '/assets/images/menu-4.jpeg',
      name: 'Avocado Salad',
      price: 'BHD 4.800'
    },
    {
      image: '/assets/images/menu-5.jpeg',
      name: 'Avocado Salad',
      price: 'BHD 4.800'
    },
    {
      image: '/assets/images/menu-6.jpeg',
      name: 'Avocado Salad',
      price: 'BHD 4.800'
    },
    {
      image: '/assets/images/menu-7.jpeg',
      name: 'Avocado Salad',
      price: 'BHD 4.800'
    },
  ]
}
