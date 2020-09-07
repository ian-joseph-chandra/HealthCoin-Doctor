import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WriteRecordComponent } from './write-record.component';

describe('WriteRecordComponent', () => {
  let component: WriteRecordComponent;
  let fixture: ComponentFixture<WriteRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WriteRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WriteRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
