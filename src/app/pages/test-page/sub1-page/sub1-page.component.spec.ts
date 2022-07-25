import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sub1PageComponent } from './sub1-page.component';

describe('Sub1PageComponent', () => {
  let component: Sub1PageComponent;
  let fixture: ComponentFixture<Sub1PageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sub1PageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sub1PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
