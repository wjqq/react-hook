Hook 

UseLayoutEffect and useRef (https://linguinecode.com/post/when-to-use-useref-and-uselayouteffect)

99% of the time you’re going to want to use the useEffect hook, and the useState hook to manipulate the output of a React component.

But in certain cases you need make changes directly to a DOM node.

In case you need to, follow these 2 rule of thumbs:

Use useRef if you need to manage focus, text selection, trigger imperative animations or integrating third-party libraries.
Use the useLayoutEffect when ever you need to use useRef.

