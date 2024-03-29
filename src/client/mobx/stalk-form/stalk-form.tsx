import * as React from 'react';
import { Link } from 'react-router-dom';
import {fetchUser} from '../../utils/api-facade';
import {inject, observer} from 'mobx-react';
import {useState} from 'react';
import {useRef} from 'react';
import {useEffect} from 'react';
const css = require('../../styles/stalk-form.css');

function usePreviousScreenName(screenName) {
  const previousScreenNameRef = useRef();
  useEffect(() => {
    previousScreenNameRef.current = screenName;
  });
  return previousScreenNameRef.current;
}

/*
    5. YOUR CODE HERE
    Inject the store on the component.
    Define the component as Observer.
    hint: imports are already here, you don't need anything else.
 */
export const StalkForm = props => { // HERE
  // const { mobxAppStore } = props; // todo - uncomment when successfuly injecting the store on props
  const [screenName, setScreenName] = useState('');
  const [showSortingButtons, setShowSortingButtons] = useState(false);

  function submitUser() {
    const userAlreadyFetched = previousScreenName === screenName;
    if (!userAlreadyFetched) {
      fetchUser(screenName).then(response => {
        const user = response.data;
        /*
          6. YOUR CODE HERE
          Reset follower batch index
         */
        /*
          7. YOUR CODE HERE
          set the user using the store.
         */
        // UNTIL HERE
        setShowSortingButtons(true);
      }).catch(e => alert(`${screenName} is not an existing user, please put an existing user name`));
    }
  }

  function SortingButtons() {
    /*
        10. YOUR CODE HERE
        Define the sorting functions using the mobxAppStore.
     */
    const sortByName = () => null; // HERE
    const sortByScreenName = () => null; // HERE
    return (
      <div className={css.sortingButtonsContainer}>
        <button onClick={() => sortByName()} className={css.sortingButton}>Sort by name</button>
        <button onClick={() => sortByScreenName()} className={css.sortingButton}>Sort by screen name</button>
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
};
