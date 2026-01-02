import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgxSpinner, NgxSpinnerComponent, NgxSpinnerModule } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgxSpinnerComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('movies_DB');
}
