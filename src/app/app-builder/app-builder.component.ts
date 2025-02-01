import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import createStudioEditor from "@grapesjs/studio-sdk";
import '@grapesjs/studio-sdk/style';

@Component({
  selector: 'app-app-builder',
  standalone: true,
  imports: [],
  templateUrl: "./app-builder.component.html",
  styleUrl: "./app-builder.component.scss",
})
export class AppBuilderComponent implements OnInit {
  @ViewChild('editorEl', {static: true})
  private editorEl!: ElementRef;

  public ngOnInit(): void {
    createStudioEditor({
      licenseKey: 'YOUR_LICENSE_KEY',
      root: this.editorEl.nativeElement,
      project: {
        type: 'web',
        default: {
          pages: [
            {name: 'Home', component: '<h1>Home page</h1>'},
            {name: 'About', component: '<h1>About page</h1>'},
            {name: 'Contact', component: '<h1>Contact page</h1>'},
          ]
        }
      }
    });
  }
}
