import React, { PropTypes } from 'react';
import pure from "recompose/pure";

import Icon from "metabase/components/Icon.jsx";
import IconBorder from "metabase/components/IconBorder.jsx";
import Tooltip from "metabase/components/Tooltip.jsx";

const TitleAndDescription = ({ title, description }) =>
    <div className="flex align-center">
        <h2 className="mr1">{title}</h2>
        { description &&
            <Tooltip tooltip={description} maxWidth={'22em'}>
                <IconBorder>
                    <Icon name='info'/>
                </IconBorder>
            </Tooltip>
        }
    </div>;

TitleAndDescription.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string
};

export default pure(TitleAndDescription);
