import React from 'react'
import { Card, CardContent, Typography, Grid } from '@material-ui/core'
import CircularProgress from '@material-ui/core/CircularProgress';
import CountUp from 'react-countup'
//for adding multiple class in module.css
import cx from 'classnames'
import styles from './Cards.module.css'

//double destructure
// const Cards=({data:{confirmed, recovered, deaths,lastUpdate}})=>{

// }

const Cards = (props) => {
    const { confirmed, recovered, deaths, lastUpdate } = props.data


    //since data load hunu vanda agadi confirmed ma undefined auxa so
    if (!confirmed) {
        return <CircularProgress disableShrink />;
    }



    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected </Typography>
                        <Typography variant="h5">
                            <CountUp
                                start={0}//start from 0
                                end={confirmed.value}
                                duration={2.5}
                                separator=","
                            />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of active cases of COVID-19
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom> Recovered</Typography>
                        <Typography variant="h5">
                            <CountUp
                                start={0}
                                end={recovered.value}
                                duration={2.5}
                                separator=","
                            />

                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of recoveries from  COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant="h5">
                            <CountUp
                                start={0}
                                end={deaths.value}
                                duration={2.5}
                                separator=","
                            />

                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of deaths from  COVID-19</Typography>
                    </CardContent>
                </Grid>

            </Grid>


        </div>
    )
}

export default Cards
