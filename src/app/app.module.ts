import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, Injector, NgModule, NgZone, Type} from '@angular/core';

import { AppComponent } from './app.component';
import { OrangeWithBlueInsideComponent } from './components/orange-with-blue-inside/orange-with-blue-inside.component';
import {createCustomElement} from '@angular/elements';
import {LazyElementsModule} from '@angular-extensions/elements';

@NgModule({
  declarations: [
    AppComponent,
    OrangeWithBlueInsideComponent
  ],
  imports: [
    LazyElementsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  entryComponents: [OrangeWithBlueInsideComponent]
})
export class AppModule {
  constructor(private injector: Injector, private zone: NgZone) {
    (window as any).ngZone = this.zone;
  }
  ngDoBootstrap() {
    this.setCustomElementTag('orange-with-blue-inside', OrangeWithBlueInsideComponent);
  }

  private setCustomElementTag<T>(tag: string, type: Type<T>) {
    const elm = createCustomElement(type, {injector: this.injector});
    customElements.define(tag, elm);
  }
}
