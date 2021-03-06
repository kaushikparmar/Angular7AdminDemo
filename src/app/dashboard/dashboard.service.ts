import { Injectable, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private injector: Injector) {
  }

  public getDashboardDetails() {
    const httpClient = this.injector.get(HttpClient);
    return httpClient.get(`${environment.origin}/dashboard/data`);
  }

}
