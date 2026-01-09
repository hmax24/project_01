import "./App.css";
import Counter from "./components/Counter/Counter";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import Tool from "./components/Tool/Tool";
// import Goodbye from "./components/Goodbye/Goodbye";
// import Greetings from "./components/Greetings/Greetings";

function App() {
  const johnDawson = {
        avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7x7RFFT8-4WY26mVJxhk5lvmoTIhb_0NzAQ&s",
        name: "John Dawson",
        description: "Full Stack Dev",
      };
  return (
    <>
      <p>Hello, World!</p>
      <Tool />
      {/* <Greetings name="alisher"/>
      <Greetings name="vadym"/>

      <Goodbye familyName="Khadimov"  score={5} />
      <Goodbye familyName="Maksymovych" /> */}
      

      <Counter />

      <ProfileCard {...johnDawson}
      />
    </>
  );
}

export default App;
