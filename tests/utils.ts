import config from '../packages/utils/sfc/config';

export type KeyMap = { [key: string]: any };

export const ns = (n: string, el?: string, mod?: string) => `${config.NAMESPACE}-${n}${el ? config.ELE + el : ''}${mod ? config.MOD + mod : ''}`;
