import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bintang4ListComponent } from './bintang4-list.component';

describe('Bintang4ListComponent', () => {
  let component: Bintang4ListComponent;
  let fixture: ComponentFixture<Bintang4ListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bintang4ListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Bintang4ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
