import React from "react";
import PostQuickPreviewButton from "./drawer";
import {
  List,
  Datagrid,
  TextField,
  Show,
  SimpleShowLayout,
  DateField,
  EditButton,
  RichTextField
} from "react-admin";
import CardActions from "@material-ui/core/CardActions";

export const PostList = props => (
  <List {...props} title="Inbox">
    <Datagrid rowClick="show" rowStyle={postRowStyle}>
      <PostQuickPreviewButton />
      <TextField label="#" source="id" />
      <TextField label="From:" source="title" />
      <TextField label="Body" source="body" />
    </Datagrid>
  </List>
);

const postRowStyle = (record, index) => ({
  backgroundColor: record.nb_views >= 500 ? "#efe" : "white"
});

export const PostShow = props => (
  <Show actions={<PostShowActions />} title={<PostTitle />} {...props}>
    <SimpleShowLayout>
      <TextField source="title" />
      <TextField source="teaser" />
      <RichTextField source="body" />
      <DateField label="Publication date" source="created_at" />
    </SimpleShowLayout>
  </Show>
);
const PostShowActions = ({ basePath, data, resource }) => (
  <CardActions style={cardActionStyle} />
);
const PostTitle = ({ record }) => {
  return <span>Post {record ? `"${record.title}"` : ""}</span>;
};

const cardActionStyle = {
  zIndex: 2,
  display: "inline-block",
  float: "right"
};
