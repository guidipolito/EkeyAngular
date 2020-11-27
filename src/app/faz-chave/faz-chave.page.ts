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
	ntimes; j1t1; j1t2; j2t3; j1t4; j2t5; j1t6; j3t6; 

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

				switch (this.chaveData.posicao[i].id) {
					case "j1t1": this.j1t1= this.chaveData.times[this.chaveData.posicao[i].valor].nomeequipe;  break;
					case "j1t2": this.j1t1= this.chaveData.times[this.chaveData.posicao[i].valor].nomeequipe;  break;
					case "j2t3": this.j1t1= this.chaveData.times[this.chaveData.posicao[i].valor].nomeequipe;  break;
					case "j1t4": this.j1t1= this.chaveData.times[this.chaveData.posicao[i].valor].nomeequipe;  break;
					case "j2t5": this.j1t1= this.chaveData.times[this.chaveData.posicao[i].valor].nomeequipe;  break;
					case "j1t6": this.j1t1= this.chaveData.times[this.chaveData.posicao[i].valor].nomeequipe;  break;
					case "j3t6": this.j1t1= this.chaveData.times[this.chaveData.posicao[i].valor].nomeequipe;  break;
						
						
					
					default:
						// code...
						break;
				}
				console.log(this.chaveData.posicao[i].id);
				console.log(this.chaveData.times[this.chaveData.posicao[i].valor].nomeequipe);
			}

		});

	}

}
