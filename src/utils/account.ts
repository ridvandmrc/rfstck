
export const useAccount = (): [string | null, (arg: string) => void] => {
  return [
    window.localStorage.getItem('account'),
    (item: string) => window.localStorage.setItem('account', item),
  ]
}
