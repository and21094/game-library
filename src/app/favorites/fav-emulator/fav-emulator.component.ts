import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fav-emulator',
  templateUrl: './fav-emulator.component.html',
  styleUrls: ['./fav-emulator.component.css', '../favorites.component.css']
})
export class FavEmulatorComponent implements OnInit {

  selected:string = ''

  constructor() { }

  ngOnInit() {
  }

  changeConsole(actual){
  	switch (actual) {
  		case "arcade":
  			this.selected = 'arcade'
  			break;
  		case "nes":
  			this.selected = 'nes'
  			break;
  		case "gb":
  			this.selected = 'gb'
  			break;
  		case "snes":
  			this.selected = 'snes'
  			break;
  		case "n64":
  			this.selected = 'n64'
  			break;
  		case "genesis":
  			this.selected = 'genesis'
  			break;
  		case "ps1":
  			this.selected = 'ps1'
  			break;
  		case "psp":
  			this.selected = 'psp'
  			break;
  		case "nds":
  			this.selected = 'nds'
  			break;
  		case "gba":
  			this.selected = 'gba'
  			break;
  		default:
  			this.selected = ''
  			break;
  	}
  	
  }
}
