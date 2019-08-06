import React from "react";
import styled from "styled-components";

const Styles = styled.div`
  .jumbotron {
    background: #03001e; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to left,
      #fdeff9,
      #ec38bc,
      #7303c0,
      #03001e
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to left,
      #fdeff9,
      #ec38bc,
      #7303c0,
      #03001e
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }
`;

export const Promotion = () => (
  <Styles>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-8">
          <div class="jumbotron">
            <h2>Hello, world!</h2>
            <p>
              This is a template for a simple marketing or informational
              website. It includes a large callout called the hero unit and
              three supporting pieces of content. Use it as a starting point to
              create something more unique.
            </p>
            <p>
              <a class="btn btn-primary btn-large" href="#">
                Learn more
              </a>
            </p>
          </div>
        </div>
        <div class="col-md-4">
          <h2>Heading</h2>
          <p>
            Donec id elit non mi porta gravida at eget metus. Fusce dapibus,
            tellus ac cursus commodo, tortor mauris condimentum nibh, ut
            fermentum massa justo sit amet risus. Etiam porta sem malesuada
            magna mollis euismod. Donec sed odio dui.
          </p>
          <p>
            <a class="btn" href="#">
              View details »
            </a>
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3">
          <h2>Heading</h2>
          <p>
            Donec id elit non mi porta gravida at eget metus. Fusce dapibus,
            tellus ac cursus commodo, tortor mauris condimentum nibh, ut
            fermentum massa justo sit amet risus. Etiam porta sem malesuada
            magna mollis euismod. Donec sed odio dui.
          </p>
          <p>
            <a class="btn" href="#">
              View details »
            </a>
          </p>
        </div>
        <div class="col-md-3">
          <h2>Heading</h2>
          <p>
            Donec id elit non mi porta gravida at eget metus. Fusce dapibus,
            tellus ac cursus commodo, tortor mauris condimentum nibh, ut
            fermentum massa justo sit amet risus. Etiam porta sem malesuada
            magna mollis euismod. Donec sed odio dui.
          </p>
          <p>
            <a class="btn" href="#">
              View details »
            </a>
          </p>
        </div>
        <div class="col-md-3">
          <h2>Heading</h2>
          <p>
            Donec id elit non mi porta gravida at eget metus. Fusce dapibus,
            tellus ac cursus commodo, tortor mauris condimentum nibh, ut
            fermentum massa justo sit amet risus. Etiam porta sem malesuada
            magna mollis euismod. Donec sed odio dui.
          </p>
          <p>
            <a class="btn" href="#">
              View details »
            </a>
          </p>
        </div>
        <div class="col-md-3">
          <h2>Heading</h2>
          <p>
            Donec id elit non mi porta gravida at eget metus. Fusce dapibus,
            tellus ac cursus commodo, tortor mauris condimentum nibh, ut
            fermentum massa justo sit amet risus. Etiam porta sem malesuada
            magna mollis euismod. Donec sed odio dui.
          </p>
          <p>
            <a class="btn" href="#">
              View details »
            </a>
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="progress">
            <div class="progress-bar w-75" />
          </div>
        </div>
      </div>
    </div>
  </Styles>
);
