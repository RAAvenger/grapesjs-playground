import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-generated-page',
  standalone: true,
  imports: [],
  templateUrl: './generated-page.component.html',
  styleUrl: './generated-page.component.scss'
})
export class GeneratedPageComponent implements OnInit {
  private httpClient: HttpClient;
  protected htmlContent: string = "";

  constructor(http: HttpClient) {
    this.httpClient = http;
  }

  ngOnInit(): void {
    this.httpClient.get('/assets/Home/index.html', {responseType: 'text'})
      .subscribe(data => this.htmlContent = data);
  }

}
