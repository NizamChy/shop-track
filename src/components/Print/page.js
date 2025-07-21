'use client';
// ** React Imports

// import { useState, useEffect, useRef } from 'react';

// // ** Next Import
// import Link from 'next/link';

// // ** MUI Imports
// import Grid from '@mui/material/Grid';
// import Alert from '@mui/material/Alert';

// // ** Third Party Components
// import axios from 'axios';

// // ** Demo Components Imports
// import PreviewCard from './preview/PreviewCard';
// import PreviewActions from './preview/PreviewCard';
// import { Button, Card } from '@mui/material';

// const InvoicePreview = ({ id }) => {
//   // ** State
//   const now = new Date();
//   const currentMonth = now.toLocaleString('default', { month: 'short' });
//   const [error, setError] = useState(false);
//   const [data, setData] = useState({
//     invoice: {
//       id: 5035,
//       issuedDate: `20 ${currentMonth} ${now.getFullYear()}`,
//       address: '1770 Sandra Mountains Suite 636',
//       company: 'Foster-Pham PLC',
//       companyEmail: 'jamesjoel@chapman.net',
//       country: 'Western Sahara',
//       contact: '(936) 550-1638',
//       name: 'Dana Carey',
//       service: 'UI/UX Design & Development',
//       total: 4263,
//       avatar: '',
//       avatarColor: 'info',
//       invoiceStatus: 'Draft',
//       balance: '$762',
//       dueDate: `12 ${currentMonth} ${now.getFullYear()}`,
//     },
//     paymentDetails: {
//       totalDue: '$12,110.55',
//       bankName: 'American Bank',
//       country: 'United States',
//       iban: 'ETD95476213874685',
//       swiftCode: 'BR91905',
//     },
//   });
//   const printSectionRef = useRef(null);

//   const handlePrintClick = () => {
//     const printContent = printSectionRef.current.innerHTML;
//     const originalContent = document.body.innerHTML;

//     document.body.innerHTML = printContent;
//     window.print();

//     document.body.innerHTML = originalContent;
//   };
//   if (data) {
//     return (
//       <>
//         <div className="flex justify-end my-7">
//           <Button
//             variant="contained"
//             className="bg-cwgreen"
//             onClick={handlePrintClick}
//           >
//             Print
//           </Button>
//         </div>
//         <div
//           className="flex justify-center"
//           id="print-section"
//           ref={printSectionRef}
//         >
//           <Grid container spacing={3} justifyContent="center">
//             <Grid item xl={12} md={10} xs={10}>
//               <PreviewCard data={data} />
//             </Grid>
//           </Grid>
//         </div>
//       </>
//     );
//   } else if (error) {
//     return (
//       <Grid container spacing={6}>
//         <Grid item xs={12}>
//           <Alert severity="error">
//             Invoice with the id: {id} does not exist. Please check the list of
//             invoices: <Link href="/apps/invoice/list">Invoice List</Link>
//           </Alert>
//         </Grid>
//       </Grid>
//     );
//   } else {
//     return null;
//   }
// };

// export default InvoicePreview;

import React, { useEffect, useRef, useState } from 'react';
import './print.css';
import { ComponentToPrintA4single } from './preview/a4-component-single-head';
import { Autocomplete, Box, Button, Grid } from '@mui/material';
import { ComponentToPrintA4Multi } from './preview/a4-component-multi-head';
import { ComponentToPrintA5Single } from './preview/a5-component-single-head';
import { ComponentToPrintA5Multi } from './preview/a5-component-multi-head';
import { ThermalComponentToPrint } from './preview/thermal-component-to-print';
import CustomTextField from '@/@core/components/mui/text-field';

const PrintVoucerMainPage = () => {
  const invoiceData = JSON.parse(sessionStorage.getItem('invoiceInfo'));

  const printSectionRef = useRef(null);
  const [componetToPrint, setComponetToPrint] = useState(1);

  const handlePrintClick = () => {
    const printContent = printSectionRef.current.innerHTML;
    const originalContent = document.body.innerHTML;

    document.body.innerHTML = printContent;
    window.print();

    document.body.innerHTML = originalContent;
  };

  const getDefaultInvoiceType = localStorage.getItem('defaultInvoice') || '1';

  return (
    <div>
      <>
        <Box sx={{ display: 'flex', justifyContent: 'end', mt: 2 }}>
          <Button
            variant="contained"
            className="bg-cwgreen"
            onClick={handlePrintClick}
          >
            Print
          </Button>
        </Box>
        <div className="flex justify-between ">
          <Autocomplete
            fullWidth
            placeholder="Brand "
            sx={{ width: '16%' }}
            size="small"
            disablePortal
            id="combo-box-demo"
            renderOption={(props, option) => {
              return (
                <li {...props} key={option?.value}>
                  {option?.name}
                </li>
              );
            }}
            options={printFormatInfo}
            getOptionLabel={(option) => option?.name}
            onChange={(e, value) => {
              setComponetToPrint(value?.value);
              localStorage.setItem('defaultInvoice', value?.value);
            }}
            renderInput={(params) => (
              <CustomTextField
                {...params}
                label="Select Print Format"
                font="bold"
              />
            )}
          />
        </div>

        <div
          className="flex justify-center"
          id="print-section"
          ref={printSectionRef}
        >
          <Grid container spacing={3} justifyContent="center">
            <Grid item xl={12} md={10} xs={10}>
              {getDefaultInvoiceType === '1' && (
                <ComponentToPrintA4single invoiceData={invoiceData} />
              )}
              {getDefaultInvoiceType === '2' && (
                <ComponentToPrintA4Multi invoiceData={invoiceData} />
              )}
              {getDefaultInvoiceType === '3' && (
                <ComponentToPrintA5Single invoiceData={invoiceData} />
              )}
              {getDefaultInvoiceType === '4' && (
                <ComponentToPrintA5Multi invoiceData={invoiceData} />
              )}
              {getDefaultInvoiceType === '5' && (
                <ThermalComponentToPrint invoiceData={invoiceData} />
              )}
              {/* <PreviewCard data={data} /> */}
            </Grid>
          </Grid>
        </div>
      </>
    </div>
  );
};

export default PrintVoucerMainPage;

const printFormatInfo = [
  { name: 'A4 Single Head', value: 1 },
  { name: 'A4 Multi Head', value: 2 },
  { name: 'A5 Single Head', value: 3 },
  { name: 'A5 Multi Head', value: 4 },
  { name: 'Thermal', value: 5 },
];
