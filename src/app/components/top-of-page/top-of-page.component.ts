import { Component, HostListener } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-top-of-page',
  templateUrl: './top-of-page.component.html',
  styleUrls: ['./top-of-page.component.scss']
})
export class TopOfPageComponent {

  public isShown = false;

  constructor(private viewportScroller: ViewportScroller){

  }

  @HostListener('window:scroll') onWindowScroll(){
    const yCoord = this.viewportScroller.getScrollPosition()[1];
    this.isShown = yCoord > 400;
  }

  public goToUp(): void {
    this.viewportScroller.scrollToPosition([0,0]);
  }
}
