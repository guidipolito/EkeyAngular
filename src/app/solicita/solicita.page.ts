import { Component, OnInit } from '@angular/core';
import { EkeyService } from '../providers/ekey.service';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';;

@Component({
  selector: 'app-solicita',
  templateUrl: './solicita.page.html',
  styleUrls: ['./solicita.page.scss'],
})
export class SolicitaPage implements OnInit {

  constructor(public route: ActivatedRoute, public chave: EkeyService, public alerta: AlertController, public router: Router) { }
nick;
detail;
  ngOnInit() {
  	this.nick = this.route.snapshot.paramMap.get('nick')
  }
  email:string; discord:string; telefone:string; msg:string; equipe:string; //declarando as variaveis com dados dos inputs, acho que finalmente entendi isso
  solicitaAgoraVai(){
  	if (this.email!=null && this.email!="" && this.equipe !=null && this.equipe!="") {


  		this.chave.insereSolicita(this.email, this.discord, this.telefone, this.msg, this.equipe, this.nick).subscribe((dados: [{}]) =>{
  			console.log(dados);
  			this.detail = dados;
  			this.queAlertaGrande(this.detail.resposta);
  		});

  	}else{
  		this.queAlertaGrande('erro');
  	}
  }


  async queAlertaGrande(tipo) {
  	const alertaErro = await this.alerta.create({
  		header: 'Tem algo errado',
  		message: 'O campo obrigatório Email ou nome da equipe esta em falta',
  		buttons: [
  		{
  			text: 'Voltar',
  			role: 'cancel',
  			cssClass: 'secondary',
  			handler: (blah) => {
  				console.log('Voltar');
  			}
  		
  		}
  		]
  	});

  	const sucesso = await this.alerta.create({
  		header: 'Tudo certo',
  		message: 'A solicitação foi enviada',
  		buttons: [
  		{
  			text: 'Voltar',
  			role: 'cancel',
  			cssClass: 'secondary',
  			handler: (blah) => {

  				console.log('Voltar');
  				this.router.navigate(['/faz-chave/'+this.nick]);
  			}
  		
  		}
  		]
  	});

	const falha = await this.alerta.create({
  		header: 'Lamento...',
  		message: 'Por algum motivo não foi possivel enviar sua solicitação',
  		buttons: [
  		{
  			text: 'Voltar',
  			role: 'cancel',
  			cssClass: 'secondary',
  			handler: (blah) => {

  				console.log('Voltar');
  				
  			}
  		
  		}
  		]
  	});

	//ve qual alerta tem q se exibir e mostra
  	switch (tipo) {
  		case "erro": await alertaErro.present(); break;
  		case "certo": await sucesso.present(); break;
  		default: await falha.present(); break;
 
  	}
  	

  }	
  
}
