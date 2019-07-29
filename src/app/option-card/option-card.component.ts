import { Component, OnInit, Input } from '@angular/core';
import { Option } from '../models/option.model';

@Component({
  selector: 'app-option-card',
  templateUrl: './option-card.component.html',
  styleUrls: ['./option-card.component.css']
})
export class OptionCardComponent implements OnInit {

  @Input() card: Option;

  constructor() { }

  ngOnInit() {
  }

}
