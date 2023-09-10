import { Ionicons, AntDesign } from '@expo/vector-icons';
import { Pressable } from 'native-base';
import React, { useState } from 'react';

export const LikeButton = ({ state = false }: { state: boolean }) => {
    const [isPress, setIsPress] = useState(false)
    const handler = () => {
        setIsPress(!isPress)
    }
    return (
        <Pressable onPress={handler} >
            {isPress ?
                <AntDesign name="hearto" size={24} color="black" /> :
                <AntDesign name="heart" size={24} color="red" />
            }
        </Pressable>
    )
}
