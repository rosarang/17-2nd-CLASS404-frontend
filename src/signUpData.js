const signUpProps = {
  title: '회원가입',
  input: [
    {
      name: 'name',
      type: 'text',
      text: '이름',
      placeholder: '홍길동',
    },
    {
      name: 'email',
      type: 'email',
      text: '이메일',
      placeholder: 'example@example.com',
    },
    {
      name: 'password',
      type: 'password',
      text: '비밀번호',
      placeholder: '*******',
    },
    {
      name: 'repassword',
      type: 'password',
      text: '비밀번호 확인',
      placeholder: '*******',
    },
  ],
  button: ['동의하고 회원가입', '카카오로 3초만에 시작하기'],
};

export default signUpProps;
