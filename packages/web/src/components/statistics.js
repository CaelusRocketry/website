import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const StyledTableCell = withStyles((theme) => ({
  body: {
    backgroundColor: "#0D1321",
    color: theme.palette.common.white,
    fontFamily: {
      sans: ["Karla", "sans-serif"],
    },
  },
  "&:hover": {
    backgroundColor: "#F72C25",
  },
}))(TableCell);

const Statistics = (props) => (
  <section className="container mx-auto">
    <p className="bg-accent text-2xl font-bold inline-block my-8 p-3 text-primary-light">
      {props.title}
    </p>
    <TableContainer>
      <Table>
        <TableBody>
          {props.data.map((elem) =>
            <TableRow hover={true} key={elem.title}>
              <StyledTableCell component="th" scope="row">
                {elem.title}
              </StyledTableCell>
              <StyledTableCell align="right">
                {elem.value}
              </StyledTableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
    <br></br>
  </section>
);

export default Statistics;
