import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import * as firebase from 'firebase';

@Component({
  selector: 'babu-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, OnDestroy {
  users: any;
  usersRef: any;
  registerForm: FormGroup;

  constructor(private afdb: AngularFireDatabase, private router: Router, private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    // tslint:disable-next-line:max-line-length
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    this.registerForm = this.fb.group({
      name: [null, Validators.required],
      email: [null, [
          Validators.required,
          // Validators.email,
          Validators.pattern(emailRegex)
        ]
      ],
      password: [null, [
          Validators.required,
          Validators.minLength(6)
        ]
      ]
    });
  }


  ngOnInit() {
    // this.usersRef = this.afdb.list('/star-residentz/users');
    // this.users = this.usersRef.snapshotChanges().map(changes => {
    //   return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    // });
  }

  onSubmit(values) {
    const uid = this.afdb.createPushId();

    const email = values.email;
    const password = values.password;
    const name = values.name;

    // const usersRef = this.afdb.list(`/star-residentz/users`);
    // usersRef.push({email: email, password: password, name: name });

    this.usersRef = this.afdb.list('/star-residentz/users', ref => ref.orderByChild('email').equalTo(email)).valueChanges();

    this.usersRef.subscribe(users => {

        const usersRef = this.afdb.database.ref('/star-residentz/users');
        usersRef.child(uid).set({email: email, password: password, name: name, uid: uid});

        this.registerForm.reset();
        // const registered = users.length === 0 ? true : false;
        // if (registered) {
        //   const usersRef = this.afdb.database.ref('/star-residentz/users');
        //   usersRef.child(uid).set({email: email, password: password, name: name, uid: uid});
        // }else {
        //   alert(`${email} is already registered`);
        // }
        // this.registerForm.reset();
      });

  }

  ngOnDestroy() {
    if (this.usersRef) {
      this.usersRef.unsubscribe();
    }
  }
}
