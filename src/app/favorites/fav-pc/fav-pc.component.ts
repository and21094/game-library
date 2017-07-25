import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fav-pc',
  templateUrl: './fav-pc.component.html',
  styleUrls: ['./fav-pc.component.css','../favorites.component.css', '../../3dCases.css']
})
export class FavPcComponent implements OnInit {

  games:any = []

  constructor() { }

  ngOnInit() {

  	this.games = [{
			platform: 'pc',
			case: '../../assets/img/cases/pc/assassins-creed.png'  	  		
  	  	},
  	  	{
			platform: 'pc',
			case: '../../assets/img/cases/pc/battlefield-3.png'  	  		
  	  	},
  	  	{
			platform: 'pc',
			case: '../../assets/img/cases/pc/call-of-duty-black-ops.png'  	  		
  	  	},
  	  	{
			platform: 'pc',
			case: '../../assets/img/cases/pc/far-cry-3.png'  	  		
  	  	},
  	  	{
			platform: 'pc',
			case: '../../assets/img/cases/pc/grand-theft-auto-v.png'  	  		
  	  	},
  	  	{
			platform: 'pc',
			case: '../../assets/img/cases/pc/need-for-speed-shift.png'  	  		
  	  	},
  	  	{
			platform: 'pc',
			case: '../../assets/img/cases/pc/outlast.png'  	  		
  	  	},
  	  	{
			platform: 'pc',
			case: '../../assets/img/cases/pc/the-elder-scrolls-v-skyrim.png'  	  		
  	  	},
  	  	{
			platform: 'pc',
			case: '../../assets/img/cases/pc/the-witcher-3.png'  	  		
  	  	},
  	  	]

  }

  getStyle(position){
  	console.log(this.games);
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
