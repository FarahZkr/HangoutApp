import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordTabComponent } from './password-tab.component';

describe('PasswordTabComponent', () => {
  let component: PasswordTabComponent;
  let fixture: ComponentFixture<PasswordTabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PasswordTabComponent]
    });
    fixture = TestBed.createComponent(PasswordTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
