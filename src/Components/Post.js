import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaDollarSign } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";


const Post = ({data}) => {
  return (
    <>
      <div className="post_container">
        <div className="person">
          <div className="author">
            <div className="img">
              <img
                src={data.pImg}
                alt=""
              />
            </div>
            <div className="text"></div>
            <h3>{data.UserName}</h3>

            <p> {data.title}</p>
          </div>
          <div className="dot">
            <BsThreeDotsVertical />
          </div>
        </div>
        <p>{data.description}</p>
        <div className="post_img">
          <img
            src={data.mImg}
            alt=""
          />
        </div>
        <div className="like_comment">
          <div className="likes">
            <FaDollarSign  className="items" />
            {data.like}{" "}
          </div>
          <div className="comment">
            <IoCall className="items" />
            {data.comment}{""}
          </div>
           <div className="share">
            <IoLocationSharp className="items" />
            {data.share}{""}
          </div> 
        </div>
      </div>
    </>
  );
};

export default Post;
