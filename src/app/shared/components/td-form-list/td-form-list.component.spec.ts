import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TdFormListComponent } from './td-form-list.component';

describe('TdFormListComponent', () => {
  let component: TdFormListComponent;
  let fixture: ComponentFixture<TdFormListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TdFormListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TdFormListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
