import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyIntroduction } from './my-introduction';

describe('MyIntroduction', () => {
  let component: MyIntroduction;
  let fixture: ComponentFixture<MyIntroduction>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyIntroduction]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyIntroduction);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
