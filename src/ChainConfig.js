var config = {
  core_asset: "CORE",
  address_prefix: "LD",
  expire_in_secs: 15,
  expire_in_secs_proposal: 24 * 60 * 60,
  review_in_secs_committee: 24 * 60 * 60,
  networks: {
    KREEL: {
      core_asset: "LD",
      address_prefix: "LD",
      chain_id:
        "da4a4872f96da5a9c8cf694c5b8344b5a7a3b24218ad90eba4b148897cf4ed23"
    },
//    Test: {
//      core_asset: "TEST",
//      address_prefix: "TEST",
//      chain_id:
//        "39f5e2ede1f8bc1a3a54a7914414e3779e33193f1f5693510e73cb7a87617447"
//    },
  },

  /** Set a few properties for known chain IDs. */
  setChainId: chain_id => {
    let result = Object.entries(config.networks).find(
      ([network_name, network]) => {
        if (network.chain_id === chain_id) {
          config.network_name = network_name;

          if (network.address_prefix) {
            config.address_prefix = network.address_prefix;
          }
          return true;
        }
      }
    );

    if (result) return { network_name: result[0], network: result[1] };
    else console.log("Unknown chain id (this may be a testnet)", chain_id);
  },

  reset: () => {
    config.core_asset = "LD";
    config.address_prefix = "LD";
    config.expire_in_secs = 15;
    config.expire_in_secs_proposal = 24 * 60 * 60;

    console.log("Chain config reset");
  },

  setPrefix: (prefix = "LD") => (config.address_prefix = prefix)
};

export default config;
