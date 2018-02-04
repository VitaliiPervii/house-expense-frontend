///<reference path="../../../../node_modules/@angular/core/src/change_detection/pipe_transform.d.ts"/>
import {Pipe, PipeTransform} from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'pvvMoment'
})

export class MomentPipe implements PipeTransform {
    transform(value: string, formatFrom: string, formatTo: string = 'DD.MM.YYYY'):string {
      return moment(value, formatFrom).format(formatTo);
    }
}
