import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as CryptoJS from 'crypto-js';


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  constructor(private http: HttpClient) { }

  onSubmit(data: any): void {
    /*this.http.post('http://localhost:8080/api/users', data).subscribe(response => {
      console.log('Response:', response);
    });*/


    /*this.http.get('http://localhost:9090/api/v1/get/trandetails').subscribe(response => {
      console.log('Response:', response);
    });*/

    let payload;

    this.http.get('http://localhost:9090/api/getHeros/1').subscribe(response => {
      console.log('Response object --------->:');
      
      const payloadString = JSON.stringify(response); // Convert payload to string

      payload = response;

      // Add a salt to the payload
      const salt = 'your-salt-value'; // Change this to your actual salt value
      const saltedPayloadString = payloadString + salt;

      // Hash the salted payload
      const hash = CryptoJS.SHA256(saltedPayloadString).toString();
      console.log('Hash:', hash);

      console.log(response);


      console.log('------------- Before making post call ----------');
      console.log(payload)
      this.http.post('http://localhost:9090/api/getHero', payload).subscribe(response => {
        console.log('Response object --------->:');
        console.log(response);
      });
      
      console.log('------------- After making post call ----------');
      
    });

    
    
  }
}
