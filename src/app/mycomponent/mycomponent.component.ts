import { Component, OnInit } from '@angular/core';
import { MyserviceService } from "src/app/myservice.service";

@Component({
  selector: 'app-mycomponent',
  templateUrl: './mycomponent.component.html',
  styleUrls: ['./mycomponent.component.scss']
})
export class MycomponentComponent implements OnInit {
  updatedCount: any;
  count = 0;
  constructor(private MyService: MyserviceService) { }

  ngOnInit() {
  }

updateCount() {
  this.count += 1;
  this.MyService.updateCount(this.count);
  this.MyService.getCount().subscribe(data =>{
    this.updatedCount = data;
  })
}
}
