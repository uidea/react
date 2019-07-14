import React from 'react';


class Example extends React.Component{
    constructor(props){
        super(props)
        console.log(this.props)
    }

    render(){
        return (
        <div>
            <button onClick={this.props.onClick}>{this.props.text}</button>
        </div>); 
    }
    
}

export default Example;