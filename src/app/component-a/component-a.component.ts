import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-component-a',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './component-a.component.html',
  styleUrls: ['./component-a.component.scss']
})
export class ComponentAComponent implements AfterViewInit, OnDestroy {
  constructor(private _route: ActivatedRoute) {}
  ngOnDestroy(): void {
    console.log('the component a is destroyed');
  }
  ngAfterViewInit(): void {
    this._route.paramMap.subscribe(data => {
      console.log('comp a data', data);
    });
  }
}
