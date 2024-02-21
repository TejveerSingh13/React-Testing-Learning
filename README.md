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
## Methods to find elements on page
### 1. `getByRole`:
query element with given role. role refer to ARIA role. eg Button has button role, h1, h2, h3 etc has heading role. If element doesnt have a default role we can assign one by role = 'button'.
```javascript
//Sample
describe("Application", () => { //describe a test suite
  test("Renders Correctly", () => { // start writing first test
    render(<Application />); // Setup 1. render
    const nameElement = screen.getByRole("textbox", { name: /name/i }); // get by role and query by text if multiple role present
    // the name is usually name attribute of label for input, or text for button or aria-label
    expect(nameElement).toBeInTheDocument(); // assert the condition to test

    const jobLocationelement = screen.getByRole("combobox");
    expect(jobLocationelement).toBeInTheDocument();

    const pageHeadding = screen.getByRole("heading", { level: 1 }); // level for eg h1, h2, h3 etc
    expect(pageHeadding).toBeInTheDocument();
  });
});
```
### 2. `getByLabelText`:
query by searching for the label that matches the given text and then finds the element associated with that label.
```javascript
const nameElement2 = screen.getByLabelText("Name");
expect(nameElement2).toBeInTheDocument();
// If we have a same label twice then we can pass the selector parameter in the `getByLabelText` which takes in html element type
const nameElement2 = screen.getByLabelText("Name", selector: "input");
expect(nameElement2).toBeInTheDocument();
```
### 3. `getByPlaceholdertext`
### 4. `getByText`: 
Search all element that have a text node with textContent matching given text. Typically used to find para, div or span element. also have 'selector` parameter same as above.

### 5. `getByDisplayValue`:
Returns the input, textarea or select element that has tha matching display value.
### 6. `getByAltText`:
Only for element tha suppport alt field.
### 7. `getByTitle`:
### 8. `getByTestId`:

 ## IMPORTANT !!!!!!
**When to use which -** Priority order -> 1(global) -> 2(Good for form Fields) -> 3 -> 4(outside forms/ find non interactive elements) -> 5 (Mostly we should get all test elements with the pervious 5)-> 6,7 -> 8(recommented when pervious not work or when **dynamic text**)   

## Methods to find MULTIPLE elements on page (getAllBy)
### every getBy query has its own getAllBy query 

The first parameter in the above query is called as a `TextMatch`. It is not a string only field.    
textMatch can be string, regex or a function

**Example HTML for below : <div>Hello World<div/>**

#### TextMatch - String ex
```typescript
screen.getByText('Hello World') // full string match
screen.getByText('llo Wor', {exact: false}) //substring match
screen.getByText('hello world', {exact: false}) //ignore case too
```
#### TextMatch - Regex ex
```typescript
screen.getByText(/Hello World/) // substring match
screen.getByText(/Hello World/i) // substring match ignore case
```
#### TextMatch - Function ex
(content?: string, element?:Element | null) => boolean
```typescript
screen.getByText((content) => content.startsWith('Hello') ) // substring match
```
## Methods to find elements on page (queryBy and queryAllBy)
Why the need of aobve? Since if the element is not rendered in the DOM getBy and getAllBy throws an error.     
To make sure an element is not persent in the DOM. returns null if the element not match instead of an error.

## Methods to find elements on page (findBy and findAllBy) <- Used while working with async code
The above methods getBy and queryBy wont be able to find element that Appear or Disappear, like one which render after a delay or get removed after a time interval.
**finBy** returns a promise which resolev when element found and is rejected by a default timeout of 1000ms if element not found
```typescript
test("start learning is eventually displayed", async () => {
    render(<Skills skills={skills} />);
    const SLButton = await screen.findByRole(
      "button",
      {
        name: "Start learning",
      },
      { timeout: 2000 }
    );
    expect(SLButton).toBeInTheDocument();
  });
```
