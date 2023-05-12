// import React from "react";
// import ReactDom from 'react-dom';

// function Greeting() {
//   return (
//         <div>
//     <     Person/>
//           <Meg/>
//         </div>
//           );
// }

// // function Greeting(){
// //   return React.createElement('div', {}, React.createElement('h1',{}, "Parmesh"));
// // }

// const Person = () => <h1>Parmesh</h1>
// const Meg = () => <p>Meg</p>
// ReactDom.render(<Greeting></Greeting>, document.getElementById('root'));

//importing the important things
import React from "react";
import ReactDom from 'react-dom';
import './style.css';

//all variables and object
const Object1=[
     {
          id:1,
          img:"https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
          author:'Parmesh Bhatt',
          title:"My book"
     },
     {
          id:2,
          img:"https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg",
          author:'Maunil Bhatt',
          title:"book"
     },
     {
          id:3,
          img:'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
          author:"Pop",
          title:"book1"
     }
]

// const array=[1,2,3]
//main code
function Books(){
     return (
          <section>
               {Object1.map((book, index)=>{
                    // const {img,title, author} = book
                    return (
                         // <div>
                         //      <img src={img} alt="Parmesh"></img>
                         //      <h2>{author}</h2>
                         //      <h3>{title}</h3>
                         // </div>
                         <Book {...book}></Book>
                    )
               })}
          </section>
     );
}

const Book = (props) =>{
     const {id, img, title, author} = props
     console.log(props)
     return (
          <article>
               <h3>{id}</h3>
               <img src={img} alt="Parmesh" />
               <h2>{title}</h2>
               <h1>{author}</h1>
          </article>
     );
}

ReactDom.render(<Books></Books>, document.getElementById('root'));