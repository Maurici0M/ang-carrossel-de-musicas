import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesGroupComponent } from './pages-group.component';

describe('PagesGroupComponent', () => {
  let component: PagesGroupComponent;
  let fixture: ComponentFixture<PagesGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PagesGroupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PagesGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
