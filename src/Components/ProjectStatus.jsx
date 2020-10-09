import React from 'react';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import BarGraph from './BarGraph'
import '../SCSS/projectstatus.scss'
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
export default class ProjectStatus extends React.Component {
    render() {
        return (
            <div className="status-updateContainer">
                <div className="statusContainer">
                    <div className="bargraphcontainer">
                        <span className="graphheading">The Current Chart</span>
                        <BarGraph />

                    </div>
                    <div className="projectStatusContainer">
                        <span className="projectstatus">Project Status</span>
                        <div className="projectstatusno">
                        <span className="Number">76,533</span>
                        <span className="NumberSufix">PCS</span>
                        </div>

                    </div>
                </div>
                <div className="updateContainer">
                    <span className="update">Updates</span>
                    <div className="updateBody">
                        <div className="pointGraph"></div>
                        <div className="updateContent">
                           
                            <span className="UserConfirmation">User Confirmation</span>
                            <span className="UserConfirmationMessage">Donec rutrun congue leo eget malesuade</span>
                            <span className="UserConfirmationDate"><AccessTimeIcon fontSize="small"/>  7 month ago</span>
                        </div>
                        <div className="updateContent">
                            <span className="UserConfirmation">Continous evaluation</span>
                            <span className="UserConfirmationMessage">Donec rutrun congue leo eget malesuade</span>
                            <span className="UserConfirmationDate"><AccessTimeIcon fontSize="small"/>  7 month ago</span>
                        </div>
                        <div className="updateContent">
                            <span className="UserConfirmation">Promotion</span>
                            <span className="UserConfirmationMessage">Donec rutrun congue leo eget malesuade</span>
                            <span className="UserConfirmationDate"><AccessTimeIcon fontSize="small"/>  7 month ago</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}