import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostraCervejariasComponent } from './mostra-cervejarias.component';

describe('MostraCervejariasComponent', () => {
  let component: MostraCervejariasComponent;
  let fixture: ComponentFixture<MostraCervejariasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MostraCervejariasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostraCervejariasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
