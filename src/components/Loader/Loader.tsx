import "./Loader.css";

const Loader = () => {
  return (
    <div className="loader">
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <h2>Loading...</h2>
    </div>
  );
};

export default Loader;
