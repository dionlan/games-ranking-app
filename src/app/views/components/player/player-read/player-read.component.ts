import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Player } from 'src/app/models/player';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-player-read',
  templateUrl: './player-read.component.html',
  styleUrls: ['./player-read.component.css']
})
export class PlayerReadComponent implements AfterViewInit {
  players: Player[] = [];

  displayedColumns: string[] = ['classification', 'name', 'nickname', 'game.totalWins', 'game.totalGames', 'action'];

  dataSource = new MatTableDataSource<Player>(this.players);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private service: PlayerService, private router: Router) {}

  ngAfterViewInit() {
    this.findAll();
  }

  findAll():void{
    this.service.findAll().subscribe((response) => {
      this.players = response;
      console.log(this.players);
      this.dataSource = new MatTableDataSource<Player>(this.players);
      this.dataSource.paginator = this.paginator;
    })
  }

  navigateToCreate():void {
    this.router.navigate(['api/players/create'])
  }
}
