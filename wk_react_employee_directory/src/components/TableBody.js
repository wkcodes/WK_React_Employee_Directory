import React from 'react';
// import styles 

function TableBody ({ users }) {
    return (
        <tbody>
            {/*map users*/}
            return (
                <tr key={ users.id }>
                    <td id="firstName" className="align-middle">
                        { user.firstName }
                    </td>
                    <td id="lastName" className="align-middle">
                        { user.lastName }
                    </td>
                    <td id="email" className="align-middle">
                        { user.email }
                    </td>
                </tr>
            )
        </tbody>
    )
}

export default TableBody;