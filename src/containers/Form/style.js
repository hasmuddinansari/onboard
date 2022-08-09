import styled from 'styled-components'

export const Heading = styled.div`
    flex-direction: column;
    align-items:center;
    & .title {
         font-size:2rem;
         margin-bottom:10px;
         font-weight:1000;
    }
    & .sub-title {
        font-size:1rem;
        margin-bottom:3rem;

    }
`

export const Button = styled.button`
    border:none;
    box-shadow:none;
    width:50%;
    height:2.5rem;
    background:var(--primary);
    color:var(--white);
    border-radius:4px;
    text-space:2px;
    margin-top:1rem;
`

export const CustomForm = styled.form`
    display:flex;
    flex-direction:column;
    align-items:center;
`