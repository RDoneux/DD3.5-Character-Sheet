import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './routes/home/Home';
import NotFound from './routes/not-found/NotFound';
import Header from './components/header/Header';
import styles from './App.module.css';
import { ThemeProvider } from '@emotion/react';
import { createTheme, CssBaseline } from '@mui/material';
import CharacterBasics from './routes/character-basics/CharacterBasics';

const theme = createTheme({
  typography: {
    fontFamily: '"IM FELL English SC", serif'
  },
  palette: {
    primary: {
      main: '#917136'
    },
    secondary: {
      main: '#dc004e' // Pinkish-red
    },
    background: {
      default: '#000000'
    },
    text: {
      primary: '#E6E6E6',
      secondary: '#D5CAA0'
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className={styles['container']}>
        <BrowserRouter>
          <Header />
          <div className={styles['content']}>
            <Routes>
              <Route index element={<Home />} />
              <Route path="/character-basics" element={<CharacterBasics />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
