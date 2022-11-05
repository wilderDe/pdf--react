
import React, {useRef} from 'react'
import { useReactToPrint } from 'react-to-print';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Table} from 'react-bootstrap';
export const PdfPrint = () => {
    
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content:()=> componentRef.current,
        documentTitle: 'emp-data',
        onAfterPrint: () => alert('Print success')
    })
    return (
       <>
        <div ref={componentRef} style={{width:'100%', height:window.innerHeight}}>
            <h1 className='text-center my-3 border py-2'>
                Empleados
            </h1>

            <Table className='w-75 mx-auto' bordered>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>name 1</td>
                        <td>email1</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>name 1</td>
                        <td>email1</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>name 1</td>
                        <td>email1</td>
                    </tr>
                </tbody>
            </Table>
            <Table className='w-75 mx-auto' bordered>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>name 1</td>
                        <td>email1</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>name 1</td>
                        <td>email1</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>name 1</td>
                        <td>email1</td>
                    </tr>
                </tbody>
            </Table>
            <Table className='w-75 mx-auto' bordered>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>name 1</td>
                        <td>email1</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>name 1</td>
                        <td>email1</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>name 1</td>
                        <td>email1</td>
                    </tr>
                </tbody>
            </Table>
            <Table className='w-75 mx-auto' bordered>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>name 1</td>
                        <td>email1</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>name 1</td>
                        <td>email1</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>name 1</td>
                        <td>email1</td>
                    </tr>
                </tbody>
            </Table>
            <Table className='w-75 mx-auto' bordered>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>name 1</td>
                        <td>email1</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>name 1</td>
                        <td>email1</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>name 1</td>
                        <td>email1</td>
                    </tr>
                </tbody>
            </Table>
            <Table className='w-75 mx-auto' bordered>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>name 1</td>
                        <td>email1</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>name 1</td>
                        <td>email1</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>name 1</td>
                        <td>email1</td>
                    </tr>
                </tbody>
            </Table>
        </div>
        <button onClick={handlePrint}>Descargar</button>
       </>
    )
}
