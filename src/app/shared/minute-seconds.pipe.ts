import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minuteSeconds'
})
export class MinuteSecondsPipe implements PipeTransform {

  transform(value: string): string {
    const val = Number(value.split(".")[0]);
    const minutes: number = Math.floor(val / 60);
    return minutes + ':' + (val - minutes * 60);
 }
}
