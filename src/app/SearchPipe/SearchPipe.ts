import { Injectable, Pipe, PipeTransform } from '@angular/core';
import { isUndefined } from 'util';


@Pipe({
 name: 'SearchFilterPipe'
})

@Injectable()
export class SearchFilterPipe implements PipeTransform {
 transform(items: any[],value: string): any[] {

  console.log("searchpipe",value);
  
  if (!items) return items;
  if (isUndefined(value)) return items;
  if(value=='') return items;
   return items.filter(item => item.Name.toLowerCase().indexOf(value.toLowerCase()) > -1);
 }
}