import Cards from './components/Card.js';
import Logo from './components/Logo.js';
import { Grid } from '@material-ui/core';

import './App.css';

function App() {
    let numbers = [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23,
        24,
        25
    ].sort(() => Math.random() - 0.5);

    return (
        <div className="App">
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justify="center"
                style={{ minHeight: '90vh' }}
            >
                <Grid item xs={12} sm={8} md={6} lg={4} xl={3}>
                    <Logo />
                    <Cards numbers={numbers} />
                </Grid>
            </Grid>
        </div>
    );
}

export default App;
