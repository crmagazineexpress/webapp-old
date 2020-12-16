import styled from 'styled-components'

export const CntTitlePage = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1.5em;
    height: 62px;

    .title {
        display: flex;
        align-items: center;
        justify-content: flex-start;

        svg {
            width: 28px;
            height: 28px;
        }

        h2 {
            margin: 0;
        }
    }
    .tools {
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }
`

export const CntEmpty = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80%;
`
export const CntMenu = styled.div`
    .ant-menu {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;

        .ant-menu-item {
            padding-left: 24px;
            padding: 0 !important;
            margin: 0 !important;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: flex-start;

            .cnt-menu-text {
                width: 100%;
                padding-left: 24px;
                display: flex;
                align-items: center;
                justify-content: flex-start;
                gap: 8px;
            }
        }
    }
`
