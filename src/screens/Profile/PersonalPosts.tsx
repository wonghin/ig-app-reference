import { Box, Center } from 'native-base'
import React from 'react'

import { PostGridExample } from './mocks/PostGridExample'
import { PostGrid } from './mocks/PostGrid'

export const PersonalPost = () => {
    return (
        <PostGrid num={9} />
    )
}
