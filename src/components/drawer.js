import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import Drawer from "@material-ui/core/Drawer";
import { withStyles } from "@material-ui/core/styles";
import Email from "@material-ui/icons/Email";
import IconKeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import { Button, SimpleShowLayout, TextField } from "react-admin";
import IconButton from "@material-ui/core/IconButton";

const styles = theme => ({
  field: {
    // These styles will ensure the drawer doesn't fully cover our
    // application when teaser or title are very long
    "& span": {
      display: "inline-block",
      maxWidth: "20em"
    }
  }
});

const PostPreviewView = ({ classes, ...props }) => (
  <SimpleShowLayout {...props}>
    <TextField source="id" />
    <TextField source="title" className={classes.field} />
    <TextField source="teaser" className={classes.field} />
  </SimpleShowLayout>
);

const mapStateToProps = (state, props) => ({
  // Get the record by its id from the react-admin state.
  record: state.admin.resources[props.resource]
    ? state.admin.resources[props.resource].data[props.id]
    : null,
  version: state.admin.ui.viewVersion
});

const PostPreview = connect(
  mapStateToProps,
  {}
)(withStyles(styles)(PostPreviewView));

class PostQuickPreviewButton extends Component {
  state = { showPanel: false };

  handleClick = () => {
    this.setState({ showPanel: true });
  };

  handleCloseClick = () => {
    this.setState({ showPanel: false });
  };

  render() {
    const { showPanel } = this.state;
    const { id } = this.props;
    return (
      <Fragment>
        <IconButton
          color="primary"
          component="span"
          onClick={this.handleClick}
          label="ra.action.show"
        >
          <Email />
        </IconButton>
        <Drawer
          anchor="bottom"
          open={showPanel}
          onClose={this.handleCloseClick}
        >
          <div>
            <Button label="Close" onClick={this.handleCloseClick}>
              <IconKeyboardArrowRight />
            </Button>
          </div>
          <PostPreview id={id} basePath="/posts" resource="posts" />
        </Drawer>
      </Fragment>
    );
  }
}

export default connect()(PostQuickPreviewButton);
