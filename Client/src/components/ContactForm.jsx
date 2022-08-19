import React from "react";
import { TextField, Grid, Box } from "@mui/material";

export const ContactForm = () => {
  return (
    <div>
      <Box
        component="form"
        action="https://api.web3forms.com/submit"
        method="POST"
        sx={{
          m: 10,

          backgroundColor: "white",
          opacity: [0.9, 0.8, 0.7],
          "&:hover": {
            backgroundColor: "primary.main",
            opacity: [1, 1, 1],
          },
        }}
        autoComplete="off"
      >
        <input
          type="hidden"
          name="access_key"
          value="df75318f-633e-4356-85aa-cb014dd99b81"
        />
        <Grid container direction="column" justifyContent="center" alignItems="center" spacing={2} sx={{ p: 2}}>
          <Grid item>
            <TextField
              
              required
              margin="dense"
              label="Name"
              multiline
              type="text"
              name="name"
            />
          </Grid>
          <Grid item>
            <TextField
              
              required
              margin="dense"
              label="Email"
              multiline
              type="text"
              name="email"
            />
          </Grid>
          <Grid item>
            <TextField              
              required
              margin="dense"
              label="Message"
              multiline
              rows={5}
              type="text"
              name="message"
              sx={{ width: '100%' }}
            />
          </Grid>
          <Grid item>
            <button type="submit">Send Message</button>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};
