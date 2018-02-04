import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Params, Router} from '@angular/router';

import {UserService} from '../../shared/services/user.service';
import {User} from '../../shared/models/user.model';
import {MessageModel} from '../../shared/models/message.model';
import {AuthService} from '../../shared/services/auth.service';

@Component({
  selector: 'pvv-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  message: MessageModel;

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  private showMessage(message: MessageModel) {
    this.message = message;
    window.setTimeout(() => {
      this.message.text = '';
    }, 3000);
  }

  ngOnInit() {
    this.message = new MessageModel('danger', '');
    this.route.queryParams.subscribe((params: Params) => {
      if (params['nowCanLogin']) {
        this.showMessage({text: 'Теперь вы можите зайти в систему.', type: 'success'});
      }
    });
    this.form = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(5)])
    });
  }

  onSubmit() {
    const formData = this.form.value;

    this.userService.getUserByEmail(formData.email)
      .subscribe((user: User) => {
        if (user) {
          if (user.password === formData.password) {
            window.localStorage.setItem('user', JSON.stringify(user));
            this.authService.login();
            // this.router.navigate(['']);
          } else {
            this.showMessage({text: 'Пароль не верный!', type: 'danger'});
          }
        } else {
          this.showMessage({text: 'Такого пользователя не существует!', type: 'danger'});
        }

      });
  }
}
