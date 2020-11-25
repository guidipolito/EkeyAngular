import { Component } from '@angular/core';
import { EkeyService } from '../providers/ekey.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private chave: EkeyService, private router: Router) { }
  public listaChave: Array<object>;
  ngOninit() {}
  inputbusca:string="";
  
  ionViewDidEnter() {
    this.chave.getChave("").subscribe((dados: [{}]) =>{
      this.listaChave = dados;
    });

  }
  busca(){
    this.chave.getChave(this.inputbusca).subscribe((dados: [{}]) =>{
      this.listaChave = dados;
    });

  }

}


