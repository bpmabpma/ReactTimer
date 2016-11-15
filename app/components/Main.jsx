var React = require('react');

var Nav = require('Nav');

var Main = React.createClass({
  render: function() {
    return (
      <div>
        <Nav/>
        <div className="row">
            <div>
                <p>Main.jsx Rendered</p>
                {this.props.children}
            </div>
        </div>
      </div>
    );
  }
});

module.exports = Main;
