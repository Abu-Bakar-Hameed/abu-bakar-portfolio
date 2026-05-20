"use client";

import { useEffect, useState } from "react";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [open, setOpen] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const [form, setForm] = useState({
    title: "",
    desc: "",
    link: "",
    image: "",
  });

  useEffect(() => {
    const saved = localStorage.getItem("projects");
    if (saved) setProjects(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(projects));
  }, [projects]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setForm((prev) => ({ ...prev, image: reader.result }));
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = () => {
    if (!form.title || !form.desc) return;

    if (editIndex !== null) {
      const updated = [...projects];
      updated[editIndex] = form;
      setProjects(updated);
      setEditIndex(null);
    } else {
      setProjects([...projects, form]);
    }

    setForm({ title: "", desc: "", link: "", image: "" });
    setOpen(false);
  };

  const deleteProject = (index) => {
    setProjects(projects.filter((_, i) => i !== index));
  };

  const editProject = (index) => {
    setForm(projects[index]);
    setEditIndex(index);
    setOpen(true);
  };

  return (
    <section id="projects" className="py-24 px-6 bg-[#050b18] text-white relative">

      <div className="max-w-6xl mx-auto">

        {/* TITLE */}
        <h2 className="text-4xl font-bold text-cyan-300 mb-10">
          Projects
        </h2>

        {/* + BUTTON */}
        <div className="fixed bottom-8 right-8 group">
          <button
            onClick={() => setOpen(true)}
            className="w-14 h-14 rounded-full bg-cyan-400 text-black text-3xl font-bold shadow-[0_0_25px_#22d3ee] hover:scale-110 transition duration-300"
          >
            +
          </button>

          <span className="absolute -left-28 top-3 scale-0 group-hover:scale-100 transition bg-black/80 text-cyan-300 text-xs px-3 py-1 rounded-md border border-cyan-300/20">
            Add Project
          </span>
        </div>

        {/* PROJECTS GRID */}
        <div className="grid md:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-cyan-500/10 border border-cyan-300/20 rounded-2xl overflow-hidden hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(34,211,238,0.2)] transition duration-300"
            >

              {/* IMAGE */}
              {project.image && (
                <img
                  src={project.image}
                  className="h-44 w-full object-cover group-hover:scale-105 transition duration-300"
                />
              )}

              <div className="p-5">

                <h3 className="text-xl font-bold text-cyan-300">
                  {project.title}
                </h3>

                <p className="text-gray-300 mt-2 mb-4 text-sm leading-6">
                  {project.desc}
                </p>

                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    className="text-cyan-200 text-sm underline"
                  >
                    Live Demo →
                  </a>
                )}

                {/* ACTIONS */}
                <div className="flex gap-3 mt-5">

                  <button
                    onClick={() => editProject(index)}
                    className="px-3 py-1 text-xs rounded-md bg-yellow-400 text-black hover:scale-105 transition"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => deleteProject(index)}
                    className="px-3 py-1 text-xs rounded-md bg-red-500 text-white hover:scale-105 transition"
                  >
                    Delete
                  </button>

                </div>

              </div>
            </div>
          ))}

        </div>
      </div>

      {/* MODAL */}
      {open && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50">

          <div className="w-[92%] md:w-[520px] rounded-2xl bg-[#0b1220]/90 border border-cyan-300/20 p-6 shadow-[0_0_40px_rgba(34,211,238,0.15)]">

            <h3 className="text-2xl font-bold text-cyan-300 mb-5">
              {editIndex !== null ? "Edit Project" : "Add Project"}
            </h3>

            <div className="space-y-4">

              <input
                name="title"
                value={form.title}
                onChange={handleChange}
                placeholder="Project Title"
                className="w-full px-4 py-3 rounded-xl bg-cyan-500/10 border border-cyan-300/20 outline-none focus:border-cyan-400"
              />

              <textarea
                name="desc"
                value={form.desc}
                onChange={handleChange}
                placeholder="Project Description"
                rows={3}
                className="w-full px-4 py-3 rounded-xl bg-cyan-500/10 border border-cyan-300/20 outline-none focus:border-cyan-400 resize-none"
              />

              <input
                name="link"
                value={form.link}
                onChange={handleChange}
                placeholder="Live Link"
                className="w-full px-4 py-3 rounded-xl bg-cyan-500/10 border border-cyan-300/20 outline-none focus:border-cyan-400"
              />

              <input
                type="file"
                accept="image/*"
                onChange={handleImage}
                className="w-full text-sm text-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-cyan-400 file:text-black hover:file:bg-cyan-300"
              />

            </div>

            {/* BUTTONS */}
            <div className="flex justify-end gap-3 mt-6">

              <button
                onClick={() => {
                  setOpen(false);
                  setEditIndex(null);
                  setForm({ title: "", desc: "", link: "", image: "" });
                }}
                className="px-4 py-2 rounded-xl border border-cyan-300/30 text-cyan-200 hover:bg-cyan-500/10"
              >
                Cancel
              </button>

              <button
                onClick={handleSubmit}
                className="px-4 py-2 rounded-xl bg-cyan-400 text-black font-semibold hover:shadow-[0_0_20px_#22d3ee]"
              >
                {editIndex !== null ? "Update" : "Add"}
              </button>

            </div>

          </div>
        </div>
      )}

    </section>
  );
}