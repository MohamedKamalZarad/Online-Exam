import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SomeThingWentWrong } from './some-thing-went-wrong';

describe('SomeThingWentWrong', () => {
  let component: SomeThingWentWrong;
  let fixture: ComponentFixture<SomeThingWentWrong>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SomeThingWentWrong]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SomeThingWentWrong);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
