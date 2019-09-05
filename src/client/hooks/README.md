# React Hooks

## Prerequisite

Learn about the basics of [React Hooks](https://reactjs.org/docs/hooks-intro.html), focus on [useReducer](https://reactjs.org/docs/hooks-reference.html#usereducer) & [useState](https://reactjs.org/docs/hooks-reference.html#usestate) hooks.

## Instructions

1) Start by knowing the action types [here](./reducer-actions.enum.ts).
2) Fill the gaps in [Hooks-app](./Hooks-app.tsx), you need to complete the reducer and use React Hooks inside `HooksApp` function (specifics in the file).
3) Fill the gaps in [follower-list](./follower-list/follower-list.tsx), use the dispatch function inserted to this component in order to init the first followers and add additional followers.
4) Set the user properly in [stalk-form](./stalk-form/stalk-form.tsx) by using the hook injected to this component.

If all went well, by now you should be able to submit and fetch a list of followers for the user.

Bonus:
5. Set the sorting function in [stalk-form](./stalk-form/stalk-form.tsx)