// import react
import React from 'react';
// immport TableRow component
import TableRow from './TableRow'
// Create functional Table component
function Table(props){
// Function to sort the table 
    const sort = (e) => {
        const header = e.target.textContent;
        props.sortFunct(header);
    }


    return (
        <div className='table-responsive tableMarg'>
            <table className='table table-striped table-hover'>
                <thead>
                    <tr>
                        <th className='tblHeading' category='col' onClick={sort}>#</th>
                        <th className='tblHeading' category='col' onClick={sort}>Name</th>
                        <th className='tblHeading' category='col' onClick={sort}>Age</th>
                        <th className='tblHeading' category='col' onClick={sort}>Country</th>
                        <th className='tblHeading' category='col' onClick={sort}>Email</th>
                        <th category='col' onClick={sort}>Phone Number</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Use map() to iterate over employees and render a TableRow component for each */}
                    {props.employees.map((employee) => {
                        /* Create a TableRow component for ea employee */
                        /* Using uid as a key (unique identifier) */
                        /* Passing the whole employee object as props */
                        return <TableRow key={employee.login.uuid} {...employee} />
                    })}
                </tbody>
            </table>
        </div>
    )
}
// export Table as default
export default Table;