import styled from 'styled-components'

export const CntEmpty = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80%;
`
export const CenterCell = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;

    span {
        margin-left: 5px;
    }
`
export const CntItem = styled.div`
    display: block;

    i {
        display: block;
        opacity: 0.7;
    }
`
export const CntActions = styled.div`
    display: flex;
    flex-direction: row;
    gap: 8px;
    justify-content: flex-end;
`
export const CntForm = styled.div`
    width: 100%;
    max-width: 600px;
`
