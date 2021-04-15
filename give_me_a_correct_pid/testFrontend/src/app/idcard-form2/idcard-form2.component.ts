import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-idcard-form2',
  templateUrl: './idcard-form2.component.html',
  styleUrls: ['./idcard-form2.component.scss'],
})
export class IdcardForm2Component implements OnInit {
  IDcardForm!: FormGroup;
  submitted = false;
  qurreyparam: any;

  constructor(
    private formBuilder: FormBuilder,
    private activerouter: ActivatedRoute
  ) {
    // Method การใช้ Validators ของ registerForm
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

  ngOnInit(): void {
    this.activerouter.queryParams.subscribe((param) => {
      this.qurreyparam = JSON.parse(param['IDcard']);
      console.log(this.qurreyparam);
    });
  }

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
    let IDcardData = {
      c_IDcard: this.IDcardForm.get('IDcard')?.value,
    };
    if (this.IDcardForm) {
      Swal.fire({
        icon: 'success',
        text: 'Success',
        showConfirmButton: false,
        timer: 1500,
      });
    }
  }
}
