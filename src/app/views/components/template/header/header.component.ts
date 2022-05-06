import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private service: PlayerService, private router: Router) {}

  ngOnInit(): void {
  }

  navigateToHome():void {
    this.router.navigate([''])
  }
  navigateToRanking():void {
    this.router.navigate(['api/players'])
  }
  navigateToAbout():void {
    this.router.navigate(['api/about'])
  }

}
