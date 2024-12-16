import { Component } from '@angular/core';
import { RouterLink, RouterModule, Router } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { AuthService } from '../../../auth/Service/auth.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, MatToolbarModule, MatButtonModule, MatSidenavModule,MatIconModule, MatListModule, RouterLink ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

constructor(private authService: AuthService ) { }

  logout() {
    this.authService.logout();
  }

  get auth () {
    return this.authService.auth;
    }

}
