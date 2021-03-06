import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Test4Sub extends Component {
    render() {
        const{
            name,age,color,addr,sex,done,tel
        }=this.props;
        return (
            <div style={{
                border:'1px solid',
                width:400,
                padding:20,
                borderColor: this.props.color,
                marginBottom:50

            }}>
                <ul>
                    <li>이름:{name}</li>
                    <li>나이:{age}</li>
                    <li>주소:{addr}</li>
                    <li>전번:{tel}</li>
                    <li>성별:{sex}</li>
                    <li>{done===true?'참':'거짓'}</li>
                    <li>{done && '참참'}</li>
                    <li>{done || '거짓'}</li>
                </ul>
            </div>
        );
    }
}

export default Test4Sub;

Test4Sub.propTypes = {
    name : PropTypes.string.isRequired,
    age : PropTypes.number,
    addr : PropTypes.string,
    sex : PropTypes.string,
    tel : PropTypes.string,
    done : PropTypes.bool
}

Test4Sub.defaultProps={
    name:'아무나',
    age:10,
    addr:'지역',
    tel:'000-0000-0000',
    done:false,
    sex : '무'
}