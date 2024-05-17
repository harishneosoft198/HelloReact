import { render, screen } from '@testing-library/react';
import Contact from '../components/Contact';
import '@testing-library/jest-dom';


//if we have multiple test cases then you can group by describe method
//instead of test you can use it
describe('Contact us page test cases',()=>{
    test('contact component should render',()=>{
        render(<Contact/>);
    
        const heading = screen.getByRole('heading');
    
        expect(heading).toBeInTheDocument();
    });
    
    test('contact component should render',()=>{
        render(<Contact/>);
    
        const button = screen.getByRole('button');
    
        expect(button).toBeInTheDocument();
    });
    
    test('contact component button text should submit',()=>{
        render(<Contact/>);
    
        const text = screen.getByText('Submit');
    
        expect(text).toBeInTheDocument();
    });
    
    test('contact component input name should name',()=>{
        render(<Contact/>);
    
        const name = screen.getByPlaceholderText('Name');
    
        expect(name).toBeInTheDocument();
    });
    
    test('contact component inputs should be 2',()=>{
        render(<Contact/>);
    
        //textbox==input
        const inputBoxes = screen.getAllByRole('textbox');
    
        expect(inputBoxes.length).toBe(2);
    });
});
