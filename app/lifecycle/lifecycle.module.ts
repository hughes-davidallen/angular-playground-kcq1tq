import { NgModule } from '@angular/core';

import { ContentchildComponent } from './contentchild.component';
import { LifecycleComponent } from './lifecycle.component';
import { ViewchildComponent } from './viewchild.component';

@NgModule({
  declarations: [ContentchildComponent, LifecycleComponent, ViewchildComponent],
  exports: [ContentchildComponent, LifecycleComponent],
})
export class LifecycleModule {}
