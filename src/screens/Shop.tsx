import { Box, Button, HStack, Input, Pressable, ScrollView, VStack } from 'native-base'
import React from 'react'
import { iconSize, marginEdge } from '../styles/constants'
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { SearchItem } from '../components/SearchItem';
import { PostGridExample } from './Profile/mocks/PostGridExample';


const TobSearchBar = () => {
    return (
        <Box px={marginEdge}>
            <HStack justifyContent={'space-between'} alignItems={'center'}>
                <Box _text={{ fontSize: '2xl', fontWeight: 'bold' }}>Shop</Box>
                <HStack space={4}>
                    <Pressable
                        _pressed={{ opacity: '0.5' }}
                    >
                        <MaterialIcons name="date-range" size={25} color="black" />
                    </Pressable>

                    <Pressable
                        _pressed={{ opacity: '0.5' }}
                    >
                        <FontAwesome5 name="bars" size={25} color="black" />
                    </Pressable>

                </HStack>
            </HStack>
        </Box>
    )
}

const StickyHeader = () => {
    return (
        <VStack space={1} px={marginEdge} mb={2}>
            <SearchItem />
            <Button bg={'gray.400'}>Videos</Button>
        </VStack>
    )
}

export const Shop = () => {
    return (
        <Box safeArea bg={'white'}>
            {TobSearchBar()}
            <ScrollView
                stickyHeaderIndices={[0]}
                stickyHeaderHiddenOnScroll={true}

            >
                <StickyHeader />
                <PostGridExample numOfCol={2} />

            </ScrollView>

        </Box>
    )
}
