
const copyAccount = (address: string): string => `${address.slice(0, 5)}...${address.slice(address.length - 3, address.length)} `


export default copyAccount;