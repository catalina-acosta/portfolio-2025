import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../main-content/navbar/navbar.component';
import {TranslatePipe} from "@ngx-translate/core";

@Component({
  selector: 'app-imprint',
  imports: [RouterModule, NavbarComponent, TranslatePipe],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent {

}
