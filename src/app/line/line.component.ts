import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.scss']
})
export class LineComponent implements OnInit {
  @Input() item;
  constructor() { }

  ngOnInit() {
  }

}
