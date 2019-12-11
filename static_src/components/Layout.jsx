import React from 'react';
import MessageField from './MessageField';
import ChatList from './ChatList';
import Header from './Header';
import '../styles/layout.css';


export default class Layout extends React.Component {

    render() {
        return (
            <div className="layout">
                <Header />
                <div className="layout-canvas">
                    <div className="layout-left-side">
                        <ChatList />
                    </div>
                    <div className="layout-right-side">
                        <MessageField />
                    </div>
                </div>
            </div>
        )
    }
}