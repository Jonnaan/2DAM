import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { AuthService } from '../../../Auth/Service/auth.service';
import { Erabiltzaileak } from '../../../Auth/Interface/Erabiltzaileak';


@Component({
  selector: 'app-home',
  imports: [RouterModule, MatToolbarModule, MatButtonModule, MatSidenavModule,MatIconModule, MatListModule, RouterLink ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private router: Router, private authService: AuthService) {}


  logout() {
    this.authService.logout();
    }


    get erabiltzailea () {
      return this.authService.erabiltzailea;
      }


}
