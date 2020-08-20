import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: ${(props) => props.theme.bg};
    color: ${(props) => props.theme.text_color};
    h2 {
        font-weight: bold;
    }
    transition: background-color 0.3s ease-out;
`;

export const Container = styled.div`
    margin: 30px auto;
    width: 350px;
    .balance h4 {
        margin: 0;
    }
    .balance h1 {
        margin: 0 0 20px 0;
    }
`;

export const BudgetContainer = styled.div`
    display: flex;
    justify-content: space-between;
    border: 1px solid ${(props) => props.theme.text_color};
    padding: 10px;
    transition: 0.2s ease-in-out;
    box-shadow: 3px 3px ${(props) => props.theme.box_shadow_color};

    :hover {
        transition: 0.2s ease-in-out;
      background-color: ${(props) => props.theme.bg_second};

    }
    h4 {
        margin: 5px 20px 0 20px;
    }
    p {
        margin: 0 20px 5px 20px;
    }
    div {
        flex: 1 1 200px;
        text-align: center;
        margin: 0;
    }
    div:last-child {
        border-left: 1px solid ${(props) => props.theme.text_color};
    }
    .income-size {
        color: ${(props) => props.theme.income_text};
    }
    .expense-size {
        color: ${(props) => props.theme.expense_text};
    }
`;

export const ThemeSwitchBtn = styled.div`
    background-color: ${(props) =>
        props.theme.bg === '#7A7066' ? '#F8F9FA' : '#7A7066'};
    width: 20px;
    height: 20px;
    border-radius: 100%;
    position: absolute;
    top: 15px;
    right: 20px;
    transition: background-color 0.2s ease-out;
    cursor: pointer;

`;

export const TransactionListStyles = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        padding: 0;
        margin: 0;
    }
    li {
        display: flex;
        padding: 10px;
        border: 1px solid ${(props) => props.theme.text_color};
        box-shadow: 3px 3px ${(props) => props.theme.box_shadow_color};
    }
      transition: 0.2s ease-in-out;
    li:hover {
        transition: 0.2s ease-in-out;

      background-color: ${(props) => props.theme.bg_second};
    }
    .moneyText {
        flex-grow: 1;
    }
    .deleteBtn {
        outline: none;
        border: none;
    }
`;

export const darkTheme = {
    bg: '#7A7066',
    bg_second: '#857A6F',
    text_color: '#151314',
    income_text: '#151314',
    expense_text: '#151314',
    box_shadow_color: '#151314',
};

export const lightTheme = {
    bg: '#F8F9FA',
    bg_second: '#fff',
    text_color: '#212529',
    income_text: '#1B998B',
    expense_text: '#E84855',
    box_shadow_color: '#968896',

};
