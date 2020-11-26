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
	public nick = null;
	public chaveData =null;
	public titulo =  ''; 
	public desc ='';
	ntimes; j1t1; j1t2;

	ngOnInit() {
		this.nick = this.route.snapshot.paramMap.get('nick');

		this.chave.fazChave(this.nick).subscribe((dados: [{}]) =>{
			this.chaveData = dados;
			console.log(this.chaveData);
			console.log(this.chaveData.nome);
			this.titulo = this.chaveData.nome;
			this.desc = this.chaveData.desc;
			this.ntimes = this.chaveData.ntimes;
			for(let i in this.chaveData.posicao){
				console.log(this.chaveData.posicao[i].id);
				console.log(this.chaveData.times[this.chaveData.posicao[i].valor].nomeequipe);
			}

		});

	}

}
