import { Component } from '@angular/core';
import { VisualBoxComponent } from './visual-box/visual-box';

@Component({
  selector: 'app-root',
  imports: [VisualBoxComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
