import { create } from 'zustand'

interface MyTabStyle {
    isTab: boolean
    setIsTab: (bool: boolean) => void
}

export const useMyTabStore = create<MyTabStyle>((set, get) => ({
    isTab: false,
    setIsTab: (bool: boolean) => {
        set({ isTab: bool })
    }
}));