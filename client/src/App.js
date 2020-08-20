import React, { useState } from 'react';
import './App.css';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { Budget } from './components/Budget';
import { TransactionList } from './components/TransactionList';
import {
    Wrapper,
    Container,
    darkTheme,
    lightTheme,
    ThemeSwitchBtn,
} from './styled-components';
import { ThemeProvider } from 'styled-components';


const App = () => {
    const [currentTheme, setCurrentTheme] = useState(localStorage.getItem('currentTheme') || darkTheme);
    return (
        <ThemeProvider theme={currentTheme}>
            <Wrapper>
                <ThemeSwitchBtn
                    onClick={() =>
                        setCurrentTheme((currentTheme) =>
                            currentTheme === darkTheme ? lightTheme : darkTheme
                        )
                    }
                />
                <Header />
                <Container>
                    <Balance />
                    <Budget />
                    <TransactionList />
                </Container>
            </Wrapper>
        </ThemeProvider>
    );
};

export default App;
