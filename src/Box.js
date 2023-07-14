import styled from 'styled-components';


const Box = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items:center;
    box-shadow: 0px 0px 25px #dfdfdf;
  /* background: linear-gradient(to bottom, #F4E0B9, #A8A196, #8CC0DE); //비오는날  */
    .square {
        display:flex;
        box-shadow: 0px 0px 60px #ddd;
        border-radius: 20px;
    }

    .content-wrap{
        /* background-color: red; */
        /* background: linear-gradient(to bottom, #A19EAB, #A19EAB, #F2F2F2); //ㅂㅣ */
        /* background: linear-gradient(to bottom, #80A3C5, #A4A2AE, #F2F2F2); //흐림 */
        /* background: linear-gradient(to bottom, #A8E7FE, #F2E1A4, #F5E5C6); //맑음 */
        /* background: linear-gradient(to bottom, #B0DAFF, #F2D4A4, #F5E5C6); //이슬비 */
        /* background: linear-gradient(to bottom, #0D0540, #D3B3F2, #F5E5C6); //뇌우 */
        /* background: linear-gradient(to bottom, #C6E4E9, #C4EEF2, #F5E5C6); //눈 */
        /* background: linear-gradient(to bottom, #CCB5A8, #D9C4B8, #9592A6); //안개 */
        width: 732px;
        height: 532px;
        border-end-end-radius: 20px;
        border-top-right-radius:20px;
        display:grid;
        place-content: center;
    }

    .text-weather{
        font-size: 26px;
        display:flex;
        align-items: center;
        justify-content: space-around;
        }

    .btn-wrap{
        width:102px;
        height:496px;    
        border-end-start-radius: 20px;
        border-top-left-radius:20px;
        display: inline-flex;
        flex-direction: column;
        background-color: white;
        display:grid;
        place-content: center;
    }

    .btn{
        margin-top: 10px;
        padding: 15px;
        border-radius: 10px;
        background-color: white;
        font-size: 15px;
        border: 1px #625055 solid;
        transition: transform 0.3s ease;
    }

    .btn:first-of-type{
        margin-top: 50px;
    }

    .btn:hover{
        background-color: rgba(222, 222, 222, 0.34);
        transform: scale(1.1);
    }

    .weather-data-wrap{
        display: grid;
        justify-items: center;
        margin-top: 30px;

    }
    
    .weather-data{
        display: inline-flex;
    }

    .weather-data p{
        margin-right: 20px;
        font-size: 30px;
    }

    .weather-icon{
        
    }
`;

export default Box;