import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(3),
            width: '35ch'
        },
    },
    textField: {
        width: "100%"
    },
    error: {
        color: "#DE4545",
    }
}));

export default useStyles;