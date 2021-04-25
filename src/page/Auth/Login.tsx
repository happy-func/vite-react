import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { UpdateUserInfo, UserInfoState } from '@/store/action';
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Box,
  Typography,
  Container,
} from '@material-ui/core';
import {LockOutlined as LockOutlinedIcon} from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import Copyright from '@/components/Copyright';
import { RememberUserNameKey } from "@/constant/StorageKey";
import { message } from "antd";
import { isValidPassword, isValidUserName } from "@/constant/Regex";
import { setAdminName, setToken } from "@/utils";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: `flex`,
    flexDirection: `column`,
    alignItems: `center`,
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: `100%`, // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


interface Props {
  doUpdateUserInfo: UpdateUserInfo;
}

const LoginPage: React.FC<Props> = ({ doUpdateUserInfo }) => {
  const history = useHistory();
  const classes = useStyles();
  const [remember, setRemember] = useState(false);
  const [username, setUserName] = useState(``);
  const [password, setPassword] = useState(``);

  function loginHandle() {
    if (!username) {
      return message.error(`请输入用户名`);
    }
    if (!isValidUserName(username)) {
      return message.error(`用户名仅支持数字、字母和下划线且只能以字母开头，长度在4到10之间`);
    }
    if (!password) {
      return message.error(`请输入密码`);
    }
    if (!isValidPassword(password)) {
      return message.error(`密码长度在6-18之间，至少包含数字、字母、特殊字符两种`);
    }
    if (remember) {
      localStorage.setItem(RememberUserNameKey, username);
    } else {
      localStorage.removeItem(RememberUserNameKey);
    }
    const token = Math.random().toString(16);

    setToken(token);
    setAdminName(username);
    doUpdateUserInfo({
      name: username,
      token,
    });
    history.push(`/dashBord`);
  }

  function rememberChangeHandle(e: { target: { checked: boolean | ((prevState: boolean) => boolean); }; }) {
    setRemember(e.target.checked);
  }

  function passwordChangeHandle(e: { target: { value: React.SetStateAction<string>; }; }) {
    setPassword(e.target.value);
  }
  function usernameChangeHandle(e: { target: { value: any; }; }) {
    const { target: { value }} = e;

    setUserName(value);
  }
  useEffect(function () {
    const isRemember = localStorage.getItem(RememberUserNameKey);

    setUserName(isRemember || ``);
    setRemember(!!isRemember);
  }, []);
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          登 录
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="用户名"
            name="username"
            autoComplete="username"
            autoFocus
            value={username}
            onChange={usernameChangeHandle}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="密码"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={passwordChangeHandle}
          />
          <FormControlLabel
            control={<Checkbox checked={remember} onChange={rememberChangeHandle} value="remember" color="primary" />}
            label="记住我"
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={loginHandle}
          >
            登 录
          </Button>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
};

// 将 reducer 中的状态插入到组件的 props 中
const mapStateToProps = () => ({
});

// 将 对应action 插入到组件的 props 中
const mapDispatchToProps = (dispatch: Dispatch) => ({
  doUpdateUserInfo: (userInfo: UserInfoState) => dispatch(UpdateUserInfo(userInfo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
