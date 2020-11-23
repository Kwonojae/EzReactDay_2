import React, { Component } from 'react';
import './Test10.css'
class Test10 extends Component {
    state = {
        data:[
            {no:1, name:'유재석', age:20, addr:'서울시 송파구', done:false},
            {no:2, name:'권오재', age:25, addr:'서울시 강남', done:true},
            {no:3, name:'이효리', age:28, addr:'서울시 강동', done:false},
            {no:4, name:'엄정화', age:30, addr:'서울시 은평', done:true},
            {no:5, name:'민찬기', age:35, addr:'서울시 강서', done:false},
            {no:6, name:'짱구', age:27, addr:'서울시 강북', done:true},
            {no:7, name:'이순신', age:40, addr:'경기도', done:false}
        ]
    }

    render() {
        return (
            <div className="Test10">
                <table>
                    <caption></caption>
                    <colgroup>
                        <col className="no"/>
                        <col className="name"/>
                        <col className="age"/>
                        <col className="addr"/>
                        <col className="done"/>
                    </colgroup>
                    <thead>
                        <tr><th>번호</th><th>이름</th><th>나이</th>
                            <th>주소</th><th>참여여부</th>
                        </tr>
                    </thead>
                    <tbody>
                      
                            {
                                this.state.data.map(item  => <tr key={item.no}>
                                    <td>{item.no}</td>
                                    <td>{item.name}</td>
                                    <td>{item.age}</td>
                                    <td>{item.addr}</td>
                                    <td>{item.done === true ?'참여':'미참여'}</td>
                                    </tr>
                                )
                            }
                            {/* <td>{this.state.data[0].no}</td>
                            <td>{this.state.data[0].name}</td>
                            <td>{this.state.data[0].age}</td>
                            <td>{this.state.data[0].addr}</td>
                            <td>{this.state.data[0].done === true ? '참여':'미참여'}</td> */}
                        
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Test10;