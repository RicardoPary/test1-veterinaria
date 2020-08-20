import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html"
})
export class AppComponent {

  allPets = [
    { nombre: "choco", color: "cafe", edad: 2, vacunado: true },
    { nombre: "perla", color: "amarillo", edad: 4, vacunado: false },
    { nombre: "jorge", color: "cafe", edad: 5, vacunado: false },
    { nombre: "beto", color: "negro", edad: 5, vacunado: true },
    { nombre: "berni", color: "negro", edad: 4, vacunado: true },
    { nombre: "cuki", color: "negro", edad: 7, vacunado: false },
    { nombre: "lobo", color: "amarillo", edad: 1, vacunado: false },
    { nombre: "bozer", color: "negro", edad: 4, vacunado: true },
    { nombre: "dormilon", color: "cafe", edad: 4, vacunado: false },
    { nombre: "vandido", color: "rojo", edad: 5, vacunado: false }
  ];

  pets = {
    vacunados: this.allPets.filter(p => p.vacunado),
    novacunados: this.allPets.filter(p => !p.vacunado)
  };

  verifyAllVacunados() {
    const novacunados = this.pets.novacunados.filter(p => p.edad < 3);
    return novacunados.length === 0;
  }

  vacunar(pet, tipo) {
    const index = this.pets[tipo].findIndex(p => p === pet);
    this.pets[tipo].splice(index, 1);
    this.pets.vacunados.push({...pet, vacunado: true});
  }
}
