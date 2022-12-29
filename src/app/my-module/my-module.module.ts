import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyModuleComponent } from './my-module.component';
import { RouterModule } from '@angular/router';
import { matcherWithParam, CustomResolver } from '../utils';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        matcher: matcherWithParam(['disk', 'folder', 'file']),
        component: MyModuleComponent,
        resolve: { myData: CustomResolver }
      },
    ])
  ],
  declarations: [MyModuleComponent],
  exports: [RouterModule]
})
export class MyModuleModule { }
