import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxJSComponent } from './rx-js.component';

describe('RxJSComponent', () => {
  let component: RxJSComponent;
  let fixture: ComponentFixture<RxJSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxJSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxJSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
