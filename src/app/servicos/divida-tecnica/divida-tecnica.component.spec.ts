import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DividaTecnicaComponent } from './divida-tecnica.component';

describe('DividaTecnicaComponent', () => {
  let component: DividaTecnicaComponent;
  let fixture: ComponentFixture<DividaTecnicaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DividaTecnicaComponent]
    });
    fixture = TestBed.createComponent(DividaTecnicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
