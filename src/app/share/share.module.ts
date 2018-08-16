import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    NgZorroAntdModule,
  ],
  declarations: [HeaderComponent]
})
export class ShareModule { }
