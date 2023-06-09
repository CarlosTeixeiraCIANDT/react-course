export type Email = {
    value: string,
    isValid?: boolean
}

export type EmailAction = {
    type: string,
} & Email