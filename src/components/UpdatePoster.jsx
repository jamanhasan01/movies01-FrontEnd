import { toast } from "react-toastify";
import { useState } from "react";
import { Rating } from "react-simple-star-rating";
import Loading from "../components/Loading";
import { useLoaderData, useNavigate } from "react-router-dom";

const UpdatePoster = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [rating, setRating] = useState(0); // For star rating
  const [genreValue, setGenreValue] = useState("");
  const [releaseYearValue, setReleaseYearValue] = useState("");
  

  let navigate=useNavigate()

  let moviedata = useLoaderData();
  let { _id, title, poster, genre, releaseYear, summary, duration } = moviedata;

  const isValidURL = (url) => {
    const urlPattern = new RegExp(
      "^(https?:\\/\\/)?" +
      "((([a-zA-Z0-9$-_@.&+!*\"(),]|(%[0-9a-fA-F]{2}))+(\\.[a-zA-Z]{2,4})?)+)*" +
      "(:\\d{1,5})?(\\/.*)?$"
    );
    return urlPattern.test(url);
  };

  const handleMovieUpdate = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const form = new FormData(e.target);
    const poster = form.get("poster");
    const title = form.get("title");
    const genre = genreValue || form.get("genre");
    const duration = Number(form.get("duration"));
    const releaseYear = releaseYearValue || form.get("releaseYear");
    const summary = form.get("summary");

    // Validations
    if (!isValidURL(poster)) {
      toast.error("Please provide a valid URL for the poster.");
      setIsLoading(false);
      return;
    }
    if (title.trim().length < 2) {
      toast.error("Movie title must have at least 2 characters.");
      setIsLoading(false);
      return;
    }
    if (duration <= 60) {
      toast.error("Duration must be greater than 60 minutes.");
      setIsLoading(false);
      return;
    }
    if (!releaseYear || isNaN(releaseYear) || releaseYear < 1900 || releaseYear > new Date().getFullYear()) {
        toast.error(`Please enter a valid release year between 1900 and ${new Date().getFullYear()}.`);
        setIsLoading(false);
        return;
      }
    if (rating === 0) {
      toast.error("Please provide a rating.");
      setIsLoading(false);
      return;
    }
    if (summary.trim().length < 10) {
      toast.error("Summary must have at least 10 characters.");
      setIsLoading(false);
      return;
    }

    // Update data API
    let formDataObj = { poster, title, genre, duration, releaseYear, summary, rating }
    // https://movies01-backend.vercel.app/
    fetch(`https://movies01-backend.vercel.app/movies/${_id}`, {
      method:"PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formDataObj),
    })
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        if (data.acknowledged) {
            navigate('/')
          toast.success("Movie updated successfully!");
          
        } else {
          toast.error("Failed to update movie.");
        }
      })
      .catch((error) => {
        setIsLoading(false);
        toast.error(error.message)
      });
  };

  return (
    <div className="pb-20">
      <form
        onSubmit={handleMovieUpdate}
        className="max-w-2xl mx-auto grid gap-3 grid-cols-1 md:grid-cols-2 rounded-xl border p-5 border-mainClr"
      >
        <h1 className="text-4xl text-center mb-8 md:col-span-2">
          Update Movie
        </h1>

        <div className="mb-4">
          <label className="block mb-2">Movie Poster URL</label>
          <input
            type="text"
            name="poster"
            placeholder="Enter the poster URL"
            required
            className="border p-2 w-full"
            defaultValue={poster}
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">Movie Title</label>
          <input
            type="text"
            name="title"
            placeholder="Enter the movie title"
            required
            className="border p-2 w-full"
            defaultValue={title}
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">Genre</label>
          <select
            name="genre"
            required
            className="border p-2 w-full"
            value={genreValue || genre}
            onChange={(e) => setGenreValue(e.target.value)}
          >
            <option value="comedy">Comedy</option>
            <option value="drama">Drama</option>
            <option value="horror">Horror</option>
            <option value="action">Action</option>
            <option value="thriller">Thriller</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block mb-2">Duration (in minutes)</label>
          <input
            type="number"
            name="duration"
            placeholder="e.g., 120"
            required
            defaultValue={duration}
            className="border p-2 w-full"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">Release Year</label>
          <input
            type="number"
            name="releaseYear"
            placeholder="Enter the release year (e.g., 1999)"
            required
            className="border p-2 w-full"
            min="1900"
            max={new Date().getFullYear()}
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">Rating</label>
          <Rating
            onClick={(rate) => setRating(rate)}
            ratingValue={rating}
            size={24}
            fillColor="gold"
            emptyColor="gray"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block mb-2">Summary</label>
          <textarea
            name="summary"
            placeholder="Write a short summary"
            rows="4"
            required
            className="border p-2 w-full"
            defaultValue={summary}
          ></textarea>
        </div>

        <div className="md:col-span-2">
          <button
            type="submit"
            disabled={isLoading}
            className={`bg-mainClr text-white px-4 py-2 rounded w-full ${
              isLoading
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-white hover:text-black/100"
            }`}
          >
            {isLoading ?"loading..." : "Update Movie"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdatePoster;
