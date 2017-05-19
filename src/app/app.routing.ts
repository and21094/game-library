import { RouterModule } from '@angular/router'

import { HomeComponent } from './home/home.component'
import { FavoritesComponent } from './favorites/favorites.component'
import { SettingsComponent } from './settings/settings.component'

const appRoutes = [
  { path: '', component: HomeComponent },
  { path: 'favorites', component: FavoritesComponent },
  { path: 'settings', component: SettingsComponent },
]

export const routing = RouterModule.forRoot(appRoutes)
