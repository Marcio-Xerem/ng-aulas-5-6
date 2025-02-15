import { Component } from '@angular/core';
import { ValidaIdadeComponent } from './valida-idade/valida-idade.component';

@Component({
  selector: 'app-root',
  imports: [ValidaIdadeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Classwork4';
}
