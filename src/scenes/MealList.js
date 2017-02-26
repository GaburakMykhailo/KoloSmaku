import React, {Component} from 'react';
import {
    View, 
    Text, 
    Animated, 
    TouchableHighlight,
    StyleSheet,
} from 'react-native'


export default class MealList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            animation: new Animated.Value(20),
        };
    }

    handleClick = () => {
        console.log('click');
            
        Animated.timing(
            this.state.animation,
            {toValue: 30},
        ).start();


        setTimeout(() => 
            Animated.timing(
                this.state.animation,
                {toValue: 20},
            ).start(),
            400
        )

    }

    render() {
        const {route} = this.props;

        console.log(this.props);

        return (
            <View>
                <TouchableHighlight 
                    onPress={this.handleClick}
                >
                    <Text> Press me for animation </Text>
                
                </TouchableHighlight>
            
                <Animated.Text
                    style={{fontSize: this.state.animation}}
                >
                    {route.title}
                    Hello my first activity! Coolsss
                </Animated.Text>
            </View>);
    }
}
