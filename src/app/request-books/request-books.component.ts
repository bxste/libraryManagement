import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { Router } from '@angular/router';
import { Profile } from "src/app/models/profile";
import { ProfileService } from "src/app/services/profile.service";

@Component({
  selector: 'app-request-books',
  templateUrl: './request-books.component.html',
  styleUrls: ['./request-books.component.css']
})
export class RequestBooksComponent implements OnInit{
  form!: FormGroup;
  profile!: Profile;

  constructor(private profileService: ProfileService, private router: Router,) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(null),
      email: new FormControl(null),
      date: new FormControl(null),
      title: new FormControl(null),
      content: new FormControl(null),

    });
  }

  onSubmit() {
    if (this.form.invalid) {
      alert('Please fill all required fields');
      return;
    }
    
    this.profileService.addProfile(
      this.form.value.name,
      this.form.value.email,
      this.form.value.date,
      this.form.value.title,
      this.form.value.content,
    );
    
    this.router.navigate(['my-books']);
    this.form.reset();
  }
  
}