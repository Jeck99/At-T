import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
 name: 'searchfilter'
})

@Injectable()
export class SearchFilterPipe implements PipeTransform {
 transform(items: any[], field: string, value: string): any[] {
   debugger;
   if (!items) return items;
   if(value=='') return items;
   return items.filter(item => item.Applicant.Name.toLowerCase().indexOf(value.toLowerCase()) > -1);
 }
}