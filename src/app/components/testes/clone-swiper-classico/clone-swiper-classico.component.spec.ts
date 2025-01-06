import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloneSwiperClassicoComponent } from './clone-swiper-classico.component';

describe('CloneSwiperClassicoComponent', () => {
  let component: CloneSwiperClassicoComponent;
  let fixture: ComponentFixture<CloneSwiperClassicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CloneSwiperClassicoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CloneSwiperClassicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
