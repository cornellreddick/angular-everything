import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditCardFormater'
})
export class CreditCardFormaterPipe implements PipeTransform {

 public transform(cardNumber: string): string {

    if(!this.hasCorrectLength(cardNumber)){
      return "Invalid Card Length.";
    }

    if(!this.isAllNumbersPresent(cardNumber)){
      return "Invalid Characters.";
    }
    
    return this.formatCardNumber(cardNumber);
  }

  private isAllNumbersPresent(cardNumber: string): boolean {
    const stringNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const totalValidChar = cardNumber.split('').filter((char) => 
    stringNumbers.includes(char)).length;

    return totalValidChar === cardNumber.length;
    
  }

  private hasCorrectLength(cardNumber: string): boolean {
    const cardNumberLength = cardNumber.length;
    const isMasterDiscoverVisaCardLength = 16;
    const isAmericanExpree = 15;

    if(cardNumberLength === isAmericanExpree || 
      cardNumberLength === isMasterDiscoverVisaCardLength){
        return true;
      }

      return false;
  }

  private formatCardNumber(cardNumber: string): string{
    const parts = cardNumber.match(/[\s\S]{1,4}/g);
    return parts!.join('-');
  }
}
