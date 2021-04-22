import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bintang1Component } from './bintang1.component';

describe('Bintang1Component', () => {
  let component: Bintang1Component;
  let fixture: ComponentFixture<Bintang1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bintang1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Bintang1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
