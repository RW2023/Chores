import { createTheme } from '@mui/material/styles';
import './index.css';

const theme = createTheme({
    palette: {
        overlay: 'rgba(184, 193, 236, 0.5)',
        background: {
            default: '#11151A', // Very dark background
        },
        primary: {
            main: '#D9BF77', // Gold for elegance
        },
        secondary: {
            main: '#7F8A9E', // Cool gray
        },
        text: {
            primary: '#E7E7E7', // Light text for contrast
            secondary: '#B0B7C3', // Slightly darker secondary text
        },
        // Add more custom colors here as needed
        customColor1: {
            main: '#yourColorCode1',
        },
        customColor2: {
            main: '#yourColorCode2',
        },

        typography: {
            fontFamily: "'ziclets', sans-serif",
        },
    },
});

export default theme;
