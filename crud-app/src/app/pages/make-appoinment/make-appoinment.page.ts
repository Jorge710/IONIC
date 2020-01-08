import { Component, OnInit } from '@angular/core';
//
import { Router} from '@angular/router';
import { AppintmentService} from '../../shared/appintment.service';
import { FormGroup, FormBuilder} from '@angular/forms';



@Component({
  selector: 'app-make-appoinment',
  templateUrl: './make-appoinment.page.html',
  styleUrls: ['./make-appoinment.page.scss'],
})
export class MakeAppoinmentPage implements OnInit {

  bookingForm: FormGroup;

  constructor(
    private aptService: AppintmentService,
    private router: Router, 
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.bookingForm = this.fb.group({
      name: [''],
      email: [''],
      mobile: ['']
    });
  }

  formSubmit(){
    if (!this.bookingForm.valid) {
      return false;
    } else {
      this.aptService.createBooking(this.bookingForm.value).then(res=>{
        console.log(res);
        this.bookingForm.reset();
        this.router.navigate(['/home']);
      })
      .catch(error=> console.log(error));
      
    }
  }

}
