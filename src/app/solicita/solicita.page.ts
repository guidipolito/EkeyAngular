import { Component, OnInit } from '@angular/core';
import { EkeyService } from '../providers/ekey.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-solicita',
  templateUrl: './solicita.page.html',
  styleUrls: ['./solicita.page.scss'],
})
export class SolicitaPage implements OnInit {

  constructor(public route: ActivatedRoute, public chave: EkeyService) { }
nick;
  ngOnInit() {
  	this.nick = this.route.snapshot.paramMap.get('nick')
  }

}
