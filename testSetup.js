/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
import Enzyme from 'enzyme';
import 'jest-enzyme';
import Adapter from 'enzyme-adapter-react-16';

/**
 * Set up DOM in node.js environment for Enzyme to mount to
 */
import { JSDOM } from 'jsdom';
import { jsxEmptyExpression } from '@babel/types';

const jsdom = new JSDOM('<!doctype html><html><body></body></html>');
const { window } = jsdom;
function copyProps(src, target) {
  Object.defineProperties(target, {
    ...Object.getOwnPropertyDescriptors(src),
    ...Object.getOwnPropertyDescriptors(target),
  });
}

global.window = window;
global.document = window.document;
global.navigator = {
  userAgent: 'node.js',
};
copyProps(window, global);

/**
 * Set up Enzyme to mount to DOM, simulate events,
 * and inspect the DOM in tests.
 */

Enzyme.configure({ adapter: new Adapter() });

/**
 * Ignore some expected warnings
 * see: https://jestjs.io/docs/en/tutorial-react.html#snapshot-testing-with-mocks-enzyme-and-react-16
 * see https://github.com/Root-App/react-native-mock-render/issues/6
 */
const originalConsoleError = console.error;
console.error = (message) => {
  if (message.startsWith('Warning:')) {
    return;
  }
  originalConsoleError(message);
};

jest.mock('react-navigation', () => {
    return {
        createAppContainer: jest.fn().mockReturnValue(function NavigationContainer(props) {return null;}),
        createDrawerNavigator: jest.fn(),
        createMaterialTopTabNavigator: jest.fn(),
        createStackNavigator: jest.fn(),
        StackActions: {
            push: jest.fn().mockImplementation(x => ({...x,  "type": "Navigation/PUSH"})),
            replace: jest.fn().mockImplementation(x => ({...x,  "type": "Navigation/REPLACE"})),
        },
        NavigationActions: {
            navigate: jest.fn().mockImplementation(x => x),
        }
    }
});

jest.mock('react-native', () => ({
    NetInfo: {
        addEventListener: jest.fn(),
        fetch: () => {
            return {
                done: jest.fn()
            }
        }
    },
    NativeModules: {
        RNPasscodeStatus: {
            supported: jest.fn(),
            status: jest.fn(),
            get: jest.fn()
        }
    },
    Dimensions: {
        get: () => ({
            width: jest.fn(),
            height: jest.fn()
        })
    },
    StyleSheet: {
        create: () => ({})
      },
    Platform: {
        OS: jest.fn(() => 'android'),
        version: jest.fn(() => 25),
    },
}));
jest.mock('prop-types');
jest.useFakeTimers();