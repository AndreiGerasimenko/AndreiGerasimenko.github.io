import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from '../services/login-service.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnDestroy {

  skills: string[] = [
    'HTML5',
    'CSS, SASS, Flex-box', 'CSS Grid',
    'Adaptive/Responsive Web Design',
    'JavaScript (ES5, ES6, ES7)',
    'TypeScript',
    'Angular 8, 9, Rx.js',
    'Angular Material Design',
    'React (React Hooks)',
    'Material UI',
    'React-table library',
    'React-forms library',
    'React-query library',
    'React Redux'
  ]

  constructor(private loginService: LoginServiceService, private router: Router) { }

  ngOnDestroy(): void {
    this.loginService.logOut()
  }

  onlogout():void {
    this.router.navigate([''])
  }

}
