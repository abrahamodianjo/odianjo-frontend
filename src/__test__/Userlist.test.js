import {render,screen, cleanup } from '@testing-library/react'
import Userlist from '../Userlist';

afterEach(() => {
    cleanup();
});

test('should render Userlist component', () => {
    render(<Userlist/>);
    const userlistElement = screen.getByTestId('userlist-1');
    expect(userlistElement). toBeInTheDocument();
    expect(userlistElement).toHaveTextContent('name');

});




