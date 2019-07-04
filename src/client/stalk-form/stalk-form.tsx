import * as React from 'react';
import { Link } from 'react-router-dom';

export class StalkForm extends React.Component<any> {
  public render() {
    return (
      <form>
        <div>Which user would you like to stalk?</div>
        <input type='text' name='username' placeholder='User Name' required />
        <button type='submit'>Stalk</button>
      </form>
    );
  }
}
