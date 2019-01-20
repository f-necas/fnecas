import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  progSkills: Array<any>;
  skills: any;

  constructor() {
    this.progSkills = [
      [{'c++': 'cplusplus'}, {'java': 'java'}, {'python': 'python'}],
      [{'node.js': 'nodejs'}, {'angular': 'angularjs'}, {'wordpress': 'wordpress'}],
      [{'html5': 'html5'}, {'css3': 'css3'}, {'scss': 'sass'} , {'javascript': 'javascript'}, {'typescript': 'typescript'}]
    ];

    this.skills = {'sk': {
      'Management': [
        'Founder of Phi Photographie Association',
        'Team manager of Quality Service of LundiMatin',
        'Freelancer in web development'
      ],
      'Electronic': [
        'Arduino : creation of an hexapod robot',
        'RPi & SPI interface for eink screen interaction'
      ],
      'Others': [
        'Design : Photoshop, Lightroom, Premiere Pro',
        'CAD: Solidworks'
      ]
    }};
  }

  ngOnInit() {
  }

  addClass(event): void {
    event.target.className += ' colored';
  }

  removeClass(event): void {
    event.target.className = event.target.className.replace(' colored', '');
  }

}

