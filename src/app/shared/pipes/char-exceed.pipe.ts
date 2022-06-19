import { HostListener, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'charExceed'
})
export class CharExceedPipe implements PipeTransform {
  stringValue!:string;
  transform(value: string, ...args: unknown[]): unknown {
    return (value.length>7?`${value.slice(0,7)}...`:value);
  }
}
