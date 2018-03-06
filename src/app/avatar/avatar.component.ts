import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService, UserDetails } from '../authentication.service';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css']
})
export class AvatarComponent implements OnInit {
  avatar: any;

  constructor(private http: HttpClient, private auth: AuthenticationService) { }

  ngOnInit() {
    this.http.get('/api/avatar').subscribe(data => {
      this.avatar = data;
    });
  }
}
