import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import SearchBar from "./components/SearchBar";
import FilterButtons from "./components/FilterButtons";
import ProjectList from "./components/ProjectList";
import ProjectForm from "./components/ProjectForm";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import initialProjects from "./data/projects";
import "./styles/components.css";

function App() {
  const [projects, setProjects] = useState(initialProjects);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = ["All", "E-commerce", "Dictionary"];

  function addProject(newProject) {
    setProjects([...projects, newProject]);
  }

  const filteredProjects = projects.filter((project) => {
    const titleMatches = project.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const descriptionMatches = project.description
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const categoryMatches =
      selectedCategory === "All" || project.category === selectedCategory;

    return (titleMatches || descriptionMatches) && categoryMatches;
  });

  return (
    <div>
      <Navbar />
      <Hero />
      <main>
        <section className="projects-section" id="projects">
          <h2>My Projects</h2>
          <SearchBar
            searchTerm={searchTerm}
            onSearchChange={(event) => setSearchTerm(event.target.value)}
          />
          <FilterButtons
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
          <ProjectList projects={filteredProjects} />
          <ProjectForm onAddProject={addProject} />
        </section>
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
