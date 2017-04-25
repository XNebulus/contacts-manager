import { Pipe, PipeTransform } from '@angular/core';
import {Contact} from './contact'
@Pipe({
  name: 'search',
  pure: false
})
export class SearchPipe implements PipeTransform {

  transform(array: Contact[], args?: any): any {
    return array.filter(v =>  v.name.toLowerCase().indexOf(args) != -1);
  }

}
