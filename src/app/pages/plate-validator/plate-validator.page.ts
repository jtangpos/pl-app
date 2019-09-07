import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plate-validator',
  templateUrl: './plate-validator.page.html',
  styleUrls: ['./plate-validator.page.scss']
})
export class PlateValidatorPage implements OnInit {
  plateNumber: string;
  lastDigit: any;
  secondLastDigit: any;
  selectedMonth: any;
  selectedWeek: any;

  constructor() {
    this.selectedMonth = '';
    this.selectedWeek = '';
  }

  ngOnInit() {}

  validatePlate() {
    this.lastDigit = this.getLastDigit(this.plateNumber);
    this.secondLastDigit = this.getSecondLastDigit(this.plateNumber);
    this.selectedMonth = this.getMonthSchedule(this.lastDigit);
    this.selectedWeek = this.getWeekSchedule(this.secondLastDigit);
  }

  getLastDigit(str) {
    return str.slice(-1);
  }

  getSecondLastDigit(str) {
    return str.slice(-2, -1);
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
      1: '1st Week',
      2: '1st Week',
      3: '1st Week',
      4: '2nd Week',
      5: '2nd Week',
      6: '2nd Week',
      7: '3rd Week',
      8: '3rd Week',
      9: '4th Week',
      0: '4th Week'
    };

    return weekSchedules[week];
  }
}
