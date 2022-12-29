import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-my-module',
  templateUrl: './my-module.component.html',
  styleUrls: ['./my-module.component.scss']
})
export class MyModuleComponent implements OnDestroy {

  static id = 0;

  paramsArray: Array<Record<string, string>> = [];
  constructor(private route: ActivatedRoute) {
    document.querySelector('.logs')?.appendChild(document.createTextNode('MyModuleComponent constructor' + ++MyModuleComponent.id ));
    document.querySelector('.logs')?.appendChild(document.createElement('br'));

    this.route.data.subscribe(data => {
      console.log('this is the route data', data);
    });

    this.route.paramMap.subscribe(paramMap => {
      const disk = paramMap.get('disk') || '';
      const folder = paramMap.get('folder') || '';
      const file = paramMap.get('file') || '';
      this.paramsArray = [{
        name: 'disk',
        value: disk,
      },
      {
        name: 'folder',
        value: folder,
      },
      {
        name: 'file',
        value: file,
      }
    ];
      console.log({ disk, folder, file });
    })
  }

  ngOnDestroy(): void {
    document.querySelector('.logs')?.appendChild(document.createTextNode('MyModuleComponent ngOnDestroy' + MyModuleComponent.id ));
    document.querySelector('.logs')?.appendChild(document.createElement('br'));
  }
}
