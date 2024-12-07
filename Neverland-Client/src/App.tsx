// App.tsx
import { BrowserRouter } from 'react-router-dom';
import Router from './app/router/router.tsx';
import './assets/css/App.css';

const App = () => {
    return (
        <BrowserRouter>
            <Router />
        </BrowserRouter>
    );
};

export default App;
