import {Component} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {NzMenuDirective, NzMenuItemComponent} from "ng-zorro-antd/menu";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NzMenuItemComponent, NzMenuDirective, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
