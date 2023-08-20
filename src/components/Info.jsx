const Info = ({ username, email, password, setShowResult }) => {
  return (
    <section className="info">
      <h1>Results</h1>
      <div>
        <p>
          <span>Name :</span> {username}
        </p>
        <p>
          <span>Email :</span> {email}
        </p>
        <p>
          <span>Password : </span> {password}
        </p>
      </div>

      <button
        onClick={() => {
          setShowResult(false);
        }}
      >
        Edit your information
      </button>
    </section>
  );
};

export default Info;
