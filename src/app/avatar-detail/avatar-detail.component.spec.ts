import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarDetailComponent } from './avatar-detail.component';

describe('AvatarDetailComponent', () => {
  let component: AvatarDetailComponent;
  let fixture: ComponentFixture<AvatarDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvatarDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvatarDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
