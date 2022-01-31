import React, { useState, useEffect } from "react";
import ProjectMain from "../components/ProjectMain";
import ProjectSpotlight from "../components/ProjectSpotlight";

import API from "../utils/API";

function Projects() {
  const [spotlight, setSpotlight] = useState(true);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = async () => {
    const { data } = await API.getProjects();
    console.log(data);
  };

  return <div>{spotlight ? <ProjectMain /> : <ProjectSpotlight />}</div>;
}

export default Projects;
