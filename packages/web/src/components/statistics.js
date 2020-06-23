import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const StyledTableCell = withStyles((theme) => ({
    body: {
        backgroundColor: '#0D1321',
        color: theme.palette.common.white,
        fontFamily: {
            sans: ['Karla', 'sans-serif'],
        },
    },
    "&:hover": {
        backgroundColor: '#F72C25',
    },
}))(TableCell);


const rows = ['Engine', 'Thrust', 'Propellants', 'Specific impulse', 'Burn time', 'Feed system',
    'Cooling system', 'ignition source', 'Recovery system', 'Altitude', 'Max speed'];

const Statistics = (props) => (
    <section className="container mx-auto">
        <TableContainer>
            <Table>
                <TableBody>
                    {rows.map((elem, index) => (
                        props.data[index] !== "" &&
                        <TableRow hover={true} key={index}>
                            <StyledTableCell component="th" scope="row"> {elem} </StyledTableCell>
                            <StyledTableCell align="right">{props.data[index]}</StyledTableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </section>
)

export default Statistics