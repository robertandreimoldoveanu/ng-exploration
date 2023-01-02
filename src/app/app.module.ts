import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ComponentAComponent } from './component-a/component-a.component';
import { MyComponent } from './my-module/my-module.component';
import { CustomResolver, matcherWithParam } from './utils';

const routes: Routes = [
  {
    path: 'my-module',
    children: [
      {
        matcher: matcherWithParam(['disk', 'folder', 'file']),
        component: MyComponent,
        pathMatch: 'full',
        // resolve: { myData: CustomResolver }
      }
    ]
  },
  {
    path: 'something/:param/another',
    component: ComponentAComponent
  },
  {
    path: 'something/:param',
    component: ComponentAComponent
  },
  {
    path: 'something',
    component: ComponentAComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    MyComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
