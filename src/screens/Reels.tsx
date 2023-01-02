import { Box, Center, HStack, VStack, Image, ScrollView, Pressable } from 'native-base'
import React from 'react'
import { IconNameHorizontal } from '../components/IconNameHorizontal'
import { iconSize, marginEdge, windowHeight, windowWidth } from '../styles/constants'
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { sample } from '../../assets/images/images';
import { ImageBackground, StyleSheet } from 'react-native';
import { ReelComponent } from '../components/ReelComponent';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';





export const Reels = () => {
    const tabBarHeight = useBottomTabBarHeight();
    return (
        <Box >
            <Pressable position={'absolute'} zIndex={1} right={2 * marginEdge}
                _pressed={{ opacity: '0.5/.' }}
                top={windowHeight * 0.10}>
                <Feather name="camera" size={iconSize} color="black" />
            </Pressable>
            <ScrollView
                pagingEnabled={true}
                stickyHeaderIndices={[0]}
            >
                <Box _text={{ fontSize: '2xl', color: 'white', left: 10, fontWeight: 'bold' }} position={'absolute'} top={windowHeight * 0.1}>
                    Reels
                </Box>
                {
                    Array.from(Array(5)).map((_, index) => {
                        return (
                            <ReelComponent key={index} bottomBarHeight={tabBarHeight} />
                        )
                    })
                }
            </ScrollView>

        </Box>
    )
}
