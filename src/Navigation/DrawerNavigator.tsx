import { createDrawerNavigator } from '@react-navigation/drawer';
import NotificationScreen from '../Screen/notificationScreen';

const Drawer = createDrawerNavigator();

function NDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Notifications" component={NotificationScreen} />
    </Drawer.Navigator>
  );
}

export default NDrawer;


