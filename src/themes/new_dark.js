import { switchClasses } from "@mui/material";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { deepmerge } from "@mui/utils";

import navBg from "../assets/images/exod-sidebar.jpg";
import darkLogo from "../assets/Exodus-Vertical-Logo_2.svg";
import fonts from "./fonts";
import commonSettings from "./global.js";

// TODO: Break repeated use color values out into list of consts declared here
// then set the values in darkTheme using the global color variables

export const darkTheme = {
  logo: darkLogo,
  color: "#FAFAFB",
  gold: "rgb(17, 153, 250)", //"#F8CC82",
  goldDimmed: "#042742",
  goldBright: "#043f42",
  gray: "#A3A3A3",
  textHighlightColor: "rgb(17, 153, 250)", //"#F4D092",
  backgroundColor: "#111a21", //"rgba(0, 0, 0, 0.85)",
  background: `
    linear-gradient(180deg, rgba(4,39,66), rgba(0, 0, 10, 0.9)),
    linear-gradient(333deg, rgba(4,39,66), rgba(180, 255, 217, 0.08)),
    radial-gradient(circle at 77% 89%, rgba(4,39,66), rgba(125, 163, 169, 0) 50%),
    radial-gradient(circle at 15% 95%, rgba(4,39,66), rgba(125, 163, 169, 0) 43%),
    radial-gradient(circle at 65% 23%, rgba(4,39,66), rgba(137, 151, 119, 0) 70%),
    radial-gradient(circle at 10% 0%, rgba(4,39,66), rgba(187,211,204,0) 35%),
    radial-gradient(circle at 11% 100%, rgba(4,39,66), rgba(131, 165, 203, 0) 30%)
    `,
  paperBg: "linear-gradient(237.43deg, #042742 -12.81%, #042742 132.72%)",
  paperBorder: "#323232",
  modalBg: "#24242699",
  popoverBg: "rgba(4,39,66)",
  menuBg: "linear-gradient(237.43deg, #042742 -12.81%, #042742 132.72%)",
  backdropBg: "linear-gradient(237.43deg, #042742 -12.81%, #042742 132.72%)",
  largeTextColor: "rgb(17, 153, 250)", //"#F4D092",
  activeLinkColor: "rgb(17, 153, 250)", //"#F5DDB4",
  activeLinkSvgColor:
    "brightness(0) saturate(100%) invert(84%) sepia(49%) saturate(307%) hue-rotate(326deg) brightness(106%) contrast(92%)",
  primaryButtonColor: "#fff", //"#042742",
  primaryButtonBG: "rgb(17, 153, 250)", //"#F4D092",
  primaryButtonHoverBG: "rgb(17, 153, 250)", //"#EDD8B4",
  secondaryButtonHoverBG: "rgb(17, 153, 250)", //"rgba(54, 56, 64, 1)",
  outlinedPrimaryButtonHoverBG: "rgb(17, 153, 250)", //"#F8CC82",
  outlinedPrimaryButtonHoverColor: "rgb(17, 153, 250)", //"#333333",
  outlinedSecondaryButtonHoverBG: "transparent",
  outlinedSecondaryButtonHoverColor: "rgb(17, 153, 250)", //"#F8CC82", //gold
  containedSecondaryButtonHoverBG: "rgb(17, 153, 250)", //"rgba(8, 15, 53, 1)",
  graphStrokeColor: "rgba(8, 15, 53, 1)",
  sidebarBackground: `linear-gradient(0deg, rgba(31,31,31,1) 0%, rgba(0,0,0,0) 50%, rgba(0,0,0,0) 100%), url(${navBg})`,
  chartColors: ["#043f42", "#ebc342", "#fe868c", "#598fb5", "#775bb5", "#42bd8c", "#db3737", "#888888"],
  treasuryColors: {
    EXOD: "#043f42",
    wsEXOD: "#178feb",
    DAI: "#ebc342",
    "DAI-EXOD": "#888888",
    miMATIC: "#fe868c",
    WFTM: "#598fb5",
    gOHM: "#775bb5",
    BEETS: "#db3737",
    fBEETS: "#42bd8c",
    SOLID: "#02E3D9",
    ROCK: "#02E3D9",
    veSOLID: "#02E3D9",
    veROCK: "#02E3D9",
    BRUSH: "#DED0DC",
    SCREAM: "#FFB8D2",
    TAROT: "#AFAFAF",
    xTAROT: "#AFAFAF",
    USDC: "#2775C9",
    BTC: "#F7931A",
    ETH: "#636990",
    BOO: "#6665DD",
    xBOO: "#6665DD",
    SPIRIT: "#52CE84",
    inSPIRIT: "#52CE84",
    xLQDR: "#61ABC8",
    LQDR: "#61ABC8",
    IB: "#2CAA40",
    IRON: "#2CAA40",
    YFI: "#0262C3",
    "The Monolith": "#46ab15",
    DEFAULT: "#0f0f0f",
  },
  trendUp: "#042742",
  trendDown: "#ed3939",
  gridButtonHoverBackground: "rgba(255, 255, 255, 0.6)",
  gridButtonActiveBackground: "#00000038",
  switchBg: "#042742",
  mainBackground:
    "linear-gradient(180deg, rgba(8, 35, 23, 0), rgba(10, 13, 10, 0.9)), " +
    "linear-gradient(333deg, rgba(13, 27, 15, 0.2), rgba(18, 25, 17, 0.08)), " +
    "radial-gradient(circle at 77% 89%, rgba(15, 25, 15, 0.8), rgba(15, 23, 19, 0) 50%), " +
    "radial-gradient(circle at 15% 95%, rgba(15, 23, 15, 0.8), rgba(15, 23, 19, 0) 43%), " +
    "radial-gradient(circle at 65% 23%, rgba(20, 42, 19, 0.4), rgba(23, 32, 21, 0) 70%), " +
    "radial-gradient(circle at 10% 0%, rgba(12, 33, 12, 0.33), rgba(17, 21, 14, 0) 35%), " +
    "radial-gradient(circle at 11% 100%, rgba(11, 25, 23, 0.3), rgba(11, 35, 23, 0) 30%)",
};

const colors = {
  paper: {
    background: darkTheme.paperBg,
    card: "#1D2026",
    cardHover: "#343C49",
  },
  feedback: {
    success: "#94B9A1",
    userFeedback: "#49A1F2",
    error: "#FF8585",
    warning: "#FC8E5F",
    pnlGain: "#3D9C70",
  },
  gray: {
    700: "#181A1D",
    600: "#fff", //"#292C32",
    500: "#3F4552",
    90: "#676B74",
    40: "#A3A3A3",
    10: darkTheme.textHighlightColor,
  },
  primary: {
    300: "rgb(17, 153, 250)",
    100: "rgb(17, 153, 250)",
    "300/A75": "rgba(248, 204, 130,0.75)",
    "300/A50": "rgba(248, 204, 130,0.5)",
  },
};

export const dark = responsiveFontSizes(
  createTheme(
    deepmerge(
      {
        colors,
        palette: {
          mode: "dark",
          contrastText: darkTheme.color,
          primary: {
            main: darkTheme.color,
          },
          neutral: {
            main: darkTheme.color,
            secondary: darkTheme.gray,
          },
          text: {
            primary: darkTheme.color,
            secondary: darkTheme.gray,
          },
          graphStrokeColor: darkTheme.graphStrokeColor,
          highlight: darkTheme.textHighlightColor,
          error: {
            main: colors.feedback.error,
            dark: colors.feedback.error,
          },
          info: {
            main: colors.feedback.userFeedback,
            dark: colors.feedback.userFeedback,
          },
          success: {
            main: colors.feedback.success,
            dark: colors.feedback.success,
          },
          warning: {
            main: colors.feedback.warning,
            dark: colors.feedback.warning,
          },
        },
        components: {
          MuiCssBaseline: {
            // background:${darkTheme.background};
            styleOverrides: `
            ${fonts}
            body {
             
              background-color: ${darkTheme.backgroundColor};
              background-repeat:no-repeat;
              background-attachment:fixed;
              font-size:0.75rem;
              font-weight:400;
            }
            `,
          },
          MuiSwitch: {
            styleOverrides: {
              colorPrimary: {
                color: darkTheme.color,
                [`&.${switchClasses["checked"]}`]: {
                  color: darkTheme.gold,
                  [`& + ${switchClasses["track"]}`]: {
                    backgroundColor: darkTheme.color,
                    borderColor: darkTheme.color,
                  },
                },
              },
              track: {
                border: `1px solid ${darkTheme.color}`,
                backgroundColor: darkTheme.switchBg,
              },
            },
          },
          MuiAlert: {
            styleOverrides: {
              root: {
                backgroundImage: "none",
              },
            },
          },
          MuiDrawer: {
            styleOverrides: {
              paper: {
                background: darkTheme.paperBg,
                zIndex: 7,
              },
            },
          },
          MuiTabs: {
            styleOverrides: {
              root: {
                "& .MuiLink-root.active": {
                  color: darkTheme.gold,
                },
              },
            },
          },
          MuiSelect: {
            styleOverrides: {
              select: {
                color: darkTheme.gold,
              },
            },
          },
          MuiPaper: {
            styleOverrides: {
              root: {
                "&.MuiAccordion-root": {
                  background: "transparent",
                },
                background: darkTheme.paperBg,
                "&.ohm-card": {
                  background: darkTheme.paperBg,
                },
                "&.ohm-modal": {
                  backgroundColor: darkTheme.modalBg,
                },
                "&.MuiPaper-root&.tooltip-container": {
                  background: darkTheme.paperBg,
                },
                "&.ohm-menu": {
                  background: darkTheme.menuBg,
                  backdropFilter: "blur(33px)",
                },
                "&.ohm-popover": {
                  backgroundColor: darkTheme.popoverBg,
                  color: darkTheme.color,
                },
              },
            },
          },
          MuiBackdrop: {
            styleOverrides: {
              root: {
                background: darkTheme.backdropBg,
              },
            },
          },
          MuiLink: {
            styleOverrides: {
              root: {
                color: darkTheme.color,
                "&:hover": {
                  color: darkTheme.textHighlightColor,
                  textDecoration: "none",
                  "&.active": {
                    color: darkTheme.textHighlightColor,
                  },
                },
                "&.active": {
                  color: darkTheme.textHighlightColor,
                  textDecoration: "underline",
                },
              },
            },
          },
          MuiTableCell: {
            styleOverrides: {
              root: {
                color: darkTheme.color,
              },
            },
          },
          MuiOutlinedInput: {
            styleOverrides: {
              notchedOutline: {
                borderColor: darkTheme.gray,
              },
            },
          },
          MuiTab: {
            styleOverrides: {
              textColorPrimary: {
                color: darkTheme.gray,
              },
              root: {
                "&.Mui-selected": {
                  color: colors.primary[300],
                  textDecoration: "underline",
                  textUnderlineOffset: "5px",
                  "&:hover": {
                    color: colors.gray[10],
                  },
                },
                "&:hover": {
                  color: colors.primary[300],
                  textDecoration: "underline",
                  textUnderlineOffset: "5px",
                },
              },
            },
          },
          PrivateTabIndicator: {
            styleOverrides: {
              colorPrimary: {
                backgroundColor: darkTheme.gold,
              },
            },
          },
          MuiToggleButton: {
            styleOverrides: {
              root: {
                background: darkTheme.paperBg,
                "&:hover": {
                  color: darkTheme.color,
                  backgroundColor: `${darkTheme.containedSecondaryButtonHoverBG} !important`,
                },
                selected: {
                  backgroundColor: darkTheme.containedSecondaryButtonHoverBG,
                },
                "@media (hover:none)": {
                  "&:hover": {
                    color: darkTheme.color,
                    background: darkTheme.paperBg,
                  },
                  "&:focus": {
                    color: darkTheme.color,
                    background: darkTheme.paperBg,
                    borderColor: "transparent",
                    outline: "#00000000",
                  },
                },
              },
            },
          },
          MuiButton: {
            styleOverrides: {
              containedPrimary: {
                color: darkTheme.primaryButtonColor,
                backgroundColor: darkTheme.gold,
                "&:hover": {
                  backgroundColor: darkTheme.textHighlightColor,
                  color: darkTheme.primaryButtonHoverColor,
                },
                "&:active": {
                  backgroundColor: darkTheme.primaryButtonHoverBG,
                  color: darkTheme.primaryButtonHoverColor,
                },
                "@media (hover:none)": {
                  color: darkTheme.primaryButtonColor,
                  backgroundColor: darkTheme.gold,
                  "&:hover": {
                    backgroundColor: darkTheme.primaryButtonHoverBG,
                  },
                },
              },
              containedSecondary: {
                background: darkTheme.paperBg,
                color: darkTheme.color,
                "&:hover": {
                  backgroundColor: `${darkTheme.containedSecondaryButtonHoverBG} !important`,
                },
                "&:active": {
                  backgroundColor: darkTheme.containedSecondaryButtonHoverBG,
                },
                "&:focus": {
                  background: darkTheme.paperBg,
                },
                "@media (hover:none)": {
                  color: darkTheme.color,
                  background: darkTheme.paperBg,
                  "&:hover": {
                    backgroundColor: `${darkTheme.containedSecondaryButtonHoverBG} !important`,
                  },
                },
              },
              outlinedPrimary: {
                color: darkTheme.gold,
                borderColor: darkTheme.gold,
                "&:hover": {
                  color: darkTheme.outlinedPrimaryButtonHoverColor,
                  backgroundColor: darkTheme.primaryButtonHoverBG,
                },
                "@media (hover:none)": {
                  color: darkTheme.gold,
                  borderColor: darkTheme.gold,
                  "&:hover": {
                    color: darkTheme.outlinedPrimaryButtonHoverColor,
                    backgroundColor: `${darkTheme.primaryButtonHoverBG} !important`,
                    textDecoration: "none !important",
                  },
                },
              },
              outlinedSecondary: {
                color: darkTheme.color,
                borderColor: darkTheme.color,
                "&:hover": {
                  color: darkTheme.outlinedSecondaryButtonHoverColor,
                  backgroundColor: darkTheme.outlinedSecondaryButtonHoverBG,
                  borderColor: darkTheme.gold,
                },
              },
              textPrimary: {
                color: "#A3A3A3",
                "&:hover": {
                  color: darkTheme.gold,
                  backgroundColor: "#00000000",
                },
                "&:active": {
                  color: darkTheme.gold,
                  borderBottom: darkTheme.gold,
                },
              },
              textSecondary: {
                color: darkTheme.color,
                "&:hover": {
                  color: darkTheme.textHighlightColor,
                },
              },
            },
          },
          MuiTypography: {
            styleOverrides: {
              root: {
                "&.grid-message-typography": {
                  color: "#A3A3A3",
                },
                "&.chain-highlight": {
                  color: "#DADADA",
                },
                "&.current": {
                  color: darkTheme.gold,
                },
              },
            },
          },
          MuiGrid: {
            styleOverrides: {
              root: {
                "&.grid-button": {
                  borderColor: `#FFFFFF !important`,
                  "&:hover": {
                    backgroundColor: darkTheme.gridButtonHoverBackground,
                  },
                  "&.current": {
                    borderColor: `${darkTheme.gold} !important`,
                    backgroundColor: darkTheme.gridButtonActiveBackground,
                    "&:hover": {
                      backgroundColor: darkTheme.gridButtonHoverBackground,
                    },
                  },
                },
              },
            },
          },
        },
      },
      commonSettings,
    ),
  ),
);
