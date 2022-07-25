import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sub2PageComponent } from './sub2-page.component';

describe('Sub2PageComponent', () => {
  let component: Sub2PageComponent;
  let fixture: ComponentFixture<Sub2PageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sub2PageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sub2PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
