import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';


interface City {
  name: string,
  code: string
}

@Component({
  selector: 'uc-dropDown',
  templateUrl: './uc-drop-down.component.html',
  styleUrls: ['./uc-drop-down.component.css']
})

export class UcDropDownComponent implements OnInit {

  cities: City[];

  selectedCity1: City;

  constructor() {

        this.cities = [
            {name: 'New York', code: 'NY'},
            {name: 'Rome', code: 'RM'},
            {name: 'London', code: 'LDN'},
            {name: 'Istanbul', code: 'IST'},
            {name: 'Paris', code: 'PRS'}
        ];
  }

  ngOnInit(): void {
  }

}
