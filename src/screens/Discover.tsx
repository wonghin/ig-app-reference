import { Box, Center, Input, ScrollView, VStack } from 'native-base'
import React from 'react'
import { iconSize, marginEdge } from '../styles/constants'
import { PostGridExample } from './Profile/mocks/PostGridExample'
import { Feather } from '@expo/vector-icons';
import { SearchItem } from '../components/SearchItem';

export const Discover = () => {
    return (
        <Box safeAreaTop bg={'white'} flex={1}>
            <ScrollView
                stickyHeaderIndices={[0]}
                stickyHeaderHiddenOnScroll={true}
            >
                <Box px={marginEdge}>
                    <SearchItem />
                </Box>

                <PostGridExample numOfCol={3} />
            </ScrollView>
        </Box>
    )
}
