import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwiperDeTestesComponent } from './swiper-de-testes.component';

describe('SwiperDeTestesComponent', () => {
  let component: SwiperDeTestesComponent;
  let fixture: ComponentFixture<SwiperDeTestesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SwiperDeTestesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SwiperDeTestesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
