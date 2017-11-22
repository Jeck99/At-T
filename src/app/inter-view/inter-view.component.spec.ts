import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterViewComponent } from './inter-view.component';

describe('InterViewComponent', () => {
  let component: InterViewComponent;
  let fixture: ComponentFixture<InterViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
