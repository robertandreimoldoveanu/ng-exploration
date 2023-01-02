import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-exploration';

  url = window.location.pathname;

  constructor(private _router: Router) {

  }

  links = [
    { route: '/', label: 'Home', },
    { route: "/my-module/disk", label: 'Empty disk', },
    { route: "/my-module/disk/test", label: 'Given disk', },
    { route: "/my-module/disk/test/folder", label: 'Empty folder', },
    { route: "/my-module/disk/another/folder/test", label: 'Given folder', },
    { route: "/my-module/disk/another/folder/test/file", label: 'Empty file', },
    { route: "/my-module/disk/another/folder/test/file/gigel.txt", label: 'Given file', },
  ]

  navigate() {
    this._router.navigateByUrl(this.url);
  }
}
