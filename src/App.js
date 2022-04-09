import Header
 from "./components/Header";
import UrlShortner from "./components/UrlShortner";
import MidSection from "./components/MidSection";
import Footer from "./components/Footer";
import { GlobalStyle } from "./styles/Global";
import styled, { ThemeProvider } from 'styled-components';

function App() {
  const color = {
    'Cyan': 'hsl(180, 66%, 49%)',
    'DarkViolet': 'hsl(257, 27%, 26%)',
    'Red': 'hsl(0, 87%, 67%)',
    'Gray': 'hsl(0, 0%, 75%)',
    'GrayishViolet': 'hsl(257, 7%, 63%)',
    'VeryDarkBlue': 'hsl(255, 11%, 22%)',
    'VeryDarkViolet': 'hsl(260, 8%, 14%)'
  }

  const SectionTwo = styled.section`
    background-color: ${({theme}) => theme.Gray};
    background-color: hsl(0,0%,97%);
    padding: 0 20px;
    .container {
     transform: translateY(-70px);
     max-width: 1150px;
     margin: 0 auto;
    }
  `

  return (
    <ThemeProvider theme={color}>
      <GlobalStyle />
     <Header></Header>
     <SectionTwo>
      <div className="container">
        <UrlShortner></UrlShortner>
        <MidSection></MidSection>
      </div>
     </SectionTwo>
     <Footer></Footer>
     
    </ThemeProvider>
  );
}

export default App;
