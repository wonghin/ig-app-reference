import { Box, Pressable } from 'native-base'
import React from 'react'
import { postStyle, windowWidth } from '../../../styles/constants'


const PostItem = ({ text }: { text: string }) => {
    return (
        <Box>
            <Pressable>
                {({ isPressed }) => {
                    return <Box
                        h={postStyle.imageBlockSize} w={postStyle.imageBlockSize} bg={isPressed ? 'red.500' : postStyle.imageColor}
                        justifyContent={'center'}
                        alignItems={'center'}
                        borderWidth={0.5}
                        borderColor={'white'}
                    >
                        {text}
                    </Box>
                }}
            </Pressable>

        </Box>
    )
}

export const PostGrid = ({ num }: { num: number }) => {
    return (
        <Box w={windowWidth} display={'flex'} flexDirection={'row'} flexWrap={'wrap'}>
            {Array.from(Array(num)).map((_, index) =>
                <PostItem key={index} text={index.toString()} />
            )}

        </Box>
    )
}
