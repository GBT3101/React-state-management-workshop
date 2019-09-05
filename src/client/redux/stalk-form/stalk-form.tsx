import * as React from 'react';
import { Link } from 'react-router-dom';
import {fetchUser} from '../../utils/api-facade';
import {useState} from 'react';
const css = require('../../styles/stalk-form.css');

/**
 * @param props - since it gets the props from the connected App, we have all actions and state:
 * E.G props.setUser, props.sortFollowersByName, props.sortFollowersByScreenName.
 */
export function StalkForm(props) {
  const [screenName, setScreenName] = useState('');
  const [showSortingButtons, setShowSortingButtons] = useState(false);

  function submitUser() {
    fetchUser(screenName).then(response => {
      const user = response.data;
      /*
        6. SOLUTION
        Set the user using the action you have on the props.
       */
      props.setUser(user);
      setShowSortingButtons(true);
    }).catch(e => alert(`${screenName} is not an existing user, please put an existing user name`));
  }

  function SortingButtons() {
    /*
      11. SOLUTION
      Implement the sorting functions
     */
    const sortByName = () => props.sortFollowersByName();
    const sortByScreenName = () => props.sortFollowersByScreenName();
    return (
      <div className={css.sortingButtonsContainer}>
        <button onClick={sortByName} className={css.sortingButton}>Sort by name</button>
        <button onClick={sortByScreenName} className={css.sortingButton}>Sort by screen name</button>
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
