import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Http } from '@angular/http';
import { DataService } from '../services/data.service';
import { ToastComponent } from '../shared/toast/toast.component';


declare var $: any;
@Component({
  selector: 'app-weather',
  styleUrls: ['./weather.component.css'],
  templateUrl: './weather.component.html',
})
export class WeatherComponent implements OnInit {

   loading = false;
  user = {};
  form: FormGroup;
  loginForm: FormGroup;
  username = new FormControl('', Validators.required);
  password = new FormControl('', Validators.required);
  body: String;

  constructor(private http: Http,
              private dataService: DataService,
              public toast: ToastComponent,
              private formBuilder: FormBuilder) {}

  ngOnInit(): void {

    //this.authenticationService.logout();

        this.loginForm = this.formBuilder.group({
      username: this.username,
      password: this.password,
    });
      }


login() {
   this.loading = true;
        this.dataService.login(this.loginForm.value.username, this.loginForm.value.password)
            .subscribe(
                data => {
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    this.loading = false;
                });
    }


}
