# Redux

## Prerequisite

Learn about the basics of [Redux](https://redux.js.org/api/api-reference), here's a [good basic example](https://redux.js.org/basics/example), you should understand what is a `reducer`, `action` and `store`.

Also important is the [combineReducers](https://redux.js.org/api/combinereducers) function.

Learn about `mapStateToProps` & `mapDispatchToProps` [here](https://medium.com/@findforhad.io/redux-mapstatetoprops-and-mapdispatchtoprops-explained-ea48d41708dc)

## Instructions

1. Define an `action` for each `actionType` in [actions.ts](./actions.ts).
2. Define your reducers in [reducers.ts](./reducers.ts).
3. Combine Reducers in [reducers.ts](./reducers.ts).
4. Map state to props in [Redux-app.tsx](./Redux-app.tsx).
5. Map dispatch to props in [Redux-app.tsx](./Redux-app.tsx).
6. Reset the follower batch index after getting new user in [stalk-form.tsx](./stalk-form/stalk-form.tsx).
7. Set the user in [stalk-form.tsx](./stalk-form/stalk-form.tsx).
8. You can now uncomment the marked lines in [follower-list.tsx](./follower-list/follower-list.tsx).
9. Implement the call to init followers in [follower-list.tsx](./follower-list/follower-list.tsx).
10. Implement the call to add more followers in [follower-list.tsx](./follower-list/follower-list.tsx).
11. Implement the correct values for the needed consts in [follower-list.tsx](./follower-list/follower-list.tsx).
12. Implement the sorting functions in [stalk-form.tsx](./stalk-form/stalk-form.tsx).
13. Verify that the app works as expected :) Good job!