# React Hooks

## Prerequisite

Learn about the basics of [React Hooks](https://reactjs.org/docs/hooks-intro.html), focus on [useReducer](https://reactjs.org/docs/hooks-reference.html#usereducer) & [useState](https://reactjs.org/docs/hooks-reference.html#usestate) hooks.

## Instructions

First, change the initial state management of the app in [App.tsx](../App.tsx) so every time the app refreshes it will start in `React Hooks` mode.

1) Start by knowing the action types [here](./reducer-actions.enum.ts).
2) Fill the gaps in [Hooks-app](./Hooks-app.tsx), you need to complete the reducer and use React Hooks inside `HooksApp` function (specifics in the file).
3) Fill the gaps in [follower-list](./follower-list/follower-list.tsx), use the dispatch function inserted to this component in order to init the first followers and add additional followers.
4) Set the user properly in [stalk-form](./stalk-form/stalk-form.tsx) by using the hook injected to this component.
5) Verify that you can submit and get the user information as defined in [App Usage - Our Goal](https://github.com/GBT3101/React-state-management-workshop#app-usage---our-goal).

If all went well, by now you should be able to submit and fetch a list of followers for the user.

Bonus:

6) Set the sorting function in [stalk-form](./stalk-form/stalk-form.tsx)
