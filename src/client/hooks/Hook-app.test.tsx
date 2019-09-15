import { HooksApp } from './Hooks-app';
import * as React from 'react';
import {render, fireEvent, waitForElement} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('<HooksApp/>', () => {

  // const shallow = createShallow();

  it('should render user details when entering user name', async () => {
    const {getByPlaceholderText, getByTestId} = render(<HooksApp/>);
    const inputUserName = getByPlaceholderText('User Name') as HTMLInputElement;
    // const submitButton = getByTestId('submitButton');
    fireEvent.change(inputUserName, {target : {value : 'GBT3101'}});
    // fireEvent.click(submitButton);

    // const userDetails = await waitForElement(() => getByTestId('user'));
    // expect(userDetails).toBeDefined();
    // todo - same for
  });

});
