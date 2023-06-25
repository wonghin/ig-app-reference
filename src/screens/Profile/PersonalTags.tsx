import { Box, Center, ScrollView } from 'native-base'
import React from 'react'
import { PostGridExample } from './mocks/PostGridExample'
import { PostGrid } from './mocks/PostGrid'

export const PersonalTags = () => {
    return (
        <PostGrid num={30} />
    )
}
