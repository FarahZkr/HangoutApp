import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalTabComponent } from './personal-tab.component';

describe('PersonalTabComponent', () => {
  let component: PersonalTabComponent;
  let fixture: ComponentFixture<PersonalTabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonalTabComponent]
    });
    fixture = TestBed.createComponent(PersonalTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});