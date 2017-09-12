import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multiple'
})
export class MultiplePipe implements PipeTransform {

  transform(value: any, args?: number): any {
    if(!args)
      args = 1;
    return value * args;
  }

}
