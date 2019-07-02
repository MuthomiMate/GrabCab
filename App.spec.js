import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

test('renders correctly', () => {
//   jest.mock('react-navigation', () => {
//     return {
//         createAppContainer: jest.fn().mockReturnValue(function NavigationContainer(props) {return null;}),
//         createDrawerNavigator: jest.fn(),
//         createMaterialTopTabNavigator: jest.fn(),
//         createStackNavigator: jest.fn(),
//         StackActions: {
//             push: jest.fn().mockImplementation(x => ({...x,  "type": "Navigation/PUSH"})),
//             replace: jest.fn().mockImplementation(x => ({...x,  "type": "Navigation/REPLACE"})),
//         },
//         NavigationActions: {
//             navigate: jest.fn().mockImplementation(x => x),
//         }
//     }
// });
// jest.mock('react-native', () => ({
//   NetInfo: {
//       addEventListener: jest.fn(),
//       fetch: () => {
//           return {
//               done: jest.fn()
//           }
//       }
//   },
//   NativeModules: {
//       RNPasscodeStatus: {
//           supported: jest.fn(),
//           status: jest.fn(),
//           get: jest.fn()
//       }
//   },
//   Dimensions: {
//       get: () => ({
//           width: jest.fn(),
//           height: jest.fn()
//       })
//   },
//   StyleSheet: {
//       create: () => ({})
//     },
//   Platform: {
//       OS: jest.fn(() => 'android'),
//       version: jest.fn(() => 25),
//   },
// }));
  const wrapper = shallow(<App />)
  expect(wrapper).toMatchSnapshot();
});