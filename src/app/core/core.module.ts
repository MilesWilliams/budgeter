import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { services } from './services';
import { StoreModule } from '@ngrx/store';
import { CoreStateReducer, CoreEffects } from './store';
import { EffectsModule } from '@ngrx/effects';
import { environment } from 'src/environments/environment';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { interceptors } from './interceptors';
import { LoginComponent } from './components/login/login.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot({ CoreState: CoreStateReducer}),
		EffectsModule.forRoot([...CoreEffects]),
		!environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreRouterConnectingModule.forRoot(),
    SharedModule
  ],
  declarations: [LoginComponent],
  exports: [LoginComponent],
  providers: [...services, ...interceptors]
})
export class CoreModule { }
