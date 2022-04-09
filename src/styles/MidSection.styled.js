import styled from 'styled-components';

export const MidSectionStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 100px;
  padding: 50px 0;
  text-align: center;
  h1 {
    color: ${({theme}) => theme.VeryDarkBlue};
    margin-bottom: 25px;
  }

  p {
    color: ${({theme}) => theme.GrayishViolet}
  }

  .card-collection {
    display: flex;
    flex-direction: column;
    gap: 100px;
  }

  .card {
    background-color: white;
    border-radius: 5px;
    padding: 30px;
    padding-top: 80px;
    position: relative;
  }

  .card p {
    font-size: 1rem;
  }

  .card img {
    background-color: ${({theme}) => theme.DarkViolet};
    padding: 25px;
    border-radius: 50%;
    position: absolute;
    top:-40px;
    left: 0;
    right: 0;
    margin: 0 auto;
  }

  .brand-recognition, .detailed-records {
    position: relative;
  }

  .brand-recognition::after, .detailed-records::after {
    content: '';
    width: 10px;
    height: 61px;
    background-color: ${({theme})=> theme.Cyan};
    position: absolute;
    bottom: -61px;
  }

  @media (min-width:768px) {
    .advance-stats {
      width: 45%;
      margin: 0 auto;
    }

    .brand-recognition::after, .detailed-records::after {
      top: 50%;
      transform: rotate(90deg);
      right: -20px;
      height: 28px;
    }

    .card-collection {
      flex-direction: row;
      gap:20px;
      padding-bottom: 60px;
    }

    .detailed-records{
      transform: translateY(40px);
    }

    .fully-customizable {
      transform: translateY(80px);
    }

    .card img {
      left: -60%;
    }
    
  }
`