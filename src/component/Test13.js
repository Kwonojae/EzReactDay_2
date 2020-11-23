import React, { Component } from 'react';

class Test13 extends Component {
    state = {
        data : [
        {no:1, name:'홍길동', age:20, addr:'서울', done:false},
        {no:2, name:'강호동', age:5, addr:'인천', done:true},
        {no:3, name:'김철수', age:15, addr:'부산', done:false},
        {no:4, name:'짱구', age:8, addr:'경주', done:true},
        {no:5, name:'맹구', age:5, addr:'미국', done:false},
    ]
}

handleClick1 = () => {
    this.setState({
        //필터는 배열로 출력 
        data : this.state.data.filter(item => item.no !== 1)
    })
}
handleClick2 = () => {
    this.setState({
        data: this.state.data.filter(item => item.no !== 4)
    })
}
handleClick3 = () => {
    this.setState({
        data: this.state.data.filter(item => item.no !== 5)
    })
}
handleClick4 = (num) => {   //많이씀
    this.setState({
        data : this.state.data.filter( item => item.no !== num)
    })
}
handleClick5 = (id) => {    //갱신하는 방법
    this.setState({
        data : this.state.data.map(item => {
            if(item.no === id) {
                return {
                    ...item,
                    name:'김길동',
                    age:10,
                    addr:'경주'
                }
            } else {
                return item;
            }
        })
    })
}
handleClick6 = () => {}

    render() {
        const { data } = this.state
        return (
            <div>
                <p>
                    <button onClick={this.handleClick1}>1번삭제</button>
                    <button onClick={this.handleClick2}>4번삭제</button>
                    <button onClick={this.handleClick3}>5번삭제</button>
                </p>

                <p>
                    <button onClick={() => this.handleClick4(2)}>2번삭제</button>
                    <button onClick={() => this.handleClick4(4)}>4번삭제</button>
                </p>

                <p>
                    <button onClick={() => this.handleClick5(1)}>1번수정</button>
                    <button onClick={() => this.handleClick5(2)}>2번수정</button>
                    <button onClick={() => this.handleClick5(3)}>3번수정</button>
                </p>
                <ul>
                    {
                        data.map( item => <li key={item.no}>
                            {item.no}/{item.name}/{item.age}/{item.addr}/
                            {item.done && <button>확인</button>}
                            {item.done || <button>취소</button>}
                        </li>)
                    }
                </ul>
            </div>
        );
    }
}

export default Test13;