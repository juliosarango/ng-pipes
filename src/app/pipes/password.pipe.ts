import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'password'
})
export class PasswordPipe implements PipeTransform {

  transform(value: string, pass:boolean = true): any {
    let result:string = "";
    if (pass) {
      result = "*".repeat(value.length);      
    } else {
      result = value;
    }
    return result;
  }
}
