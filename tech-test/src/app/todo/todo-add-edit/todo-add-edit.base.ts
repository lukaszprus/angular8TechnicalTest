import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

export abstract class TodoAddEditBase {
  form: FormGroup;

  abstract getObservable(): Observable<any>;

  constructor(fb: FormBuilder, private router: Router) {
    this.form = fb.group({
      label: ['', Validators.required],
      description: [''],
      category: ['']
    });
  }

  submit() {
    this.getObservable().subscribe({
      complete: () => {
        this.router.navigate(['..']);
      }
    });
  }
}
