import * as React from 'react';
import { Link } from 'react-router-dom';
import {useState, useRef, useEffect} from 'react';
import {fetchUser} from '../../utils/api-facade';
import {Actions} from '../reducer-actions.enum';
const css = require('../../styles/stalk-form.css');

function usePreviousScreenName(screenName) {
  const previousScreenNameRef = useRef();
  useEffect(() => {
    previousScreenNameRef.current = screenName;
  });
  return previousScreenNameRef.current;
}

export function StalkForm({setUser, sort, setFollowersBatchIndex}) {
  const [screenName, setScreenName] = useState('');
  const [showSortingButtons, setShowSortingButtons] = useState(false);

  function submitUser() {
    const userAlreadyFetched = previousScreenName === screenName;
    if (!userAlreadyFetched) {
      fetchUser(screenName).then(response => {
        const user = response.data;
        /*
            3. YOUR CODE HERE
            Set the default batch index using the action you have on props.
       */
        /*
            4. YOUR CODE HERE
            Change user using the injected state (1 line of code)
         */
        // UNTIL HERE
        setShowSortingButtons(true);
      }).catch(e => alert(`${screenName} is not an existing user, please put an existing user name`));
    }
  }

  function SortingButtons() {
    /*
        7. YOUR CODE HERE
        Change the sorting functions to work with the dispatcher prop
     */
    const sortByName = () => null; // HERE
    const sortByScreenName = () => null; // HERE
    return (
      <div className={css.sortingButtonsContainer}>
        <button onClick={sortByName} className={css.sortingButton}>Sort by name</button>
        <button onClick={sortByScreenName} className={css.sortingButton}>Sort by screen name</button>
      </div>);
  }

  const previousScreenName = usePreviousScreenName(screenName);

  return (
    <div className={css.root}>
      <h2 className={css.title}>Which user would you like to stalk?</h2>
      <div className={css.formStyle}>
        <input onChange={e => setScreenName(e.target.value)} value={screenName} className={css.fieldStyle} type='text' name='username' placeholder='User Name' required />
        <button onClick={submitUser} className={`${css.pushButton} ${css.blue}`} data-testid='submitButton'>Who Follows Him</button>
        {showSortingButtons && <SortingButtons/>}
      </div>
    </div>
  );
}
