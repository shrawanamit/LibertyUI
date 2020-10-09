import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
import ExploreOutlinedIcon from '@material-ui/icons/ExploreOutlined';
import FilterVintageOutlinedIcon from '@material-ui/icons/FilterVintageOutlined';
import FlagOutlinedIcon from '@material-ui/icons/FlagOutlined';
import '../SCSS/dashboard.scss'
import TotalCount from './TotalCount'
import AcountAnalysis from './AcountAnalysis'
import TranjectionTable from './TranjectionTable';
import ProjectStatus from './ProjectStatus';
import ManageTickets from './ManageTickets';
import logomini from '../assets/logo-mini.svg';



export default class DashBoard extends React.Component {
    render() {
        return (
            <div className="DashBord">
                <div className="toolBar">
                    <div className="tool-Bar-part1">
                        <div className="heading">
                            <img src={logomini} className="logomini"/>
                            <spam className="Liberty">Liberty</spam>
                            <spam className="ui">UI</spam>
                        </div>
                        <div className="iconsContainer">
                            <div className="searchBarcontainer">
                                <SearchIcon className="searchIcons" />
                                <InputBase
                                    fullWidth
                                    type="text"
                                    name="query"
                                    size="small"
                                />
                            </div>
                            <div className="notificationIcons">
                                <IconButton edge="start" color="inherit" >
                                    <NotificationsNoneIcon fontSize="small" />
                                </IconButton>
                            </div>
                            <IconButton edge="start" color="inherit" >
                                <AccountCircleIcon />
                            </IconButton>
                        </div>

                    </div>
                    <div className="tool-Bar-part2">
                        <div className="dashBoard">
                            < DashboardOutlinedIcon fontSize="small" className="icons-toolBar"/>
                            <spam className="heading-toolBar">DASHBOARD</spam>
                        </div>
                        <div>
                            < ExploreOutlinedIcon fontSize="small" className="icons-toolBar"/>
                            <spam className="heading-toolBar">WIDGETS</spam>
                        </div>
                        <div>
                            < FilterVintageOutlinedIcon fontSize="small" className="icons-toolBar"/>
                            <spam className="heading-toolBar">UI ELEMENTS</spam>
                        </div>

                        <div>
                            <FlagOutlinedIcon fontSize="small" className="icons-toolBar"/>
                            <spam className="heading-toolBar">PAGES</spam>

                        </div>
                        <div>
                            < ExploreOutlinedIcon fontSize="small" className="icons-toolBar" />
                            <spam className="heading-toolBar">FORMS</spam>

                        </div>
                        <div>
                            < ExploreOutlinedIcon fontSize="small" className="icons-toolBar" />
                            <spam className="heading-toolBar">APPS</spam>
                        </div>
                    </div>
                </div>
                <TotalCount />
                <AcountAnalysis />
                <TranjectionTable />
                <ProjectStatus />
                <ManageTickets />
            </div>
        );
    }
}