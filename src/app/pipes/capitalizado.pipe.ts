import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizado'
})
export class CapitalizadoPipe implements PipeTransform {
  //en la ultima version de angular los argumentos ya o vienen como arreglos. arg[]
  transform(value: string, todas:boolean = true): string {

    let valor = value.toLowerCase();
    let nombres = valor.split(" ");    

    if (todas) {
      for (let i in nombres) {
        nombres[i] = nombres[i][0].toUpperCase() + nombres[i].substr(1);
      }
    } else {
      nombres[0] = nombres[0][0].toUpperCase() + nombres[0].substr(1);
    }

    return nombres.join(" ");
  }
}
