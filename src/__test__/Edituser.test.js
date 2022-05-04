import {render,screen, cleanup } from '@testing-library/react';
import Edituser from '../Edituser';

afterEach(() => {
    cleanup();
});

test('should render Edituser component', () => {
    render(<Edituser/>);
    const edituserElement = screen.getByTestId('edituser-1');
    expect(edituserElement).toContainHTML('field');


});
