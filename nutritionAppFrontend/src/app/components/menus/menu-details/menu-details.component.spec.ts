import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuDetailsComponent } from './menu-details.component';

describe('MenuDetailsComponent', () => {
  let component: MenuDetailsComponent;
  let fixture: ComponentFixture<MenuDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MenuDetailsComponent]
    });
    fixture = TestBed.createComponent(MenuDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
