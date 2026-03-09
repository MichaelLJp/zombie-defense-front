import { Component, OnInit, inject,ChangeDetectorRef  } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { DefenseService } from '../../core/Services/defense.service';
import { DefenseResponse, HistoricalStrategy } from '../../core/Models/defense.model';

@Component({
  selector: 'app-defense-simulator',
  standalone: false, // Importante: seguimos con el esquema de módulos
  templateUrl: './defense-simulator.html',
  styleUrl: './defense-simulator.scss'
})
export class DefenseSimulatorComponent implements OnInit {
  private fb = inject(FormBuilder);
  private cdr = inject(ChangeDetectorRef);
  private defenseService = inject(DefenseService);
  selectedHistoryId: number | null = null;
showZombies = false;

toggleZombies() {
  this.showZombies = !this.showZombies;
}
  get bulletsControl(): FormControl {
    return this.defenseForm.get('bullets') as FormControl;
  }

  get timeControl(): FormControl {
    return this.defenseForm.get('time') as FormControl;
  }

  // Formulario que controla los inputs de balas y tiempo
  defenseForm: FormGroup = this.fb.group({
    bullets: [50, [Validators.required, Validators.min(1)]],
    time: [100, [Validators.required, Validators.min(1)]]
  });

  currentResult?: DefenseResponse;
  history: HistoricalStrategy[] = [];

  ngOnInit() {
    this.loadHistory(); // Carga el ranking al iniciar
  }

  calculate() {
    if (this.defenseForm.invalid) return;

    const { bullets, time } = this.defenseForm.value;
    this.defenseService.getOptimalStrategy(bullets, time).subscribe({
      next: (res) => {
        this.currentResult = res;
        this.loadHistory(); // Actualiza el historial tras el nuevo registro
      },
      error: (err) => console.error('Error en la comunicación con .NET:', err)
    });
  }

  toggleHistoryItem(id: number) {
  if (this.selectedHistoryId === id) {
    this.selectedHistoryId = null; // cerrar si ya estaba abierto
  } else {
    this.selectedHistoryId = id; // abrir
  }
}

sortByBullets() {
  this.history = [...this.history].sort(
    (a, b) => b.balasDisponibles - a.balasDisponibles
  );
}

sortByTime() {
  this.history = [...this.history].sort(
    (a, b) => b.tiempoDisponible - a.tiempoDisponible
  );
}
 loadHistory() {

  this.defenseService.getHistory().subscribe(h => {
    console.log("HISTORY:", h);
    this.history = Array.isArray(h) ? h : [h];
    this.cdr.detectChanges(); 
  });
}
}