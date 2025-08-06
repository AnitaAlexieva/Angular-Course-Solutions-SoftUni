import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
@Pipe({
  name: 'elapsedTime'
})
export class ElapsedTimePipe implements PipeTransform {

  transform(date: string, ...args: unknown[]): unknown {
    //today - the given date
    //06.08.2025 - 06.07.2024 => 1 year 1 month
    return moment(date).fromNow();
  }

}
