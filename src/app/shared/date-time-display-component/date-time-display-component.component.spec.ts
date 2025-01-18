import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateTimeDisplayComponentComponent } from './date-time-display-component.component';

describe('DateTimeDisplayComponentComponent', () => {
  let component: DateTimeDisplayComponentComponent;
  let fixture: ComponentFixture<DateTimeDisplayComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DateTimeDisplayComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DateTimeDisplayComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
