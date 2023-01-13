import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Stack } from '@mui/system';
import CssBaseline from '@mui/material/CssBaseline';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from './components/Login';
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
    <BrowserRouter>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline/>
        <Stack alignItems={'center'} mt='40px'>
          <Routes>
            <Route path="/" element={<Login/>}></Route>
            <Route path='/signup' element={<Form/>}></Route>
          </Routes>
        </Stack>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;