
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './module/home/components/header/header.component';

import { TodoButtonDeleteAllComponent } from './module/home/components/todo-button-delete-all/todo-button-delete-all.component';
import { TodoInputAddItensComponent } from './module/home/components/todo-input-add-itens/todo-input-add-itens.component';
import { TodoListComponent } from './module/home/components/todo-list/todo-list.component';

//Modules
import { HomeComponent } from './module/home/pages/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TodoButtonDeleteAllComponent,
    TodoInputAddItensComponent,
    TodoListComponent,
    HomeComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
      
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
