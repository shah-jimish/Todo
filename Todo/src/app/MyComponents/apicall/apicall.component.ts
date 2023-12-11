import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-apicall',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './apicall.component.html',
  styleUrls: ['./apicall.component.css'],
})
export class ApicallComponent implements OnInit {
  title = 'Service in angular';
  users: any;
  httpClient = inject(HttpClient);
  ngOnInit(): void {
    this.fetData();
  }
  fetData() {
    this.httpClient
      .get('https://jsonplaceholder.typicode.com/todos/1')
      .subscribe((data) => {
        console.log(data);
        this.users = data;
      });
  }
}
