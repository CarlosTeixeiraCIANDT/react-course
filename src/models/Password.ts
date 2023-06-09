export type Password = {
    value: string,
    isValid?: boolean
};

export type PasswordAction = {
    type: string,
} & Password