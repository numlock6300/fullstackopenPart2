const Course = ({ course }) => {
	return (
		<div>
			<Header course={course} />
			<Content course={course} />
			<Total course={course} />
		</div>
	);
};

const Header = ({ course }) => {
	return <h1>{course.name}</h1>;
};
const Content = ({ course }) => {
	return (
		<div>
			{course.parts.map((part) => (
				<Part
					key={part.id}
					part={part.name}
					exercises={part.exercises}
				/>
			))}
		</div>
	);
};

const Part = ({ part, exercises }) => {
	return (
		<p>
			{part} {exercises}
		</p>
	);
};

const Total = ({ course }) => {
	const total = course.parts.reduce(
		(sum, currentValue) => sum + currentValue.exercises,
		0
	);

	return (
		<p>
			<strong>total of {total} exercises</strong>
		</p>
	);
};

export default Course;
