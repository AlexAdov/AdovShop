import React from "react";
import PropTypes from "prop-types";

export function ProjectList(props) {
   return (
      <div className="portfolio_grid">
         {props.projects && props.projects.length ? props.projects.map((project) => (
                 <img
                    key={project.index}
                    className="portfolio_item"
                    src={project.img}
                 />
              ))
            : null}
      </div>
   );
}

ProjectList.propTypes = {
   projects: PropTypes.array.isRequired,
};
ProjectList.defaultProps = {
   src: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/mon.jpg",
};
