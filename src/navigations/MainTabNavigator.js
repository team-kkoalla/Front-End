import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Search from '../screens/Search';
import Badge from '../screens/Badge';
import MyPage from '../screens/MyPage';
import BreweryList from '../screens/BreweryList';
import BreweryDetail from '../screens/BreweryDetail';
import Like from '../screens/Like';
import BookingList from '../screens/BookingList';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
const SearchStack = createNativeStackNavigator();
const MyPageStack = createNativeStackNavigator();

function HomeStackNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="HomeScreen" component={Home} />
      <HomeStack.Screen name="Search" component={Search} />
      <HomeStack.Screen name="BreweryList" component={BreweryList} />
      <HomeStack.Screen name="BreweryDetail" component={BreweryDetail} />
    </HomeStack.Navigator>
  );
}

function SearchStackNavigator() {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen name="SearchScreen" component={Search} />
      <SearchStack.Screen name="BreweryList" component={BreweryList} />
      <SearchStack.Screen name="BreweryDetail" component={BreweryDetail} />
    </SearchStack.Navigator>
  );
}

function MyPageStackNavigator() {
  return (
    <MyPageStack.Navigator>
      <MyPageStack.Screen name="MyPageScreen" component={MyPage} />
      <MyPageStack.Screen name="Like" component={Like} />
      <MyPageStack.Screen name="BookingList" component={BookingList} />
    </MyPageStack.Navigator>
  );
}

const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          height: 70,
        },
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home-sharp' : 'home-outline';
          } else if (route.name === 'Badge') {
            iconName = focused ? 'trophy' : 'trophy-outline';
          } else if (route.name === 'Search') {
            iconName = focused ? 'search' : 'search-outline';
          } else if (route.name === 'MyPage') {
            iconName = focused ? 'person-circle' : 'person-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}>
      <Tab.Screen name="Home" component={HomeStackNavigator} />
      <Tab.Screen name="Badge" component={Badge} options={{headerShown: true}} />
      <Tab.Screen name="Search" component={SearchStackNavigator} />
      <Tab.Screen name="MyPage" component={MyPageStackNavigator} />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;
