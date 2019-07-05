import * as React from 'react';
import { Link } from 'react-router-dom';
const css = require('./stalk-form.css');

export class StalkForm extends React.Component<any> {
  public render() {
    const { userShown } = this.props;
    return (
      <div className={`${css.root} ${userShown ? css.open : css.close}`}>
          <h2 className={css.title}>Which user would you like to stalk?</h2>
        <form className={css.formStyle}>
          <input className={css.fieldStyle} type='text' name='username' placeholder='User Name' required />
          <button className={`${css.pushButton} ${css.blue}`} type='submit'>Stalk</button>
        </form>
      </div>
    );
  }
}
