import { Component, OnInit } from '@angular/core';
import { Colchon1 } from 'src/app/colchon';



@Component({
  selector: 'app-colchon',
  templateUrl: './colchon.component.html',
  styleUrls: ['./colchon.component.less']
})

export class ColchonComponent implements OnInit {
  colchon: Colchon1 = {
    id: 1,
    name: 'Mixto- Muelles y Latex'
  };


constructor() { }
ngOnInit(): void { }


}
