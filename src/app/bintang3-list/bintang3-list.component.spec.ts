import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bintang3ListComponent } from './bintang3-list.component';

describe('Bintang3ListComponent', () => {
  let component: Bintang3ListComponent;
  let fixture: ComponentFixture<Bintang3ListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bintang3ListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Bintang3ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
