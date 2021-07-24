import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const UserItem = ({ user: { id, avatar_url, login, html_url } }) => {
  // state={
  //         id:'id',
  //         login : 'mojombo',
  //         avatar_url : 'https://avatars.githubusercontent.com/u/1?v=4',
  //         html_url : 'https://github.com/mojombo'
  //     }

  // destructuring
  // const {id, login, avatar_url, html_url} = this.props.user;
  return (
    <div className="card text-center">
      <img
        src={avatar_url}
        alt="img"
        className="round-img"
        style={{ width: "78px" }}
      />
      <h2>{login}</h2>
      <div>
        <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">
          Explore
        </Link>
      </div>
    </div>
  );
};
UserItem.prototype = {
  user: PropTypes.object.isRequired,
};
export default UserItem;
