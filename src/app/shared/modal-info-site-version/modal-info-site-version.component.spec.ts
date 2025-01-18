import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalInfoSiteVersionComponent } from './modal-info-site-version.component';

describe('ModalInfoSiteVersionComponent', () => {
  let component: ModalInfoSiteVersionComponent;
  let fixture: ComponentFixture<ModalInfoSiteVersionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalInfoSiteVersionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalInfoSiteVersionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
