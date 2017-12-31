import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFireAuth } from 'angularfire2/auth';
// import * as firebase from 'firebase/app';
import { AuthService } from '../../../core/auth.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'babu-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit, OnDestroy {
  usersRef: Subscription;
  loginForm: FormGroup;

  constructor(public authService: AuthService, private router: Router,
    private fb: FormBuilder, private afdb: AngularFireDatabase) {
    this.createForm();
  }

  ngOnInit() {
    this.authService.currentUserObservable.subscribe(user => {
      if (user) {
        const uid = user.uid;
        // this.router.navigateByUrl('/pre-stay/authentication/register');
        const userRef = this.afdb.database.ref(`/star-residentz/users`);
        userRef.child(uid).set({email: user.email, name: user.displayName, uid: uid, photoURL: user.photoURL});
      }
    });
  }

  createForm() {
    // tslint:disable-next-line:max-line-length
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    this.loginForm = this.fb.group({
      email : [null, [
          Validators.required,
          // Validators.email
          Validators.pattern(emailRegex)
        ]
      ],
      password: [null, Validators.required]
    });
  }

  onSubmit(values) {
    console.log(values);
    const email = values.email;
    const password = values.password;
    this.usersRef = this.afdb.list('/star-residentz/users', ref => ref.orderByChild('email').equalTo(email))
      .valueChanges()
      .subscribe(users => {
        const user = users.find(x => x['password'] === password);
        if (user) {
          // alert(user['name']);
          this.router.navigateByUrl('/pre-stay/authentication/profile');
        }else {
          alert(`${email} is not registered`);
        }
      });
  }

  ngOnDestroy() {
    if (this.usersRef) {
      this.usersRef.unsubscribe();
    }
  }

}
