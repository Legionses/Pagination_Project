/**
 * Created by Avell on 13.03.2019.
 */
import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import '../scss/UsersCardComponent.scss'

const UsersCardComponent =({user})=>{
        return (
            <div>
                <Paper  elevation={15} className="userCard--paper">
                    <Typography variant="h5" component="h3">
                        <b>{user.id}.</b> {user.name} {user.surname}
                    </Typography>
                    <Typography component="p">
                        {user.desc}
                    </Typography>
                </Paper>
            </div>
        );
    };


UsersCardComponent.propTypes = {
    user:PropTypes.object.isRequired
};

export default UsersCardComponent;
