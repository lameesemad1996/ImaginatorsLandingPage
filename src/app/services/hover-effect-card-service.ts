import { Injectable } from '@angular/core';
import { HoverEffectCard } from '../models/hoverEffectCard.model';

@Injectable({
  providedIn: 'root'
})
export class HoverEffectCardCardService {

  constructor() { }

  getElements()
  {
    let e1: HoverEffectCard = new HoverEffectCard();
    e1.firstText = "Saudi Travel";
    e1.secondText = "BRAND IDENTITY";
    e1.imgsrc = "../../assets/images/saudi-travel.png";
    
    let e2: HoverEffectCard = new HoverEffectCard();
    e2.firstText = "Imaginators web app UI design";
    e2.secondText = "UI DESIGN";
    e2.imgsrc = "../../assets/images/ui-design.png"
    
    let e3: HoverEffectCard = new HoverEffectCard();
    e3.firstText = "Starting a Startup Business";
    e3.secondText = " ";
    e3.imgsrc = "https://imginators.com/images/uploads/work/15-8-2018-23-16-10-780_3148_9d3c9e70-d038-4edb-b455-69a28d8cb9a2.jpg"
    
    let elements: HoverEffectCard[] = [];
    elements.push(e1);
    elements.push(e2);
    elements.push(e3);

    return elements;
  }

}
