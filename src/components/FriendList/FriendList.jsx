import PropTypes from 'prop-types';
import css from "./FriendList.module.css";


export const FriendList = ({ friends }) => {

  const friendCard = friends.map(({ avatar, name, isOnline, id }) => (
    <li key={ id } className={css.item}>
      <span
        className={css.status}
        style={
          isOnline
            ? {backgroundColor: "rgba(29, 201, 106, 0.8)" }
            : { backgroundColor: "rgba(201, 49, 29, 0.8)" }
        }>
      </span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{ name }</p>
    </li>
  ))

  return (
    <ul className={css.friend_list}>
        {friendCard}
    </ul>
  )
}
FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.exact({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
  }))
}