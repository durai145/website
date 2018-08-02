import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThalaippuComponent } from './thalaippu.component';

describe('ThalaippuComponent', () => {
  let component: ThalaippuComponent;
  let fixture: ComponentFixture<ThalaippuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThalaippuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThalaippuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
