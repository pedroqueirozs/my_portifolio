function Project(props) {
  return (
    <>
      <div className="projects-container ">
        <div className="container-project">
          <img className="project.img" src={props.img} alt="" />
          <span className="project-title">{props.title}</span>
          <p className="project-description">{props.description}</p>
        </div>
      </div>
    </>
  );
}
export default Project;
