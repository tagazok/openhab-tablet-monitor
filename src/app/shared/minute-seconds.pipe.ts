import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minuteSeconds'
})
export class MinuteSecondsPipe implements PipeTransform {

  transform(value: string): string {
    const val = Number(value.split(".")[0]);
    if (isNaN(val)) return '-:-';
    
    const minutes: number = Math.floor(val / 60);
    return minutes + ':' + String((val - minutes * 60)).padStart(2, '0');
 }
}
