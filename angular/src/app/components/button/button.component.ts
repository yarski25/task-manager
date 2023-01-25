import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() public color: string = "";
  @Input() public text: string = "";

  @Output() public btnClick = new EventEmitter();

  constructor(){}

  ngOnInit(): void{

  }

  public onClick(): void{
    this.btnClick.emit();
  }

}
