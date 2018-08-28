import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalJobListComponent } from './internal-job-list.component';

describe('InternalJobListComponent', () => {
  let component: InternalJobListComponent;
  let fixture: ComponentFixture<InternalJobListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternalJobListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalJobListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
