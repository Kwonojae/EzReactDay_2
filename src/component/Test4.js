import React, { Component } from 'react';
import Test4Sub from './Test4Sub';

class Test4 extends Component {
    render() {
        return (
            <div>
                <h2>자식 컴포넌트,props,타입,디폴트</h2>
                <Test4Sub
                    name='길동이'
                    age={20}
                    addr='서울'
                    tel='000-0000-0000'
                    sex='남자'
                    color='red'
                    done={true}
                />
                <Test4Sub
                    name='오재'
                    age={30}
                    sex='남자'
                    color='blue'
                />
                <Test4Sub/>
            </div>
        );
    }
}

export default Test4;