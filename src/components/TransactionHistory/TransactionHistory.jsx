import PropTypes from "prop-types";
import css from './TransactionHistory.module.css';

export const TransactionHistory = ({items}) => {
  const tableRow = items.map(({ id, type, amount, currency }) => (
    <tr key={id} >
      <td className={css.type}>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  ))
  
  return (
    <table className={css.transaction_history}>
      <thead >
        <tr>
          <th className={css.tableHead}>Type</th>
          <th className={css.tableHead}>Amount</th>
          <th className={css.tableHead}>Currency</th>
        </tr>
      </thead>

      <tbody >
        {tableRow}
      </tbody>
    </table>)
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency:PropTypes.string.isRequired,
  }))
}