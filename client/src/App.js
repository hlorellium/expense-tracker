import React, { useState, useMemo } from 'react';
import './App.css';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { Budget } from './components/Budget';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';
import { GlobalProvider } from './context/GlobalState';
import {
    Wrapper,
    Container,
    darkTheme,
    lightTheme,
    ThemeSwitchBtn,
    Main,
} from './styled-components';
import { ThemeProvider } from 'styled-components';

const App = () => {
    const [currentTheme, setCurrentTheme] = useState(
        localStorage.getItem('currentTheme')
    );
    const currentThemeVariable = useMemo(
        () => (currentTheme === 'darkTheme' ? darkTheme : lightTheme),
        [currentTheme]
    );

    return (
        <ThemeProvider theme={currentThemeVariable}>
            <GlobalProvider>
                <Wrapper>
                    <ThemeSwitchBtn
                        onClick={() => {
                            localStorage.setItem(
                                'currentTheme',
                                currentTheme === 'darkTheme'
                                    ? 'lightTheme'
                                    : 'darkTheme'
                            );
                            setCurrentTheme((currentTheme) =>
                                currentTheme === 'darkTheme'
                                    ? 'lightTheme'
                                    : 'darkTheme'
                            );
                        }}
                    />
                    <Header />
                    <Main>
                        <Container>
                            <Balance />
                            <Budget />
                        </Container>
                        <Container>
                            <TransactionList />
                        </Container>
                        <Container>
                            <AddTransaction />
                        </Container>
                    </Main>
                </Wrapper>
            </GlobalProvider>
        </ThemeProvider>
    );
};

export default App;
