import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderHolder } from './header-holder';

describe('HeaderHolder', () => {
  let component: HeaderHolder;
  let fixture: ComponentFixture<HeaderHolder>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderHolder]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderHolder);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
