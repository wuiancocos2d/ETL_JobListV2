import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectPanelsComponent } from './select-panels.component';

describe('SelectPanelsComponent', () => {
  let component: SelectPanelsComponent;
  let fixture: ComponentFixture<SelectPanelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectPanelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectPanelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
