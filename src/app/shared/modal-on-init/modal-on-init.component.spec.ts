import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalOnInitComponent } from './modal-on-init.component';

describe('ModalOnInitComponent', () => {
  let component: ModalOnInitComponent;
  let fixture: ComponentFixture<ModalOnInitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalOnInitComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalOnInitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
