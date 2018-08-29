import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalJobDetailComponent } from './external-job-detail.component';

describe('ExternalJobDetailComponent', () => {
  let component: ExternalJobDetailComponent;
  let fixture: ComponentFixture<ExternalJobDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExternalJobDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExternalJobDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
