const isValid = (reg: RegExp) => (text: string) => reg.test(text);

// 用户名正则<4-10>
export const isValidUserName = isValid(/^[A-Za-z][a-zA-Z0-9_]{3,9}$/);

// 密码正则<6-18>
export const isValidPassword = isValid(
  /^(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)(?!([^(0-9a-zA-Z)])+$).{6,18}$/,
);
