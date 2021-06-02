import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    "@global": {
        body: {
            margin: "0 0"
        }
    },
    root: {
        flexGrow: 1,
        marginBottom: "1rem"
    },
    link: {
        textDecoration: "none",
        color: "black",
        paddingLeft: "1rem"
    },
    logo: {
        paddingRight: "1rem",
    }
    ,
    toolbar: {
        display: "flex",
        justifyContent: "space-between"
    }
    ,
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default useStyles;