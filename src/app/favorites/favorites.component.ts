import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  pc: string = 'hexagon-small inline tab-1 selected'
  emulator: string = 'hexagon-small inline tab-2'
  showPc: boolean = false

  constructor() { }

  ngOnInit() {
  }

  changeDisplay(actualDisplay) {
  	if (actualDisplay == 'pc' && this.pc.endsWith('tab-1')) {
  		this.showPc = !this.showPc
  		this.pc = 'hexagon-small inline tab-1 selected'
  		this.emulator = 'hexagon-small inline tab-2'
  	} else if (actualDisplay == 'emulator' && this.emulator.endsWith('tab-2')) {
  		this.showPc = !this.showPc
  		this.pc = 'hexagon-small inline tab-1'
  		this.emulator = 'hexagon-small inline tab-2 selected'
  	}
  	
  }

}
