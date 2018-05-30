import { BrowserModule } from '@angular/platform-browser';
import { NgModule, isDevMode } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgRedux, NgReduxModule, DevToolsExtension } from 'ng2-redux';
import { IAppState, rootReducer, INITIAL_STATE } from './store';
// Modules
import { MessasingModule } from './messasing/messasing.module';
import { TaskingModule } from './tasking/tasking.module';
// Components
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgReduxModule,
    MessasingModule,
    TaskingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>, devTools: DevToolsExtension) {
    let enhancers = isDevMode() ? devTools.enhancer() : [];
    ngRedux.configureStore(
      rootReducer,
      INITIAL_STATE,
      [],
      [enhancers]);
  }
}
