import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsDeleteComponent } from './contacts-delete.component';

describe('ContactsDeleteComponent', () => {
  let component: ContactsDeleteComponent;
  let fixture: ComponentFixture<ContactsDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactsDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
