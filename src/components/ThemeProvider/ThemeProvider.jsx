import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#d23f57",
    },
    white: {
      main: "#fff",
    },
    text: {
      main: "#2b3445",
    },
    subText: {
      main: "#979faf",
    },
    secondSubText: {
      main: "#d4d7dc",
    },
    bgAdminContent: {
      main: "#f0f2f5",
    },
    blue: {
      main: "#007bff",
    },
    danger: {
      main: "#dc3545",
    },
  },

  components: {
    MuiTypography: {
      variants: [
        {
          props : {
            variant: "body1"
          },
          style: {
            fontSize : "1.4rem"
          }
        },
        {
          props : {
            variant: "body2"
          },
          style: {
            fontSize : "1.4rem"
          }
        },
        {
          props: {
            variant: "u-regular-24",
          },
          style: {
            fontSize: "2.4rem",
          },
        },
        {
          props: {
            variant: "u-regular-20",
          },
          style: {
            fontSize: "2rem",
          },
        },
        {
          props: {
            variant: "u-regular-16",
          },
          style: {
            fontSize: "1.6rem",
          },
        },
        {
          props: {
            variant: "u-regular-14",
          },
          style: {
            fontSize: "1.4rem",
          },
        },
        {
          props: {
            variant: "u-regular-12",
          },
          style: {
            fontSize: "1.2rem",
          },
        },
        {
          props: {
            variant: "u-regular-10",
          },
          style: {
            fontSize: "1rem",
          },
        },
        {
          props: {
            variant: "u-bold-36",
          },
          style: {
            fontSize: "3.6rem",
            fontWeight: "bold",
          },
        },
        {
          props: {
            variant: "u-bold-24",
          },
          style: {
            fontSize: "2.4rem",
            fontWeight: "bold",
          },
        },
        {
          props: {
            variant: "u-bold-18",
          },
          style: {
            fontSize: "1.8rem",
            fontWeight: "bold",
          },
        },
        {
          props: {
            variant: "u-bold-16",
          },
          style: {
            fontSize: "1.6rem",
            fontWeight: "bold",
          },
        },
        {
          props: {
            variant: "u-bold-14",
          },
          style: {
            fontSize: "1.4rem",
            fontWeight: "bold",
          },
        },
        {
          props: {
            variant: "u-bold-12",
          },
          style: {
            fontSize: "1.2rem",
            fontWeight: "bold",
          },
        },
        {
          props: {
            variant: "u-bold-10",
          },
          style: {
            fontSize: "1rem",
            fontWeight: "bold",
          },
        },
      ],
    },

    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: "1.4rem",
        },
      },
    },

    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: "1.6rem",
        },
      },
    },

    MuiNativeSelect: {
      styleOverrides: {
        select: {
          fontSize: "1.6rem !important",
        },
      },
    },

    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontSize: "1.4rem",
        },
      },
    },

    MuiInputBase: {
      styleOverrides: {
        input: {
          fontSize: "1.6rem",
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        message: {
          fontSize: "1.6rem",
        },
      },
    },

    MuiSnackbar: {
      styleOverrides: {
        root: {
          top: "86px",
        },

        anchorOriginTopRight: {
          top: "86px !important",
        },
      },
    },
  },
});

export function Provider({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
