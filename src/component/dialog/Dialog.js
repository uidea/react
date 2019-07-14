import React from 'react';
import './dialog.scss'

class Dialog extends React.Component {

    constructor(props) {
        super(props);
        console.log(props)
        // this.handleItemClick = this.handleItemClick.bind(this)
    }

    handleItemClick(entry, args) {
        this.props.onClick(entry);
    }

    render() {
        return (
            <div className="dialog">
                <div className="dialog-panel">
                    <div className="title">提示</div>
                    <div className="content">根据华尔街日报的消息，从每周内开始美国已经放弃对中国的全面制裁，中美双方达成友好协商</div>
                    <div className="button" onClick={this.handleItemClick.bind(this)}>确定</div>
                </div>
            </div>
        );
    }
}
export default Dialog;