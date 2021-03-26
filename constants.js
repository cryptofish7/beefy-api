const API_BASE_URL = process.env.API_BASE_URL || 'http://localhost:3000';
const AVAX_CHAIN_ID = 43114;

const AVAX_RPC = process.env.AVAX_RPC || 'https://api.avax.network/ext/bc/C/rpc';

const BASE_HPY = 2190;
const HOURLY_HPY = 8760;
const DAILY_HPY = 365;
const WEEKLY_HPY = 52;

module.exports = {
  API_BASE_URL,
  AVAX_RPC,
  AVAX_CHAIN_ID,
  BASE_HPY,
  HOURLY_HPY,
  DAILY_HPY,
  WEEKLY_HPY,
};
