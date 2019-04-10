import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProdctsComponent } from './edit-prodcts.component';

describe('EditProdctsComponent', () => {
  let component: EditProdctsComponent;
  let fixture: ComponentFixture<EditProdctsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditProdctsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProdctsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
