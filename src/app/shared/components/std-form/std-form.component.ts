import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Istd } from '../../models/table';

@Component({
  selector: 'app-std-form',
  templateUrl: './std-form.component.html',
  styleUrls: ['./std-form.component.scss']
})
export class StdFormComponent implements OnInit {

  generateUuid() {
    return String('xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx').replace(
      /[xy]/g,
      (character) => {
        const random = (Math.random() * 16) | 0;
        const value = character === 'x' ? random : (random & 0x3) | 0x8;

        return value.toString(16);
      }
    );
  }

    // create ViewChild properties with @ViewChild decorator
    @ViewChild('firstname') firstname!: ElementRef;
    @ViewChild('lastname') lastname!: ElementRef;
    @ViewChild('contact') contact!: ElementRef;
    @ViewChild('email') email!: ElementRef;

     // create student data properties with @Output decorator
    @Output() stddata: EventEmitter<Istd> = new EventEmitter<Istd>();

  constructor() {}
  ngOnInit(): void {
  }

  addStddata() {
    //create a new object
    let newStd: Istd = {
      fname: this.firstname.nativeElement.value,
      lname: this.lastname.nativeElement.value,
      email: this.email.nativeElement.value,
      contact: this.contact.nativeElement.value,
      stdId: this.generateUuid(),
    };
    //log the new object
    console.log(newStd);
    //clear the input fields
    this.firstname.nativeElement.value = '';
    this.lastname.nativeElement.value = '';
    this.email.nativeElement.value = '';
    this.contact.nativeElement.value = '';

    //emit the new object
    this.stddata.emit(newStd);
  }

}
