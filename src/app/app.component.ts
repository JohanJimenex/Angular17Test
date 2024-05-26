import {
  Component,
  OnInit,
  WritableSignal,
  computed,
  effect,
  inject,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MiservicioService } from './miservicio.service';
import { of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true, //para usar el modulo interno
  imports: [CommonModule, RouterOutlet], // esto es posible gracias al standalone = true
})
export class AppComponent implements OnInit {
  private miservc = inject(MiservicioService);

  constructor() {
    effect(() => {
      console.info(
        'este efecct se dispara igual que el computer cuando hay cambio',
        this.saludoComputed(),
        this.show()
      );
    });
  }

  ngOnInit() {
    this.miservc.getGithubProfile();
  }

  // public show: boolean = false;
  // public show = signal(true);
  // public show: WritableSignal<boolean> = signal(true);
  public show = signal<boolean>(true);
  public saludoComputed = computed(() => this.show()); //Se queda escuchando cad avez que hay un cambio
  private $show = of(this.show())
  public changeSalute(): void {
    // 1ra forma actualizar signal
    // this.show.set(!this.show);

    // 2da forma de actualizar los signals
    this.show.update((value) => {
      // en value viene el valor actual que tiene
      return !value;
    });
  }
  // -----------------------------------------------------------------------------------
  // public personsList: string[] = ['Johan', 'Pedro', 'Ana'];
  public personsList = signal(['Signal J', 'Signal P', 'Signal A']);
  public personsList2 = signal([]);

  public addPerson(): void {
    this.personsList.update((array) => {
      array.push('New Person');
      return array;
    });
  }
}
