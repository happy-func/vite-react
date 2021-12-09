import { LockOutlined as LockOutlinedIcon } from '@mui/icons-material';
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  CssBaseline,
  FormControlLabel,
  TextField,
  Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { toast as message } from 'react-toastify';
import { Dispatch } from 'redux';

import Copyright from '@/components/Copyright';
import { isValidPassword, isValidUserName } from '@/constant/Regex';
import { RememberUserNameKey } from '@/constant/StorageKey';
import { UpdateUserInfo, UserInfoState } from '@/store/action';
import { setAdminName, setToken } from '@/utils';

interface Props {
  doUpdateUserInfo: UpdateUserInfo;
}

const LoginPage: React.FC<Props> = ({ doUpdateUserInfo }) => {
  const history = useHistory();
  const [remember, setRemember] = useState(false);
  const [username, setUserName] = useState(`admin`);
  const [password, setPassword] = useState(`h57nMRtQn7aBjt`);

  function loginHandle() {
    if (!username) {
      return message.error(`请输入用户名`);
    }
    if (!isValidUserName(username)) {
      return message.error(
        `用户名仅支持数字、字母和下划线且只能以字母开头，长度在4到10之间`,
      );
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

  function rememberChangeHandle(e: {
    // eslint-disable-next-line no-unused-vars
    target: { checked: boolean | ((prevState: boolean) => boolean) };
  }) {
    setRemember(e.target.checked);
  }

  function passwordChangeHandle(e: { target: { value: React.SetStateAction<string> } }) {
    setPassword(e.target.value);
  }
  function usernameChangeHandle(e: { target: { value: any } }) {
    const {
      target: { value },
    } = e;

    setUserName(value);
  }
  useEffect(function () {
    const isRemember = localStorage.getItem(RememberUserNameKey);

    setUserName(isRemember || ``);
    setRemember(!!isRemember);
  }, []);
  return (
    <Box
      sx={{
        height: '100vh',
        overflow: 'hidden',
        width: '100%',
        backgroundColor: '#b1ecd7ed',
      }}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: `flex`,
            flexDirection: `column`,
            alignItems: `center`,
          }}>
          <Avatar
            sx={{
              margin: 1,
              backgroundColor: (theme) => theme.palette.secondary.main,
            }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            登 录
          </Typography>
          <Box
            component="form"
            sx={{
              width: `100%`, // Fix IE 11 issue.
              marginTop: (theme) => theme.spacing(1),
            }}
            noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="用户名"
              name="username"
              autoComplete="username"
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
              control={
                <Checkbox
                  checked={remember}
                  onChange={rememberChangeHandle}
                  value="remember"
                  color="primary"
                />
              }
              label="记住我"
            />
            <Button
              fullWidth
              variant="contained"
              color="primary"
              sx={{
                margin: (theme) => theme.spacing(3, 0, 2),
              }}
              onClick={loginHandle}>
              登 录
            </Button>
          </Box>
        </Box>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
    </Box>
  );
};

// 将 reducer 中的状态插入到组件的 props 中
const mapStateToProps = () => ({});

// 将 对应action 插入到组件的 props 中
const mapDispatchToProps = (dispatch: Dispatch) => ({
  doUpdateUserInfo: (userInfo: UserInfoState) => dispatch(UpdateUserInfo(userInfo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
