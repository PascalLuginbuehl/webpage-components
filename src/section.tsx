import React from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import clsx from 'clsx'


const condensedWidth = 1100;
const useStyles = makeStyles((theme: Theme) => createStyles({
  gutter: {
    padding: theme.spacing(4),

    [theme.breakpoints.only("xs")]: {
      padding: theme.spacing(2),
    },

    [theme.breakpoints.only("sm")]: {
      padding: theme.spacing(2),
    },

    [theme.breakpoints.only("md")]: {
      padding: theme.spacing(3),
    },
  },

  condensed: {
    width: 'auto',

    [theme.breakpoints.up(condensedWidth + theme.spacing(3 * 2))]: {
      width: condensedWidth,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
}))

interface Props {
  condensed?: boolean
  className?: string
  children: React.ReactNode
  disableGutter?: boolean
}


export function Section(props: Props) {
  const classes = useStyles()

  const {
    children,
    condensed = false,
    disableGutter = false,
    className = "",
  } = props

  return (
    <section className={clsx([
      { [classes.condensed]: condensed },
      { [classes.gutter]: !disableGutter },
      className
    ])}>
      {children}
    </section>
  )
}
