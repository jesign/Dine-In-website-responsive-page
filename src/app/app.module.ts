import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SearchInputComponent } from './search-input/search-input.component';
import { BasketButtonComponent } from './basket-button/basket-button.component';
import { CategoryFilterComponent } from './category-filter/category-filter.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { FoodTypeFilterComponent } from './food-type-filter/food-type-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchInputComponent,
    BasketButtonComponent,
    CategoryFilterComponent,
    MenuItemComponent,
    FoodTypeFilterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
