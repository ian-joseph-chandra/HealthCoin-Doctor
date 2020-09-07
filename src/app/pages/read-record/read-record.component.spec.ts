import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadRecordComponent } from './read-record.component';

describe('ReadRecordComponent', () => {
  let component: ReadRecordComponent;
  let fixture: ComponentFixture<ReadRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
