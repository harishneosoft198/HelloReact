import {fireEvent, render,screen} from '@testing-library/react';
import Header from '../components/Header';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import appStore from '../utils/redux/appStore'
import '@testing-library/jest-dom';

test('should contain the login button in header component',()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    );
    const loginButton = screen.getByRole('button',{name:'Login'});

    expect(loginButton).toBeInTheDocument();
});
test('should contain the cart text in header component',()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    );
    const cartText = screen.getByText(/Cart/);

    expect(cartText).toBeInTheDocument();
});
test('should change login button to logout button',()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    );
    const loginButton = screen.getByRole('button',{name:'Login'});
    //for checking the click events
    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole('button',{name:'Logout'});
    expect(logoutButton).toBeInTheDocument();
});