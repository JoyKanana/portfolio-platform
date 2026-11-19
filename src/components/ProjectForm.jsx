import { useState } from "react";

function ProjectForm({ onAddProject }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("E-commerce");
  const [technologies, setTechnologies] = useState("");
  const [link, setLink] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const newProject = {
      id: Date.now(),
      title: title.trim(),
      description: description.trim(),
      category: category,
      technologies: technologies
        .split(",")
        .map((item) => item.trim())
        .filter((item) => item !== ""),
      link: link.trim()
    };

    onAddProject(newProject);

    setTitle("");
    setDescription("");
    setCategory("E-commerce");
    setTechnologies("");
    setLink("");
  }

  return (
    <div className="project-form-wrap">
      <h3>Add a project</h3>
      <form className="project-form" onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="new-title">Project name</label>
          <input
            id="new-title"
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            required
          />
        </div>

        <div className="form-field">
          <label htmlFor="new-description">Description</label>
          <textarea
            id="new-description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            required
          />
        </div>

        <div className="form-field">
          <label htmlFor="new-category">Category</label>
          <select
            id="new-category"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          >
            <option value="E-commerce">E-commerce</option>
            <option value="Dictionary">Dictionary</option>
          </select>
        </div>

        <div className="form-field">
          <label htmlFor="new-technologies">
            Technologies (separate with commas)
          </label>
          <input
            id="new-technologies"
            type="text"
            value={technologies}
            onChange={(event) => setTechnologies(event.target.value)}
            placeholder="React, JavaScript, HTML, CSS"
            required
          />
        </div>

        <div className="form-field">
          <label htmlFor="new-link">GitHub link</label>
          <input
            id="new-link"
            type="url"
            value={link}
            onChange={(event) => setLink(event.target.value)}
            placeholder="https://github.com/..."
            required
          />
        </div>

        <button type="submit">Add project</button>
      </form>
    </div>
  );
}

export default ProjectForm;
