import React, {Component} from 'react';
import {
    Text,
    View,
    StyleSheet,
    Platform,
    TouchableHighlight,
    Navigator,
} from 'react-native';
import Drawer from 'react-native-drawer';
//import {MemoryRouter, Link, Route} from './router';
import MealList from './scenes/MealList';
import MenuIcon from './icons/Menu';

styles = StyleSheet.create({
    appBar: {
        //backgroundColor: 'gray', 
    },
    appBarItem: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        height: 60,
    }
})

const sceneFactory = {
    scenes: {},

    register(id, Component) {
        this.scenes[id] = Component;
    },

    getRenderer() {
        return (route, navigator) => {
            const Component = this.scenes[route.id]; 
            return (
                
                    <Component route= {route} navigator={navigator} />
                );
            }
    }
}

sceneFactory.register(0, MealList);
    
export class App extends Component {
    renderNavigationBar() {
        return ( 
            <Navigator.NavigationBar
                routeMapper={{
                    LeftButton: (route, navigator, index, navState) =>
                        (<View style={styles.appBarItem}>
                            <TouchableHighlight onPress={() => this.drawer.open()}>
                                <View><MenuIcon /></View>
                            </TouchableHighlight>
                        </View>),
                    RightButton: (route, navigator, index, navState) =>
                        (<View style={styles.appBarItem}><Text>Done</Text></View>), 
                    Title: (route, navigator, index, navState) =>
                        (<View style={styles.appBarItem}><Text>{route.title}</Text></View>),
                }}
                style={styles.appBar}
            />);
    }
    
    render() {  
        return (
            <Drawer
                ref={(r) => this.drawer = r}
                type="displace"
                tapToClose={true}
                openDrawerOffset={0.2} // 20% gap on the right side of drawer
                panCloseMask={0.2}
                closedDrawerOffset={-3}
                styles={{ shadowColor: '#fff', shadowOpacity: 0.4, shadowRadius: 3}}
                tweenHandler={(ratio) => ({
                    main: { opacity:(2-ratio)/2 }
                })}
                open={true}
                content={<View><Text>Hello</Text></View>}
            >
                <Navigator 
                    initialRoute={{ title: 'Meals', id: 0, index: 0 }}
                    renderScene={sceneFactory.getRenderer()}
                    navigationBar={this.renderNavigationBar()}
                    style={{paddingTop: 60}}
                />
            </Drawer>
        )
    }
}