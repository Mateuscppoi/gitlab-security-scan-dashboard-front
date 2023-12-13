import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumseiComponent } from './numsei.component';

describe('NumseiComponent', () => {
  let component: NumseiComponent;
  let fixture: ComponentFixture<NumseiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NumseiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NumseiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
