import { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import Sections from './components/Sections';
import GlobalStyle from './styles/GlobalStyle';
import Footer from './components/Footer';

const colors = {
  main: '#e8be39',
};

function App() {
  return (
    <ThemeProvider theme={colors}>
      <GlobalStyle />
      <Header />
      <Sections />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
