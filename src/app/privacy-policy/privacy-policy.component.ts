import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../main-content/navbar/navbar.component';
import {TranslatePipe} from "@ngx-translate/core";

@Component({
  selector: 'app-privacy-policy',
  imports: [NavbarComponent, RouterModule, TranslatePipe ],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent {

}
