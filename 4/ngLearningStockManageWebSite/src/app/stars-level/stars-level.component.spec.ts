import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarsLevelComponent } from './stars-level.component';

describe('StarsLevelComponent', () => {
  let component: StarsLevelComponent;
  let fixture: ComponentFixture<StarsLevelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarsLevelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarsLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
