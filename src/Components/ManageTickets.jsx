import React from 'react';
import logo from '../assets/user.png'
import '../SCSS/managetickets.scss'
import Button from 'react-bootstrap/Button'
export default class ManageTickets extends React.Component {
    render() {
        return (
            <div className="manageticketsContainer">
                <span className="manageTickets">Manage Tickets</span>
                <div className="manageticketsbody">
                    <div className="jamesContainer">
                        <div className="jamesImage">
                            <img src={logo} alt="james" className="james" />
                        </div>
                        <div className="jamesContent">
                            <span className="jamesMessage">james: [#23047] Donec rutrum congue leo eget malesuda</span>
                            <span className="jamesMessage1">At your disposal are eight types of charts with multiple options for customization.</span>
                            <div className="jamesMessageDate">
                                <span className="jamesRespondTime">Last responded: 3 hours ago</span>
                                <span className="jamesRespondTime">Due in: 2 Days</span>
                            </div>
                        </div>
                        <div className="jamesManage">
                            <Button className="follow" variant="primary">Manage</Button>{' '}
                        </div>
                    </div>
                    <div className="stellaContainer">
                       
                        <div className="jamesImage">
                            <img src={logo} alt="james" className="james" />
                        </div>
                        <div className="jamesContent">
                            <span className="jamesMessage" >james: [#23047] Donec rutrum congue leo eget malesuda</span>
                            <span className="jamesMessage1">At your disposal are eight types of charts with multiple options for customization.</span>
                            <div className="jamesMessageDate">
                                <span className="jamesRespondTime">Last responded: 3 hours ago</span>
                                <span className="jamesRespondTime">Due in: 2 Days</span>
                            </div>
                        </div>
                        <div className="jamesManage">
                            <Button className="follow" variant="primary">Manage</Button>{' '}
                        </div>
                    </div>
                    <div className="jamesContainer">
                        <div className="jamesImage">
                            <img src={logo} alt="james" className="james" />
                        </div>
                        <div className="jamesContent">
                            <span className="jamesMessage">james: [#23047] Donec rutrum congue leo eget malesuda</span>
                            <span className="jamesMessage1">At your disposal are eight types of charts with multiple options for customization.</span>
                            <div className="jamesMessageDate">
                                <span className="jamesRespondTime">Last responded: 3 hours ago</span>
                                <span className="jamesRespondTime">Due in: 2 Days</span>
                            </div>
                        </div>
                        <div className="jamesManage">
                            <Button className="follow" variant="primary">Manage</Button>{' '}
                        </div>
                    </div>



                </div>
            </div>
        );
    }
}