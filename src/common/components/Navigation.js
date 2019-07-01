import Page1 from './Page1';
import NavigationMenu from './NavigationMenu';
import {createDrawerNavigator, createAppContainer} from 'react-navigation';
import Dashboard from './Dashboard'

const MyDrawerNavigator = createDrawerNavigator({
    Dashboard: {
        screen: Dashboard
    },
    Page1: {
        screen: Page1
    }
}, {
  contentComponent: NavigationMenu,
  drawerWidth: 200,
  headerMode: 'none',
  drawerHeight: "100%",
  drawerOpenRoute: 'DrawerOpen',
  drawerCloseRoute: 'DrawerClose',
  drawerToggleRoute: 'DrawerToggle'
});

export default MyDrawerNavigator;