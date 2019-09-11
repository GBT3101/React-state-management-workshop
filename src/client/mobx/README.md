# Mobx

## Prerequisite

Learn about the basics of [Mobx](https://mobx.js.org/intro/overview.html) and it's [API](https://mobx.js.org/refguide/api.html), focus on `observables`, `Observers` and `actions` (it's enough for our usecase).

Learn how to `inject` store and define components as `observer` [here](https://www.spectory.com/blog/MobX%20with%20React%20Introduction).

You should also know how to provide the store using `Provider (mobx-react)` ([Good example here](https://codesandbox.io/s/vj7zm4k4w5)).


## Instructions

First, change the initial state management of the app in [App.tsx](../App.tsx) so every time the app refreshes it will start in `Mobx` mode.

1) Define the needed `Observables` in your [store](./mobx-app-store.ts).
2) Set the initial state in your [store](./mobx-app-store.ts) constructor.
3) Define the needed `Actions` in your [store](./mobx-app-store.ts).
4) Provide the store for your [App](./Mobx-app.tsx), Don't forget the [Good example](https://codesandbox.io/s/vj7zm4k4w5).
5) inject the store on [stalk-form](./stalk-form/stalk-form.tsx) main component, also define it as `observer`. Here's a good example on how to [inject store to a functional component](https://stackoverflow.com/questions/42943719/how-to-inject-mobx-store-into-a-stateless-component).
6) Reset the follower batch index after getting new user in [stalk-form](./stalk-form/stalk-form.tsx) using the store.
7) Set the fetched user after getting new user in [stalk-form](./stalk-form/stalk-form.tsx) using the store.
8) inject the store on [follower-list](./follower-list/follower-list.tsx) main component, also define it as `observer`. just like you did for [stalk-form](./stalk-form/stalk-form.tsx).
9) Define the 5 consts using the store that will make the [follower-list](./follower-list/follower-list.tsx) component work. By now if everything done right you should be able to insert a user screen name and all its followers be shown.
10) Define the sorting functions in [stalk-form](./stalk-form/stalk-form.tsx).
11) Verify that the app works as expected :) Good job!