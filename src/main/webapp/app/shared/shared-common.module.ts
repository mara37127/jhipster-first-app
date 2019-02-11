import { NgModule } from '@angular/core';

import { JhipsterFirstAppSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [JhipsterFirstAppSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [JhipsterFirstAppSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class JhipsterFirstAppSharedCommonModule {}
