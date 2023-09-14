import { Component, OnInit } from '@angular/core';
import { AccordionItem } from './components/accordion/accordion-item';
import { AccordionService } from './services/accordion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-everything';
  items: AccordionItem [] = [];
  
  constructor(private accordionService: AccordionService){

  }
  ngOnInit(): void {
    this.accordionService.getItems().subscribe(data =>{
      this.items = data;
    })
  }

}
