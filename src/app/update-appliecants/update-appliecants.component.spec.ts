import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAppliecantsComponent } from './update-appliecants.component';

describe('UpdateAppliecantsComponent', () => {
  let component: UpdateAppliecantsComponent;
  let fixture: ComponentFixture<UpdateAppliecantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateAppliecantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAppliecantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
