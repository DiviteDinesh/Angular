import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartData1 } from './cart-data1';

describe('CartData1', () => {
  let component: CartData1;
  let fixture: ComponentFixture<CartData1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartData1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartData1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
