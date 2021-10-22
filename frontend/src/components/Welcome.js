import React from "react";
import { Jumbotron, Button } from "react-bootstrap";

const Welcome = (props) => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">Images Gallery</h1>
        <p className="lead">
          This is a simple application that reviews photos from unsplash API
        </p>
        <hr className="my-2" />
        <p>
          It uses utility classes for typography and spacing to space content
          out within the larger container.
        </p>
        <p className="lead">
          <Button color="primary" href="https://unsplash.com">
            Learn More
          </Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default Welcome;
