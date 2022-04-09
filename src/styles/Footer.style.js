import styled from 'styled-components';

export const FooterStyle = styled.div`
  .boost {
    background-image: url('/images/bg-boost-mobile.svg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-color: ${({theme}) => theme.DarkViolet};
    text-align: center;
    padding: 60px 20px;
  }

  .boost h1 {
    font-size: 1.8rem;
    color: white;
    padding: 25px 0;
  }

  .boost button {
    border: none;
    background-color: ${({theme}) => theme.Cyan};
    padding: 10px 50px;
    border-radius: 30px;
    color: white;
    font-weight: 700;
    font-family: inherit; 
  }

  footer {
    background-color: ${({theme}) => theme.VeryDarkViolet};
    text-align: center;
    padding: 30px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
  }

  footer .top-list {
    font-weight: 700;
    color: white;
    margin-bottom: 10px;
  }

  footer ul {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  footer li {
    color: ${({theme}) => theme.Gray};
    font-weight: 500;
  }

  footer ul.social-links{
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 15px;
    margin-top: 30px;
  }

  footer > div {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  @media (min-width:768px) {
    .boost {
      background-image: url('/images/bg-boost-desktop.svg');
    }
    
    footer {
      flex-direction: row;
      flex-wrap: wrap;
      padding: 50px 120px;
      justify-content: space-between;
      align-items: flex-start;
    }

    footer > div {
      flex-direction: row;
      gap: 100px;
      align-items: flex-start;
    }

    footer ul.social-links{
      margin: 0;
    }

    footer ul li:hover {
      cursor: pointer;
      color: ${({theme}) => theme.Cyan};
    }


  }
`