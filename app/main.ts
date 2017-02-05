// main entry point
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule); //COMMENT definovani hlavniho modulu a JIT kompilatoru(jednodussi), jeste je AoT kterej se pouziva napr. pro mobilni aplikace
