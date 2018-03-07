import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-avatar-detail',
  templateUrl: './avatar-detail.component.html',
  styleUrls: ['./avatar-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AvatarDetailComponent implements OnInit {
  avatar = {};

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.getAvatarDetail(this.route.snapshot.params['id']);
  }

  getAvatarDetail(id) {
    this.http.get('http://localhost:3000/avatar/'+id).subscribe(data => {
      this.avatar = data;
    });
  }

  deleteAvatar(id) {
    this.http.delete('http://localhost:3000/avatar/'+id)
      .subscribe(res => {
          this.router.navigate(['/avatar']);
        }, (err) => {
          console.log(err);
        }
      );
  }
}
