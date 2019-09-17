import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrangeWithBlueInsideComponent } from './orange-with-blue-inside.component';

describe('OrangeWithBlueInsideComponent', () => {
  let component: OrangeWithBlueInsideComponent;
  let fixture: ComponentFixture<OrangeWithBlueInsideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrangeWithBlueInsideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrangeWithBlueInsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
