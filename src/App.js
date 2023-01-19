import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Stack } from '@mui/system';
import {Toaster} from 'react-hot-toast';
import CssBaseline from '@mui/material/CssBaseline';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from './components/Login';
import Form from './components/Form';
import Dashboard from './components/Dashboard';
import './App.css'
const darkTheme = createTheme({
  palette: {
    background:{
      default:'#303037',
    },
  },
  typography:{
    fontFamily:'Figtree'
  },
  coloring:{
    border:'#c4c4c4'
  }
});


function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline/>
          <Toaster/>
          <Routes>
            <Route path="/" element={<Login/>}></Route>
            <Route path='/signup' element={<Form/>}></Route>
            <Route path='/dashboard' element={<Dashboard/>}></Route>
          </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;