import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Player } from 'src/app/models/player';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-player-increment',
  templateUrl: './player-increment.component.html',
  styleUrls: ['./player-increment.component.css']
})
export class PlayerIncrementComponent implements OnInit {
  max = 100;
  minWin = 0;
  minGame = 1;
  thumbLabel = true;
  step = 1;
  valueWin = 0;
  valueGame = 1;

  nickname_param = '';

  players: Player[] = [];

  formUpdatePlayer = new FormGroup({
    name: new FormControl(null),
    nickname: new FormControl(null),
      game: new FormGroup({
        totalWins: new FormControl(null),
        totalGames: new FormControl(null)
      })
  });
  
  player: Player = {
    name: '',
    nickname: '',
    game: {
      totalWins: 0xf00d,
      totalGames: 0xf00d
    }
  }

  name = new FormControl('', [Validators.minLength(4)]);
  nickname = new FormControl('', [Validators.minLength(4)]);

  constructor(private router: Router, 
              private playerService: PlayerService, 
              private route: ActivatedRoute ) {}

  ngOnInit(): void { 
    this.nickname_param = this.route.snapshot.paramMap.get('nickname')!;
    this.findById();
  }

  increment(): void {
    this.loadFormUpdatePlayer();
    if(this.errorValidate()){
        this.playerService.increment(this.nickname_param, this.formUpdatePlayer.value).subscribe(response => {
        this.router.navigate(['api/players']);
        this.playerService.message('Jogador atualizado com sucesso!')
      }, err => {
        this.playerService.message(err.error.userMessage)
        if(err.error.match('já cadastrado')){
          this.playerService.message(err.error.userMessage)
        }else 
          console.log(err);
      })
    }
  }

  findById(): void {
    this.playerService.findById(this.nickname_param).subscribe((response => {
      this.player = response;
    }))
  }

  loadFormUpdatePlayer(): void{
    this.formUpdatePlayer.patchValue({
      name: this.player.name,
      nickname: this.player.nickname,
      game: {
        totalWins: this.valueWin + this.player.game.totalWins,
        totalGames: this.valueWin + this.valueGame + this.player.game.totalGames
      }
    });
    this.errorValidate();
  }

  cancel(): void {
    this.router.navigate(['/api/players']);
  }

  errorValidate() {
    console.log('this.player.game.totalWins ', this.player.game.totalWins )
    console.log('this.player.game.totalGames ', this.player.game.totalGames)
    if(this.player.game.totalGames < this.player.game.totalWins){
      return this.playerService.message('O total de partidas não pode ser inferior ao total de vitórias');

    }else if(this.player.game.totalWins < 0){
      return this.playerService.message('O total de vitórias não pode ser inferior a 0');

    }else if(this.player.game.totalWins === 0 && this.player.game.totalGames === 0){
      return this.playerService.message('Informe um valor inteiro para os campos');

    }else if(this.player.game.totalWins){
      return this.playerService.message('Informe um valor inteiro maior que 0');

    } else if(!this.player.game.totalGames){
      return this.playerService.message('Informe um valor inteiro maior que 1');

    }else if(this.player.game.totalGames < 1){
      return this.playerService.message('O total de partidas não pode ser inferior a 1');

    }else{
      return true;

    }
  }
}