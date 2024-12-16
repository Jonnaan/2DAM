import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrezetakComponent } from './errezetak.component';

describe('ErrezetakComponent', () => {
  let component: ErrezetakComponent;
  let fixture: ComponentFixture<ErrezetakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErrezetakComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrezetakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
