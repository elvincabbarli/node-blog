import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Menu = ({ cat, post }) => {
  const [postSim, setPostSim] = useState([]);

  console.log(postSim)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts/?cat=${cat}`);
        setPostSim(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [cat]);


  return (
    <div className="menu">
      <h1>Other posts you may like</h1>
      {postSim.map((item) => (
        item.id !== post.id && <div className="post" key={item.id}>
          <img src={item?.img} alt="" />
          <h2>{item.title}</h2>
          <Link style={{textDecoration: 'none' , border: '2px solid #b9e7e7' , width: 'max-content',padding: '5px 10px', color: '#000'}} to={`/post/${item.id}`}>Read More</Link>
        </div>
      ))}
    </div>
  );
};

export default Menu;
