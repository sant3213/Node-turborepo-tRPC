# React + TypeScript + Vite

Built-in hooks make it possible to use React's internal features within function components.
It is also possible to create your own hooks
Hooks rules
1. Hooks should only be called at the top level. It means that hooks should always be called. It is forbidden to call them conditionally, wrapping them with an if statement, for example, or call them after an early return in a function.
   By applying this rule it is ensure that they will be called in the same order every time the component's function is executed.
2. Only call Hooks within the function components. Any calls to it ooutside the function component will result in an error. The only **exception** is a **cumstom hook**. A custom hook may call other hooks if needed.

**State**

State is data that is kept internally by a component. When we have to render data like an array, we write JSX as an instruction on how to render it, and React uses the JSX to generate the HTML.

How can we add a row to the table?
As we are not using HTML, changing the table itself is off the table. Changing the JSX won't help because it is fine as it is. The only way to do it is to add a row to the houses array. It i basically a **one-way data flow**. We change the data upstream, and the table that is rendered downstream is ultimately just a reflection of it. But if we add an item to the array, there is no way that React can know the item was added. So the UI won't update, adn that's what we want. We need **state** to fix that.

The first parameter of this hook is the initial value of the state. useState() returns an array.
The first element in the array is an object that represents the current state.
The second is a function that we can use to change the state.
We use array destructuring to make the first available under the name houses, and the second is called setHouses.
By calling the set function React will know that the state was updated, and it will rerender the UI automatically if needed.

You're free to use the state hook multiple times in one component.

```js
const [car, setCars] = useState(carArray);

const addCar = () => {
   setHouses([
      ...houses,
      {
         id: 3,
         brand: "BMW",
         metadata:"420HP | 0km",
         price: 25000
      }
   ])
}

<button onClick="{addCar}"></button>
```

```js
const [counter, setCounter] = useState(0);
setCounter(counter + 1);
```

The set function also can take a function as parameter that gets the current state. Current is equivalent to the value of counter most of the time. But when multiple calls to the set function are done, React batches the calls for efficiency, only updating the state value when the batch completes. Using this pattern, it i guaranteed that current contains the value that was set by the previous call to the set function.

```js
const [counter, setCounter] = useState(0);
setCounter(current => counter + 1);
```

**Props**

A **prop** are read-only and shouldn't be changed by a component, but a prop value can change. 

What is a prop for one component is often state for another.

for card, {brand, line, metadata, combustionType, price, imgPath } is clearly a prop, so Card itself shouldn't change it.

```js
export const Card = ({brand, line, metadata, combustionType, price, imgPath }: Car) =>  {

    return (
        <>
            <div className="grid-card-unit-container">
                
                <div className="grid-img">
                    <img src={images[imgPath]} alt=""/>
                </div>

                <div className="item grid-brand">
                    <p>{brand}</p>
                </div>
      .
      .
      .

```

But for cars list, the car instance that is passed to card component is part of its state.
What happens if car list does a call to setCars, passing in a new car array instance, like do in the addCar function? The props will change for all car components, and the UI will be updated accordingly.
```js
   {cars.map((car) => 
             <div className="grid-item">
              <Card key={car.id} {...car}/></div>
            )}

```
**Reconciliation**
React updates the UI as efficiently as possible using a mechanism called reconciliation.

JSX is converted into create element statements. These statements produce a tree of React element objects, which are used to send the browser instructions on what it should render. When the state of a component changes, React will build a new object tree from scratch, but it will not instruct the browser to render all elements again. Instead, it will compare the old tree to the new one and determine what has to change. The browser will receive instructions on how to render just that.

Reconciliation is one of the core features of React:

- **Structure with components**: Reusability, have state
- **UIs declared in JavaScript**: Rendered output changes when state is updated
- **Efficiency with Reconciliation**: Only updates the parts of the UI that changed.

<h1>Component Rendering and Side Effects</h1>

**Rendering and Re-rendering**
Strictly speaking, in React applications, rendering is not equal to updating the browser. Rendering a component is running the component's functions where the updating of the browser is done by React using reconciliation.
Re-rendering means that the component's function is executed again. **When the state of a component changes it re-renders**.

On re-renders, all JSX for the component is returned, just like with the initial render. But that doesn't mean the entire component is refreshed in the browser. React uses reconciliation, where the browser will only update the parts that were actually changed.