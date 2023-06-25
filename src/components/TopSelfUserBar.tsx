import { Box, Center, HStack } from "native-base"
import React from "react"
import { iconSize, marginEdge } from "../styles/constants"
import { Feather } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

export const TopSelfUserBar = () => {
    return (
        <>
            <HStack justifyContent={'space-between'} px={marginEdge} space={1} alignItems={'center'} pb={1}>
                <HStack alignItems={'center'} space={2}>
                    <Box><Feather name="lock" size={15} color="black" /></Box>
                    <Box _text={{ fontSize: 'xl' }}>Name of User</Box>
                    <Box>
                        <Center _text={{ fontSize: '12' }} borderRadius={100} bg="red.400" size={5}>5</Center>
                    </Box>
                </HStack>
                <HStack space={5} alignItems={'center'}>
                    <Box><Octicons name="diff-added" size={iconSize} color="black" /></Box>
                    <Box><FontAwesome5 name="bars" size={24} color="black" /></Box>
                </HStack>
            </HStack>
        </>
    )
}
