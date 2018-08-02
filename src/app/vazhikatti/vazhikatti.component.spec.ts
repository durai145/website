import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VazhikattiComponent } from './vazhikatti.component';

describe('VazhikattiComponent', () => {
  let component: VazhikattiComponent;
  let fixture: ComponentFixture<VazhikattiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VazhikattiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VazhikattiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
