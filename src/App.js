import {handlers} from "./mocks/handlers";
export default function App() {

console.log(handlers[0].info);
  return (
    <div className="App">
		    <select style={{backgroundColor:"lightGray",width:"500px",height:"40px"}}>
		    	<option>Affenpinscher</option>
		    	<option>African</option>
				<option>Airedale</option>	
				<option>Australian Shepherd</option> 
			</select>
			<br/>
			<img src="https://images.dog.ceo/breeds/affenpinscher/n02110627_10437.jpg" alt="Dog image"/>
    </div>
  );
}
