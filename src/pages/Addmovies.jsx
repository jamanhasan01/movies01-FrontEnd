const AddMovies = () => {

  
  const handleMovieAdd = (e) => {
    e.preventDefault(); // Prevent form submission
    const form = new FormData(e.target); // Get form data

    // Extract form values
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

    
    const movieData = {
      title,
      poster,
      genres,
      duration,
      releaseYear,
      rating,
      summary,
    };
    
    fetch('https://movies01-backend.vercel.app/movies',{
        method:"POST",
        headers:{
            'content-type':"application/json"
        },
        body:JSON.stringify(movieData)
    })
    .then(res=>res.json())
    .then((data)=>{
        if(data.acknowledged==true){
            alert('done')
            e.target.reset()
        }
    }
    )

    // Replace with API call or logic to save the data
  };

  return (
    <div className="py-20 ">
      <form
        onSubmit={handleMovieAdd}
        className="max-w-2xl mx-auto grid gap-3 grid-cols-1 md:grid-cols-2  rounded-xl border p-5 border-mainClr"
      >
        <h1 className="text-4xl text-center mb-8 md:col-span-2">
          Add Movie Poster
        </h1>
        {/* Title */}
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

        {/* Poster */}
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

        {/* Genres */}
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

        {/* Duration */}
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

        {/* Release Year */}
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

        {/* Rating */}
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

        {/* Summary */}
        <div className="md:col-span-2">
          <div className="mb-4">
            <label className="block mb-2">Summary</label>
            <textarea
              placeholder="Write a brief summary of the movie"
              name="summary"
              rows="4"
              required
              className="border p-2 w-full"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-mainClr text-white px-4 py-2 rounded w-full hover:bg-white hover:text-black/100"
          >
            Add Movie
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddMovies;
