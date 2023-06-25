import AddForm from "./AddForm.js";

export default function Employee() {
  return (
    <div className="App">
      <section className="TopAddEmployee">
        <h2>Add Employee</h2>
      </section>

      <p className="HorizontalLine"></p>

      <AddForm />
    </div>
  );
}
