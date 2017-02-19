import React from 'react';

const Info = ({ icon, info, bgColor }) => (
    <div className="flex items-center justify-center pa4 bg-lightest-blue navy">
      <svg className="w1" data-icon="info" viewBox="0 0 32 32" style={{ fill: "currentcolor" }}>
        <title>info icon</title>
        <path d="M16 0 A16 16 0 0 1 16 32 A16 16 0 0 1 16 0 M19 15 L13 15 L13 26 L19 26 z M16 6 A3 3 0 0 0 16 12 A3 3 0 0 0 16 6"></path>
      </svg>
      <span className="lh-title ml3">{ info }</span>
    </div>
);

Info.defaultProps = {
    icon: {
      d: "M16 0 A16 16 0 0 1 16 32 A16 16 0 0 1 16 0 M19 15 L13 15 L13 26 L19 26 z M16 6 A3 3 0 0 0 16 12 A3 3 0 0 0 16 6",
      title: "info icon"
    },
    info: "Some info that you want to call attention to.",
    bgColor: "bg-lightest-blue",
    fontColor: "navy"
};

Info.propTypes = {
  icon: React.PropTypes.object,
  info: React.PropTypes.string,
  bgColor: React.PropTypes.string,
  fontColor: React.PropTypes.string
}
export default Info;