import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paragraph'
})
export class ParagraphPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    value = (value) ? value : '';
    return (value) ? value.replace(/\n/g, '<br />') : value;
  }

}
