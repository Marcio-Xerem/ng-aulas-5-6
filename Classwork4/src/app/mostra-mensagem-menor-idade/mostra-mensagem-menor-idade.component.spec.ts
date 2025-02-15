import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostraMensagemMenorIdadeComponent } from './mostra-mensagem-menor-idade.component';

describe('MostraMensagemMenorIdadeComponent', () => {
  let component: MostraMensagemMenorIdadeComponent;
  let fixture: ComponentFixture<MostraMensagemMenorIdadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MostraMensagemMenorIdadeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostraMensagemMenorIdadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
