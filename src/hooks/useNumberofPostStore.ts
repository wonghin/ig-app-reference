import create from 'zustand'
import { postStyle } from '../styles/constants'

interface PostHeight {
    height: number
    updateHeight: (newHeight: number) => void
}

export const useNumberOfPostStore = create<PostHeight>((set, get) => ({
    height: postStyle.imageBlockSize,
    updateHeight: (newAmount: number) => {
        // console.log("1 h: ", Math.ceil(newAmount / 3));
        // console.log("h value:", postStyle.imageBlockSize);

        set({ height: Math.ceil(newAmount / 3) * (postStyle.imageBlockSize + postStyle.postGap) })
    },
}));