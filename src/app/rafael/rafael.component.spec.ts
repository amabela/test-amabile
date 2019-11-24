import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RafaelComponent } from './rafael.component';

describe('RafaelComponent', () => {
  let component: RafaelComponent;
  let fixture: ComponentFixture<RafaelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RafaelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RafaelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
