import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiRedmineComponent } from './api-redmine.component';

describe('ApiRedmineComponent', () => {
  let component: ApiRedmineComponent;
  let fixture: ComponentFixture<ApiRedmineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApiRedmineComponent]
    });
    fixture = TestBed.createComponent(ApiRedmineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
