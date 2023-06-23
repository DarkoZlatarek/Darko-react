import React, { Component } from 'react'
import LifeCyclesCDUChild from './LifeCyclesCDUChild'

export class LifeCyclesCDU extends Component {
    constructor(props) {
        console.log('constructor called')
        super(props)

        this.state = {
            greeting: 'Hello!',
        }
    }
    updateGreeting = () => {
        console.log('update greeting called')
        this.setState(prevState => {
            return {
                greeting:prevState.greeting === 'Hello!' ? 'Goodbye!' : 'Hello!'
            }
        })
    }
    componentDidUpdate() {
        console.log('Component did update')
    }
    render() {
        console.log('render method called')
        return (
            <div>
                <h1>{this.state.greeting}</h1>
                <button onClick={this.updateGreeting}>Update greeting</button>
                <LifeCyclesCDUChild parentGreeting={this.state.greeting}/>
            </div>
        )
    }
}

export default LifeCyclesCDU