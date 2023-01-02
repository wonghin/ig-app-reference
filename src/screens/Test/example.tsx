// import * as React from 'react';
// import { StyleSheet, View, Text, Animated } from 'react-native';

// import { SceneMap } from 'react-native-tab-view';
// import { NavigationContainer } from '@react-navigation/native';
// import {
//     CollapsibleTabView,
//     useCollapsibleScene,
//     createMaterialCollapsibleTopTabNavigator,
//   } from 'react-native-collapsible-tab-view';

// type Route = {
//     key: string;
//     title: string;
// };

// const SomeRoute: React.FC<{ routeKey: string; color: string }> = ({
//     routeKey,
//     color,
// }) => {
//     const scrollPropsAndRef = useCollapsibleScene(routeKey);

//     return (
//         <Animated.ScrollView
//             style={{ backgroundColor: color }}
//             {...scrollPropsAndRef}
//         >
//             {new Array(20).fill(null).map((_, index) => {
//                 return (
//                     // eslint-disable-next-line react/no-array-index-key
//                     <Text key={index} style={{ padding: 20, color: 'red' }}>
//                         {index}
//                     </Text>
//                 );
//             })}
//         </Animated.ScrollView>
//     );
// };

// const FirstScene = () => <SomeRoute routeKey="first" color="white" />;
// const SecondScene = () => <SomeRoute routeKey="second" color="black" />;

// const HEADER_HEIGHT = 250;

// // set pointerEvents="none" to allow scroll on header
// // see the docs for more information
// const renderHeader = () => (
//     <View pointerEvents="none" style={styles.header}>
//         <Text style={styles.headerText}>COLLAPSIBLE</Text>
//     </View>
// );

// // example with react navigation

// const Tab = createMaterialCollapsibleTopTabNavigator();

// export const WithReactNavigation: React.FC<object> = () => {
//     return (
//         <NavigationContainer>
//             <Tab.Navigator
//                 collapsibleOptions={{
//                     headerHeight: HEADER_HEIGHT,
//                     renderHeader,
//                     disableSnap: true,
//                 }}
//             >
//                 <Tab.Screen name="first" component={FirstScene} />
//                 <Tab.Screen name="second" component={SecondScene} />
//             </Tab.Navigator>
//         </NavigationContainer>
//     );
// };

// // example without react navigation

// const renderScene = SceneMap({
//     first: FirstScene,
//     second: SecondScene,
// });

// export const WithoutReactNavigation: React.FC<object> = () => {
//     const [index, setIndex] = React.useState(0);
//     const [routes] = React.useState<Route[]>([
//         { key: 'first', title: 'First' },
//         { key: 'second', title: 'Second' },
//     ]);

//     const handleIndexChange = (index: number) => {
//         setIndex(index);
//     };

//     return (
//         <CollapsibleTabView<Route>
//             navigationState={{ index, routes }}
//             renderScene={renderScene}
//             onIndexChange={handleIndexChange}
//             renderHeader={renderHeader} // optional
//             headerHeight={HEADER_HEIGHT} // optional, will be computed.
//             disableSnap
//         />
//     );
// };

// const styles = StyleSheet.create({
//     header: {
//         height: HEADER_HEIGHT,
//         backgroundColor: '#2196f3',
//         justifyContent: 'center',
//         alignItems: 'center',
//         elevation: 4,
//     },
//     headerText: {
//         color: 'white',
//         fontSize: 24,
//     },
// });

// export default WithReactNavigation;