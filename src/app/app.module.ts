import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule,ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatInputModule} from '@angular/material/input';
import{MatCardModule}from '@angular/material/card';


import {MatButtonModule} from '@angular/material/button';

import {MatToolbarModule} from '@angular/material/toolbar';

import { AppComponent } from './app.component';

import { PostCreateComponent } from './posts/post-create/post-create.component';
import { HeaderComponent } from './header/header.component';

import {MatIconModule} from '@angular/material/icon';
import { PostListComponent } from './posts/post-list/post-list.component';

import {MatExpansionModule} from '@angular/material/expansion';

import { MatChipsModule } from '@angular/material/chips';

import {MatSelectModule} from '@angular/material/select';


// import {PostsService} from "./posts/posts.service"

import {HttpClientModule} from "@angular/common/http"

import{AppRoutingModule} from "./app-routing.module"
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    AppComponent,
    PostCreateComponent,
    HeaderComponent,
    PostListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatExpansionModule,
    ReactiveFormsModule,
    MatChipsModule,
    MatSelectModule,
    HttpClientModule,
    MatProgressSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
