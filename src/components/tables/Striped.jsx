import React from 'react';

const Striped = ({ columns, data }) => (
    <table className="f6 w-100 mw8 center" cellSpacing="0">
        <thead>
            <tr className="stripe-dark">{
                columns.map((text, i) =>
                    <th className="fw6 tl pa3 bg-white" key={i}>
                        { text }
                    </th>
                )
            }</tr>
        </thead>
        <tbody className="lh-copy">{
            data.map((arr, i) =>
                <tr className="stripe-dark" key={i}>{
                    arr.map((text, j) =>
                        <td className="pa3" key={j}>{text}</td>
                    )
                }</tr>
            )
        }</tbody>
    </table>
)

Striped.defaultProps = {
    columns: ['Name', 'Username', 'Email', 'ID'],
    data: [
        ['Hassan Johnson', '@hassan', 'hassan@companywithalongdomain.co', '14419232532474'],
        ['Taral Hicks',	'@hicks', 'taral@companywithalongdomain.co', '72326219423551'],
        ['Tyrin Turner', '@tt', 'ty@companywithalongdomain.co', '92325170324444'],
        ['Oliver Grant', '@oli', 'oliverg@companywithalongdomain.co', '71165170352909'],
        ['Dean Blanc', '@deanblanc', 'dean@companywithalongdomain.co', '71865178111909']
    ]
};

Striped.propTypes = {
    columns: React.PropTypes.arrayOf(React.PropTypes.string),
    data: React.PropTypes.arrayOf(
            React.PropTypes.arrayOf(React.PropTypes.string)
        )
};

export default Striped;
