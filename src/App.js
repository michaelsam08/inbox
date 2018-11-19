import React from "react";
import "./App.css";
import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import PostPreviewView from "./components/drawer";
import { PostList, PostShow } from "./components/posts";

const App = () => (
  <Admin
    dataProvider={jsonServerProvider("http://jsonplaceholder.typicode.com")}
  >
    <Resource
      name="posts"
      list={PostList}
      show={PostPreviewView}
      //post={PostShow}
      //create={PostCreate}
      //edit={PostEdit}
    />
  </Admin>
);

export default App;
