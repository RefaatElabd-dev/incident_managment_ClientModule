import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { setConfig } from './Shared/Helpers/apiHelper';
import { SharedValueService } from './Shared/Services/shared-value.service';
import { IncidentComponent } from './incident/incident.component';
import { StartComponent } from './incident/start/start.component';
import { AuthService } from './Shared/Services/auth.Service';
import { AuthGurd } from './Shared/Services/auth-gurd.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    AdminComponent,
    UserComponent,
    IncidentComponent,
    StartComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot()
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: setConfig,
      multi: true,
      deps: [SharedValueService, HttpClient],
   },
   AuthService,
   AuthGurd
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
