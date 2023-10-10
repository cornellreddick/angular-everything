import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-credit-card-input',
  templateUrl: './credit-card-input.component.html',
  styleUrls: ['./credit-card-input.component.scss']
})
export class CreditCardInputComponent {
  @Input() public creditCardNumber = '';
  private readonly = false;

  public get isReadOnly(){
    return this.readonly;
  }

  @Input() public set isReadOnly(value: boolean){
    
    this.readonly = value;
  }

}
