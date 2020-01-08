import { Injectable } from '@angular/core';
//
import { Appointment } from './Apointment';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class AppintmentService {

  bookingListRef: AngularFireList<any>;
  bookingRef: AngularFireObject<any>;
  constructor(private db: AngularFireDatabase) { }

  //create
  createBooking(apt: Appointment){
    return this.bookingListRef.push({
      name: apt.name,
      email: apt.email,
      mobile: apt.mobile
    });
  }

  //obtener un elemento
  getBooking(id: string){
    this.bookingRef = this.db.object('/appointment/' + id);
    return this.bookingRef;
  }

  //obtener una lista
  getBookinglist(){
    this.bookingListRef = this.db.list('/appointment');
    return this.bookingRef;
  }

  //actualizar
  updateBooking(id, apt:Appointment){
    return this.bookingRef.update({
      name: apt.name,
      email: apt.email,
      mobile: apt.mobile
    });
  }

  //eliminar

  deleteBooking(id: string){
    this.bookingRef = this.db.object('/appointment/' +id);
    this.bookingRef.remove();
  }
}
