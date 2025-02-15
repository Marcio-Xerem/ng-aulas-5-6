import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidaIdadeComponent } from './valida-idade.component';

describe('ValidaIdadeComponent', () => {
  let component: ValidaIdadeComponent;
  let fixture: ComponentFixture<ValidaIdadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValidaIdadeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValidaIdadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
