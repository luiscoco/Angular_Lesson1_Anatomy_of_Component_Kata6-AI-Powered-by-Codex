import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-visual-box',
  standalone: true,
  templateUrl: './visual-box.html',
  styleUrl: './visual-box.css'
})
export class VisualBoxComponent {
  @Input() label = 'Child component';
}