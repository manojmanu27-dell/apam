import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhantsComponent } from './phants.component';

describe('PhantsComponent', () => {
  let component: PhantsComponent;
  let fixture: ComponentFixture<PhantsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhantsComponent]
    });
    fixture = TestBed.createComponent(PhantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
