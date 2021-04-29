import React from 'react';
import Header from "@/components/Layout/Header";
import Aside from '@/components/Layout/Aside';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: `flex`,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    position: `relative`,
  },
  toolbar: {
    display: `flex`,
    alignItems: `center`,
    justifyContent: `flex-end`,
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
}))

const AppMain: React.FC = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />
      <Aside />
      <div className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </div>
    </div>
  );
};

export default AppMain;
