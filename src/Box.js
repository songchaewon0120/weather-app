import styled from 'styled-components';


const Box = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(to bottom, #F4E0B9, #A8A196, #8CC0DE); //비오는날 
  padding: 50px;
  padding-top: 15vh;
  /* position: relative; */

    .text-weather{
        font-size: 26px;
        display:flex;
        align-items: center;
    justify-content: space-around;
    }

    .btn-wrap{
        display: inline-flex;
        flex-direction: column;
        position: absolute;
        top: 50px;
        left: 10px;
    }

    .btn{
        margin-top: 10px;
        padding: 5px;
        border-radius: 20px;
        background-color: inherit;
        font-size: 15px;

    }

    .weather-data-wrap{
        display: grid;
        justify-items: center;
        /* position:absolute; */
        margin-top: 50px;

    }
    
    .weather-data{
        display: inline-flex;
        margin-bottom: 10px;
    }

    .weather-data p{
        margin-right: 20px;
        font-size: 30px;
    }

    .weather-icon{
        
    }
`;

export default Box;