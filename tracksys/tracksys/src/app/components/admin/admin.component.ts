import { Component } from '@angular/core';
import { Data } from 'src/app/interfaces/data';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  tickets: Data[] = []

  constructor(
    private homeService: HomeService
  ){}

  ngOnInit(){
    this.homeService.getAlltickets().subscribe((data) => {
      this.tickets = data;
    })
  }

}
