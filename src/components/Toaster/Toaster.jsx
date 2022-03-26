import { Alert, Snackbar } from "@mui/material";
import React, { useLayoutEffect, useState } from "react";

function Toaster({ openToast, severity, message }) {
  const [open, setOpen] = useState(false);

  function handleClose() {
    setOpen(false);
  }

  useLayoutEffect(() => {
    setOpen(openToast);
  }, [openToast]);

  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      anchorOrigin={{ horizontal: "right", vertical: "top" }}
    >
      <Alert onClose={handleClose} severity={severity} sx={{ width: "100%" }}>
        {message}
      </Alert>
    </Snackbar>
  );
}

export default Toaster;
