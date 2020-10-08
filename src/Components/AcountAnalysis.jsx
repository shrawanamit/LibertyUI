import React from 'react';
import '../SCSS/acountanalysys.scss'
import logo from '../assets/user.png';
import Button from 'react-bootstrap/Button'
import graph from "../assets/graph.png"
import LineGraph from './LineGraph';
export default class AcountAnalysis extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="acountanalysysContainer">
                    <div className="acountAnalysys">
                        <div className="imageContainer">
                            <img className="imageSize" src={logo} alt='userImage' />
                            <spam className="name">Amit kumar</spam>
                            <spam className="post">Developer</spam>
                        </div>
                        <spam className="about">Loren Gray She rose into fame through<br /> her "lorengray" musical.ly account, where she<br /> has more than 17 million followers</spam>
                        <div className="follow-btn-contaner">
                            <div className="follow-btn">
                                <Button className="follow" variant="primary">Follow</Button>{' '}
                            </div>
                            <div>
                                <hr />
                            </div>

                        </div>

                        <div className="postContener">

                            <div className="post">
                                <span className="totalPost">500</span>
                                <span className="postHeading">Post</span>
                            </div>
                            <div className="post">
                                <span className="totalPost">500</span>
                                <span className="postHeading">Followers</span>
                            </div>
                            <div className="post">
                                <span className="totalPost">500</span>
                                <span className="postHeading">Likes</span>
                            </div>
                        </div>
                    </div>
                    <div className="productanalysys">
                        <div className="productanalysysContent">
                            <div className="topproducts-container">
                                <spam className="topProduct">Top Products</spam>
                                <spam className="topProductCount">598,486</spam>
                                <spam className="topProductpercentage">6.5% changes from today</spam>
                                <hr />
                            </div>
                            <div className="topproducts-container">
                                <spam className="topProduct">Support Cases</spam>
                                <spam className="topProductCount">323,360</spam>
                                <spam className="topProductpercentage">2.5% changes from yesterday</spam>

                            </div>
                        </div>
                        <div className="graph">
                            <img className="graph-image" src={graph} alt="graph" />

                        </div>

                    </div>
                    <div className="salesanalysis">
                        <div className="totalSalesContainer">
                            <div className="totalsale">
                                <span className="totalsaleNo">6,256</span>
                                <span className="totalsalebody">Total sales</span>
                            </div>
                            <div className="totalsale">
                                <span className="totalsaleNo">8569</span>
                                <span className="totalsalebody">Open Campaign</span>
                            </div>
                        </div>
                        <div className="linegraph">
                            {/* <img className="image2" src={linegraph} alt="image2" /> */}
                            <LineGraph />
                        </div>
                        <div className="totalSalesContainer">
                            <div className="totalsale">
                                <span className="totalsaleNo">6,256</span>
                                <span className="totalsalebody">Total sales</span>
                            </div>
                            <div className="totalsale">
                                <span className="totalsaleNo">8569</span>
                                <span className="totalsalebody">Open Campaign</span>
                            </div>
                        </div>

                    </div>
                </div>

            </React.Fragment>
        );
    }
}