import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Slider } from 'react-native-elements';
import { palette } from '@theme/palette';
import { shadow } from '@utils/styles';
import { color } from '@theme/color';
import { IPokeSliderProps } from '@components/PokeSlider/IPokeSliderProps';

const PokeSlider = ({
  range,
  title,
  minimumValue = 0,
  maximumValue = 100,
  disabled = false,
}: IPokeSliderProps) => {
  const [value, setValue] = useState<number>(range);
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <View style={{ width: '20%' }}>
        <Text>{title}:</Text>
      </View>
      <View
        style={{
          width: '75%',
          alignItems: 'stretch',
          justifyContent: 'center',
        }}>
        <Slider
          disabled={disabled}
          value={value}
          onValueChange={setValue}
          maximumValue={maximumValue}
          minimumValue={minimumValue}
          step={1}
          trackStyle={{ height: 10, borderColor: 'red' }}
          thumbStyle={{
            height: 25,
            width: 20,
            backgroundColor: 'transparent',
          }}
          minimumTrackTintColor={palette.blue}
          thumbProps={{
            children: (
              <View
                style={{
                  ...shadow,
                  width: 45,
                  height: 25,
                  borderRadius: 5,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: palette.white,
                  borderColor: palette.grayDark,
                  borderWidth: 1,
                }}>
                <Text
                  style={{
                    color: color.text,
                    fontSize: 16,
                  }}>
                  {value}
                </Text>
              </View>
            ),
          }}
        />
      </View>
    </View>
  );
};

export default React.memo(PokeSlider, (prevProps, nextProps) => {
  return (
    nextProps.title === prevProps.title && prevProps.range === nextProps.range
  );
});
