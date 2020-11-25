import { Component, OnInit } from '@angular/core';
import { EkeyService } from '../providers/ekey.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-faz-chave',
  templateUrl: './faz-chave.page.html',
  styleUrls: ['./faz-chave.page.scss'],
})
export class FazChavePage implements OnInit {

  constructor(public route: ActivatedRoute, public chave: EkeyService ) { }
nick = null;
  ngOnInit() {
  	this.nick = this.route.snapshot.paramMap.get('nick');
  }

}
