import React, {Component} from 'react';
import {
    Text,
    View,
    StyleSheet,
    Platform,
    TouchableHighlight,
} from 'react-native';
import {MemoryRouter, Link, Route} from './router';

styeles = StyleSheet.create({
    container: {
        
    }
})

export class App extends Component {
    render() {
        return (
            <MemoryRouter>
                <View>
                    <Text>
                        Main App starting...
                    </Text>
                    <Link to='main'><Text>Main</Text></Link>
                    <Link to='second' underlayColor='red'><Text>Second</Text></Link>
                    <Route path='/main' component={() => <View><Text>Main</Text></View>} />
                    <Route path='/second' component={() => <View><Text>Second</Text></View>} />
                </View>
            </MemoryRouter>
        )
    }
}