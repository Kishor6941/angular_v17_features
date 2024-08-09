import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalCComponent } from './signal-c.component';

describe('SignalCComponent', () => {
  let component: SignalCComponent;
  let fixture: ComponentFixture<SignalCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalCComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignalCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
