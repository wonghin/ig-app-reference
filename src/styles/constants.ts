import { Dimensions } from 'react-native';
export const windowWidth = Dimensions.get('window').width;
export const windowHeight = Dimensions.get('window').height;
export const marginEdge = 3;
export const iconSize = 28
export const imageBlockSize = windowWidth / 3
export const imageColor = 'gray.200'
export const postGap = 0.49

export const postStyle = {
    marginEdge: marginEdge,
    iconSize: iconSize,
    imageBlockSize: windowWidth / 3,
    imageColor: imageColor,
    postGap: postGap

}