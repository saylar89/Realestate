const Search = () => {
  const date = "2021-05-30";
  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div style={{ color: "red", textAlign: "center", marginTop: "10rem" }}>
      <h2>Search Property</h2>
      <time>{humanReadableDate}</time>
    </div>
  );
};

export default Search;
