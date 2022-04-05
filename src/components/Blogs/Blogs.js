import React from 'react';

const Blogs = () => {
    return (
        <div className='fw-bold'>
            <div>
                <h1 className='text-primary'>What is Context Api?</h1>
                <p>Ans : The React Context API is a way for a React app to effectively produce global variables that can be passed around.<br /> This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. <br />Context is also touted as an easier.<br />
                    Lighter approach to state management using Redux.
                    <br /> Context API is a (kind of) new feature added in version 16.3 of React that allows one to share state across the entire app (or part of it) lightly and with ease. </p>

            </div>
            <div>
                <h1 className='text-primary'>What is Semantic Tag?</h1>
                <p>Ans :  HTML was originally created as a markup language to describe documents on the early internet.<br /> As the internet grew and was adopted by more people, its needs changed.<br />
                    Where the internet was originally intended for sharing scientific documents. <br/>Now people wanted to share other things as well.<br /> Very quickly, people started wanting to make the web look nicer.
                </p>
            </div>
        </div>
    );
};

export default Blogs;