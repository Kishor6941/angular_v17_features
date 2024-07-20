import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChildCComponent } from './view-child-c.component';

describe('ViewChildCComponent', () => {
  let component: ViewChildCComponent;
  let fixture: ComponentFixture<ViewChildCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewChildCComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewChildCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
