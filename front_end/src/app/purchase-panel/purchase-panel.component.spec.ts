import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasePanelComponent } from './purchase-panel.component';

describe('PurchasePanelComponent', () => {
  let component: PurchasePanelComponent;
  let fixture: ComponentFixture<PurchasePanelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PurchasePanelComponent]
    });
    fixture = TestBed.createComponent(PurchasePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
