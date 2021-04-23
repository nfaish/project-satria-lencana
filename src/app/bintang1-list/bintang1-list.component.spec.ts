import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bintang1ListComponent } from './bintang1-list.component';

describe('Bintang1ListComponent', () => {
  let component: Bintang1ListComponent;
  let fixture: ComponentFixture<Bintang1ListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bintang1ListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Bintang1ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
