import { createMaterialTopTabNavigator, MaterialTopTabBarProps } from "@react-navigation/material-top-tabs";
import { Box, Center, HStack, Pressable, useColorModeValue, VStack, Image, Text, Button } from "native-base";
import React from "react";
import { Animated, ScrollView, StatusBar } from "react-native";
import { IconHorizontalScrollView } from "../components/IconHorizontalScrollView";
import { PersonalImage } from "../screens/Profile/PersonalImage";
import { PersonalReels } from "../screens/Profile/PersonalReels";
import { PersonalTags } from "../screens/Profile/PersonalTags";
import { iconSize, marginEdge, windowHeight, windowWidth } from "../styles/constants";
import { RootTopParamList } from "./RootStackParamList ";
import { Feather } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
const ProfileTab = createMaterialTopTabNavigator<RootTopParamList>();

// const TopSelfUserBar = () => {
//     return (
//         <>
//             <HStack justifyContent={'space-between'} px={marginEdge} space={1} alignItems={'center'} pb={1}>
//                 <HStack alignItems={'center'} space={2}>
//                     <Box><Feather name="lock" size={15} color="black" /></Box>
//                     <Box _text={{ fontSize: 'xl' }}>Name of User</Box>
//                     <Box>
//                         <Center _text={{ fontSize: '12' }} borderRadius={100} bg="red.400" size={5}>5</Center>
//                     </Box>
//                 </HStack>
//                 <HStack space={5} alignItems={'center'}>
//                     <Box><Octicons name="diff-added" size={iconSize} color="black" /></Box>
//                     <Box><FontAwesome5 name="bars" size={24} color="black" /></Box>
//                 </HStack>
//             </HStack>
//         </>
//     )
// }

// export const ProfileHeader = () => {
//     const imageBlockSize = windowWidth / 3.5
//     return (
//         <Box safeArea h={windowHeight}>
//             <TopSelfUserBar />
//             <ScrollView>
//                 <VStack px={marginEdge} space={3}>
//                     <HStack justifyContent={'space-between'} alignItems={'center'} pt={4}>
//                         <Box borderWidth={4} borderRadius={100} borderColor={'black'}>
//                             <Image size={windowHeight * 0.08}
//                                 borderRadius={100}
//                                 borderColor={'white'}
//                                 borderWidth={3}
//                                 source={{
//                                     uri: "https://wallpaperaccess.com/full/317501.jpg"
//                                 }} alt="Alternate Text" />
//                         </Box>
//                         <HStack space={6} mr={7}>
//                             <VStack alignItems={'center'}>
//                                 <Box>2</Box>
//                                 <Box>Posts</Box>
//                             </VStack>
//                             <VStack alignItems={'center'}>
//                                 <Box>500</Box>
//                                 <Box>Followers</Box>
//                             </VStack>
//                             <VStack alignItems={'center'}>
//                                 <Box>500</Box>
//                                 <Box>Following</Box>
//                             </VStack>
//                         </HStack>
//                     </HStack>
//                     <VStack >
//                         <Text>User name</Text>
//                         <Box mt={-1} _text={{}}>
//                             some dummy text
//                         </Box>
//                     </VStack>
//                     <Box>
//                         <Button bg={'black'}>Edit Profile</Button>
//                     </Box>
//                     <Box>
//                         <IconHorizontalScrollView />
//                     </Box>

//                 </VStack>
//             </ScrollView>
//         </Box>



//     )
// }


// const CustomTabHeader = (props: MaterialTopTabBarProps) => {
//     return (
//         <VStack>
//             <ProfileHeader />

//         </VStack>
//     )
// }


export function ProfileTabNavigation() {
    return (
        <ProfileTab.Navigator
            initialRouteName='PersonalImage'
            screenOptions={{
                tabBarStyle: {
                    shadowOpacity: 0.3,
                    shadowOffset: { width: 0, height: 4 },
                    shadowRadius: 3,


                },
                tabBarIndicatorStyle: {
                    backgroundColor: 'black',
                },
                tabBarShowLabel: false,
                tabBarIconStyle: { width: '100%', height: '100%' },
            }}
        >
            <ProfileTab.Screen name="PersonalImage"
                options={{
                    tabBarIcon: ({ focused }) =>
                        focused ? (
                            <MaterialCommunityIcons name="grid" size={iconSize} color="black" />
                        ) : (
                            <MaterialCommunityIcons name="grid" size={iconSize} color="gray" />
                        ),

                }}
                component={PersonalImage} />
            <ProfileTab.Screen name="PersonalReels"
                options={{
                    tabBarIcon: ({ focused }) =>
                        focused ? (
                            <Octicons name="video" size={iconSize} color="black" />

                        ) : (
                            <Octicons name="video" size={iconSize} color="gray" />
                        ),


                }}
                component={PersonalReels} />
            <ProfileTab.Screen name="PersonalTags"
                options={{
                    tabBarIcon: ({ focused }) =>
                        focused ? (
                            <FontAwesome5 name="user" size={iconSize} color="black" />
                        ) : (
                            <FontAwesome5 name="user" size={iconSize} color="gray" />),

                }}
                component={PersonalTags} />

        </ProfileTab.Navigator>
    );
}