import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }

  bigChart(){
    return [{
       name: 'Asia',
       data: [502, 635, 809, 947, 1402, 3634, 5268]
    },{
      name: 'Africa',
      data: [102, 107, 125, 221, 684, 363, 526]
    },{
      name: 'Europe',
      data: [702, 156, 189, 247, 102, 334, 268]
    },{
      name: 'America',
      data: [10, 63, 80, 94, 142, 394, 528]
    },{
    name: 'Ocenia',
    data: [12, 5, 8, 47, 14, 63, 268]
    }];

  }
  cards(){
      return [71, 78, 39, 66];
  }

  pieChart(){
    return [{
      name: 'Chrome',
            y: 61.41,
            sliced: true,
            selected: true
        }, {
            name: 'Internet Explorer',
            y: 11.84
        }, {
            name: 'Firefox',
            y: 10.85
        }, {
            name: 'Edge',
            y: 4.67
        }, {
            name: 'Safari',
            y: 4.18
        }, {
            name: 'Sogou Explorer',
            y: 1.64
        }, {
            name: 'Opera',
            y: 1.6
        }, {
            name: 'QQ',
            y: 1.2
        }, {
            name: 'Other',
            y: 2.61
    }]
  }
}
