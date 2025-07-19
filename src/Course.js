const Course = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Course registration successful!");
  };

  return (
    <div>
      <h1>Register for a Course</h1>
      <form onSubmit={handleSubmit}>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Course;
