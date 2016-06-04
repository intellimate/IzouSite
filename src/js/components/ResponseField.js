import React, { PropTypes } from 'react';

const ResponseField = ({ content }) => (
    <div>
        <p>{content}</p>
    </div>
)

ResponseField.propTypes = {
    content: PropTypes.string.isRequired
}

export default ResponseField