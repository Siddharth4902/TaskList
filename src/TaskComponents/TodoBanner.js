export default function ToDoBanner(props) {
  const { name, tasks } = props;
  return (
    <>
      <h1 className="bg-primary text-center text m-2 p-2">
        {name}'s Tasks
        <br/> {tasks.filter((x) => !x.done).length} task to be
        completed
        
      </h1>
    </>
  );
}
