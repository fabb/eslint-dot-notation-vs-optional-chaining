export const x = () => {
    const req: { headers?: { [k in string]: string } } = { headers: {} }
    return `http://${req.headers?.['host']}`
}
