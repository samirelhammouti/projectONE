import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
	name:string;
	age:number; 
	e-mail:string;
	address:address

  constructor() { }
  	console.log('constructor ran ...');

  ngOnInit() {
  	console.log('ngOnInit ran ...');

  	this.name = 'HaioPai van Beeren'; 
  	this.age = 67 
  	this.address {
  		street: 'Königsallee',
  		city: 'Düsseldorf',
  		state: 'NRW '
  	} 
  }

}

interface address {
	street:string,
	city:string,
	state:string,
}
