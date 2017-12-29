import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreStayComponent } from './pre-stay.component';

describe('PreStayComponent', () => {
  let component: PreStayComponent;
  let fixture: ComponentFixture<PreStayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreStayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreStayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
