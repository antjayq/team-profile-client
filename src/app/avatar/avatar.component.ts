import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService, UserDetails } from '../authentication.service';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css']
})
export class AvatarComponent implements OnInit {
  avatars: any;

  constructor(private http: HttpClient, private auth: AuthenticationService) { }

  ngOnInit() {
    this.http.get('http://localhost:3000/avatar').subscribe(data => {
      this.avatars = data;
    });
  }
}
