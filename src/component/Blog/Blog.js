import React from "react";
import "./Blog.css";
const Blog = () => {
  return (
    <div className="blog">
      <div className="blogFirst">
        <h1>Context Api</h1>
        <p>
          In simple terms, Context API is a way using which data can be shared
          among components without passing it through props or creating a global
          state. So if there is an object in ComponentA, we can pass it directly
          to ComponentE without involving other components.Context is designed
          to share data that can be considered “global” for a tree of React
          components, such as the current authenticated user, theme, or
          preferred language.
        </p>
      </div>
      <div className="blogSecond">
        <h1>Semantic Tag</h1>
        <p>
          Semantic tags clearly define the purpose of the HTML element. It also
          describes the type of content that the element should contain. For
          example, header footer div are considered semantic elements as they
          clearly describe their purpose and the type of content they should
          enclose.
        </p>
      </div>
    </div>
  );
};

export default Blog;
