import { RouterModule } from '@angular/router'

import { HomeComponent } from './home/home.component'
import { FavoritesComponent } from './favorites/favorites.component'
import { SettingsComponent } from './settings/settings.component'
import { FavPcComponent } from './favorites/fav-pc/fav-pc.component'
import { FavEmulatorComponent } from './favorites/fav-emulator/fav-emulator.component'

const appRoutes = [
  { path: '', component: HomeComponent },
  { path: 'favorites', component: FavoritesComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'fav-pc', component: FavPcComponent },
  { path: 'fav-emu', component: FavEmulatorComponent },
]

export const routing = RouterModule.forRoot(appRoutes)
