import React, { Component } from 'react'
import LifeCyclesCDMChild from './LifeCyclesCDMChild'

export class LifeCyclesCDM extends Component {
    constructor(props) {
        console.log('constractor called')
        super(props)

        this.state = {
            data: 'loading',
        }
    }
    getData() {
        console.log('getData() called')
        setTimeout(() => {
            console.log('Data fetched!')
            this.setState({
                data: 'loaded',
            })
        }, 3000)
    }
    componentDidMount() {
        console.log('Component mounted')
        this.getData()
    }
    render() {
        console.log('Render method called')
        return (
            <div>
                {this.state.data}
                <LifeCyclesCDMChild />
            </div>
        )
    }
}

export default LifeCyclesCDM