import { Box, HStack, ScrollView, Image, VStack, Center, Text, Button } from 'native-base'
import React from 'react'
import { marginEdge, windowHeight, iconSize, windowWidth } from '../../styles/constants'
import { Feather } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { IconHorizontalScrollView } from '../../components/IconHorizontalScrollView';
import { ProfileTabNavigation } from '../../routes/ProfileTab';
import { sample } from '../../../assets/images/images';
import { NavigationContainer } from '@react-navigation/native';
import { useNumberOfPostStore } from '../../hooks/useNumberofPostStore';
import { useNavBarStyleStore } from '../../hooks/useNavBarStyleStore';

const TopUserBar = () => {

}

const TopSelfUserBar = () => {
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

export const Profile = () => {
    const height = useNumberOfPostStore(state => state.height)
    const isDraged = useNavBarStyleStore(state => state.isDraged)
    // console.log(isDraged);


    return (
        <>
            <Box safeArea bg={'white'}>
                <TopSelfUserBar />
                <ScrollView bg={'white'}
                    stickyHeaderIndices={[2]}
                    scrollEnabled
                // scrollEnabled={isDraged ? true : false}
                // showsVerticalScrollIndicator={false}
                >
                    <VStack px={marginEdge} space={3} >
                        <HStack justifyContent={'space-between'} alignItems={'center'} pt={4}>
                            <Box borderWidth={4} borderRadius={100} borderColor={'black'}>
                                <Image size={windowHeight * 0.08}
                                    borderRadius={100}
                                    borderColor={'white'}
                                    borderWidth={3}
                                    source={sample} alt="Alternate Text" />
                            </Box>
                            <HStack space={6} mr={7}>
                                <VStack alignItems={'center'}>
                                    <Box>2</Box>
                                    <Box>Posts</Box>
                                </VStack>
                                <VStack alignItems={'center'}>
                                    <Box>500</Box>
                                    <Box>Followers</Box>
                                </VStack>
                                <VStack alignItems={'center'}>
                                    <Box>500</Box>
                                    <Box>Following</Box>
                                </VStack>
                            </HStack>
                        </HStack>
                        <VStack >
                            <Text>User name</Text>
                            <Box mt={-1} _text={{}}>
                                some dummy text
                            </Box>
                        </VStack>
                        <Box>
                            <Button bg={'black'}>Edit Profile</Button>
                        </Box>
                    </VStack>

                    <Box my={4}>
                        <IconHorizontalScrollView />
                    </Box>
                    {/* <Box height={height + 52} > */}
                    <Box h={windowHeight}>
                        <ProfileTabNavigation />
                    </Box>

                </ScrollView>
            </Box>
        </>



    )
}
