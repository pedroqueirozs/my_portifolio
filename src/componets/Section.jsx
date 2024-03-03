function Section(props) {
  return (
    <>
      <div className="container-section">
        <h2 className="section-title">{props.title}</h2>
        <p className="section-description">{props.description}</p>
      </div>
    </>
  );
}
export default Section;
