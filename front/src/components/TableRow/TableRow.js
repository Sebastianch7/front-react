import React from 'react';


function TableRow({img= "./img/perfil.jpeg",name = '',email = '',phone = '',enroll_number = '',date_payment = '', id}) {
    return (
        <>
            <tr>
                <td className="border-inicial"><img src={img} /></td>
                <td >{name}</td>
                <td>{email}</td>
                <td>{phone}</td>
                <td>{enroll_number}</td>
                <td>{date_payment}</td>
                <td className="border-final">
                    <a href={`/${id}`} ><img src="./icon/edit.png"/></a>
                    <a href={`/${id}`} ><img src="./icon/delete.png"/></a>
                </td>
            </tr>
            <tr className="espacio"></tr>
        </>
    );
}

export default TableRow;