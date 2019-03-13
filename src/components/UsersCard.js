/**
 * Created by Avell on 13.03.2019.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

class UsersCard extends Component {
    render() {
        const {user} = this.props;
        return (
            <div>
                <Paper  elevation={1}>
                    <Typography variant="h5" component="h3">
                        <b>{user.id}.</b> {user.name} {user.surname}
                    </Typography>
                    <Typography component="p">
                        {user.desc}
                    </Typography>
                </Paper>
            </div>
        );
    }
}

UsersCard.propTypes = {};

export default UsersCard;
