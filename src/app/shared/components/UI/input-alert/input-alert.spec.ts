import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputAlert } from './input-alert';

describe('InputAlert', () => {
  let component: InputAlert;
  let fixture: ComponentFixture<InputAlert>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputAlert]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputAlert);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
