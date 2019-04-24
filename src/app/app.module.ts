import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatInputModule, MatFormFieldModule, MatToolbarModule, MatSidenavModule, MatMenuModule, MatCardModule, MatIconModule, MatListModule} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { CadUsuarioComponent } from './pages/cadusuario/cadusuario.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import { PrincipalComponent } from './pages/principal/principal.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadUsuarioComponent,
    PrincipalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule, MatCheckboxModule,
    FormsModule,ReactiveFormsModule,
    MatInputModule, MatFormFieldModule,
    MatToolbarModule, MatSidenavModule,
    MatMenuModule,MatCardModule,
    FlexLayoutModule, MatIconModule,
    HttpClientModule, MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
