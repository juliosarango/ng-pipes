import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//para mostrar las fechas en español
import { LOCALE_ID } from '@angular/core';

//componentes
import { AppComponent } from './app.component';

//Pipes
import { CapitalizadoPipe } from './pipes/capitalizado.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { PasswordPipe } from './pipes/password.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CapitalizadoPipe,
    DomseguroPipe,
    PasswordPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    //luego de importar LOCALE_ID, debemos agregar en los providers un objeto
    //en useValue podemos usar el codigo "es" o también "esEC"
      { provide: LOCALE_ID, useValue: "es" }
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
