import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import {RestApiServiceService} from '../Service-Provider/rest-api-service.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
progress_bar=0;
completo=false;

data_form={
  "birthdate":"",
  "firstname":"",
  "lastname":"",
  "identification":""


}
year_birthdate:any;
month_birthdate:any;
day_birthdate:any;
fortmat_birthdate:any;
current_date:Date;
formatted_date:any;
users:any;
filter_users:any;


  constructor(
     public toastController: ToastController,
     public restService : RestApiServiceService
  ) {}

  aumentar_bar(){
     

     
      console.log(this.progress_bar);
      if(this.progress_bar<=70){
        this.progress_bar=this.progress_bar+40;

      }
      else  {
        this.progress_bar=100;
        this.completo=true;

        this.restService.postDataUser(this.data_form,'login').then((result) => {
          console.log(result);
        }, (err) => {
          console.log(err);
        });

      }
       console.log(this.data_form); 
      

      console.log()
  }//aumentar_bar


  identification(){
    // this.restService.getUsers()
    // .then(data => {
    //   this.users = JSON.parse(data['_body']);
   
    //   console.log(this.users);
    // });

    
    this.aumentar_bar();
  }//identification

  birthdate(){

    //FORMAT DATE FROM ION-INPUT
    this.year_birthdate=this.data_form.birthdate[0]+this.data_form.birthdate[1]+
    this.data_form.birthdate[2]+this.data_form.birthdate[3]

    this.month_birthdate=this.data_form.birthdate[5]+this.data_form.birthdate[6];

    this.day_birthdate=this.data_form.birthdate[8]+this.data_form.birthdate[9];

    this.fortmat_birthdate=this.day_birthdate + "-" + this.month_birthdate + "-" + this.year_birthdate;

    //GET CURRENT DATE AND FORMAT 
    this.current_date= new Date();
      var year =this.current_date.getFullYear().toString();
      var month = (this.current_date.getMonth()+1).toString();
      var day = this.current_date.getDate().toString();
      if(this.current_date.getMonth()<10){
        month='0'+month;    
      };

      if(this.current_date.getDate()<10){
        day='0'+day;
      };

      
      this.formatted_date= day + "-" + month + "-" + year;

     //convert strings to int for the calculator
     
     var intyear= parseInt(year);
     var intmonth = parseInt(month);
     var intday= parseInt(day);
     var intday_birthday = parseInt(this.day_birthdate);
     var intmonth_birthday = parseInt(this.month_birthdate);
     var intyear_birthday = parseInt (this.year_birthdate);


//Calculator Age
      var age = intyear-intyear_birthday;
      
      if(intmonth_birthday > intmonth ){
        age--;
      }
      else if(intmonth_birthday == intmonth){

              if(intday_birthday  > intday){
                  age--;
              }
      }

//Test age

if(age >= 18){
  this.data_form.birthdate= this.fortmat_birthdate;
  this.aumentar_bar();  
}
else {
  this.presentToast();
  }

    
  
    
  }//birthdate

  restart(){
    this.progress_bar=0;
    this.data_form.birthdate='';
    this.data_form.firstname='';
    this.data_form.identification='';
    this.data_form.lastname='';
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Tu edad es menor de la permitida.',
      duration: 2000
    });
    toast.present();
  }//presentToast


}//class
