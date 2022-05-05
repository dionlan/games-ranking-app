import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Player } from 'src/app/models/player';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-player-create',
  templateUrl: './player-create.component.html',
  styleUrls: ['./player-create.component.css']
})
export class PlayerCreateComponent implements OnInit {

  players: Player[] = []

  formRegisterPlayer = new FormGroup({
    name: new FormControl('', [Validators.minLength(4)]),
    nickname: new FormControl('', [Validators.minLength(4)]),
    game: new FormGroup({
      totalWins: new FormControl(null),
      totalGames: new FormControl(null)
    })
  });

  player: Player = {
    name: '',
    nickname: '',
    game: {
      totalWins: 0,
      totalGames: 0
    }
  }
 
  constructor(private router: Router,
              private playerService: PlayerService) { }

  ngOnInit(): void {
    this.listAllPlayers();
  }

  popularFormCadastroRestaurante(): void{
    this.formRegisterPlayer.patchValue({
      name: this.player.name,
      nickname: this.player.nickname,
      game: {
        totalWins: this.player.game.totalWins,
        totalGames: this.player.game.totalGames
      }
    });
    this.errorValidadeRegister();
  }

  cancel():void {
    this.router.navigate(['api/players']);
  }

  create():void {
    this.popularFormCadastroRestaurante();
    if(this.errorValidadeRegister()){
        console.log("CRIAÇÃO JOGADOR: ", JSON.stringify(this.formRegisterPlayer.value))
        this.playerService.create(this.formRegisterPlayer.value).subscribe((response) => {
        this.router.navigate(['api/players']);
        this.playerService.message('Jogador cadastrado com sucesso!')
      }, err => {
        this.playerService.message(err.error.userMessage)
        if(err.error.match('já cadastrado')){
          this.playerService.message(err.error.userMessage)
        }else 
          console.log(err);
      })
    }
  }

  listAllPlayers(): void {
    this.playerService.findAll().subscribe(response => {
      this.players = response;
      console.log(this.players);
    })
  }

 errorValidadeRegister(){
    if(this.player.name.length < 5 || this.player.name.length > 30){
      return this.playerService.message('O nome deve ter entre 5 e 30 caracteres');

    }else if(!this.player.name){
      return this.playerService.message('Infome um valor para o nome');

    }else if(!this.player.nickname){
      return this.playerService.message('Infome um valor para o nickname');

    }else if(/\s/.test(this.player.nickname)){
      return this.playerService.message('O apelido não pode conter espaços em branco');

    }else if(this.player.nickname.length < 5 || this.player.nickname.length > 12){
      return this.playerService.message('O aplido deve ter entre 5 e 12 caracteres');

    }else if(this.player.game.totalWins === 0 && this.player.game.totalGames === 0){
      return this.playerService.message('Informe um valor inteiro para os campos');
      
    }else{
      return true;
    }
  } 
}