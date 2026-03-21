/**
 * app-params.js - スタブ版（base44 不要）
 * AuthContext から参照されていたが、新AuthContextでは使わない
 */
export const appParams = {
  appId:            '',
  token:            null,
  fromUrl:          typeof window !== 'undefined' ? window.location.href : '',
  functionsVersion: null,
  appBaseUrl:       '',
};
