import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockSeearchComponent } from './stock-seearch.component';

describe('StockSeearchComponent', () => {
  let component: StockSeearchComponent;
  let fixture: ComponentFixture<StockSeearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockSeearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockSeearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
