import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AccordionItem } from '../components/accordion/accordion-item';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccordionService {
  API = "http://localhost:3004/items";

  constructor(private http: HttpClient) { }

  //Retrieve items from db.json 
  getItems(): Observable<AccordionItem[]>{
    return this.http.get<AccordionItem[]>(this.API);
  }
}
