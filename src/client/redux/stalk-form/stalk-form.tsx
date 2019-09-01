import * as React from 'react';
import { Link } from 'react-router-dom';
import {fetchUser} from '../../utils/api-facade';
const css = require('../../styles/stalk-form.css');

export function StalkForm({setUser, sort}) {
  const screenName = 'hard coded';
  const setScreenName = inputScreenName => console.log(inputScreenName);
  const showSortingButtons = false;

  function submitUser() {
    fetchUser(screenName).then(response => {
      setUser(response.data);
      // should show sorting buttons
    }).catch(e => alert(`${screenName} is not an existing user, please put an existing user name`));
  }

  function SortingButtons() {
    return (
      <div className={css.sortingButtonsContainer}>
        <button onClick={() => null} className={css.sortingButton}>Sort by name</button>
        <button onClick={() => null} className={css.sortingButton}>Sort by screen name</button>
      </div>);
  }

  return (
    <div className={css.root}>
      <h2 className={css.title}>Which user would you like to stalk?</h2>
      <div className={css.formStyle}>
        <input onChange={e => setScreenName(e.target.value)} value={screenName} className={css.fieldStyle} type='text' name='username' placeholder='User Name' required />
        <button onClick={submitUser} className={`${css.pushButton} ${css.blue}`}>Who Follows Him</button>
        {showSortingButtons && <SortingButtons/>}
      </div>
    </div>
  );
}
