import { Component, OnInit } from '@angular/core';
import { AccordionService } from 'src/app/services/accordion.service';
import { AccordionItem } from '../accordion/accordion-item';

@Component({
  selector: 'app-component-documentation',
  templateUrl: './component-documentation.component.html',
  styleUrls: ['./component-documentation.component.scss']
})
export class ComponentDocumentationComponent implements OnInit {

  title = 'angular-everything';
  items: AccordionItem [] = [];
  public progressValue = 25;

  constructor(private accordionService: AccordionService){
    
  }
  ngOnInit(): void {
    this.accordionService.getItems().subscribe(data =>{
      this.items = data;
    })
  }


}
