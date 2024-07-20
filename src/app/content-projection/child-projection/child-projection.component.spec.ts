import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildProjectionComponent } from './child-projection.component';

describe('ChildProjectionComponent', () => {
  let component: ChildProjectionComponent;
  let fixture: ComponentFixture<ChildProjectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildProjectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChildProjectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
