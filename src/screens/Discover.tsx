import { Box, Center, Input, ScrollView, VStack } from 'native-base'
import React from 'react'
import { iconSize, marginEdge } from '../styles/constants'
import { PostGridExample } from './Profile/mocks/PostGridExample'
import { Feather } from '@expo/vector-icons';
import { SearchItem } from '../components/SearchItem';

export const Discover = () => {
    return (
        <Box safeAreaTop bg={'white'}>
            <ScrollView
                stickyHeaderIndices={[0]}
                stickyHeaderHiddenOnScroll={true}
            >
                <SearchItem />
                <PostGridExample />
            </ScrollView>
        </Box>
    )
}
