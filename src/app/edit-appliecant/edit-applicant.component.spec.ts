import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAppliecantComponent } from './edit-appliecant.component';

describe('EditAppliecantComponent', () => {
  let component: EditAppliecantComponent;
  let fixture: ComponentFixture<EditAppliecantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAppliecantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAppliecantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
