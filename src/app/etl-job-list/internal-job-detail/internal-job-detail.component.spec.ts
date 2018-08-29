import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalJobDetailComponent } from './internal-job-detail.component';

describe('InternalJobDetailComponent', () => {
  let component: InternalJobDetailComponent;
  let fixture: ComponentFixture<InternalJobDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternalJobDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalJobDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
