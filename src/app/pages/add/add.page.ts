import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {

  times: any = 3;
  day: any = 7;

  dynamicForm!: FormGroup;

  submitted = false;
  constructor(public atrCtrl: AlertController,private formBuilder: FormBuilder) { }

  ngOnInit() {
    document.getElementById('period').textContent = "วันละ "+ this.times + " ครั้ง เป็นเวลา "+ this.day + " วัน"

    this.dynamicForm = this.formBuilder.group({

      numberOfTickets: ["", Validators.required],

      tickets: new FormArray([])
    });
  }

  async onClickPeriod(){
    const alert = await this.atrCtrl.create({
      cssClass: 'my-custom-class',
      header: 'ระยะเวลา',
      message: 'กรุณากรอกระยะเวลาในการกินยา',
         inputs: [
        {
          name: 'times',
          placeholder: 'จำนวนครั้ง (ต่อวัน)',
          type: 'number'
        },
        {
          name: 'day',
          placeholder: 'จำนวนวัน',
          type: 'number'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('You Clicked on Cancel');
          }
        },
        {
          text: 'OK',
          handler: data => {
            if (data.day == null) {
              // login is valid
            } else {
              // invalid login
              return false;
            }
          }
        }
      ]
    });

    await alert.present();

    // let alert = this.atrCtrl.create({
    //   header: 'Prompt Alert',
    //   subHeader: 'Enter information requested',
    //   inputs: [
    //     {
    //       name: 'username',
    //       placeholder: 'Enter Username'
    //     },
    //     {
    //       name: 'password',
    //       placeholder: 'Enter Password',
    //       type: 'password'
    //     }
    //   ],
    //   buttons: [
    //     {
    //       text: 'Cancel',
    //       role: 'cancel',
    //       handler: data => {
    //         console.log('You Clicked on Cancel');
    //       }
    //     },
    //     // {
    //     //   text: 'Login',
    //     //   handler: data => {
    //     //     if (User.isValid(data.username, data.password)) {
    //     //       // login is valid
    //     //     } else {
    //     //       // invalid login
    //     //       return false;
    //     //     }
    //     //   }
    //     // }
    //   ]
    // });
    // await alert.present();
  }

  typeChanged(ev){
    console.log(ev);
    
  }

  get f() { return this.dynamicForm.controls; }

  get t() { return this.f.tickets as FormArray; }

  get ticketFormGroups() { return this.t.controls as FormGroup[]; }

  onChangeTickets(e) {

    const numberOfTickets = this.times;

    if (this.t.length < numberOfTickets) {

      for (let i = this.t.length; i < numberOfTickets; i++) {

        this.t.push(this.formBuilder.group({

          name: ["", Validators.required],

          email: [" ", [Validators.required, Validators.email]]

        }));

      }

    } else {

      for (let i1 = this.t.length; i1 >= numberOfTickets; i1-- ) {

        this.t.removeAt(i1);

      }

    }

  }

  onSubmit() {

    this.submitted = true;

    if (this.dynamicForm.invalid) {

      return;

    }

    alert("SUCCESS!! :-)\n\n" + JSON.stringify(this.dynamicForm.value, null, 3));

  }

  onReset() {

    this.submitted = false;

    this.dynamicForm.reset();

    this.t.clear();

  }

  onClear() {

    this.submitted = false;

    this.t.reset();

  }

}
