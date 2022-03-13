import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-filter',
  templateUrl: './category-filter.component.html',
  styleUrls: ['./category-filter.component.scss'],
})
export class CategoryFilterComponent implements OnInit {
  categories = ['All', "Chef's Pick", 'Small Plates', 'Large Plates', 'Past & Pizza', 'Sides & Extras', 'Desserts', 'Ramadan Package'];
  selectedCategory = 'Small Plates';

  constructor() {}

  ngOnInit(): void {}
}
