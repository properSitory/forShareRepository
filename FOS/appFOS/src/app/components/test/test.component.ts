import { Component, OnInit } from '@angular/core';
import { SectorsService } from '../../services/sectors/sectors.service';
import { TrainingsService } from '../../services/trainings/trainings.service';
import { YearsService } from '../../services/years/years.service';
import { GroupsService } from '../../services/groups/groups.service';
import { LearnersService } from '../../services/learners/learners.service';
import { StatesService } from '../../services/states/states.service';
import { UsersService } from '../../services/users/users.service';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  allSectors: any;
  allTrainings: any;
  allYears: any;
  allGroups: any;
  allLearners: any;
  allStates: any;
  allUsers: any;

  errorMessage: string;
  errors: string = '';

  constructor(private sectorsServ: SectorsService, private trainingsServ: TrainingsService, private yearsService: YearsService, private groupsService: GroupsService, private learnersService: LearnersService, private statesService: StatesService, private usersService: UsersService) { }

  ngOnInit(): void {}

  getSectors() {
    this.sectorsServ.getSectors()
      .subscribe( data => {
          this.allSectors = data;
        }),
        error => this.errorMessage = <any>error;
  }

  getTrainings() {
    this.trainingsServ.getTrainings()
      .subscribe( data => {
          this.allTrainings = data;
        }),
        error => this.errorMessage = <any>error;
  }

  getYears() {
    this.yearsService.getYears()
      .subscribe( data => {
          this.allYears = data;
        }),
        error => this.errorMessage = <any>error;
  }

  getGroups() {
    this.groupsService.getGroups()
      .subscribe( data => {
          this.allGroups = data;
        }),
        error => this.errorMessage = <any>error;
  }

  getLearners() {
    this.learnersService.getLearners()
      .subscribe( data => {
          this.allLearners = data;
        }),
        error => this.errorMessage = <any>error;
  }

  getStates() {
    this.statesService.getStates()
      .subscribe( data => {
          this.allStates = data;
        }),
        error => this.errorMessage = <any>error;
  }

  getUsers() {
    this.usersService.getUsers()
      .subscribe( data => {
          this.allUsers = data;
        }),
        error => this.errorMessage = <any>error;
  }
}
