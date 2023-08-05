import Auth from '../screens/Auth';
import Home from '../screens/Home';
import * as Routes from './constants';

export const nonAuthRoutes = [{ name: Routes.Auth, component: Auth }];
export const authRoutes = [{ name: Routes.Home, component: Home }];
