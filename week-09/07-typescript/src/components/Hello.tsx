type HelloProps = {
  name: string;
  age: number;
};

// export function Hello(props: { name: string}) {
//   return (
//     <>
//       <div>
//         Howdy {props.name} who is {props.age}
//       </div>
//     </>
//   );
// }

//! Using a separate prop type defined at the top of the document "HelloProps"

// export function Hello(props: HelloProps) {
//   return (
//     <>
//       <div>
//         Howdy {props.name} who is {props.age}
//       </div>
//     </>
//   );
// }

//! Using deconstructed props

export function Hello({ name, age }: HelloProps) {
  return (
    <>
      <div>
        Howdy {name} who is {age}
      </div>
    </>
  );
}
