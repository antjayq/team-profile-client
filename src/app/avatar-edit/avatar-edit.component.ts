import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-avatar-edit',
  templateUrl: './avatar-edit.component.html',
  styleUrls: ['./avatar-edit.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class AvatarEditComponent implements OnInit {
  avatar = {};

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getAvatar(this.route.snapshot.params['id']);
  }

  getAvatar(id) {
    this.http.get('http://localhost:3000/avatar/'+id).subscribe(data => {
      this.avatar = data;
    });
  }

  updateAvatar(id, data) {
    this.http.put('http://localhost:3000/avatar/'+id, data)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/avatar-detail', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }
}
