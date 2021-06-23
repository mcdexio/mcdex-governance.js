export const DECIMALS = 18

export const DAO_STAKE_TOKEN_SYMBOL = 'MCB'
export const DAO_UNSTAKE_TOKEN_SYMBOL = 'xMCB'

export const CHAIN_ID_TO_DAO_XMCB_ADDRESS: { [chainID: number]: string } = {
    // kovan
    42: '',
    // s10poa
    1337: '0xCB53b64f5bC8A01E77394cE66314540f9DD27644',
    // arb testnet
    421611: '0xee3f6Dc8168Fe907c24C50feCda14050147024F7',
    // arb one
    42161: '0x630277E10Eb6D4b0e8d8C75FF9a434B28F13E0A9'
}

export const CHAIN_ID_TO_DAO_MINTER_ADDRESS: { [chainID: number]: string } = {
    // kovan
    42: '',
    // s10poa
    1337: '0x4DD3be2eEC66E4445bF26eb501B16AD0DaeFf2c3',
    // arb testnet
    421611: '0x2C14b56bA185709604265beedaca3E177699cb77',
    // arb one
    42161: '0xda39c7e8903ba766BA93EF9b753D870A52cf9d2B'
}

export const CHAIN_ID_TO_DAO_MINING_ADDRESS: { [chainID: number]: string } = {
    // kovan
    42: '',
    // s10poa
    1337: '0x2850d1c0414F6D59c9f9e72d252Dac3d6235aD91',
    // arb testnet
    421611: '0xB3869A26159066A8AD9789882b22f7A6EA6cA76a',
    // arb one
    42161: '0x9C9F5B4339a4bc4C91ECb1E7327f7434Af5C6d47'
}

export const CHAIN_ID_TO_DAO_VALUE_CAPTURE_ADDRESS: { [chainID: number]: string } = {
    // kovan
    42: '',
    // s10poa
    1337: '0xb4CaAf5a1D4A3ab0c0957BD0BfE28d0D22038f99',
    // arb testnet
    421611: '0xB25a6a1De2C17bfeEb721eaeeC470fbA9E0E0aFB',
    // arb one
    42161: '0x5b0648eA11f7ea2600587E627da11A750AA56c08'
}


export const CHAIN_ID_TO_DAO_VAULT_ADDRESS: { [chainID: number]: string } = {
    // kovan
    42: '',
    // s10poa
    1337: '0xC176EdAd4a8E33b96281cC7859713ED70EA8E8BB',
    // arb testnet
    421611: '0xcC52CE02158Bf55779E8434B82b5940d05994d3C',
    // arb one
    42161: '0x254927Fc7065Cc5c54eE5c3A03aa23B73762B449'
}

export const CHAIN_ID_TO_DAO_GOVERNOR_ADDRESS: { [chainID: number]: string } = {
    // kovan
    42: '',
    // s10poa
    1337: '0x9247a77BC44181cd85Ab8B99E179D40e901e71e4',
    // arb testnet
    421611: '0xaf977F17EB9Fc0e1f42266b899f725E102503770',
    // arb one
    42161: '0x2868aBDD9f843a8B968c3D9D373C5A8b2a833b92'
}

export const CHAIN_ID_TO_DAO_TIMELOCK_ADDRESS: { [chainID: number]: string } = {
    // kovan
    42: '',
    // s10poa
    1337: '0x27f5EdeC2E3Dff2f87E2EFA28C58d4d6B2007677',
    // arb testnet
    421611: '0x6Ab6A2bcE38287B4C068d5CC3f65F19FE5a2c519',
    // arb one
    42161: '0x70cD985F196f8010A5a39075874b9D99A8C7601e'
}