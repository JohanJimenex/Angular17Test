import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-mi-componente',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>miComponente works!</p>`,
  styleUrl: './miComponente.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MiComponenteComponent { }
