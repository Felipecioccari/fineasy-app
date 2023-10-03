import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Welcome from '../pages/Welcome';
import SignIn from '../pages/Signin';
import SignUp from '../pages/SignUp';
import Home from '../pages/Home';
import CheckedInDetails from '../pages/CheckedInDetails';

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={Welcome} />

      <Stack.Screen name="SignIn" component={SignIn} />

      <Stack.Screen name="SignUp" component={SignUp} />

      <Stack.Screen name="Home" component={Home} />

      <Stack.Screen name="CheckedInDetails" component={CheckedInDetails} />
    </Stack.Navigator>
  );
}
