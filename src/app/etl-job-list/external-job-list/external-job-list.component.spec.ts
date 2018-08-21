import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalJobListComponent } from './external-job-list.component';

describe('ExternalJobListComponent', () => {
  let component: ExternalJobListComponent;
  let fixture: ComponentFixture<ExternalJobListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExternalJobListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExternalJobListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
