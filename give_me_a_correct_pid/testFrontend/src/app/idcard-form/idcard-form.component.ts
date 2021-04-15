import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-idcard-form',
  templateUrl: './idcard-form.component.html',
  styleUrls: ['./idcard-form.component.scss'],
})
export class IDCardFormComponent implements OnInit {
  IDcardForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.IDcardForm = this.formBuilder.group({
      IDcard: [
        '',
        [
          Validators.required,
          Validators.pattern('^[0-9]*$'),
          Validators.minLength(13),
        ],
      ],
    });
  }

  ngOnInit(): void {}

  get f() {
    return this.IDcardForm.controls;
  }

  submittedIDcard() {
    this.submitted = true;
    if (this.IDcardForm.invalid) {
      Swal.fire({
        icon: 'error',
        text: 'unhappy path',
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }
    let IDcard = {
      c_IDcard: this.IDcardForm.get('IDcard')?.value,
    };
    if (this.IDcardForm) {
      Swal.fire({
        icon: 'success',
        text: 'happy path',
        showConfirmButton: false,
        timer: 1500,
      });
      this.router.navigate(['/idcard2'], {
        queryParams: {
          IDcard: JSON.stringify(IDcard),
        },
      });
      console.log(IDcard);
    }
  }
}
