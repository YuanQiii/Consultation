declare namespace Http {
  type Response<T> = Promise<{
    data?: T
  }>
}

declare namespace SendMobileCode {
  interface params {
    mobile: string
    type: User.CodeType
  }
  interface data {
    code: string
  }
}

declare namespace LoginByCode {
  interface params {
    mobile: string
    code: string
  }
  interface data {
    data: User.info
  }
}

declare namespace loginByPassword {
  interface params {
    mobile: string
    password: string
  }
  interface data {
    data: User.info
  }
}

declare namespace GetTest {
  interface params {
    a: number
  }
  interface data {
    name: string
    age: number
  }
}

declare namespace PostTest {
  interface params {
    a: number
  }
  interface data {
    val: string
  }
}
