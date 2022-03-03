export const allContains = (arr: any, target: any) =>
  target.every((v: any) => arr.includes(v))

export const safeName = (a: string) =>
  a.replace(/[^a-z0-9]/gi, '_').toLowerCase()
