import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { services } from './services';
import { StoreModule } from '@ngrx/store';
import { CoreStateReducer, CoreEffects } from './store';
import { EffectsModule } from '@ngrx/effects';
import { environment } from 'src/environments/environment';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot({ CoreState: CoreStateReducer}),
		EffectsModule.forRoot([...CoreEffects]),
		!environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreRouterConnectingModule,
  ],
  providers: [...services]
})
export class CoreModule { }
