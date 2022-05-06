import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatInputCounterModule } from '@angular-material-extensions/input-counter';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';

import { MatCardModule } from '@angular/material/card';
import { HeaderComponent } from './views/components/template/header/header.component';
import { FooterComponent } from './views/components/template/footer/footer.component';
import { NavComponent } from './views/components/template/nav/nav.component';
import { HomeComponent } from './views/components/home/home.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import {MatChipsModule} from '@angular/material/chips';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PlayerReadComponent } from './views/components/player/player-read/player-read.component';
import { PlayerIncrementComponent } from './views/components/player/player-increment/player-increment.component';
import { PlayerCreateComponent } from './views/components/player/player-create/player-create.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AboutComponent } from './views/components/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    AboutComponent,
    PlayerReadComponent,
    PlayerIncrementComponent,
    PlayerCreateComponent
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
    BrowserAnimationsModule,

    MatToolbarModule,
    MatSidenavModule,
    FormsModule,

    ReactiveFormsModule,
    MatIconModule,

    MatButtonModule,
    MatListModule,
    MatChipsModule,
    
    MatCardModule,
    MatTableModule,
    MatSelectModule,
    MatInputModule,
    MatInputCounterModule,
    MatPaginatorModule,
    MatSnackBarModule,
    MatFormFieldModule,
    FlexLayoutModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
