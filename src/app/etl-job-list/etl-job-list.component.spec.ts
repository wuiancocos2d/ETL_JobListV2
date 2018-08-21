import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtlJobListComponent } from './etl-job-list.component';

describe('EtlJobListComponent', () => {
  let component: EtlJobListComponent;
  let fixture: ComponentFixture<EtlJobListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtlJobListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtlJobListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
