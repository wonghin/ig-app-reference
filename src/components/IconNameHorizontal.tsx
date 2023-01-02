import { Box, Button, HStack, Image, VStack } from 'native-base'
import React from 'react'
import { sample } from '../../assets/images/images'


interface Props {
    showFollow: boolean
    showLocation: boolean
}

export const IconNameHorizontal = (props: Props) => {
    return (
        <HStack alignItems={'center'}>
            <Box pr={2}>
                <Image size={10} borderRadius={100} source={
                    sample
                } alt="Alternate Text" />
            </Box>
            <VStack>
                <Box>Name of user</Box>
                {
                    props.showLocation &&
                    <Box mt={-1} _text={{ fontSize: '11' }}>This is location</Box>
                }
            </VStack>
            {
                props.showFollow && <Button variant={'ghost'} size={'md'} _text={{ color: 'black' }}>Follow</Button>
            }
        </HStack >
    )
}
