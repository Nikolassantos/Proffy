import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import Landing from '../pages/Landing'
import GiveClasses from '../pages/GiveClasses'
import StudyTabs from './StudyTab'
import OnboardingStudy from '../pages/Onboarding/OnbordingStudy'
import OnboardingClasses from '../pages/Onboarding/OnboardingClasses'


function AppStack() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown:false }} >
        {/* <Screen name="Onboarding" component={OnboardingStudy}  />
        <Screen name="OnboardingClasses" component={OnboardingClasses}  /> */}
        <Screen name="Landing" component={Landing}  />
        <Screen name="GiveClasses" component={GiveClasses}  />
        <Screen name="Study" component={StudyTabs}  />
      </Navigator>
    </NavigationContainer>

  )
}
export default AppStack;