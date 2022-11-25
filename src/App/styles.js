
import styled from "styled-components";

export const Calculator = styled.div`
    width: 400px;
    margin: 20px auto;
    background-color: black;
    font-size: 30px;
`

export const Screen = styled.div`
    color: white;
    text-align: right;
    padding: 20px 5px;
`

export const Row = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 1px;
    button {
        width: 24.7%;
        height: 50px;
        font-size: 20px;
        cursor: pointer;
        border: none;
        border-radius: 0;
        background-color: #ddde;
    }
    button:hover {
        background-color: #ddd;
    }

    button:active {
        background-color: #dddc;
    }

    button:last-child {
        background-color: #fdb555;
    }
    button:last-child:hover {
        background-color: #fda;
    }
    button:last-child:active {
        background-color: #fda000;
    }

    >.duble {
        width: 49.8%;
    }
    >.triple {
        width: 74.9%;
    }
    
`
