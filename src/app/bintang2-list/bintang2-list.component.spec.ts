import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bintang2ListComponent } from './bintang2-list.component';

describe('Bintang2ListComponent', () => {
  let component: Bintang2ListComponent;
  let fixture: ComponentFixture<Bintang2ListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bintang2ListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Bintang2ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
