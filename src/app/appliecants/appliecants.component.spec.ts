import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppliecantsComponent } from './appliecants.component';

describe('AppliecantsComponent', () => {
  let component: AppliecantsComponent;
  let fixture: ComponentFixture<AppliecantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppliecantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppliecantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
