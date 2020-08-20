interface UserData {
  token: string;
  user: {
    email: string;
    password: string;
  };
}

export function signin() {
  return new Promise<UserData>((resolve) => {
    setTimeout(() => {
      resolve({
        token: "oslndaskjdnsaojid",
        user: {
          email: "luan.ferreira.mads@gmail.com",
          password: "123456",
        },
      });
    }, 2000);
  });
}
