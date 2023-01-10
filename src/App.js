import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Stack } from '@mui/system';
import CssBaseline from '@mui/material/CssBaseline';
import Form from './components/Form';
import './App.css'
const darkTheme = createTheme({
  palette: {
    background:{
      default:'#303037',
    },
  },
  typography:{
    fontFamily:'Figtree',
  }
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
      <Stack alignItems={'center'} mt='40px'>
        <Form/>
      </Stack>
    </ThemeProvider>
  );
}

export default App;