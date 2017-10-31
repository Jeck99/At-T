import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAppliecantsComponent } from './add-appliecants.component';

describe('AddAppliecantsComponent', () => {
  let component: AddAppliecantsComponent;
  let fixture: ComponentFixture<AddAppliecantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAppliecantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAppliecantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
