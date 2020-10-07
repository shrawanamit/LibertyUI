import React from 'react';
import '../SCSS/totalCount.scss'
import GroupOutlinedIcon from '@material-ui/icons/GroupOutlined';
import GpsFixedIcon from '@material-ui/icons/GpsFixed';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import EmojiEventsOutlinedIcon from '@material-ui/icons/EmojiEventsOutlined';
export default class TotalCount extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="totalCountContainer">
                    <div className="newUserContainer">
                        <div className="icons">
                            <GroupOutlinedIcon fontSize='large'/>
                        </div>
                        <div className="totalCountHeadingContainer">
                            <span className="totalCountHeading">New Users</span>
                            <span className="totalCountNo">65,650</span>
                        </div>
                    </div>
                    <div className="newUserContainer">
                        <div  className="icons">
                            <CheckCircleOutlineIcon fontSize='large'/>
                        </div>
                        <div className="totalCountHeadingContainer">
                            <span className="totalCountHeading">New Feedbacks</span>
                            <span className="totalCountNo">65,650</span>
                        </div>
                    </div>
                    <div className="newUserContainer">
                        <div  className="icons">
                            <EmojiEventsOutlinedIcon fontSize='large'/>
                        </div>
                        <div className="totalCountHeadingContainer">
                            <span className="totalCountHeading">Employees</span>
                            <span className="totalCountNo">1000</span>
                        </div>
                    </div>
                    <div className="newUserContainer">
                        <div  className="icons">
                            <GpsFixedIcon fontSize='large'/>
                        </div>
                        <div className="totalCountHeadingContainer">
                            <span className="totalCountHeading">Total Sales</span>
                            <span className="totalCountNo">1000</span>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}