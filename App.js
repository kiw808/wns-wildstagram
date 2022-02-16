import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import ScreenCamera from './screens/ScreenCamera'
import ScreenImages from './screens/ScreenImages'
import ScreenFeed from './screens/ScreenFeed'
import Ionicons from '@expo/vector-icons/Ionicons'

const Tab = createBottomTabNavigator()

export default function App() {
  return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({focused, color, size}) => {
              let iconName;

              if (route.name === 'Camera') {
                iconName = focused ? 'camera' : 'camera-outline'
              } else if (route.name === 'Images') {
                iconName = focused ? 'image' : 'image-outline'
              } else if (route.name === 'Feed') {
                iconName = focused ? 'share-social' : 'share-social-outline'
              }

              return <Ionicons name={iconName} size={size} color={color} />
            },
            tabBarActiveTintColor: 'blue',
            tabBarInactiveTintColor: 'gray'
          })}
        >
          <Tab.Screen 
            name='Camera' 
            component={ScreenCamera}
            options={{unmountOnBlur: true}}
          />
          <Tab.Screen name='Images' component={ScreenImages} />
          <Tab.Screen name='Feed' component={ScreenFeed} />
        </Tab.Navigator>
      </NavigationContainer>
  );
}
