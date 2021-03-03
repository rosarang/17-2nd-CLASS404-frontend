import React, { useState } from 'react';
import styled from 'styled-components';
import signUpProps from '../../signUpData';

function Signup(props) {
  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [repw, setRePw] = useState('');
  const [NameEmptyMsg, setNameEmptyMsg] = useState('');
  const [IdEmptyMsg, setIdEmptyMsg] = useState('');
  const [PwEmptyMsg, setPwEmptyMsg] = useState('');

  const handleInput = (e) => {
    if (e.target.type === 'email') {
      setId(e.target.value);
    } else if (e.target.type === 'password') {
      setPw(e.target.value);
    } else if (e.target.text === '비밀번호확인') {
      setRePw(e.target.value);
    } else if (e.target.type === 'name') {
      setName(e.target.value);
    }

    validation();
  };

  const validation = () => {
    if (id) {
      const regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
      const isGoodId = id.match(regExp);
      if (isGoodId && pw) {
        const regExp = /^[0-9a-zA-Z]{8,32}$/i;
        const isGoodPw = pw.match(regExp);
        if (isGoodPw) {
          return true;
        }
      }
    }
  };

  const goToLogin = (e) => {
    e.preventDefault();

    console.log(e.target);

    // const validationResult = validation;

    // if (validationResult) {
    //   fetch('http://', {
    //     method: 'POST',
    //     body: JSON.stringify({
    //       email: id,
    //       password: pw,
    //     }),
    //   })
    //     .then((res) => res.json())
    //     .then((data) => {
    //       console.log(data);
    //       data.AUTHORIZATION &&
    //         localStorage.setItem('token', data.AUTHORIZATION);
    //       props.history.push('/login');
    //     });
    // } else {
    //   console.log('Not Valid id or pw');
    // }

    if (!name) {
      setNameEmptyMsg('⚠️ 이름을 입력해주세요!');
    }
    if (!id) {
      setIdEmptyMsg('⚠️ 이메일을 입력해주세요!');
    }
    if (!pw) {
      setPwEmptyMsg('⚠️ 비밀번호를 입력해주세요!');
    }
    if (pw !== repw) {
      setPwEmptyMsg('⚠️ 입력하신 비밀번호가 다릅니다!');
    }
  };

  return (
    <FormContainer className="Signup">
      <FormHeader>{signUpProps.title}</FormHeader>
      <Form>
        {signUpProps.input.map((input) => {
          return (
            <>
              <label htmlFor={input.type}>{input.text}</label>
              <input
                id={input.type}
                type={input.type}
                placeholder={input.placeholder}
                onChange={handleInput}
              />
              {NameEmptyMsg && input.type === 'text' && <p>{NameEmptyMsg}</p>}
              {IdEmptyMsg && input.type === 'email' && <p>{IdEmptyMsg}</p>}
              {PwEmptyMsg && input.type === 'password' && <p>{PwEmptyMsg}</p>}
              {input.text === '비밀번호' && (
                <InputInfoMessage>
                  ⚠️ 영문 대문자/영문 소문자 및 숫자를 포함한 8~32자
                </InputInfoMessage>
              )}
            </>
          );
        })}

        <Button onClick={goToLogin} className="signBtn">
          {signUpProps.button[0]}
        </Button>
        <UserContract>
          <a href="www.naver.com">
            이용약관, 개인정보 수집 및 이용, 개인정보 제공
          </a>
          내용을 확인하였고 동의합니다.
        </UserContract>
        <SnsLogin>
          <Button className="snsButton">
            <img
              src="https://www.flaticon.com/svg/vstatic/svg/2462/2462844.svg?token=exp=1614761866~hmac=1cdc4a662e83328497ed72fee74e624a"
              alt="commentIcon"
            />
            {signUpProps.button[1]}
          </Button>
        </SnsLogin>
      </Form>
    </FormContainer>
  );
}

export default Signup;

const FormContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 470px;
  margin-top: 200px;
`;

const FormHeader = styled.header`
  font-size: 30px;
  font-weight: 600;
  width: 100%;
  margin: 20px 0px 50px 0px;
  margin-right: auto;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;

  label {
    font-size: 14px;
    margin: 5px 0;
    margin-right: auto;
  }

  input {
    width: 100%;
    height: 50px;
    margin-bottom: 15px;
    border: ${({ theme }) => theme.border};
    border-radius: 5px;
  }

  p {
    margin: 0 0 10px 0;
    font-size: 12px;
    color: ${({ theme }) => theme.red};
  }
`;

const Button = styled.button`
  width: 100%;
  height: 50px;
  font-size: 15px;
  font-weight: 600;
  border-radius: 5px;

  &.signBtn {
    color: white;
    background-color: ${({ theme }) => theme.orange};
  }

  &.snsButton {
    background-color: #f7d41d;

    img {
      width: 23px;
      margin-right: 5px;
      vertical-algin: center;
    }
  }
`;

const InputInfoMessage = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.orange};
  margin: 0 auto 15px 0;
`;

const UserContract = styled.p`
  font-size: 12px;
  margin: 20px auto;
  a {
    color: skyblue;
  }
`;

const SnsLogin = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 20px;
  width: 100%;
  color: black;
  border-top: ${({ theme }) => theme.border};

  p {
    margin: 20px auto;
  }
`;
