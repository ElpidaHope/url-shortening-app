import styled from 'styled-components'

export const StyledHeader = styled.header`
  background-color: white;

  padding: 20px;
  padding-bottom: 100px;
  
  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    margin-bottom: 20px;
  }

  .menu {
    position: absolute;
    margin: 0 auto;
    left: 0;
    right: 0;
    top: 50px;
    background-color: ${({theme}) => theme.DarkViolet};
    width: 100%;
    text-align: center;
    border-radius: 10px;
    transform: translateY(-500px);
  }

  .details {
    padding: 40px 0;
    border-bottom: 0.1px solid ${({theme}) => theme.GrayishViolet};
    width: 85%;
    margin: 0 auto;
  }

  .user-action {
    padding: 30px 0;
    width: 85%;
    margin: 0 auto;
    align-items: center;
  }

  .btn-sec {
    padding: 10px 20px;
    color: white;
    background-color: ${({theme}) => theme.Cyan};
    border: none;
    padding: 10px 20px;
    margin: 0 auto;
    border-radius: 30px;
    color: white;
    font-weight: 700;
    font-family: inherit;
  }

  nav .btn-sec {
    width: 100%;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 20px;
    color: white;
    font-weight: 700;
  }

  .show-menu.menu {
    transform: translateY(0);
    transition: transform 0.5s ease-in-out;
  }


  .hamburger .top, .hamburger .mid, .hamburger .bottom{
    height: 3px;
    width: 30px;
    background-color: ${({theme}) => theme.Gray};
    color: white;
  }

  .hamburger {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  

  @media (min-width: 768px) {
    padding: 30px 150px;
    .hamburger {
      display: none;
    }

    .menu {
      position: static;
      transform: translateY(0);
      background-color: white;
      display: flex;
      justify-content: space-between;
    }

    nav {
      gap: 50px;
      width: 100%;
    }
    
    ul {
      flex-direction: row;
      color: ${({theme}) => theme.DarkViolet};
    }

    nav ul li:hover {
      cursor: pointer;
      color: ${({theme}) => theme.VeryDarkViolet};
    }

    nav .btn-sec:hover {
      cursor: pointer;
      opacity: 0.5;
      color:white;  
    }

    .user-action .btn-sec {
      margin: 0;
    }

    .details {
      border-bottom: none;
    }

    .user-action {
      padding: 0;
      margin: 0;
      justify-content: flex-end;
    }
  }

  overflow-x: hidden;

  .illustration-container img {
    max-width: calc(100% + 150px);
    text-align: right;
  }

  .get-started {
    margin-top: 30px;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .get-started h1 {
    line-height: 1.1;
  }

  .get-started p {
    color: ${({theme}) => theme.GrayishViolet};
  }

  @media (min-width:768px) {
    .illustration-container {
      display: flex;
      flex-direction: row-reverse;
      align-items: center;
      margin-top: 50px;
    }

    .illustration-container img {
      transform: translateX(30px);
      max-width: calc(100% + 400px);
    }

    .get-started {
      text-align: left;
      margin-bottom: 80px;
    }

    .get-started .btn-sec {
      margin: 0;
      margin-right: auto;
    }

    .get-started p {
      width: 70%;
    }

    .get-started h1 {
      font-size: 4rem;
    }
  }
`