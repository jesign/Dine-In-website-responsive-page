import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodTypeFilterComponent } from './food-type-filter.component';

describe('FoodTypeFilterComponent', () => {
  let component: FoodTypeFilterComponent;
  let fixture: ComponentFixture<FoodTypeFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodTypeFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodTypeFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
