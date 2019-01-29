import { Component, OnInit } from '@angular/core';
import { Experience } from './experience';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent implements OnInit {

  experiences: Array<Experience>;

  constructor() {
      this.experiences = [
        {eStart: new Date(2016, 6), eEnd: new Date(2018, 9), eTitle: 'Project manager',
         eDesc: ['Elaboration of specifications.',
          'Customer project tracking from demand to development.',
          'Team management.',
          'Technology intelligence.',
          'Creation of the Quality service.',
          'Developement of functionnal tests for mobile apps and web apps.'],
         eFirm: 'LundiMatin', ePlace: 'Montpellier', eTypeContract: 'Apprenticeship'},
        {eEnd: new Date(2018, 9), eTitle: 'Master degree in computer science',
        eDesc: ['Engineer in computer science and robotics.',
        'Specialization : Smart objects and cloud.'],
        eFirm: 'IMERIR', ePlace: 'Perpignan', eSchool: true},
        {eStart: new Date(2016, 2), eEnd: new Date(2016, 4), eTitle: 'Wordpress website developper / Project manager',
         eDesc: ['Design websites.',
         'Writing of user and collaborators processes.',
         'Analysis and processing of the customer\'s request.',
         'Project manager.'],
         eFirm: 'QG&COM', ePlace: 'Montpellier'},
        {eStart: new Date(2015, 4), eEnd: new Date(2015, 6), eTitle: 'Physical measurements tech',
         eDesc: ['Verification of conformity of the products.',
          'Responsible of the acoustic part of the samples.',
          'Control of standards concerning mechanical and inflammable parts.'],
          ePlace: 'Aix-en-provence', eFirm: 'SGS'},
         {eEnd: new Date(2014, 6), eTitle: 'Technical degree in Instrumentation & Measurements',
         eDesc: ['Two years technical degree in Instrumentation  and Measurements',
         'Specialization :  Instrumental and analytical techniques.'],
         ePlace: 'Marseille', eFirm: 'IUT Saint-Jérôme', eSchool: true},
        {eStart: new Date(2014, 4), eEnd: new Date(2014, 6), eTitle: 'Physical measurements tech',
         eDesc: ['Acoustic and vibratory measurements on sites.',
          'Addes OpenVPN security for vibratory tools on site.',
          'Upholding for compliance of the equipment park of all agencies in France.'],
          ePlace: 'Gémenos', eFirm: 'Soldata Acoustic'}
      ];

    }

  ngOnInit() {
  }

}
