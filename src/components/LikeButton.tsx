import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { Box, Pressable, useDisclose } from 'native-base';

export const LikeButton = ({ state = false }: { state: boolean }) => {
    const [isPress, setIsPress] = useState(false)
    const handler = () => {
        setIsPress(!isPress)
    }
    return (
        <Pressable onPress={handler} >
            <Ionicons name="md-heart-outline" size={24} color={isPress ? 'red' : 'black'} />
        </Pressable>
    )
}
