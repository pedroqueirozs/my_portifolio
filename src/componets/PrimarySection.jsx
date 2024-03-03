function PrimarySection(props) {
  return (
    <>
      <div className="primary-container">
        <h2 className="section-title">{props.title}</h2>
        <p className="section-description">{props.description}</p>
      </div>
    </>
  );
}
export default PrimarySection;
