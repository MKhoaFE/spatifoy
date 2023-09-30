import React, { useEffect, useState } from "react";
import { poster } from "../datas/poster";
import CategoryComponent from "../components/CategoryComponent";
import { useParams } from "react-router-dom";
import {authors} from "../datas/authors";

function ResultSearch() {
  const { searchTerm } = useParams(); // Get the search term from the URL params
  const [searchResults, setSearchResults] = useState([]);
  const [searchAuthors, setSearchAuthors] = useState([]);
  useEffect(() => {
    // Filter the posters based on the search term
    const filteredPosters = poster.filter((poster) => {
      const titleMatch = poster.title.toLowerCase().includes(searchTerm.toLowerCase());
      const typeMatch = poster.type.toLowerCase().includes(searchTerm.toLowerCase());
  
      return titleMatch || typeMatch; // Return true if either condition is met
    });

    const filteredAuthors = authors.filter((authors)=>
      authors.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(filteredAuthors);
    setSearchResults(filteredPosters);
  }, [searchTerm]);
  return (
    <div>
      <div className="italic" style={{ marginBottom: 100 }}>
      <CategoryComponent
        title={`Search: ${searchTerm}`}
        data={searchResults}
      />
    </div>
    </div>
  );
}

export default ResultSearch;
