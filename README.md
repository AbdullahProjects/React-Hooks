# React Hooks

Hooks in React are functions that enable the use of state and other React features within functional components, eliminating the need for class components. They were introduced in React 16.8 to provide a more direct and concise way to manage component logic and state.


## 1. Context API:
The **Context API** in React allows you to share data across your entire application **without passing props manually at every level**.  
It is a built-in state management tool that helps avoid **prop-drilling** (passing data from parent → child → child…).

Use it when multiple components need to access the same data such as theme, language, user authentication, cart items, etc.

#### Why Use Context API?
- Avoids prop-drilling  
- Makes global state management easy  
- Cleaner component structure  
- Built into React (no extra library like Redux needed)

#### How it works (short)
1. Create a Context with `createContext()`.  
2. Provide a value using `Context.Provider` at a high level.  
3. Consume the value inside any component using the `useContext()` hook.

---
