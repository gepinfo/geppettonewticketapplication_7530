import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateservicetypeComponent } from './createservicetype.component';

describe('CreateservicetypeComponent', () => {
  let component: CreateservicetypeComponent;
  let fixture: ComponentFixture<CreateservicetypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateservicetypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateservicetypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});