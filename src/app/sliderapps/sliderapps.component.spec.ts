import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderappsComponent } from './sliderapps.component';

describe('SliderappsComponent', () => {
  let component: SliderappsComponent;
  let fixture: ComponentFixture<SliderappsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderappsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderappsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
