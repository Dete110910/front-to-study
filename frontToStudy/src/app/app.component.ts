import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontToStudy';

  backEndInfo: any;
  numberInfo: any;
  otherContainerFound: boolean = true;
  apiFound: boolean = true;

  constructor(private http: HttpClient) {
    this.backEndInfo = {author: " ", status: "stopped", hostname: " ", date: " "};
    this.numberInfo = {author: " ", status: "stopped", hostname: " ", date: " "}
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    this.http.get('http://localhost:8080/api/backEndInfo', {headers: headers}).subscribe(data => {
      this.backEndInfo = data;
      console.log(data);
    }, error => {
      console.log("No se puedo hacer la petición al primer servidor");
    });

    this.http.get('http://address2:port2/api/number', {headers: headers}).subscribe(data => {
      console.log(data);
      this.numberInfo = data;
    }, error => {
      console.log("No se puedo hacer la petición al segundo servidor");
    });

    if(!this.backEndInfo){
    }

  }


}
