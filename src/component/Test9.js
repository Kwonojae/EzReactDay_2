import React, { Component } from 'react';

class Test9 extends Component {
    render() {
        const data = [
            {no:1, name:'홍길동', age:20, addr:'서울', done:false},
            {no:2, name:'강호동', age:5, addr:'인천', done:true},
            {no:3, name:'김철수', age:15, addr:'부산', done:false},
            {no:4, name:'짱구', age:8, addr:'경주', done:true},
            {no:5, name:'맹구', age:5, addr:'미국', done:false},
        ]
        return (
            <div>
                <h2>map</h2>
                <p>
                    {data[0].no}/
                    {data[0].name}/
                    {data[0].addr}
                </p>
                <hr/>
                {
                    data.map((item, index) => {
                        return (<p key={index}>
                            {item.no},{item.name},{item.addr}
                            /{item.done===true?'확인':'취소'}
                        </p>)
                    })
                }
                <hr/>
                {
                    data.map( item => <p key={item.no}>
                        {item.no}/{item.name}/{item.addr}/
                        {item.done && <button>확인</button>}
                        {item.done || <button>취소</button>}
                    </p>)
                }
            </div>
        );
    }
}

export default Test9;