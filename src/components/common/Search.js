import React from "react";
import { useDispatch } from "react-redux";
import {AiOutlineSearch} from "react-icons/ai";
import {CiSearch} from "react-icons/ci";

const Search = () => {
  const dispatch = useDispatch();

  return (
    <div className="search-div" >
      <input style={{padding: '20px'}}
        type="search"
        className="search-box"
        placeholder="Search..."
        onChange={(event) =>
          dispatch({
            type: "products/setSearchQuery",
            payload: event.target.value,
          })
        }
        
      />
       <CiSearch className="search-icon"/>
      {/* <button class="search__button"> */}
        {/* <svg class="search__icon"> */}
          {/* <use xlink:href="assets/sprite.svg#icon-magnifying-glass"></use> */}
          {/* <AiOutlineSearch/> */}
         
        {/* </svg> */}
      {/* </button> */}
    </div>
  );
};

export default Search;
