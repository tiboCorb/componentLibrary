import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DragRangeSelectorComponent } from './drag-range-selector.component';

describe('DragRangeSelectorComponent', () => {
  let component: DragRangeSelectorComponent;
  let fixture: ComponentFixture<DragRangeSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DragRangeSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragRangeSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
