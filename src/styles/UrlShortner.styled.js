import styled from 'styled-components';

export const UrlShortnerStyled = styled.div`
  
  
  .input-url {
    background-image: url('/images/bg-shorten-mobile.svg');
    background-repeat: no-repeat;
    background-position: 100% -80%;
    background-color: ${({theme}) => theme.DarkViolet};
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 20px;
    border-radius: 10px;
    margin-bottom: 20px;
  }

  .input-url input, .input-url button {
    padding: 10px;
    font-family: inherit;
    border-radius: 5px;
    border: none;
  }

  .input-url input {
    outline: none;
  }

  .input-url input.error {
    border: 3px solid ${({theme}) => theme.Red};
  }

  .input-url button {
    font-weight: 700;
    background-color: ${({theme}) => theme.Cyan};
    color: white;
  }

  .textarea {
    display: flex;
    flex-direction: column;
    gap: 3px;
  }

  .textarea small {
    font-size: 0.7rem;
    font-style: italic;
    color: ${({theme}) => theme.Red};
  }

  .url-list {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .each-url {
    background-color: white;
    border-radius: 10px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap:10px;
  }

  .each-url > p {
    padding-bottom: 10px;
    border-bottom: 1px solid ${({theme}) => theme.VeryDarkViolet};
    width: calc(100% + 40px);
    transform: translateX(-20px);
    padding-left: 20px;
  }

  .short-url p{
    color: ${({theme}) => theme.Cyan};
    margin-bottom: 20px;
  }

  .short-url button {
    background-color: ${({theme}) => theme.Cyan};
    width: 100%;
    border: none;
    padding: 10px;
    border-radius: 6px;
    font-family: inherit;
    color: white;
    font-weight: 700;
  }

  .short-url button.already-copied {
    background-color: ${({theme}) => theme.DarkViolet};
  }

  @media (min-width:768px) {
    .input-url {
      background-image: url('/images/bg-shorten-desktop.svg');
      background-size: 100% 100%;
      background-position: center;
      background-color: ${({theme}) => theme.DarkViolet};
      flex-direction: row;
      width: 100%;
      padding: 40px 50px;
    }

    .textarea {
      width: 100%;
      flex: 0.8;
      position: relative;
    }

    .textarea small {
      position: absolute;
      bottom: -20px;
    }

    .input-url button {
      flex: 0.2;
    }

    .each-url {
      flex-direction: row;
      align-items: center;
    }

    .each-url > p {
      padding: 0;
      padding-left: 20px;
      border-bottom: none;
      flex: 0.5;
    }

    .short-url {
      display: flex;
      flex: 0.5;
      flex-direction: row;
      align-items: center;
      justify-content: flex-end;
      gap: 20px;
    }

    .short-url p {
      margin: 0;
      justify-self: flex-end;
    }

    .short-url button {
      width: 150px;
    }
  }
`