import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fav-pc',
  templateUrl: './fav-pc.component.html',
  styleUrls: ['./fav-pc.component.css','../favorites.component.css', '../../3dCases.css']
})
export class FavPcComponent implements OnInit {

  games:any = []
  gamesRight:any = []
  visibleTagName:boolean = true
  showModal:boolean = false
  centerGame:string = ''
  modal:string = '../../assets/img/black-case-open.png'
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
			name: 'Assassin\'s Creed',
      modal: ''
  	  	},
  	  	{
			platform: 'pc',
			case: '../../assets/img/cases/pc/battlefield-3.png',
			name: 'Battlefield 3',
      modal: ''
  	  	},
  	  	{
			platform: 'pc',
			case: '../../assets/img/cases/pc/call-of-duty-black-ops.png',
			name: 'Call of Duty Black Ops',
      modal: ''
  	  	},
  	  	{
			platform: 'pc',
			case: '../../assets/img/cases/pc/far-cry-3.png',
			name: 'Far Cry 3',
      modal: ''
  	  	},
  	  	{
			platform: 'pc',
			case: '../../assets/img/cases/pc/grand-theft-auto-v.png',
			name: 'Grand Theft Auto V',
      modal: '../../assets/img/black-case-open-gta.png'
  	  	},
  	  	{
			platform: 'pc',
			case: '../../assets/img/cases/pc/need-for-speed-shift.png',
			name: 'Need for Speed Shift',
      modal: ''
  	  	},
  	  	{
			platform: 'pc',
			case: '../../assets/img/cases/pc/outlast.png',
			name: 'Outlast',
      modal: ''
  	  	},
  	  	{
			platform: 'pc',
			case: '../../assets/img/cases/pc/the-elder-scrolls-v-skyrim.png',
			name: 'The Elder Scrolls V: Skyrim',
      modal: ''
  	  	},
  	  	{
			platform: 'pc',
			case: '../../assets/img/cases/pc/the-witcher-3.png',
			name: 'The Witcher 3: Wild Hunt',
      modal: ''
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

  moveLeft(moving, position, next, animation){

    var center = (<HTMLInputElement>document.getElementById('five'));
    var six = (<HTMLInputElement>document.getElementById('six'));
    var seven = (<HTMLInputElement>document.getElementById('seven'));
    var eight = (<HTMLInputElement>document.getElementById('eight'));
    var nine = (<HTMLInputElement>document.getElementById('nine'));

    moving.className = moving.className.concat(" move"+animation);
    center.className = "five stay-left five-left";

    window.setTimeout(() =>{
      var tempGame = this.games[next]
      this.games.splice(next,1)
      moving.className = position+" stay"+animation
      center.className = "notransition five"
      this.visibleTagName = true;

      this.gamesRight.push(this.games[0])
      this.games.splice(0,1)
      this.games.unshift(tempGame)

      moving.className = position+" notransition"

      this.setStyles()

      window.setTimeout(() =>{
        center.className = "five"
        moving.className = position
      },100);

    },550);

    this.modal = this.games[0].modal ? this.games[0].modal : this.modal

    window.setTimeout(() =>{
        this.imageSix = this.games[0].case

        switch (this.gamesRight.length) {
          case 0:
            six.style.visibility = 'visible'
            break;
          case 1:
            seven.style.visibility = 'visible'
            this.imageSeven = this.gamesRight[0].case
            break;
          case 2:
            eight.style.visibility = 'visible'
            this.imageSeven = this.gamesRight[1].case
            this.imageEight = this.gamesRight[0].case
            break;
          case 3:
            nine.style.visibility = 'visible'
            this.imageSeven = this.gamesRight[2].case
            this.imageEight = this.gamesRight[1].case
            this.imageNine = this.gamesRight[0].case
            break;
        }

        if (this.gamesRight.length > 3) {
            this.imageSeven = this.gamesRight[this.gamesRight.length-1].case
            this.imageEight = this.gamesRight[this.gamesRight.length-2].case
            this.imageNine = this.gamesRight[this.gamesRight.length-3].case
        }
      },100);

  }

  move(position){
  	var moving = (<HTMLInputElement>document.getElementById(position));
    var center = (<HTMLInputElement>document.getElementById('five'));
  	this.visibleTagName = false;
  	switch (position) {
      case 'one':
        this.moveLeft(moving, position, 4, 1)
      break;
      case 'two':
        this.moveLeft(moving, position, 3, 2)
      break;
      case 'three':
        this.moveLeft(moving, position, 2, 3)
      break;
      case 'four':
        this.moveLeft(moving, position, 1, 4)
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
          moving.style.zIndex = "4"
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

    this.imageFive = this.games[0].case
    this.centerGame = this.games[0].name

    var box4 = (<HTMLInputElement>document.getElementById('four'))
    var box3 = (<HTMLInputElement>document.getElementById('three'))
    var box2 = (<HTMLInputElement>document.getElementById('two'))
    var box1 = (<HTMLInputElement>document.getElementById('one'))

    // case 4
    if (this.games.length-1 >= 1) {
      this.imageFour = this.games[1].case
      box4.className = box4.className.concat(" notransition");
      window.setTimeout(() =>{
        box4.className = "four"
      },100);
    } else {
      box4.className = 'notransition'
      box4.style.visibility = 'hidden'
      this.imageFour = ''
      window.setTimeout(() =>{
        box4.className = "four"
      },100);
      var rightButton = (<HTMLInputElement>document.getElementById('move-right-button'))
      rightButton.style.pointerEvents = 'none'
      rightButton.className = rightButton.className.concat(' selected')
    }

    // case 3
    if (this.games.length-1 >= 2) {
      this.imageThree = this.games[2].case
      box3.className = box3.className.concat(" notransition");
      window.setTimeout(() =>{
        box3.className = "three"
      },100);
    } else {
      box3.className = 'notransition'
      box3.style.visibility = 'hidden'
      this.imageThree = ''
      window.setTimeout(() =>{
        box3.className = "three"
      },100);
    }

    // case 2
    if (this.games.length-1 >= 3) {
      this.imageTwo = this.games[3].case
      box2.className = box2.className.concat(" notransition");
      window.setTimeout(() =>{
        box2.className = "two"
      },100);
    } else {
      box2.className = 'notransition'
      box2.style.visibility = 'hidden'
      this.imageTwo = ''
      window.setTimeout(() =>{
        box2.className = "two"
      },100);
    }

    // case 1
    if (this.games.length-1 >= 4) {
      this.imageOne = this.games[4].case
      box1.className = box1.className.concat(" notransition");
      window.setTimeout(() =>{
        box1.className = "one"
      },100);
    } else {
      box1.className = 'notransition'
      box1.style.visibility = 'hidden'
      this.imageOne = ''
      window.setTimeout(() =>{
        box1.className = "one"
      },100);
    }

  }

}
