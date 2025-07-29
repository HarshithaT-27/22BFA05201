import React from "react";
import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";

export default function Reports() {
  const sampleData = [
    {
      short: "https://lnksnap.io/abc12",
      created: "2025-07-20",
      expires: "2025-07-25",
      clicks: 8,
      logs: [
        { time: "2025-07-21 10:05", ref: "Reddit", place: "India" },
        { time: "2025-07-21 12:14", ref: "Instagram", place: "Canada" }
      ]
    }
  ];

  return (
    <div>
      <Typography variant="h5">Link Reports</Typography>
      {sampleData.map((d, idx) => (
        <TableContainer component={Paper} sx={{ mt: 2 }} key={idx}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Short Link</TableCell>
                <TableCell>Created</TableCell>
                <TableCell>Expires</TableCell>
                <TableCell>Clicks</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>{d.short}</TableCell>
                <TableCell>{d.created}</TableCell>
                <TableCell>{d.expires}</TableCell>
                <TableCell>{d.clicks}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Typography variant="subtitle2" sx={{ mt: 1, ml: 1 }}>Click Details:</Typography>
          {d.logs.map((log, i) => (
            <Typography key={i} sx={{ ml: 2 }}>
              - {log.time} | {log.ref} | {log.place}
            </Typography>
          ))}
        </TableContainer>
      ))}
    </div>
  );
}
