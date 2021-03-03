const signUpProps = {
  title: '회원가입',
  input: [
    {
      type: 'text',
      text: '이름',
      placeholder: '홍길동',
    },
    {
      type: 'email',
      text: '이메일',
      placeholder: 'example@example.com',
    },
    {
      type: 'password',
      text: '비밀번호',
      placeholder: '*******',
    },
    {
      type: 'password',
      text: '비밀번호 확인',
      placeholder: '*******',
    },
  ],
  button: ['동의하고 회원가입', '카카오로 3초만에 시작하기'],
};

export default signUpProps;
