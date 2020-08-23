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
        margin: 20px 0 0 0;
    }
    transition: background-color 0.3s ease-out;
`;

export const Container = styled.div`
    margin: 30px auto;
    max-width: 1300px;
    flex-direction: row;
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
    box-shadow: 3px 3px ${(props) => props.theme.shadow_color};
    background-color: ${(props) => props.theme.bg_second};

    :hover {
        transition: 0.2s ease-in-out;
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
    transition: 0.2s ease-in-out;
    ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        padding: 0;
        margin: 0;
        max-height: 200px;
        overflow: auto;
    }
    ul::-webkit-scrollbar {
        width: 14px;
        height: 18px;
    }
    ul::-webkit-scrollbar-thumb {
        height: 6px;
        border: 4px solid rgba(0, 0, 0, 0);
        background-clip: padding-box;
        -webkit-border-radius: 7px;
        background-color: rgba(0, 0, 0, 0.15);
        -webkit-box-shadow: inset -1px -1px 0px rgba(0, 0, 0, 0.05),
            inset 1px 1px 0px rgba(0, 0, 0, 0.05);
    }
    ul::-webkit-scrollbar-button {
        width: 0;
        height: 0;
        display: none;
    }
    ul::-webkit-scrollbar-corner {
        background-color: transparent;
    }
    li {
        display: flex;
        padding: 10px;
        border: 1px solid ${(props) => props.theme.text_color};
        box-shadow: 3px 3px ${(props) => props.theme.shadow_color};
        align-items: center;
        margin-bottom: 10px;
        background-color: ${(props) => props.theme.bg_second};
    }
    li:hover {
        transition: 0.2s ease-in-out;
    }
    .moneyText {
        flex-grow: 1;
    }
    .deleteBtn {
        outline: none;
        border: none;
        background-color: ${(props) => props.theme.bg_second};
        cursor: pointer;
        margin: 5px;
    }
`;

export const TransactionForm = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    input[type='number'] {
        -moz-appearance: textfield;
    }
    input {
        background-color: ${(props) => props.theme.bg_second};
        outline: none;
        border: 1px solid ${(props) => props.theme.text_color};
        padding: 5px;
        font-size: 1.2rem;
    }
    input::placeholder {
        color: ${(props) => props.theme.shadow_color};
        opacity: 0.65;
    }
    label {
        display: flex;
        flex-direction: column;
        font-size: 0.8rem;
        font-weight: 700;
        color: ${(props) => props.theme.shadow_color};
    }
    .explanation {
        font-weight: 400;
    }
    div {
        display: flex;
        flex-direction: column;
        margin: 10px 0;
    }

    button {
        align-self: center;
        margin-top: 10px;
        outline: none;
        padding: 5px 10px;
        border: 1px solid ${(props) => props.theme.text_color};
        background-color: ${(props) => props.theme.bg_second};
    }
`;

export const darkTheme = {
    bg: '#7A7066',
    bg_second: '#857A6F',
    text_color: '#151314',
    income_text: '#151314',
    expense_text: '#151314',
    shadow_color: '#151314',
};

export const lightTheme = {
    bg: '#E9ECEF',
    bg_second: '#fff',
    text_color: '#212529',
    income_text: '#1B998B',
    expense_text: '#E84855',
    shadow_color: '#968896',
};
