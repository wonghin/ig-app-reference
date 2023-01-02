import create from 'zustand'
import { postStyle } from '../styles/constants'

interface NavBarStyle {
    BottomBarHeight: number
    setBottomBarHeight: (newHeight: number) => void


    isDraged: boolean
    setIsDraged: (newDraged: boolean) => void
}

export const useNavBarStyleStore = create<NavBarStyle>((set, get) => ({
    BottomBarHeight: 0,
    setBottomBarHeight: (height: number) => {
        set({ BottomBarHeight: height })
    },

    isDraged: false,
    setIsDraged: (newDraged: boolean) => {
        set({ isDraged: newDraged })
    }
}));