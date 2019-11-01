- [ ] Why would you use class component over function components (removing hooks from the question)?
    If your company requires it of you? As far as I can tell,  the only real advantage to using the class component over function (per the web) is that you have access to some lifecycle methods you couldn’t access in functional components (and using hooks).  Also, I know the docs say, don't call hooks inside loops, conditions, or nested functions. I honestly unsure whether this is a disadvantage shared by class components.

- [ ] Name three lifecycle methods and their purposes.
    ComponentDidMount will be invoked right after render and invoked only once, it is generally used for async data loading or adding event listeners.
    ComponentDidUpdate is used to perform any actions needed after data updates, you can setState in here, you can also target particular updates that are unwanted and refine what the update, should have been, not optimal because the unwanted update will occur before the redirect.
    ComponentWillUnmount typically used for cleaning up certain actions such as network requests and event listeners.  

- [ ] What is the purpose of a custom hook?
    A custom hook is another way in react to identify patterns of code, in this case for logic usually, and extract them so that the logic can be used in multiple components.    On a smaller scale the value of custom hooks is not necessarily very apparent.  This follows with the D.R.Y. principle.

- [ ] Why is it important to test our apps?
    It’s important to test our apps so we know that different components work and so that we can localize the debugging to specific components.  Rather than finding the application doesn’t work and combing the code for hours to find where that might be.  This also allows programmers to add new features with greater confidence that it won’t break the application, and if so, the problem can be identified more quickly.