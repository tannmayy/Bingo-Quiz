import { ReactElement } from "react";

export interface questionsInterface {
    id: number;
    question: string;
    answer: string;
}
export interface timerInterface {
    startTimer: boolean;
    stopTimer: boolean;
}

export const QUESTIONS = [
    { id: 0, question: "1. The Data structure that uses LIFO (Last In First Out) Principle", answer: "Stack" },
    { id: 1, question: "2. Name the Data structure that uses LIFO (Last In First Out) Principle", answer: "Queue" },
    { id: 2, question: "3. Name at least 3 new concepts (functions) introduced in JS with ES6", answer: "https://www.w3schools.com/js/js_es6.asp" },
    { id: 3, question: "4. Name at least 5 new concepts (functions) introduced in JS with ES6", answer: "https://www.w3schools.com/js/js_es6.asp" },
    { id: 4, question: "5. You can write a JS function that returns a value without using `return` keyword. True or False", answer: "True" },
    {
        id: 5, question: `6. "let i = 2;
    if(i = 5){console.log("yes")};
    if(i==2){console.log("no")};"`, answer: "yes"
    },
    { id: 6, question: "7. What is the point of using `===` comparison operator in JS", answer: "Check Type and Value" },
    { id: 7, question: "8. 3 States of a promise", answer: "Resolved, Rejected, Pending" },
    { id: 8, question: "9. What is `continue` keyword used for", answer: "Skip an iteration in loops" },
    { id: 9, question: "10.  between `break` and `exit()` in most programming languages", answer: "break => breaks a loopexit() => terminates the whole program" },
    { id: 10, question: "11. `undefined` is a data type in python.True or False", answer: "False" },
    { id: 11, question: "12.  is a Git submodule, and how is it useful?", answer: "A Git submodule is a way to include another Git repository as a subdirectory within a parent Git repository. It allows you to keep a separate repository as a component of your main project." },
    { id: 12, question: "13. Describe the purpose of git cherry-pick and when it might be used.", answer: "git cherry-pick allows you to apply a specific commit from one branch to another. It is useful when you want to pick and apply specific changes without merging entire branches." },
    { id: 13, question: "14. A git stash created on branch A will be deleted when switching to branch B.True or False", answer: "False" },
    { id: 14, question: "15. In HTML `target='_blank'` is used to open a link in a new tab while `target='_currrent'` is used to open the link in the current tab. True or False", answer: "False" },
    { id: 15, question: "16. In HTML if not expiltly specified `target='_self'` will be the target value for a link.True or False", answer: "True" },
    { id: 16, question: "17. What is a fast forward merge.", answer: ": A fast-forward merge occurs when the branch being merged has no new commits since the branch it is merged into, resulting in a linear history." },
    { id: 17, question: "18. What is git blame", answer: "Shows who last modified each line in a file and the corresponding commit." },
    { id: 18, question: "19. When does a `detached HEAD` state occur in git?", answer: " A detached HEAD state occurs when you checkout a specific commit instead of a branch." },
    {
        id: 19, question: `20. Is the following CSS code snippet correct : "p:hover {
        background-color: yellow;
      }"`, answer: "Yes"
    },
    {
        id: 20, question: `21. Is the following CSS code snippet correct : "p:click {
        background-color: yellow;
      }"`, answer: "No"
    },
    { id: 21, question: `22. Output following variable 'stringOne = "AisA\nBshouldBB"' what will the output of '<div>{stringOne}</div>' be`, answer: "AisA BshouldBB" },
    { id: 22, question: "23. Name of the JS Engine for mozilla firefox", answer: "Spider Monkey" },
    { id: 23, question: `24. Output of the following code snippet "let num=3459; console.log(num.toString)"`, answer: "Will throw an error as toString is a function" },
    { id: 24, question: `25. Output of the following "let a1 = [1,2,3,4,5]; console.log(a1.len)"`, answer: "5" }
];

export const NO_OF_CELLS = 5;

export interface dataPropsInterface {
    question: ReactElement,
    answer: ReactElement,
    onQuestionClick: any
}
