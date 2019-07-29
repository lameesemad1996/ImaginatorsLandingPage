import { Component, OnInit, Input } from '@angular/core';
import { Option } from '../models/option.model';
import { OptionService } from '../services/option-card.service';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {

  constructor(private ocs: OptionService) { }

  cards: Option[] = [];


  ngOnInit() {
    this.cards = this.ocs.getCards();
  }

}
