import React from 'react';
import { Table } from 'react-bootstrap';
import '../SCSS/table.scss';

export default class TranjectionTable extends React.Component {
    render() {
        return (
            <div className="tableContainer">
                <Table responsive>
                    <thead className="tableheader">
                        <tr className="tableHeading">
                            <th>ID</th>
                            <th>Assignee</th>
                            <th>Task Details</th>
                            <th>Payment Method</th>
                            <th>payment Status</th>
                            <th>amount</th>
                            <th>Tracking Number</th>
                        </tr>
                    </thead>
                    <tbody className="tablebody">
                        <tr className="tableRow">
                            <td>#1</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td><spam className="Approved">Approved</spam></td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                        </tr>
                        <tr className="tableRow">
                            <td>#2</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td><spam className="pending">pending</spam></td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                        </tr>
                        <tr className="tableRow">
                            <td>#3</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td><spam className="rejected">Rejected</spam></td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                        </tr>
                    </tbody>
                </Table>
           </div>
        );
    }
}