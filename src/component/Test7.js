import React, { Component } from 'react';
import './Test7.css'

class Test7 extends Component {
    handleAddClass = () => {
        this.setState({
            done:true
        })
    }
    handleRemove=() => {
        this.setState({
            done:false
        })
    }
    handleToggle = () =>{
        this.setState({
            done: !this.state.done
        })
    }
    state = {
        done: false
    }
    
    render() {
        const {done} = this.state 
        return (
            <div className="Test7">
                <p>지금은 연습중 입니다.</p>
                <p className="test">지금은 연습중 입니다.</p>
                <p className={`test ${done === true?'on':''}`}>지금은 연습중 입니다.</p>
                <p className={`test ${done && 'on'}`}>지금은 연습중 입니다.</p>
                <p className={`${done && 'on'}`}>지금은 연습중 입니다.</p>

                <button onClick={this.handleAddClass}>클래스 붙이기</button>
                <button onClick={this.handleRemove}>클래스 떼기</button>
                <button onClick={this.handleToggle}>클래스 토글</button>
            </div>
        );
    }
}

export default Test7;