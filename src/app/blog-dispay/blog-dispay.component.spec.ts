import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogDispayComponent } from './blog-dispay.component';

describe('BlogDispayComponent', () => {
  let component: BlogDispayComponent;
  let fixture: ComponentFixture<BlogDispayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogDispayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogDispayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
