import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FootertoolbarComponent } from './footertoolbar.component';

describe('FootertoolbarComponent', () => {
  let component: FootertoolbarComponent;
  let fixture: ComponentFixture<FootertoolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FootertoolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FootertoolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
