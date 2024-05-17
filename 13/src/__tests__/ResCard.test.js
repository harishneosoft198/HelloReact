import { render,screen } from '@testing-library/react';
import MOCK_DATA from '../mocks/rescard_mock.json';
import ResCard from '../components/ResCard';
import '@testing-library/jest-dom';


test('res card should render properly',()=>{
    render(<ResCard resData={MOCK_DATA}/>);

    const text = screen.getByText('Cafe Amudham');

    expect(text).toBeInTheDocument();
});