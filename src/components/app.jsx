import React, { Component } from 'react'
import './app.style.css'

class App extends Component {

    state = {
        count: 0
    }

    intervalId = null

    incrementCount = () => {
        this.setState ({ count: this.state.count + 1 })
    }

    decrementCount = () => {
        this.setState ({ count: this.state.count - 1 })
    }

    startTimer = () => {
        if (this.state.count > 0 && !this.intervalId) {
            this.intervalId = setInterval (() => {
                this.setState ({ count: this.state.count - 1 }, () => {
                    if (this.state.count === 0) {
                        alert ('Timer Finished')
                        clearInterval (this.intervalId)
                        this.intervalId = null
                    }
                })
            }, 1000)
        }
    }

    stopTimer = () => {
        if (this.intervalId) {
            clearInterval (this.intervalId)
            this.intervalId = null
        }
    }

    resetTimer = () => {
        this.setState ({count: 0})
        clearInterval (this.intervalId)
        this.intervalId = null
    }

    render () {
        
        return (
            <div className='app'>
                <h1 className='heading'>Simple Timer</h1>
                <div className='container'>
                    <button className='btn' onClick={this.decrementCount}>-</button>
                    <span className='count'>{this.state.count}</span>
                    <button className='btn' onClick={this.incrementCount}>+</button>
                </div>
                <div className="indicator">
                    <button onClick={this.startTimer} className="btn">Start</button>
                    <button onClick={this.stopTimer} className="btn space">Stop</button>
                    <button onClick={this.resetTimer} className="btn">Reset</button>
                </div>
            </div>
        )
    }
}


export default App