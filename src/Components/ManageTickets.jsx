import React from 'react';
import logo from '../assets/user.png'
import '../SCSS/managetickets.scss'
export default class ManageTickets extends React.Component {
    render() {
        return (
            <div className="manageticketsContainer">
                <span className="UserConfirmation">Manage Tickets</span>
                <div className="manageticketsbody">
                    <div className="jamesContainer">
                        <div className="jamesImage"></div>
                        <div  className="jamesContent"></div>
                        <div  className="jamesManage"></div>
                    </div>

                </div>
            </div>
        );
    }
}