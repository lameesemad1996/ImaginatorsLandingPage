import { Component, OnInit } from '@angular/core';
import { HoverEffectCardCardService } from '../services/hover-effect-card-service';
import { HoverEffectCard } from '../models/hoverEffectCard.model';

@Component({
  selector: 'app-hover-effect-element',
  templateUrl: './hover-effect-element.component.html',
  styleUrls: ['./hover-effect-element.component.css']
})
export class HoverEffectElementComponent implements OnInit {

  constructor(private hes: HoverEffectCardCardService) { }

  elements: HoverEffectCard[] = [];

  ngOnInit() {
    this.elements = this.hes.getElements();
  }

}
