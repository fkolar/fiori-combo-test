import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  DATA_PROVIDERS,
  DataProvider,
  PlatformComboboxMobileModule,
  PlatformComboboxModule
} from '@fundamental-ngx/platform';
import {
  DialogConfig,
  DynamicComponentService,
  MOBILE_MODE_CONFIG,
  MobileModeConfigToken,
  MobileModeControl, RtlService
} from '@fundamental-ngx/core';

export const MOBILE_DIALOG_PORTRAIT: DialogConfig = {
  width: '360px',
  height: '640px'
};


export const COMBOBOX_MOBILE_CONFIG: MobileModeConfigToken = {
  target: MobileModeControl.COMBOBOX,
  config: {dialogConfig: MOBILE_DIALOG_PORTRAIT}
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // PlatformComboboxModule,
    // PlatformComboboxMobileModule,



  ],
  providers: [
    DynamicComponentService,
    { provide: DATA_PROVIDERS, useClass: DataProvider as any },
    { provide: MOBILE_MODE_CONFIG, useValue: COMBOBOX_MOBILE_CONFIG, multi: true },
    RtlService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
