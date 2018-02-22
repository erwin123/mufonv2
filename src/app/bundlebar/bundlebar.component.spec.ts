import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BundlebarComponent } from './bundlebar.component';

describe('BundlebarComponent', () => {
  let component: BundlebarComponent;
  let fixture: ComponentFixture<BundlebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BundlebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BundlebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
