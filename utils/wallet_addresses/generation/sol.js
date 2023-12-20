const solanaWeb3 =  require("@solana/web3.js");

const solanaAddressCreation = async () => {
  const keyPair = solanaWeb3.Keypair.generate();

  return {public: keyPair.publicKey.toString(), private: keyPair.secretKey}
};

module.exports = {solanaAddressCreation}