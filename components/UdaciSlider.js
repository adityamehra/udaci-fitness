import React, { Component } from 'react';
import { View, Text, Slider, StyleSheet } from 'react-native';

import { gray } from '../utils/colors';

export default function UdaciSlider({max, unit, step, value, onChange}) {
	return (
		<View style={styles.row}>
			<Slider
				style={{flex: 1}}
				value={value}
				step={step} 
				maximumValue={max}
				minimumValue={0}
				onValueChange={onChange}
			/>
			<View>
				<Text style={{fontSize: 24, textAlign: 'center'}}>{value}</Text>
				<Text style={{fontSize: 18, color: gray}}>{unit}</Text>
			</View>
			
		</View>
	)
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
  metricCounter: {
    width: 85,
    justifyContent: 'center',
    alignItems: 'center'
  },
})