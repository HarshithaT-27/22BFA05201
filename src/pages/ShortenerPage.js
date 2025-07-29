import React, { useState } from "react";
import { Card, CardContent, TextField, Button, Typography, Grid } from "@mui/material";
import log from "../utils/log";

export default function Home() {
  const [links, setLinks] = useState([{ full: "", code: "", expire: "" }]);
  const [shortened, setShortened] = useState([]);

  const addField = () => {
    if (links.length < 5) {
      setLinks([...links, { full: "", code: "", expire: "" }]);
    }
  };

  const handleChange = (i, key, val) => {
    const copy = [...links];
    copy[i][key] = val;
    setLinks(copy);
  };

  const makeShort = () => {
    const valid = links.filter(l => l.full.trim());
    for (let l of valid) {
      try {
        new URL(l.full);
      } catch {
        alert(`Invalid link: ${l.full}`);
        log.error("Invalid URL", l.full);
        return;
      }
    }
    const output = valid.map(l => ({
      original: l.full,
      short: `https://lnksnap.io/${l.code || Math.random().toString(36).slice(2, 7)}`,
      expiry: l.expire || "No expiry"
    }));
    setShortened(output);
    log.info("Shortened links generated", output);
  };

  return (
    <Card sx={{ p: 2 }}>
      <CardContent>
        <Typography variant="h5">Create Short Links</Typography>
        {links.map((l, i) => (
          <Grid container spacing={2} sx={{ mt: 1 }} key={i}>
            <Grid item xs={5}>
              <TextField size="small" fullWidth label="Full URL" value={l.full} onChange={e => handleChange(i, "full", e.target.value)} />
            </Grid>
            <Grid item xs={3}>
              <TextField size="small" fullWidth label="Expiry (min)" value={l.expire} onChange={e => handleChange(i, "expire", e.target.value)} />
            </Grid>
            <Grid item xs={3}>
              <TextField size="small" fullWidth label="Custom Code" value={l.code} onChange={e => handleChange(i, "code", e.target.value)} />
            </Grid>
          </Grid>
        ))}
        <Button sx={{ mt: 2 }} onClick={addField}>+ Add Link</Button>
        <Button sx={{ mt: 2, ml: 2 }} variant="contained" onClick={makeShort}>Generate</Button>

        {shortened.length > 0 && (
          <div style={{ marginTop: "15px" }}>
            {shortened.map((s, idx) => (
              <Card key={idx} sx={{ mt: 1, p: 1, background: "#f9f9f9" }}>
                <Typography>Full: {s.original}</Typography>
                <Typography>Short: {s.short}</Typography>
                <Typography>Expiry: {s.expiry}</Typography>
              </Card>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
