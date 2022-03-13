import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-food-type-filter',
  templateUrl: './food-type-filter.component.html',
  styleUrls: ['./food-type-filter.component.scss'],
})
export class FoodTypeFilterComponent implements OnInit {
  foodTypes = [
    'Vegan',
    'Vegetarian',
    'Low Carb',
    'Gluten Free',
  ];
  selectedFoodType = ''
  constructor() {}

  ngOnInit(): void {}
}
