import './CategoryList.css';

export default function CategoryList(props) {
	return (
		<div>
			<ul className='CategoryList'>
				{/* looping through an array to render each element in it */}
				{props.categories.map((c) => (
					<li key={c}>{c}</li>
				))}
			</ul>
		</div>
	);
}

// Here is another way to do this

// function CategoryList(props) {
// 	// for each c in the categories (eg., "Desserts", "Sandwich", etc),
// 	// add <li>"Desserts"</li> to the new array arr
// 	let arr = [];
// 	for (let c of props.categories) {
// 		arr.push(<li>{c}</li>);
// 	}
// 	return (
// 		<div>
// 			<ul className='CategoryList'>
// 				{/* make the array arr show up */}
// 				{arr}
// 			</ul>
// 		</div>
// 	);
// }
