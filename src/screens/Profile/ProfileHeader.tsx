import { Box, HStack, VStack, Image, Text, Button } from "native-base"
import { marginEdge, windowHeight } from "../../styles/constants"
import { sample } from "../../../assets/images/images"

export const ProfileHeader = () => {
    return <VStack px={marginEdge} space={3} >
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
}
