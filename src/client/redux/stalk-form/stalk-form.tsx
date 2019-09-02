import * as React from 'react';
import { Link } from 'react-router-dom';
import {fetchUser} from '../../utils/api-facade';
import {useState} from 'react';
const css = require('../../styles/stalk-form.css');

export function StalkForm(props) {
  const [screenName, setScreenName] = useState('');
  const [showSortingButtons, setShowSortingButtons] = useState(false);

  function submitUser() {
    fetchUser(screenName).then(response => {
      props.setUser(response.data);
      setShowSortingButtons(true);
    }).catch(e => alert(`${screenName} is not an existing user, please put an existing user name`));
  }

  function SortingButtons() {
    return (
      <div className={css.sortingButtonsContainer}>
        <button onClick={() => props.sortFollowersByName()} className={css.sortingButton}>Sort by name</button>
        <button onClick={() => props.sortFollowersByScreenName()} className={css.sortingButton}>Sort by screen name</button>
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
