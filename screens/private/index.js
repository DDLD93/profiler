import React from 'react'
import Home from "./Home"
import Profle from "./Profile"
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();

function Tabs() {
    return (
        <Tab.Navigator
        >
            <Tab.Screen name='home' component={Home} />
            <Tab.Screen name='profile' component={Profle} />
        </Tab.Navigator>
    )
}

export default Tabs