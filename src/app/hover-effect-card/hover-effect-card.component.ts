import { Component, OnInit, Input } from '@angular/core';
import { HoverEffectCard } from '../models/hoverEffectCard.model';
import { element } from 'protractor';

@Component({
  selector: 'app-hover-effect-card',
  templateUrl: './hover-effect-card.component.html',
  styleUrls: ['./hover-effect-card.component.css']
})
export class HoverEffectCardCardComponent implements OnInit {

  @Input() element : HoverEffectCard;

  constructor() { }

  ngOnInit() {
  }

}
