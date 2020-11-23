import React, { Component } from 'react';
import Test12Sub from './Test12Sub';

class Test12 extends Component {
    state = {
        com : 'Test12',
        message : '최상위 부모 컴포넌트입니다'
    }
    handleClick1 = () => {
        this.setState({
            com:'Test12Sub',
            message:'자식 컴포넌트입니다'
        })
    }
    handleClick2 = () => {
        this.setState({
            com : 'Test12SubSUb',
            message : '최하위 자식 컴포넌트입니다'
        })
    }
    handleClick3 = (num) => {
        alert(num)
    }
    handleClick4 = (num1,num2) => {
        alert(num1+num2)
    }
    
    render() {
        return (
            <div>
                <Test12Sub
                    com = {this.state.com}
                    message = {this.state.message}
                    click1 = {this.handleClick1}
                    click2 = {this.handleClick2}
                    click3 = {this.handleClick3}
                    click4 = {this.handleClick4}
                />
            </div>
        );
    }
}

export default Test12;