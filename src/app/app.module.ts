import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { InddexComponent } from './inddex/inddex.component';
import { IndexComponent } from './index/index.component';
import { NavComponent } from './nav/nav.component';
import { NavLeftComponent } from './nav-left/nav-left.component';
import { TabComponent } from './tab/tab.component';
import { ListComponent } from './list/list.component';

@NgModule({
  //视图类。Angular有三种视图类：组件，指令和管道。
  declarations: [
    AppComponent,
    LoginComponent,
    InddexComponent,
    IndexComponent,
    NavComponent,
    NavLeftComponent,
    TabComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],//声明，应该在该组件可见和可用的子集模板其他模块。
  bootstrap: [AppComponent]//主应用程序视图，称为根组件，托管所有其他应用程序视图。只有根模块应该设置此bootstrap属性。
})
export class AppModule { }
