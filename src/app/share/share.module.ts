import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { ContainerComponent } from './container/container.component';
@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
  ],
  declarations: [HeaderComponent, ContainerComponent],
  exports: [HeaderComponent, ContainerComponent],
})
export class ShareModule { }
