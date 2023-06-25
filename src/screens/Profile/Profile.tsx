import { Box, HStack, ScrollView, Button } from 'native-base'
import React, { useEffect, useMemo, useRef, useState } from 'react'
import { windowWidth } from '../../styles/constants'

import { IconHorizontalScrollView } from '../../components/IconHorizontalScrollView';

import { PersonalPost } from './PersonalPosts';

import { ProfileHeader } from './ProfileHeader';
import { TopSelfUserBar } from '../../components/TopSelfUserBar';
import { PersonalReels } from './PersonalReels';
import { PersonalTags } from './PersonalTags';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';

interface TabButton {
    text: string
    handler: () => {}
}

const TabButton = ({ text, handler, isFocus = false }: { text: string, handler: () => {}, isFocus: boolean }) => {
    return (
        <Button
            variant={'unstyled'}
            borderRadius={0}
            borderBottomColor={isFocus ? 'black' : 'white'}
            borderBottomWidth={1}
            // borderRightWidth={1}
            bg={'white'}
            w={windowWidth / 3}
            onPress={handler}
        >
            {text}
        </Button>
    )
}

export const Profile = () => {
    const [tab, setTab] = useState(0)
    const scrollHorizontalRef = useRef({ x: 0, y: 0, animated: true });
    const scrollVerticalRef = useRef({ x: 0, y: 0, animated: true });
    const ref = useRef(null)

    const tabHandler = (tab: number, x: number) => {
        //@ts-ignore
        scrollHorizontalRef.current.scrollTo({ x: x, animated: true });
        //@ts-ignore
        scrollVerticalRef.current.scrollTo({ x: 0, y: 0, animated: true })
        setTab(tab)

        // ref.current.measure((x, y, width, height, pageX, pageY) => {
        //     scrollVerticalRef.current.scrollTo({ x: 0, y: pageY, animated: true });
        // });
    }



    const tabButton = useMemo(
        () =>
            [
                {
                    text: 'Post',
                    handler: async () => tabHandler(0, 0)
                },
                {
                    text: 'Reel',
                    handler: async () => tabHandler(1, windowWidth)
                },
                {
                    text: 'Tag',
                    handler: async () => tabHandler(2, windowWidth * 2)
                },
            ], []

    )


    return (
        <Box safeAreaTop bg={'white'} flex={1}>
            <TopSelfUserBar />
            <ScrollView bg={'white'}
                stickyHeaderIndices={[2]}
                scrollEnabled
                ref={scrollVerticalRef}
                contentContainerStyle={{}}
                scrollIndicatorInsets={{
                    top: 0, left: 0, bottom: 0, right: 0
                }}
            // showsVerticalScrollIndicator={false}
            >
                <ProfileHeader />
                <Box my={4} >
                    <IconHorizontalScrollView />
                </Box>
                <HStack justifyContent={'space-evenly'} ref={ref}>
                    {tabButton.map((value, index) =>
                        <TabButton key={index} text={value.text} handler={value.handler} isFocus={index === tab} />
                    )}
                </HStack>
                <ScrollView
                    pagingEnabled={true}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    onMomentumScrollEnd={(event) => {
                        let value = event.nativeEvent.contentOffset.x
                        if (value === 0) {
                            setTab(0)
                        } else if (value === windowWidth) {
                            setTab(1)
                        } else if (value === windowWidth * 2) {
                            setTab(2)
                        }
                    }}
                    ref={scrollHorizontalRef}

                >
                    <PersonalPost />
                    <PersonalReels />
                    <PersonalTags />
                </ScrollView>

            </ScrollView >
        </Box >



    )
}
