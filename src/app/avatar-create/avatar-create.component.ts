import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-avatar-create',
  templateUrl: './avatar-create.component.html',
  styleUrls: ['./avatar-create.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AvatarCreateComponent implements OnInit {
  avatar = {};

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  saveAvatar() {
    this.http.post('http://localhost:3000/avatar', this.avatar)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/avatar-detail', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
