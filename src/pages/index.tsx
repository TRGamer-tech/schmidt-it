import React from 'react';
import Header from '../components/Header';
import '/src/styles/main.css';

const Home: React.FC = () => {
    return (
        <div>
            <Header />
            <main>
                <h1>Welcome to My Netlify Site</h1>
                <p>This is the main content of the homepage.</p>
            </main>
        </div>
    );
};

export default Home;