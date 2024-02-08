# React-Testing

## Testing Overview
**Jest:**  It is a javascript testing framework. jest is a test runner it finds, runs, determine wheather a test passed or failed and report back human readable error report.   
**RTL: React Testing Library -** JS test utility that provides virtual DOM for testing react components. RTL is wrapper for DOM testing library.   

One is not an alternative of other but both are needed.   

**Types of test:**   
1. Unit Test - test individual building block i.e. class or function or component.Each unit/block is tested in isolation, independent fo the other units. Dependencies are mocked.    
2. Integration Test - testing combination of units.   
3. End to End (E2E) - testing entire application flow.   

**RTL:** Combination of Unit test and E2E in a sense they resemble the way a user would interact with the component. We do not concern about the implementation detail. We are testing how the component behaves when a user interct with it. Can be classified as Functional testing. Example if 8 is calculated as 4+4 or 5+3 we wont care about how 8 was generated but we would care if the user sees the 8 or no.    
**TDD: (Test Driven Development)** It is a development process where tests are written before writing the software code. Red-Green Testing.     

## Every test generally involves the following basic steps:
1. Render the component -> user render()
2. Find an element rendered by the above component -> use RTL queries for ex: getBy..
3. Assert against the element found in **step2** which will pass or fail test.  -> use expect  

## Anatomy of a test
`test(name, fn, timeout)`   
**1st argument : name:** Test name use to identify test.   
**2nd argument : fn:** fucntion containing the expectations to test.    
**3rd argument : timeout:** optional argument to tell how long to wait before aborting. Default 5s.    

The function `fn` is usually an arrow fucntion whihc create virtual DOM for the component and assert some test on the component. Simple example:
```typescript
// Basic structure , test name, arrow function with virtual DOM and assertion
test("Greet renders Correctly!", () => {
  render(<Greet />); // Means the Greet component should render
  const textELement = screen.getByText(/Greet/i); // And the resulting DOM should have a text greet
  expect(textELement).toBeInTheDocument();
});
```
# What to test in React:
* Test component renders
* Test component renders with props
* Test component renders in different states
* Test component reacts to events
## What not to test:
* We need to test the behaviour and not the implementation/ details of code
* Not to test 3rd party libraries
* and code that is not important to user such as a code to format date in a specific format. Just check if the date on screen is in proper format

# RTL Queries 
### Methods to find elements on page
