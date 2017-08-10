import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fav-pc',
  templateUrl: './fav-pc.component.html',
  styleUrls: ['./fav-pc.component.css','../favorites.component.css', '../../3dCases.css']
})
export class FavPcComponent implements OnInit {

  games:any = []
  visibleTagName:boolean = true
  showModal:boolean = false

  constructor() { }

  ngOnInit() {

  	this.games = [{
			platform: 'pc',
			case: '../../assets/img/cases/pc/assassins-creed.png',
			name: 'Assassin\'s Creed'
  	  	},
  	  	{
			platform: 'pc',
			case: '../../assets/img/cases/pc/battlefield-3.png',
			name: 'Battlefield 3'
  	  	},
  	  	{
			platform: 'pc',
			case: '../../assets/img/cases/pc/call-of-duty-black-ops.png',
			name: 'Call of Duty Black Ops'
  	  	},
  	  	{
			platform: 'pc',
			case: '../../assets/img/cases/pc/far-cry-3.png',
			name: 'Far Cry 3'
  	  	},
  	  	{
			platform: 'pc',
			case: '../../assets/img/cases/pc/grand-theft-auto-v.png',
			name: 'Grand Theft Auto V'
  	  	},
  	  	{
			platform: 'pc',
			case: '../../assets/img/cases/pc/need-for-speed-shift.png',
			name: 'Need for Speed Shift'
  	  	},
  	  	{
			platform: 'pc',
			case: '../../assets/img/cases/pc/outlast.png',
			name: 'Outlast'
  	  	},
  	  	{
			platform: 'pc',
			case: '../../assets/img/cases/pc/the-elder-scrolls-v-skyrim.png',
			name: 'The Elder Scrolls V: Skyrim'
  	  	},
  	  	{
			platform: 'pc',
			case: '../../assets/img/cases/pc/the-witcher-3.png',
			name: 'The Witcher 3: Wild Hunt'
  	  	},
  	  	]

  }

  displayModal(){
  	var center = (<HTMLInputElement>document.getElementById('five'))
  	center.className = "five start-open";
  	this.showModal = true
  	var modal = (<HTMLInputElement>document.getElementById('game-modal-black'))
    window.setTimeout(function(){
    		modal.className = modal.className.concat(" open-case")
    		window.setTimeout(function(){
    				modal.className = " game-modal-black game-modal-black-open"
    		},550);
    },550);  
  }

  closeModal(){

	var modal = (<HTMLInputElement>document.getElementById('game-modal-black'))
	modal.className = modal.className.concat(" close-case")
    window.setTimeout(function(){
    		modal.className = " game-modal-black"
    		this.showModal = false
    },550);
  }
//var divToChange = (<HTMLInputElement>document.getElementById(elementId));

//to change the class we would do.
//divToChange.className = "newclass";

//if we want to add multiple classes, we could just do
//divToChange.className = "newclass secondclass thirldclass";

//if we want to add a class name without removing the class present before, we do:
//divToChange.className = divToChange.className.concat(" addedwit");

//to change the background color of such an element, we would also have to do.
//divToChange.style.background-color = "red";

//to change the color of such an element would need
//divToChange.style.color = "white";

//Which we would agree is a bit more stressful than what angular ships with us.

  move(position){
  	var moving = (<HTMLInputElement>document.getElementById(position));
  	var center = (<HTMLInputElement>document.getElementById('five'));
  	this.visibleTagName = false;
  	switch (position) {
      case 'one':
        moving.className = moving.className.concat(" move1");
        center.className = "five stay-left five-left";
        window.setTimeout(function(){
          moving.className = position+" stay1"
        },550);
      break;
      case 'two':
        moving.className = moving.className.concat(" move2");
        center.className = "five stay-left five-left";
        window.setTimeout(function(){
          moving.className = position+" stay2";
        },550);
      break;
      case 'three':
        moving.className = moving.className.concat(" move3");
        center.className = "five stay-left five-left";
        window.setTimeout(function(){
          moving.className = position+" stay3";
        },550);
      break;
      case 'four':
        moving.className = moving.className.concat(" move4");
        center.className = "five stay-left five-left";
        window.setTimeout(function(){
          moving.className = position+" stay4";
        },550);

      break;
      // SECOND HALF
      case 'six':
        moving.className = moving.className.concat(" move6");
        center.className = "five stay-right";
        window.setTimeout(function(){
          moving.className = position+" stay6";
        },550);
      break;
      case 'seven':
        moving.className = moving.className.concat(" move7");
        center.className = "five stay-right";
        window.setTimeout(function(){
          moving.className = position+" stay7";
        },550);
      break;
      case 'eight':
        moving.className = moving.className.concat(" move8");
        center.className = "five stay-right";
        window.setTimeout(function(){
          moving.className = position+" stay8";
        },550);
      break;
      case 'nine':
        moving.className = moving.className.concat(" move9");
        center.className = "five stay-right";
        window.setTimeout(function(){
          moving.className = position+" stay9";
        },550);
      break;
    }
  }

  getStyle(position){
  	switch (position){
  		case 0:
  			return this.games[position].case
  		case 1:
  			return this.games[position].case
  		case 2:
  			return this.games[position].case
  		case 3:
  			return this.games[position].case
  		case 4:
  			return this.games[position].case
  		case 5:
  			return this.games[position].case
  		case 6:
  			return this.games[position].case
  		case 7:
  			return this.games[position].case
  		case 8:
  			return this.games[position].case
  	}

  }

}
