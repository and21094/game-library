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
  centerGame:string = ''
  imageOne:string = ''
  imageTwo:string = ''
  imageThree:string = ''
  imageFour:string = ''
  imageFive:string = ''
  imageSix:string = ''
  imageSeven:string = ''
  imageEight:string = ''
  imageNine:string = ''

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

        this.setStyles()
  }

  displayModal(){
  	var center = (<HTMLInputElement>document.getElementById('five'))
  	center.className = "five start-open five-left";
  	this.showModal = true
  	var modal = (<HTMLInputElement>document.getElementById('game-modal-black'))
    window.setTimeout(() =>{
    		modal.className = modal.className.concat(" open-case")
    		window.setTimeout(() =>{
    				modal.className = " game-modal-black game-modal-black-open"
            this.visibleTagName = false
    		},550);
    },550);
  }

  closeModal(){
    var center = (<HTMLInputElement>document.getElementById('five'))
	  var modal = (<HTMLInputElement>document.getElementById('game-modal-black'))
	  modal.className = modal.className.concat(" close-case")
    this.visibleTagName = true
      window.setTimeout(() =>{
    		modal.className = "game-modal-black"
    		this.showModal = false
        window.setTimeout(() =>{
          center.className = "five-left five"
          window.setTimeout(() =>{
            center.className = "five"
          },200);
        },400);
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
        window.setTimeout(() =>{
          moving.className = position+" stay1"
          center.className = "notransition five"
          this.imageFive = this.games[0].case
          this.centerGame = this.games[0].name
          this.visibleTagName = true;
          window.setTimeout(() =>{
            center.className = "five"
          },100);
          moving.className = "one"
        },550);
      break;
      case 'two':
        moving.className = moving.className.concat(" move2");
        center.className = "five stay-left five-left";
        window.setTimeout(() =>{
          moving.className = position+" stay2";
          center.className = "notransition five"
          this.imageFive = this.games[1].case
          this.centerGame = this.games[1].name
          this.visibleTagName = true;
          window.setTimeout(() =>{
            center.className = "five"
          },100);
          moving.className = "two"
        },550);
      break;
      case 'three':
        moving.className = moving.className.concat(" move3");
        center.className = "five stay-left five-left";
        window.setTimeout(() =>{
          moving.className = position+" stay3";
          center.className = "notransition five"
          this.imageFive = this.games[2].case
          this.centerGame = this.games[2].name
          this.visibleTagName = true;
          window.setTimeout(() =>{
            center.className = "five"
          },100);
          moving.className = "three"
        },550);
      break;
      case 'four':
        moving.className = moving.className.concat(" move4");
        center.className = "five stay-left five-left";
        window.setTimeout(() =>{
          moving.className = position+" stay4";
          center.className = "notransition five"
          this.imageFive = this.games[3].case
          this.centerGame = this.games[3].name
          this.visibleTagName = true;
          window.setTimeout(() =>{
            center.className = "five"
          },100);
          moving.className = "four"
        },550);

      break;
      // SECOND HALF
      case 'six':
        moving.className = moving.className.concat(" move6");
        center.className = "five stay-right";
        window.setTimeout(() =>{
          moving.className = position+" stay6";
          center.className = "notransition five"
          this.imageFive = this.games[5].case
          this.centerGame = this.games[5].name
          this.visibleTagName = true;
          window.setTimeout(() =>{
            center.className = "five"
          },100);
          moving.className = "six"
        },550);
      break;
      case 'seven':
        moving.className = moving.className.concat(" move7");
        center.className = "five stay-right";
        window.setTimeout(() =>{
          moving.className = position+" stay7";
          center.className = "notransition five"
          this.imageFive = this.games[6].case
          this.centerGame = this.games[6].name
          this.visibleTagName = true;
          window.setTimeout(() =>{
            center.className = "five"
          },100);
          moving.className = "seven"
        },550);
      break;
      case 'eight':
        moving.className = moving.className.concat(" move8");
        center.className = "five stay-right";
        window.setTimeout(() =>{
          moving.className = position+" stay8";
          center.className = "notransition five"
          this.imageFive = this.games[7].case
          this.centerGame = this.games[7].name
          this.visibleTagName = true;
          window.setTimeout(() =>{
            center.className = "five"
          },100);
          moving.className = "eight"
        },550);
      break;
      case 'nine':
        moving.className = moving.className.concat(" move9");
        center.className = "five stay-right";
        window.setTimeout(() =>{
          moving.className = position+" stay9";
          center.className = "notransition five"
          this.imageFive = this.games[8].case
          this.centerGame = this.games[8].name
          this.visibleTagName = true;
          window.setTimeout(() =>{
            center.className = "five"
          },100);
          moving.className = "nine"
        },550);
      break;
    }
  }

  setStyles(){
    for (var i = 0; i <= this.games.length ; i++) {
      switch (i){
      case 0:
        this.imageOne = this.games[i].case
      case 1:
        this.imageTwo = this.games[i].case
      case 2:
        this.imageThree = this.games[i].case
      case 3:
        this.imageFour = this.games[i].case
      case 4:
        this.imageFive = this.games[i].case
        this.centerGame = this.games[i].name
      case 5:
        this.imageSix = this.games[i].case
      case 6:
        this.imageSeven = this.games[i].case
      case 7:
        this.imageEight = this.games[i].case
      case 8:
        this.imageNine = this.games[i].case
      }
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
