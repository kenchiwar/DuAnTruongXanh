import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoColumnFormComponent } from './two-column-form.component';

describe('TwoColumnFormComponent', () => {
  let component: TwoColumnFormComponent;
  let fixture: ComponentFixture<TwoColumnFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TwoColumnFormComponent]
    });
    fixture = TestBed.createComponent(TwoColumnFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
