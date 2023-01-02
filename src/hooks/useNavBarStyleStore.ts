import create from 'zustand'
import { postStyle } from '../styles/constants'

interface NavBarStyle {
    BottomBarHeight: number
    setBottomBarHeight: (newHeight: number) => void
}

export const useNavBarStyleStore = create<NavBarStyle>((set, get) => ({
    BottomBarHeight: 0,
    setBottomBarHeight: (height: number) => {
        set({ BottomBarHeight: height })
    },
}));