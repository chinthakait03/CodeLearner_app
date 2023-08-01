import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import {FormBuilder,FormGroup, Validators} from '@angular/forms';
import { ConnectService } from './connect.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
    
})

export class AppComponent implements OnInit  {


  dataForm:FormGroup
  data: any;
  

  all:any
  info: string = '';
  open :any
  array:any
  cardInif:any
  cardInifroot:any
  lessons:any[] = []
  
  constructor(private asd :FormBuilder, private connect:ConnectService ,private fb :FormBuilder){

    this.dataForm = this.fb.group({
  
 
      codebookNumber: ["", [Validators.required, Validators.maxLength(1), Validators.pattern(/^[1-5]+$/)  ]],
    });
    
  }
  formData: any;
  
  
  
  
  
  
  Nameform = this.asd.group({
    fullname:[ '', Validators.required],
    emailaddress:['', Validators.required]
  });

  get f(){
    return this.Nameform.controls
  }



  title = 'codeLearner';
  formVisible = true;
  bnm = false
  stbtn = false
  afbtn = false
 
  
  codebook : any
  
  
  ngOnInit(){
    AOS.init();
    
    const storedData = localStorage.getItem('formData');
    if (storedData) {
      this.formData = JSON.parse(storedData);
      this.afbtn = true
      
    }
    
    // setTimeout(() => {
    //   this.info = 'click the  button'; 
    // }, 5000);
    
    this.all = true;
    this.open = false
    this.cardInif = false;
    this.cardInifroot = false
    this.cardInif = true;
    

 
  
 }


  formModel: any = {};

  hide() {
    this.formVisible = false;
    this.bnm = true;
    this.stbtn =true;
    
  
    const fullName = this.Nameform.value.fullname;
    const email = this.Nameform.value.emailaddress;
  
    const formData = { fullName, email };
    localStorage.setItem('formData', JSON.stringify(formData));


   
  }

  allHide(){
this.all = false;
this.open =true
}


cardIn(){
 
  this.cardInif = false;
  this. cardInifroot = true
  const codebookNumber = this.dataForm.value.codebookNumber;
  console.log('Codebook Number:', codebookNumber);
    this.connect.getCodebookData(codebookNumber)
      .subscribe(
        (response) => {
          this.data = response;
        }
      );

      
  
}
getdata(){
  this.cardInif = true;
  this. cardInifroot = false
  
}




get m() {
  return this.dataForm.controls;
}







}