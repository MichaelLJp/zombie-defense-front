import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefenseSimulator } from './defense-simulator';

describe('DefenseSimulator', () => {
  let component: DefenseSimulator;
  let fixture: ComponentFixture<DefenseSimulator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DefenseSimulator],
    }).compileComponents();

    fixture = TestBed.createComponent(DefenseSimulator);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
