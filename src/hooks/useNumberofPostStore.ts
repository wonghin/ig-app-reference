import create from 'zustand'
import { postStyle } from '../styles/constants'

interface PostHeight {
    height: number
    numOfcol: number
    updateHeight: (newHeight: number, numOfcol: number) => void

}

export const useNumberOfPostStore = create<PostHeight>((set, get) => ({
    height: postStyle.imageBlockSize,
    numOfcol: 3,
    updateHeight: (newHeight: number, numOfcol: number) => {
        // console.log("1 h: ", Math.ceil(newAmount / 3));
        // console.log("h value:", postStyle.imageBlockSize);

        set({ height: Math.ceil(newHeight / numOfcol) * (postStyle.imageBlockSize + postStyle.postGap) })
    },
}));