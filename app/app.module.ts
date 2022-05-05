import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core';
import { HelloFrameworkModule } from './hello-framework';
import { LifecycleModule } from './lifecycle';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [CoreModule, HelloFrameworkModule, LifecycleModule],
})
export class AppModule {}
