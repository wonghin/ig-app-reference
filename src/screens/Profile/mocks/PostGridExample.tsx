import { Box, Divider, HStack, VStack } from 'native-base'
import React, { useEffect } from 'react'
import { useNumberOfPostStore } from '../../../hooks/useNumberofPostStore'
import { postStyle } from '../../../styles/constants'

const ImageExample = () => {
    return (
        <HStack space={postStyle.postGap}>
            <Divider orientation="vertical" bg={'white'} />
            <Box h={postStyle.imageBlockSize} w={postStyle.imageBlockSize} bg={postStyle.imageColor}></Box>
            <Box h={postStyle.imageBlockSize} w={postStyle.imageBlockSize} bg={postStyle.imageColor}></Box>
            <Box h={postStyle.imageBlockSize} w={postStyle.imageBlockSize} bg={postStyle.imageColor}></Box>
        </HStack>
    )
}


export const PostGridExample = () => {
    const updateHeight = useNumberOfPostStore(state => state.updateHeight)

    const number = 13

    useEffect(() => {
        updateHeight(number * 3)

    }, [])

    return (
        <VStack space={postStyle.postGap}>
            {Array.from(Array(number)).map((_, index) => {
                return (
                    <>
                        <ImageExample key={index} />
                    </>
                )
            })}
        </VStack>
    )
}
