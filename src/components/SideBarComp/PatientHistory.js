import React, { useState } from 'react'
import Header from '../Header';
import { Box, Button, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataMedicalRecords } from "../../data/MockData";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import DoNotDisturbAltIcon from "@mui/icons-material/DoNotDisturbAlt";
import PrintIcon from "@mui/icons-material/Print";
import LineChart from '../LineChart';
import Linetempchart from '../LineChartTemp';
const PatientHistory = () => {
  const [active,setActive]=useState("one");
     const theme = useTheme();
     const colors = tokens(theme.palette.mode);
     const columns = [
       { field: "id", headerName: "ID" },
       {
         field: "name",
         headerName: "Doctor Name",
         flex: 1,
         cellClassName: "name-column--cell",
       },
       {
         field: "age",
         headerName: "Age",
         type: "number",
         headerAlign: "left",
         align: "left",
       },
       {
         field: "presciptionname",
         headerName: "Presciption Name",
         flex: 1.1,
       },
       {
         field: "medicalreport",
         headerName: "Medical Report",
         flex: 1.2,
       },
       {
         field: "status",
         headerName: "Status",
         flex: 1,
         renderCell: ({ row: { status } }) => {
           return (
             <Box
               width="80%"
               m="0 auto"
               p="5px"
               display="flex"
               justifyContent="center"
               borderRadius="4px"
               backgroundColor={
                 status === "view"
                   ? colors.greenAccent[600]
                   : status === "notAttended"
                   ? colors.redAccent[700]
                   : colors.yellowAccent[700]
               }
             >
               {status === "view" && <PrintIcon />}
               {status === "notAttended" && <DoNotDisturbAltIcon />}
               {status === "Pending" && <PendingActionsIcon />}
               <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
                 {status}
               </Typography>
             </Box>
           );
         },
       },
     ];
     const styles = {
      fontFamily: 'sans-serif',
      textAlign: 'center',
      background: '#333',
      padding: '30px'
    };
  return (
    <div className="w-[60%] h-full flex flex-col text-gray-900 ">
      {/* Patient History */}
      <Box m="10px">
        <Header className="text-gray-900" title="PATIENT HISTORY" subtitle="Find all your History..." />
        <Box m="10px" height="38vh" display="flex" >
          <Box
            className="buttons"
            display="flex"
            flexDirection="column"
            justifyContent="space-evenly"
            
          >
            <Button
              color="secondary"
              variant="contained"
              onClick={() => {
                setActive("one");
              }}
              size={'small'}
            >
              ECG
            </Button>
            <Button
              color="secondary"
              variant="contained"
              onClick={() => {
                setActive("two");
              }}
              size={'small'}
              >
              Temperature
            </Button>
            <Button
              color="secondary"
              variant="contained"
              size={'small'}
              onClick={() => {
                setActive("three");
              }}
                
                >
              Spo2
            </Button>
            <Button
              color="secondary"
              variant="contained"
              size={'small'}
              onClick={() => {
                setActive("four");
              }}
              >
              Blood Pressure
            </Button>
            <Button
              color="secondary"
              size={'small'}
              variant="contained"
              onClick={() => {
                setActive("five");
              }}
              >
              Health Rate
            </Button>
            <Button
              color="secondary"
              size={'small'}
              
              variant="contained"
              onClick={() => {
                setActive("six");
              }}
              
            >
              Sugar level
            </Button>
          </Box>
          <Box className="linechart" height="50vh" width="670px" >
              {active === "one" && <LineChart />}
              {active === "two" && <Linetempchart />}
              {active === "three" && <LineChart />}
              {active === "four" && <LineChart />}
              {active === "five" && <LineChart />}
              {active === "six" && <LineChart />}
          </Box>
        </Box>
        <Box m="20px">
          <Box
            m="20px 0 0 0"
            height="38vh"
            sx={{
              "& .MuiDataGrid-root": {
                border: "none",
              },
              "& .MuiDataGrid-cell": {
                borderBottom: "none",
              },
              "& .name-column--cell": {
                color: colors.greenAccent[300],
              },
              "& .MuiDataGrid-columnHeaders": {
                backgroundColor: colors.blueAccent[700],
                borderBottom: "none",
              },
              "& .MuiDataGrid-virtualScroller": {
                backgroundColor: colors.primary[400],
              },
              "& .MuiDataGrid-footerContainer": {
                borderTop: "none",
                backgroundColor: colors.blueAccent[700],
              },
              "& .MuiCheckbox-root": {
                color: `${colors.greenAccent[200]} !important`,
              },
            }}
          >
            <DataGrid
              checkboxSelection
              rows={mockDataMedicalRecords}
              columns={columns}
            />
          </Box>
        </Box>
      </Box>
    </div>
  )
}
                                            
export default PatientHistory