import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailTitanesComponent } from './detail-titanes.component';

describe('DetailTitanesComponent', () => {
  let component: DetailTitanesComponent;
  let fixture: ComponentFixture<DetailTitanesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailTitanesComponent]
    });
    fixture = TestBed.createComponent(DetailTitanesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
