import { toast } from "react-toastify";
import { useState } from "react";
import Loading from "../components/Loading";

const AddMovies = () => {
  const [isLoading, setIsLoading] = useState(false);

  // Validate summary input for max 50 words
  const validateSummary = (text) => {
    const wordCount = text.trim().split(/\s+/).length; // Count words
    if (wordCount > 50) {
      toast.error("Summary must not exceed 50 words.");
      return false;
    }
    return true;
  };

  const handleMovieAdd = (e) => {
    e.preventDefault(); 
    setIsLoading(true);

    const form = new FormData(e.target); 
    const title = form.get("title");
    const poster = form.get("poster");
    const genres = form
      .get("genres")
      .split(",")
      .map((genre) => genre.trim());
    const duration = Number(form.get("duration"));
    const releaseYear = Number(form.get("releaseYear"));
    const rating = Number(form.get("rating"));
    const summary = form.get("summary");


    if (!validateSummary(summary)) {
      setIsLoading(false);
      return;
    }

    const movieData = {
      title,
      poster,
      genres,
      duration,
      releaseYear,
      rating,
      summary,
    };

    fetch("http://localhost:5000/movies", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(movieData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Data has been added to the database");
          // e.target.reset(); 
        } else {
          toast.error("Failed to add movie.");
        }
      })
      .catch(() => {
        toast.error("An error occurred. Please try again.");
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <div className="py-20">
      <form
        onSubmit={handleMovieAdd}
        className="max-w-2xl mx-auto grid gap-3 grid-cols-1 md:grid-cols-2 rounded-xl border p-5 border-mainClr"
      >
        <h1 className="text-4xl text-center mb-8 md:col-span-2">
          Add Movie Poster
        </h1>

   
        <div className="mb-4">
          <label className="block mb-2">Movie Title</label>
          <input
            type="text"
            placeholder="Movie Title"
            name="title"
            required
            className="border p-2 w-full"
          />
        </div>


        <div className="mb-4">
          <label className="block mb-2">Poster URL</label>
          <input
            type="text"
            placeholder="Poster URL"
            name="poster"
            required
            className="border p-2 w-full"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">Genres (Comma-Separated)</label>
          <input
            type="text"
            placeholder="e.g., Action, Adventure, Comedy"
            name="genres"
            required
            className="border p-2 w-full"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">Duration (Minutes)</label>
          <input
            type="number"
            placeholder="e.g., 120"
            name="duration"
            required
            className="border p-2 w-full"
          />
        </div>


        <div className="mb-4">
          <label className="block mb-2">Release Year</label>
          <input
            type="number"
            placeholder="e.g., 2023"
            name="releaseYear"
            required
            className="border p-2 w-full"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">Rating (Out of 10)</label>
          <input
            type="number"
            placeholder="e.g., 8.5"
            name="rating"
            step="0.1"
            required
            className="border p-2 w-full"
          />
        </div>


        <div className="md:col-span-2">
          <div className="mb-4">
            <label className="block mb-2">Summary (Max 50 Words)</label>
            <textarea
              placeholder="Write a brief summary of the movie (max 50 words)"
              name="summary"
              rows="4"
              required
              className="border p-2 w-full break-words whitespace-normal"
              onBlur={(e) => validateSummary(e.target.value)} 
            ></textarea>
          </div>
          
          <button
            type="submit"
            disabled={isLoading}
            className={`bg-mainClr text-white px-4 py-2 rounded w-full ${
              isLoading
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-white hover:text-black/100"
            }`}
          >
            {isLoading ? <Loading /> : "Add Movie"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddMovies;
