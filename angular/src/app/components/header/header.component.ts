import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  protected title: string = 'Task Tracker';
  protected showAddTask: boolean = false;
  protected subscription: Subscription = Subscription.EMPTY;

  constructor(protected uiService: UiService,
              protected router: Router){
    this.subscription = this.uiService
    .onToggle()
    .subscribe((value) => (this.showAddTask = value));
  }

  ngOnInit(){

  }

  public toggleAddTask(){
    this.uiService.toogleAddTask();
  }

  public hasRoute(route: string): boolean{
    return this.router.url === route;
  }

}
