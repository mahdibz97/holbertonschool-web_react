import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

export default function CourseListRow({isHeader, textFirstCell, textSecondCell}) {
    const [checked, setChecked] = useState(false)
    const handleChecked = (e) => {
        setChecked(e.target.checked);
    }
    if (isHeader) {
        if (textSecondCell === null) {
            return (
                <tr className={css(styles.tableHeaderRow)}>
                    <th colSpan="2">{textFirstCell}</th>
                </tr>
            )
        } else {
            return (
                <tr className={css(styles.tableHeaderRow)}>
                    <th>{textFirstCell}</th>
                    <th>{textSecondCell}</th>
                </tr>
            )
        }
    } else {
        return (
            <tr className={checked ? css(styles.tableRow, styles.rowChecked) : css(styles.tableRow)}>
                <td>
                    <input type="checkbox" checked={checked} value="view" onChange={(e) => {handleChecked(e)}}/>
                    {textFirstCell}
                </td>
                <td>{textSecondCell}</td>
            </tr>
        )
    }
}

CourseListRow.propTypes = {
    isHeader: PropTypes.bool,
    textFirstCell: PropTypes.string.isRequired,
    textSecondCell: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ]),
}

CourseListRow.defaultProps = {
    isHeader: false,
    textSecondCell: null
}

const styles = StyleSheet.create({
    tableHeaderRow: {
      borderBottom: "2px solid rgba(0, 0, 0, 0.2)",
      backgroundColor: "#deb5b545"
    },
    tableRow: {
        backgroundColor: "#f5f5f5ab"
    },
    rowChecked: {
        backgroundColor: "#e6e4e4"
    }
  });