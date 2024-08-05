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
import {Text} from 'react-native';

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
const SearchStack = createNativeStackNavigator();
const MyPageStack = createNativeStackNavigator();

function HomeStackNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeScreen"
        component={Home}
        options={{
          title: 'kkoalla',
          headerTitleStyle: {
            fontSize: 20,
            fontWeight: 'bold',
          },
        }}
      />
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
      <MyPageStack.Screen
        name="MyPageScreen"
        component={MyPage}
        options={{
          title: '마이',
          headerTitleStyle: {
            fontSize: 20,
            fontWeight: 'bold',
          },
        }}
      />
      <MyPageStack.Screen
        name="Like"
        component={Like}
        options={{
          title: '찜',
          headerTitleStyle: {
            fontSize: 20,
            fontWeight: 'bold',
          },
        }}
      />
      <MyPageStack.Screen
        name="BookingList"
        component={BookingList}
        options={{
          title: '예약 목록',
          headerTitleStyle: {
            fontSize: 20,
            fontWeight: 'bold',
          },
        }}
      />
    </MyPageStack.Navigator>
  );
}

const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: true, // 라벨 표시를 활성화
        headerShown: false,
        tabBarStyle: {
          height: 85,
        },
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home-sharp' : 'home-outline';
          } else if (route.name === 'Badge') {
            iconName = focused ? 'ribbon' : 'ribbon-outline';
          } else if (route.name === 'Search') {
            iconName = focused ? 'search' : 'search-outline';
          } else if (route.name === 'MyPage') {
            iconName = focused ? 'person-circle' : 'person-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarLabel: ({focused}) => {
          let label;
          if (route.name === 'Home') {
            label = '홈';
          } else if (route.name === 'Badge') {
            label = '업적';
          } else if (route.name === 'Search') {
            label = '검색';
          } else if (route.name === 'MyPage') {
            label = '마이';
          }

          return (
            <Text style={{color: focused ? '#000' : '#888', fontSize: 12}}>
              {label}
            </Text>
          );
        },
        tabBarActiveTintColor: '#000',
        tabBarInactiveTintColor: '#888',
      })}>
      <Tab.Screen name="Home" component={HomeStackNavigator} />
      <Tab.Screen
        name="Badge"
        component={Badge}
        options={{
          headerShown: true,
          title: '나의 업적',
          headerTitleStyle: {
            fontSize: 20,
            fontWeight: 'bold',
          },
        }}
      />
      <Tab.Screen name="Search" component={SearchStackNavigator} />
      <Tab.Screen name="MyPage" component={MyPageStackNavigator} />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;
