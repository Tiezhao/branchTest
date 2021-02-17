// import React, { PureComponent, Component } from "react";
import React, { useState } from "react";

// class Sub extends PureComponent {
//   //   shouldComponentUpdate(nextProps, nextState) {
//   //     if (nextProps.name === this.props.name) {
//   //       return false;
//   //     }
//   //     return true;
//   //   }
//   render() {
//     console.log("------Sub");
//     return <div>Sub</div>;
//   }
// }

// export default class Pure extends Component {
//   state = {
//     num: 0,
//   };
//   render() {
//     const { num } = this.state;
//     console.log("------parent");
//     return (
//       <>
//         <Sub name={num} />
//         <p>{num}</p>
//         <button
//           onClick={() => {
//             this.setState({ num: num + 1 });
//           }}
//         >
//           ++
//         </button>
//       </>
//     );
//   }
// }

function Pure() {
  const [num, setNum] = useState(0);
  const [title, setTitle] = useState("react");
  const [list, setList] = useState(["vue", "react", "angular"]);
  function addCourse() {
    let newList = [...list, "node"];
    setList(newList);
  }
  return (
    <>
      <p>{num}</p>
      <button
        onClick={() => {
          setNum(num + 1);
        }}
      >
        ++
      </button>
      <h1>{title}</h1>
      <ul>
        {list.map((item) => {
          //   console.log("----item", item);
          return <li style={{ listStyle: "none" }}>{item}</li>;
        })}
      </ul>
      <button onClick={addCourse}>添加课程</button>
    </>
  );
}
export default Pure;
