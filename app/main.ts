import { bootstrap }    from '@angular/platform-browser-dynamic';
import { MissionService } from './mission.service';
import { APP_ROUTER_PROVIDERS } from './router/app.routes';

import { AppComponent } from './app.component';

bootstrap(AppComponent, [APP_ROUTER_PROVIDERS, MissionService]);


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/