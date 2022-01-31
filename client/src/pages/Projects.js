import React, { useEffect } from "react";
import { useStoreContext } from "../utils/GlobalState";
import ProjectMain from "../components/ProjectMain";
import ProjectSpotlight from "../components/ProjectSpotlight";

import API from "../utils/API";
import { PROJECTS } from "../utils/actions";

function Projects() {
  const [state, dispatch] = useStoreContext();

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = async () => {
    const { data } = await API.getProjects();
    dispatch({
      type: PROJECTS,
      load: data,
    });
    console.log(data);
  };

  return <div>{state.spotlight ? <ProjectMain /> : <ProjectSpotlight />}</div>;
}

export default Projects;
