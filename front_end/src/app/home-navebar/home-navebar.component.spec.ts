import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeNaveBarComponent } from './home-navebar.component';

describe('HomeNaveBarComponent', () => {
  let component: HomeNaveBarComponent;
  let fixture: ComponentFixture<HomeNaveBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeNaveBarComponent],
    });
    fixture = TestBed.createComponent(HomeNaveBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
