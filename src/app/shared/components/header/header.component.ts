import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  sideBarOpen:boolean = false;
@Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter(); 

  constructor() { }

  ngOnInit(): void {
  
  }

  toggleSideBar(){
    this.toggleSideBarForMe.emit(this.sideBarOpen);
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  
  }

}
