import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayerCreateComponent } from './views/components/player/player-create/player-create.component';
import { PlayerIncrementComponent } from './views/components/player/player-increment/player-increment.component';
import { PlayerReadComponent } from './views/components/player/player-read/player-read.component';
import { HomeComponent } from './views/components/home/home.component';
import { AboutComponent } from './views/components/about/about.component';

const routes: Routes = [
  {
    path: '', 
    component: HomeComponent
  },
  {
    path: 'api/players',
    component: PlayerReadComponent
  },
  {
    path: 'api/players/create',
    component: PlayerCreateComponent
  },
  {
    path: 'api/players/increment/:nickname',
    component: PlayerIncrementComponent
  },
  {
    path: 'api/about',
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
