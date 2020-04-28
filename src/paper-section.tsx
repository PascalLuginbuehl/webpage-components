import React from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';


const condensedWidth = 864;
const useStyles = makeStyles((theme: Theme) => createStyles({

  paperLayout: {
    width: 'auto',


    [theme.breakpoints.up(condensedWidth + theme.spacing(2))]: {
      marginTop: theme.spacing(2),

      width: condensedWidth,
      marginLeft: 'auto',
      marginRight: 'auto',
    },


    padding: theme.spacing(2),
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(),
    },
  },
}))

interface Props {
  children: React.ReactNode
}

export function PaperSection(props: Props) {
  const classes = useStyles()

  const { children } = props

  return (
    <Paper className={classes.paperLayout} component="section">
      {children}
    </Paper>
  )
}
