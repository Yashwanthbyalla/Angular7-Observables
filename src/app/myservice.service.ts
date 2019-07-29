import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor() { }

  private count = new BehaviorSubject<any>(0);
  currentCount = this.count.asObservable();

  getCount() {
    return this.currentCount;
  }
  updateCount(newCount) {
    this.count.next(newCount);
  }
}
