import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plate-validator',
  templateUrl: './plate-validator.page.html',
  styleUrls: ['./plate-validator.page.scss']
})
export class PlateValidatorPage implements OnInit {
  plateNumber: string;
  prefix: string;
  lastDigit: any;
  secondLastDigit: any;
  selectedMonth: any;
  selectedWeek: any;
  selectedRegion: any;
  firstLetter: any;

  constructor() {
    this.selectedMonth = '';
    this.selectedWeek = '';
    this.selectedRegion = '';
    this.firstLetter = '';
  }

  ngOnInit() {}

  validatePlate() {

    if(!this.plateNumber || !this.prefix) return;
    
    this.lastDigit = this.getLastDigit(this.plateNumber);
    this.secondLastDigit = this.getSecondLastDigit(this.plateNumber);
    this.selectedMonth = this.getMonthSchedule(this.lastDigit);
    this.selectedWeek = this.getWeekSchedule(this.secondLastDigit);

    this.firstLetter = this.getFirstCharacter(this.prefix);
    this.selectedRegion = this.getRegion(this.firstLetter);
  }

  letterOnlyValidation(event:any) {
    const pattern  = /^[a-zA-Z]+$/;
    let inputChar = String.fromCharCode(event.charCode);

    if (!pattern.test(inputChar)) {
      // invalid character, prevent input
      event.preventDefault();
    }

  }
  numberOnlyValidation(event: any) {
    const pattern = /[0-9.,]/;
    let inputChar = String.fromCharCode(event.charCode);

    if (!pattern.test(inputChar)) {
      // invalid character, prevent input
      event.preventDefault();
    }
  }

  getFirstCharacter(str) {
    return str.slice(0,1);
  }

  getLastDigit(str) {
    return str.slice(-1);
  }

  getSecondLastDigit(str) {
    return str.slice(-2, -1);
  }

  getRegion(letter) {
    letter = letter.toUpperCase();
    const regionNames = {
      'A': '',
      'B': 'Region 2 (Cagayan Valley)',
      'C': 'Region 3 (Central Luzon)',
      'D': 'Region 4A (CALABARZON)',
      'E': 'Region 5 (Bicol Region)',
      'F': 'Region 6 (Western Visayas)',
      'G': 'Region 7 (Central Visayas)',
      'H': 'Region 8 (Eastern Visayas)',
      'I': 'Region 9 (Ilocos Region)',
      'J': 'Region 10 (Zamboanga Peninsula)',
      'K': 'Region 10 (Northern Mindanao)',
      'L': 'Region 11 (Davao Region)',
      'M': 'Region 12 (SOCCSKSARGEN)',
      'N': 'National Capital Region (NCR)',
      'O': 'Bangsamoro Autonomous Region in Muslim Mindanao (BARMM)',
      'P': '',
      'Q': '',
      'R': '',
      'S': '',
      'T': '',
      'U': '',
      'V': 'Region 4B (MIMAROPA)',
      'W': '',
      'X': '',
      'Y': 'Cordillera Administrative Region (CAR)',
      'Z': 'Region 13 (Caraga)'
    }

    return regionNames[letter];
  }

  getMonthSchedule(month) {
    const monthSchedules = {
      1: 'January',
      2: 'February',
      3: 'March',
      4: 'April',
      5: 'May',
      6: 'June',
      7: 'July',
      8: 'August',
      9: 'September',
      0: 'October'
    };

    return monthSchedules[month];
  }

  getWeekSchedule(week) {
    const weekSchedules = {
      1: '1st - 7th Day of the Month',
      2: '1st - 7th Day of the Month',
      3: '1st - 7th Day of the Month',
      4: '8th - 14th Day of the Month',
      5: '8th - 14th Day of the Month',
      6: '8th - 14th Day of the Month',
      7: '15th - 21st Day of the Month',
      8: '15th - 21st Day of the Month',
      9: '22nd - last Day of the Month',
      0: '22nd - last Day of the Month'
    };

    return weekSchedules[week];
  }
}
