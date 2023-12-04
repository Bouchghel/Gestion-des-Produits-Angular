import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup } from '@angular/forms';
import { OnInit } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers: [AuthService]
})
export class LoginComponent implements OnInit {
  formLogin!: FormGroup;
  errorMessage : string = "";

  constructor(private fb: FormBuilder,private router : Router, private authservice: AuthService) {}
  ngOnInit(): void {
    this.formLogin = this.fb.group({
      username: this.fb.control(""),
      password: this.fb.control(""),

    })
  }

  handleLogin() {
    let username=this.formLogin.value.username;
    let password=this.formLogin.value.password;
    this.authservice.login(username,password).then(
      resp=>{
        this.router.navigateByUrl("/admin");  
      })
      .catch(error=>{
        this.errorMessage=error;
      })
  }

}
