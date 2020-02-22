import React from 'react';
import List from './List';

export default function HOCList (props) {
    const matchParams = props.match.params.payer;

    return (
        <List {...props} key={matchParams} />
    )
}