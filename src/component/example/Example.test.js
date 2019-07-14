import React from 'react';
import Adapter from 'enzyme-adapter-react-16'
import enzyme,{shallow,configure } from 'enzyme';
import Example from './example';
configure({ adapter: new Adapter() });

describe('Example',()=>{
    it('Test button name',()=>{
        const name = '按钮名';
        const app = shallow(<Example text={name}/>)
        expect(app.find('button').text()).toEqual('按钮名');
        let btnName=app.find('button').text();
        console.log('button Name:'+btnName)
    });
    it('Test click event',()=>{
        const onClick = ()=>{
            console.log("this is simulate click")
        }
        const app = shallow(<Example onClick={onClick} />)
        app.simulate('click');
    });
});
