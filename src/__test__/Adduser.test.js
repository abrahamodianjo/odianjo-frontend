import {render,screen, cleanup } from '@testing-library/react';
import Adduser from '../Adduser';

afterEach(() => {
    cleanup();
});

test('should render Adduser component', () => {
    render(<Adduser/>);
    const adduserElement = screen.getByTestId('adduser-1');
    expect(adduserElement).toContainHTML('field');


});
