import React, { useState } from 'react';
import './App.css';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { Budget } from './components/Budget';
import { TransactionList } from './components/TransactionList';
import {
    Wrapper,
    Container,
    theme,
    lightTheme,
    ThemeSwitchBtn,
} from './styled-components';
import { ThemeProvider } from 'styled-components';

const App = () => {
    const [currentTheme, setCurrentTheme] = useState(lightTheme);
    return (
        <ThemeProvider theme={currentTheme}>
            <Wrapper>
                <ThemeSwitchBtn
                    onClick={() =>
                        setCurrentTheme((currentTheme) =>
                            currentTheme === theme ? lightTheme : theme
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
