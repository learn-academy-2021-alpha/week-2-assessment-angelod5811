# ASSESSMENT 2: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. Why would you use the method super()?

  Your answer: super() represents the parent value, its used to call the parent class and separate the sub classes that could have different functions.

  Researched answer: The super keyword refers to superclass (parent) objects. It is used to call superclass methods, and to access the superclass constructor. The most common use of the super keyword is to eliminate the confusion between superclasses and subclasses that have methods with the same name.



2. What is a virtual DOM?

  Your answer: A virtual dom is the virtual programming idea where data can be changed in real time without having to completely refresh the page every single time. This is the basis of React.

  Researched answer:The virtual DOM (VDOM) is a programming concept where an ideal, or “virtual”, representation of a UI is kept in memory and synced with the “real” DOM by a library such as ReactDOM. This process is called reconciliation. This approach enables the declarative API of React: You tell React what state you want the UI to be in, and it makes sure the DOM matches that state. This abstracts out the attribute manipulation, event handling, and manual DOM updating that you would otherwise have to use to build your app.



3. When creating a basic (stateless) class component in React, what are the necessary elements needed to display "Hello World" in the browser?

  Your answer: needs an import consctructor, super, and props followed by a render() of a function then and export default app.

  Researched answer:

  class Cat extends React.Component {
  constructor(props) {
    super(props);



4. What is JSX?

  Your answer: It's a way to write javascript in a .html file. without having completely separate the files. Also is a component of React.

  Researched answer: JSX allows us to write HTML elements in JavaScript and place them in the DOM without any createElement()  and/or appendChild() methods. JSX converts HTML tags into react elements.



5. What is state in React?

  Your answer: State is the property that holds the class.

  Researched answer:React components has a built-in state object. The state object is where you store property values that belongs to the component. When the state object changes, the component re-renders.



6. STRETCH: What is hoisting in JavaScript?

  Your answer: Hoisting is a method in testing. You can hoist objects to a class and test them.

  Researched answer: Hoisting is JavaScript's default behavior of moving declarations to the top.



## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

- React lifecycle methods - Each component has several “lifecycle methods” that you can override to run code at particular times in the process.
- React props - Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. This page provides an introduction to the idea of components. Props stands for properties.
- event.preventDefault() - A method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.
- DOM events - DOM (Document Object Model) events are actions that occur as a result of the user action or as result of state change of the elements of a DOM tree.
- MVC - Stands for "Model-View-Controller." MVC is an application design model comprised of three interconnected parts. They include the model (data), the view (user interface), and the controller (processes that handle input).
