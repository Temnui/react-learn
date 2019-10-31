import React from 'react';
import './App.css';
import Header from "./components/header";
import Logo from "./components/logo";
import Footer from "./components/footer";
import MainContent from "./components/mainContent";

function App() {
    return (
        <div className="App">
            <Header/>
            <Logo/>
            <MainContent/>
            <Footer/>
        </div>
    );
}

export default App;
