// import react
import React from 'react';
// immport TableRow component

// Create functional Table component
function Table(props){
// Function to sort the table 


    return (
        <div className='table-responsive'>
            <table className='table table-striped table-dark table-hover'>
                <caption>List of employees</caption>
                <thead>
                    <tr>
                        <th category='col'>Name</th>
                        <th category='col'>Age</th>
                        <th category='col'>Country</th>
                        <th category='col'>Email</th>
                        <th category='col'>Phone Number</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Use map() to iterate over employees and render a TableRow component for each */}
                </tbody>
            </table>
        </div>
    )
}
// export Table as default
export default Table;