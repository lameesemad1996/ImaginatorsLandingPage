import { Injectable } from '@angular/core';
import { Option } from '../models/option.model';

@Injectable({
  providedIn: 'root'
})
export class OptionService {

  constructor() { }

  getCards()
  {
    let oc1: Option = new Option;
    oc1.imgsrc = "../../assets/images/drag-drop.png";
    oc1.title = "Drag & Drop";
    oc1.text = "All you need is to pick up what you want and drop it anywhere you like.";

    let oc2: Option = new Option;
    oc2.imgsrc = "../../assets/images/slides.png";
    oc2.title = "Slides";
    oc2.text = "Designed to assist you showcase you presentation with a projector.";

    let oc3: Option = new Option;
    oc3.imgsrc = "../../assets/images/page-presentation.png";
    oc3.title = "Page Presentation";
    oc3.text = "Pageview presentation will help to showcase your work as one page.";

    let oc4: Option = new Option;
    oc4.imgsrc = "../../assets/images/animation.png";
    oc4.title = "Animation";
    oc4.text = "Choose from a variety of animations to add in your presentations.";

    let oc5: Option = new Option;
    oc5.imgsrc = "../../assets/images/carousels.png";
    oc5.title = "Carousels";
    oc5.text = "Our moving carousel will come alive a group of photos at one place.";

    let oc6: Option = new Option;
    oc6.imgsrc = "../../assets/images/embed.png";
    oc6.title = "Embed";
    oc6.text = "This will help you embed your presentation anywhere online.";

    let cards: Option[] = [];
    cards.push(oc1);
    cards.push(oc2);
    cards.push(oc3);
    cards.push(oc4);
    cards.push(oc5);
    cards.push(oc6);

    return cards;
  }
}
