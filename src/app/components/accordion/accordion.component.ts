import { Component, Input } from '@angular/core';
import { AccordionItem } from './accordion-item';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent {
  @Input() public items: AccordionItem[] = [];

  public toggle(item: AccordionItem): void {
    item.idExpanded = !item.idExpanded;
  }
}
