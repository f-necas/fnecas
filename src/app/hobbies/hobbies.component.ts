import { Component, OnInit } from '@angular/core';
import { Hobbie, HobbiesGroup } from './hobbie';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.scss']
})
export class HobbiesComponent implements OnInit {

  hobbies: Array<HobbiesGroup>;

  constructor() {
    this.hobbies = [
      { groupName: 'Sports',
        hobbieGroup: [
          {name: 'Rock Climbing', startDate: new Date(2018, 1)},
          {name: 'Running / Trail', startDate: new Date(2017, 1)},
          {name: 'Hiking', startDate: new Date(2017, 1)},
          {name: 'Windsurf', startDate: new Date(2017, 1)},
        ]
      },
      { groupName: 'Travel',
        hobbieGroup: [
          {name: 'USA / Canada', startDate: new Date(2012, 1)},
          {name: 'Malaysia, Thailand, Vietnam, Sri Lanka', startDate: new Date(2012, 1)},
          {name: 'Egypt', startDate: new Date(2012, 1)},
          {name: 'Switzerland, Liechtenstein, Austria, Germany', startDate: new Date(2012, 1)},
          {name: 'Spain, Italy, Scotland, UK', startDate: new Date(2012, 1)}
        ]
      },
      { groupName: 'Misc',
        hobbieGroup: [
          {name: 'Photography', startDate: new Date(2012, 1)}
        ]
      }
    ];
  }

  ngOnInit() {
  }

}
