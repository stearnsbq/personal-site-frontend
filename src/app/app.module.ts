import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterModule } from './footer/footer.module';
import { HeaderModule } from './header/header.module';
import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';
import { AuthService } from './services/auth.service';
import { StorageService } from './services/storage.service';
import { QuillModule } from 'ngx-quill';
import { SharedModule } from './shared/shared.module';
import { LoadingInterceptor } from './interceptors/loading.interceptor';
import Quill from 'quill';

import ImageResize from 'quill-image-resize'

Quill.register('modules/ImageResize', ImageResize);

export const jwtOptionsFactory = (storage: StorageService) => ({
  tokenGetter: () => storage.get('access_token'),
  allowedDomains: ['localhost:8080'],
});

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FooterModule,
    HeaderModule,
    FlexLayoutModule,
    FontAwesomeModule,
    HttpClientModule,
    QuillModule.forRoot({modules: {ImageResize: {}}}),
    SharedModule,

    JwtModule.forRoot({
      jwtOptionsProvider: {
        provide: JWT_OPTIONS,
        deps: [StorageService],
        useFactory: jwtOptionsFactory,
      },
    }),
  ],
  providers: [
    StorageService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
