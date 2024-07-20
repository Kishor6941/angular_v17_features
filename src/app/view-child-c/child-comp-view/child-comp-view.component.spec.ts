import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildCompViewComponent } from './child-comp-view.component';

describe('ChildCompViewComponent', () => {
  let component: ChildCompViewComponent;
  let fixture: ComponentFixture<ChildCompViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildCompViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChildCompViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
