import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
// For MDB Angular Free
import { NavbarModule, WavesModule, ButtonsModule } from 'angular-bootstrap-md'

@Component({
  selector: 'vsf-alternative-menu',
  templateUrl: './alternative-menu.component.html',
  styleUrls: ['./alternative-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlternativeMenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  goToLink(url: string){
    window.open(url, "_blank");
  }
  goToBottom(){
    window.scrollTo(0,document.body.scrollHeight);
  }
}
