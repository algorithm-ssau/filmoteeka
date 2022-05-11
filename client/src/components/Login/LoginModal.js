import React from "react";
import "./LoginModal.css";
import { useHttp } from "../../hooks/http.hook.js";

export default function Modal() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [login, setLogin] = React.useState("");
  const [password, setPassword] = React.useState("");
  const { loading, request } = useHttp();

  const changeLoginHandler = (event) => {
    setLogin(event.target.value);
  };

  const changePasswordHandler = (event) => {
    setPassword(event.target.value);
  };

  const loginHandler = async () => {
    try {
      const data = await request("/api/auth/login", "POST", {
        login,
        password,
      });
      if(data.message === "Пользователь найден"){
        setIsOpen(false);
      }
      else{

      }
    } catch (e) {}
  };

  const registerHandler = async () => {
    try {
      const data = await request("/api/auth/register", "POST", {
        login,
        password,
      });
      if (data.message === "Пользователь создан"){
        loginHandler();
      }
      else{
        
      }
    } catch (e) {}
  };

  return (
    <>
      <button className="loginButton" onClick={() => setIsOpen(true)}>
        Вход
      </button>

      {isOpen && (
        <div className="modal">
          <div className="modal-body">
            <h1>Авторизация</h1>
            <label>
              Имя аккаунта
              <input
                className="text_boxes"
                onChange={changeLoginHandler}
                type="text"
              />
            </label>
            <label>
              Пароль
              <input
                className="text_boxes"
                onChange={changePasswordHandler}
                type="password"
              />
            </label>

            <div className="buttonsDiv">
              <button
                className="buttons"
                onClick={loginHandler}
                disabled={loading}
              >
                Вход
              </button>
              <button
                className="buttons"
                onClick={registerHandler}
                disabled={loading}
              >
                Регистрация
              </button>
            </div>

            <button className="buttons" onClick={() => setIsOpen(false)}>
              Закрыть
            </button>
          </div>
        </div>
      )}
    </>
  );
}
