import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "mascota",
  template: `
  <div [style.background]="edad > 3 ? 'red' : 'orange'"
       style="float: left; margin: 10px; padding: 10px;">

	  <p>Nombre: {{nombre | uppercase}}</p>
    <p>Color: {{color}}</p>
	  <p>Edad: {{edad}}</p>
	  
	  <button *ngIf="!vacunado" 
            (click)="onVacunar()"
            [disabled]="edad >= 3">
      Vacunar
    </button>
  </div>
  `
})
export class MascotaComponent {
  @Input() nombre: string;
  @Input() color: string;
  @Input() edad: number;
  @Input() vacunado: boolean;
  @Output() vacunar = new EventEmitter();

  constructor() {}

  onVacunar() {
    this.vacunar.emit();
  }

}
