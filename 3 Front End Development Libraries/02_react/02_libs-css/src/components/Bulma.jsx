import React from "react";
export function BulmaSection({ children }) {
  // console.log(children);
  return (
    <>
      <section className="section">
        <h1 className="title">-- {children.type.name} --</h1>
        <div>{children}</div>
        <hr />
      </section>
    </>
  );
}

export function BulmaFooter() {
  return (
    <>
      <footer className="footer">
        <div className="content has-text-centered">
          <p>
            <strong>Bulma Footer</strong> by{" "}
            <a href="https://jgthms.com">Jeremy Thomas</a>. The source code is
            licensed
            <a href="http://opensource.org/licenses/mit-license.php">MIT</a>.
            The website content is licensed{" "}
            <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
              CC BY NC SA 4.0
            </a>
            .
          </p>
        </div>
      </footer>
    </>
  );
}

export function Bulma() {
  return (
    <>
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img
              src="https://placekitten.com/640/360"
              alt="Placeholder image"
            />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-48x48">
                <img
                  src="https://placekitten.com/96/96"
                  alt="Placeholder image"
                />
              </figure>
            </div>
            <div className="media-content">
              <p className="title is-4">John Smith</p>
              <p className="subtitle is-6">@johnsmith</p>
            </div>
          </div>
          <div className="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            nec iaculis mauris. <a>@bulmaio</a>.<a href="#">#css</a>{" "}
            <a href="#">#responsive</a>
            <br />
            <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
          </div>
        </div>
      </div>
    </>
  );
}
