import { Box, Center, HStack, VStack, Image } from 'native-base'
import React from 'react'
import { IconNameHorizontal } from '../components/IconNameHorizontal'
import { marginEdge, windowHeight } from '../styles/constants'
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { sample } from '../../assets/images/images';
import { ImageBackground, StyleSheet } from 'react-native';


interface Props {
    bottomBarHeight: number
}


export const ReelComponent = (props: Props) => {
    return (
        <ImageBackground
            source={sample}
            style={{ height: windowHeight - props.bottomBarHeight }}
        >
            <VStack justifyContent={'flex-end'} h={'100%'} pb={2} px={marginEdge}>
                {/* <HStack justifyContent={'space-between'}>
                    <Box _text={{ fontSize: 'xl' }}>Reels</Box>
                    <HStack space={4}>
                        <Feather name="camera" size={24} color="black" />
                    </HStack>
                </HStack> */}
                <HStack justifyContent={'space-between'}>
                    <VStack flexDirection={'column-reverse'} space={1}>
                        <Box _text={{}}>Text1</Box>
                        <Box _text={{}}>Text2</Box>
                        <IconNameHorizontal showFollow={true} showLocation={false} />
                    </VStack>
                    <VStack space={10} alignItems={'center'}>
                        <Ionicons name="md-heart-outline" size={24} color="black" />
                        <Ionicons name="chatbubble-outline" size={24} color="black" />
                        <Ionicons name="ios-arrow-redo-outline" size={24} color="black" />
                        <Entypo name="dots-three-horizontal" size={17} color="black" />
                        <Image source={sample} alt='music_icon' h={8} width={8} borderRadius={7} borderWidth={3} />
                    </VStack>
                </HStack>
            </VStack>
        </ImageBackground>
    )
}
