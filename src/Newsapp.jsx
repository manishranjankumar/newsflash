import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import { GoSearch } from "react-icons/go";

const Newsapp = () => {
  const [search, setSearch] = useState("INDIA");
  const [newsData, setNewsData] = useState([]);

  const API_KEY = "46b42d992d354eefb64a3c64047de78e";

  const getdata = async () => {
    let { data } = await axios.get(
      `https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`
    );
    // console.log(data.articles);
    setNewsData(data.articles.slice(0, 10));
  };

  useEffect(() => {
    try {
      getdata();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleinput = (event) => {
    setSearch(event.target.value);
  };

  const handlebtnclick = () => {
    getdata();
    setSearch("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <section className="heading">
        <div>
          <h1>LATEST NEWS</h1>
        </div>
        <div>ALL NEWS</div>

        <div>
          <form onSubmit={handleSubmit}>
            <input
              className="input"
              type="text"
              placeholder="Search News"
              onChange={handleinput}
              value={search}
            />
            <button className="newsbtn" onClick={handlebtnclick}>
              {" "}
              <GoSearch /> Search
            </button>
          </form>
        </div>
      </section>
      <div className="pagetitle">
        <h3>Stay Update With LatestNews</h3>
      </div>

      <section>
        <div>{newsData ? <Card data={newsData} /> : <></>}</div>
      </section>
    </>
  );
};

export default Newsapp;