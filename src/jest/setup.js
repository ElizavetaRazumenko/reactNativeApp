import 'react-native-gesture-handler/jestSetup';
import '@testing-library/jest-native/extend-expect';
import mockSafeAreaContext from 'react-native-safe-area-context/jest/mock';

jest.mock('react-native-safe-area-context', () => mockSafeAreaContext);

jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');

  Reanimated.default.call = () => {};

  return Reanimated;
});

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

jest.mock(
  'react-native/Libraries/Components/Touchable/TouchableOpacity',
  () => {
    const TouchableOpacity = jest.requireActual(
      'react-native/Libraries/Components/Touchable/TouchableOpacity',
    );

    TouchableOpacity.displayName = 'TouchableOpacity';

    return TouchableOpacity;
  },
);
