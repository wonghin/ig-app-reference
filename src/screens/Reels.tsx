import { Box, Center, HStack, VStack } from 'native-base'
import React from 'react'
import { marginEdge, windowHeight } from '../styles/constants'

export const Reels = () => {
    return (
        <Box safeAreaTop px={marginEdge}>
            <VStack justifyContent={'space-between'} h={'100%'}>
                <HStack justifyContent={'space-between'}>
                    <Box _text={{ fontSize: 'xl' }}>Reels</Box>
                    <HStack space={4}>
                        <Box>ICON</Box>
                        <Box>ICON</Box>
                    </HStack>
                </HStack>
                <HStack justifyContent={'space-between'}>
                    <VStack flexDirection={'column-reverse'}>
                        <Box _text={{}}>Text1</Box>
                        <Box _text={{}}>Text2</Box>
                        <Box _text={{}}>Text3</Box>
                        <Box _text={{}}>Text4</Box>
                        <Box _text={{}}>Text5</Box>
                    </VStack>
                    <VStack space={10}>
                        <Box _text={{}}>Text1</Box>
                        <Box _text={{}}>Text2</Box>
                        <Box _text={{}}>Text1</Box>
                        <Box _text={{}}>Text2</Box>
                        <Box _text={{}}>Text3</Box>
                    </VStack>
                </HStack>
            </VStack>
        </Box>
    )
}
