import * as React from 'react';
import { Link } from 'react-router-dom';
import {useState, useRef, useEffect} from 'react';
import {fetchUser} from '../utils/api-facade';
import {Actions} from '../reducer-actions';
const css = require('./stalk-form.css');

function usePreviousScreenName(screenName) {
  const previousScreenNameRef = useRef();
  useEffect(() => {
    previousScreenNameRef.current = screenName;
  });
  return previousScreenNameRef.current;
}

export function StalkForm({setUser, sort}) {
  const [screenName, setScreenName] = useState('');
  const [showSortingButtons, setShowSortingButtons] = useState(false);

  function submitUser() {
    const userAlreadyFetched = previousScreenName === screenName;
    if (!userAlreadyFetched) {
      fetchUser(screenName).then(response => {
        setUser(response.data);
        setShowSortingButtons(true);
      }).catch(e => alert(`${screenName} is not an existing user, please put an existing user name`));
    }
  }

  function SortingButtons() {
    return (
      <div className={css.sortingButtonsContainer}>
        <button onClick={() => sort({type: Actions.sortByName})} className={css.sortingButton}>Sort by name</button>
        <button onClick={() => sort({type: Actions.sortByScreenName})} className={css.sortingButton}>Sort by screen name</button>
      </div>);
  }

  const previousScreenName = usePreviousScreenName(screenName);

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
