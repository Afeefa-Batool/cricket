import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { TableColl } from "./stadanTableStyle";
import { tableFakeData } from "../FakeData/FakeData";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const StadanTable = () => {
  return (
    <div className="mt-10 container mx-auto">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead
            sx={{
              background: "linear-gradient(45deg, #D8DF21 0%, #FAAF3B 100%)",
            }}
          >
            <TableRow>
              <TableColl>LIÐ</TableColl>
              <TableColl>L</TableColl>
              <TableColl>U</TableColl>
              <TableColl>J</TableColl>
              <TableColl>T</TableColl>
              <TableColl>M</TableColl>
              <TableColl>+/-</TableColl>
              <TableColl>S</TableColl>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableFakeData.map((data, i) => (
              <TableRow
                key={i}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableColl component="th" scope="row">
                  <div className="flex items-center gap-4">
                    <p className="m-0 text-xl font-bold">{i + 1}</p>
                    <div>
                      <FiberManualRecordIcon sx={{
                        width: "14px"
                      }}/>
                    </div>
                    <div className="flex items-center gap-4">
                      <img className="w-10" src={data.flag} alt="" />
                      <p className="text-[22px] font-semibold"> {data.name}</p>
                    </div>
                  </div>
                </TableColl>
                <TableColl>{data.l}</TableColl>
                <TableColl>{data.u}</TableColl>
                <TableColl>{data.j}</TableColl>
                <TableColl>{data.t}</TableColl>
                <TableColl>{data.m}</TableColl>
                <TableColl>{data.plusMinus}</TableColl>
                <TableColl>{data.s}</TableColl>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default StadanTable;
