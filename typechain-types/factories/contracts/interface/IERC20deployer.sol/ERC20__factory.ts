/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  ERC20,
  ERC20Interface,
} from "../../../../contracts/interface/IERC20deployer.sol/ERC20";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol_",
        type: "string",
      },
      {
        internalType: "uint8",
        name: "decimals_",
        type: "uint8",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620025f7380380620025f7833981810160405281019062000037919062000365565b6200006b7fcc47e36087a9dedfbb17313b6c35611b09f72c376aa208d5c384823ec159c32360001b620001f960201b60201c565b6200009f7f886ad9bcf508fcd8ca6b50248a925403691c6d709a60da0bd70c46511c08851660001b620001f960201b60201c565b620000d37fefd4615d692a2e93096e750a9c2604c1e11858e7cb6716e32ead57b22665656e60001b620001f960201b60201c565b8260039080519060200190620000eb929190620001fc565b50620001207fba80d825a9d7878f6f0e6f610ab0c6e4c20fc9b3fdf209571bb433343d93c12860001b620001f960201b60201c565b620001547fcd4cd0503d947a42fa37293101fa1eee092893320ccc3301a74fcebb4ffc34dd60001b620001f960201b60201c565b81600490805190602001906200016c929190620001fc565b50620001a17fe165990f572ba86f5e73bab1699c4222e8b136382021816ff22ad0388057a5d760001b620001f960201b60201c565b620001d57f3556da6eb0d4484b9bd033c837fce5c300f0d9a247bc7c03d7f3aea2561d2f6d60001b620001f960201b60201c565b80600560006101000a81548160ff021916908360ff1602179055505050506200043c565b50565b8280546200020a90620003e5565b90600052602060002090601f0160209004810192826200022e57600085556200027a565b82601f106200024957805160ff19168380011785556200027a565b828001600101855582156200027a579182015b82811115620002795782518255916020019190600101906200025c565b5b5090506200028991906200028d565b5090565b5b80821115620002a85760008160009055506001016200028e565b5090565b600082601f830112620002bd578081fd5b815160018060401b0380821115620002da57620002d962000426565b5b601f1960405181603f83601f870116011681019150808210838311171562000307576200030662000426565b5b8160405283815260209250868385880101111562000323578485fd5b8491505b838210156200034757828287010151838383010152828201915062000327565b838211156200035857848385830101525b8094505050505092915050565b6000806000606084860312156200037a578283fd5b835160018060401b038082111562000390578485fd5b6200039e87838801620002ac565b94506020860151915080821115620003b4578384fd5b50620003c386828701620002ac565b925050604084015160ff81168114620003da578182fd5b809150509250925092565b60006002820490506001821680620003fe57607f821691505b602082108114156200042057634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fd5b6121ab806200044c6000396000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c80633950935111610071578063395093511461016857806370a082311461019857806395d89b41146101c8578063a457c2d7146101e6578063a9059cbb14610216578063dd62ed3e14610246576100a9565b806306fdde03146100ae578063095ea7b3146100cc57806318160ddd146100fc57806323b872dd1461011a578063313ce5671461014a575b600080fd5b6100b6610276565b6040516100c39190611dd3565b60405180910390f35b6100e660048036038101906100e19190611d95565b61038c565b6040516100f39190611dc0565b60405180910390f35b610104610486565b60405161011191906120e7565b60405180910390f35b610134600480360381019061012f9190611d5a565b610514565b6040516101419190611dc0565b60405180910390f35b610152610874565b60405161015f91906120f8565b60405180910390f35b610182600480360381019061017d9190611d95565b61090f565b60405161018f9190611dc0565b60405180910390f35b6101b260048036038101906101ad9190611d06565b610a97565b6040516101bf91906120e7565b60405180910390f35b6101d0610b63565b6040516101dd9190611dd3565b60405180910390f35b61020060048036038101906101fb9190611d95565b610c79565b60405161020d9190611dc0565b60405180910390f35b610230600480360381019061022b9190611d95565b610f75565b60405161023d9190611dc0565b60405180910390f35b610260600480360381019061025b9190611d28565b61106f565b60405161026d91906120e7565b60405180910390f35b60606102a47f803d5b62df4d8871063d8ae76d18c29910b3a830e7902450ecafc2ba33112ce260001b61117a565b6102d07f571a5e2458b00460675c514a620adbd94775bacdc2859c9e925da9213bb4cbd460001b61117a565b6102fc7f1490ccf4b08568cf97ec3a949c737831364a0eff348b91e846ee42c19a1ef28560001b61117a565b6003805461030990612136565b80601f016020809104026020016040519081016040528092919081815260200182805461033590612136565b80156103825780601f1061035757610100808354040283529160200191610382565b820191906000526020600020905b81548152906001019060200180831161036557829003601f168201915b5050505050905090565b60006103ba7ff8f70341799fcf71dd85444e7acc7ecb4cf54a110dc65f6ebc895172c032be2c60001b61117a565b6103e67fa7b8ef8de3250149378def9116771a70d30410b8065a990fff2bab8d55dd6ad160001b61117a565b6104127fa0f4ef7868f0e23f427d18fc16009a3d31b2386dd425f23e6ee430fa909143c560001b61117a565b61042461041d61117d565b8484611185565b6104507f6f0126470420f1a8aefadd68e8d59817806ea78988ce780707ad021ba9ffd9b360001b61117a565b61047c7fcaf84e1c4bf48cd7c779bd6c7c77e6fbe46eb17fc6dfa8f53e90d1efd6d3f32b60001b61117a565b6001905092915050565b60006104b47fda89f69be07d6cb8c339072f1431db5243e9d579668f59a41c09fd3622c445a060001b61117a565b6104e07fb9aaf0692e0f44d9a8890eb4b0c071f1b52db026d3189b47fe707d5de662f30b60001b61117a565b61050c7fa2b69cc48c540198ddba0575923e349c20a75d5a1cf570ff0502d368d4a0a17060001b61117a565b600254905090565b60006105427f74d1c35aa79d61c47cd16ff046ddd89bd17bb04eb2336e91fd0941207600feea60001b61117a565b61056e7f3867d7aedf27bd549a475050295206fa222bba83c7b7cff0298c0ff26d494be760001b61117a565b61059a7f8f4401109db4c8d8a92bb56cb8da22e51643c70c8ccab2b8a309159264bacef260001b61117a565b6105a584848461158c565b6105d17f64514bca95e337394f6c61bd0539b5de8364648fc05cad45a8d4cbce7feec9fd60001b61117a565b6105fd7fcf233a7d8616d859090831703d8f73b62012c8226790beb3390729315eb087b560001b61117a565b6000600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600061064861117d565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490506106b17f5922025dd0875ce9b472fbe6380259878026d05340b61d2c6a7bd845a96bb88b60001b61117a565b6106dd7f75313552c71f1b3207c2c3ad1694e627f69928295a6871ba299c383895c59c9c60001b61117a565b6107097f058bc61088eb6c0dd13c60426eb3706813132c141613bc98aaa05e2fbeae9a5460001b61117a565b8281101561074c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161074390611f57565b60405180910390fd5b6107787f617f9229c7190874f0022952adbec9dbac40e9d305097d94a3993016ef3e75bf60001b61117a565b6107a47fe81275a76af018b0b796bed16b3a0ec092728448394053826c3469b3663b82dd60001b61117a565b6107d07f6bb8e3c423e067825e51cacf3de0d8b7e87f1a9c31f60e0ae37693eeabaadd8660001b61117a565b6107fc7f371a126d92ba43539921a7a2de1bb284e1318b50d17f52becc70e3029ec353b860001b61117a565b6108108561080861117d565b858403611185565b61083c7f554a1b9bd3a77e818d58851b5a793836dae94586ae8b59d581d918d8b97c3b6260001b61117a565b6108687f43d02f4af030912ec2ded7a6a19066f13608f58e59f04ca5ce7b6cc3d96af27d60001b61117a565b60019150509392505050565b60006108a27f0db9ea5efb903c884ca6675d99bb900db79b81b2b1acac4d3261fb2d0211c02960001b61117a565b6108ce7fa1d172394ff66e1b0c318c86a7245e8075cfc680a09b890f44e426b41b8a5b7960001b61117a565b6108fa7f603d77c3ebdaf4e5c3534cd4820d2ad8ef0d94fd918ad11495eceac20715c6dc60001b61117a565b600560009054906101000a900460ff16905090565b600061093d7f98005f530f805afe42af1db643b5b84dc0f42cab65a7ef7e241a37dcf7cb263760001b61117a565b6109697f5e5c5705f83992027c3df597fe251db10c2d12fc31ae91dbb8607b289b35da9160001b61117a565b6109957f45f65ce008e55078a1a1c7e8988af13a62fa9d667b882ce6e313679542fd765560001b61117a565b610a356109a061117d565b8484600160006109ae61117d565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610a30919061210c565b611185565b610a617f8833e649561d55968eaf76076ca697081070f63d142786fa25a2d94fc3492f7960001b61117a565b610a8d7f52121b188b4a5ddbb5a29b4f391189f177892a867965ed38544363a53b6220c460001b61117a565b6001905092915050565b6000610ac57f44b6c86874d5137c2f8f601e5f4570af94fe7c4bae59af7afdb37f44e2dfe47c60001b61117a565b610af17fa341b81fb97589683d8a230a5f7848abc8954b30cbc54c2df449e2f3ccdbd9f960001b61117a565b610b1d7ffb212b48c09bae76a6e2d7f7a5409ca47ad19fead37f9edc840e6873ad6663a160001b61117a565b6000808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6060610b917fb1e597c11ed9c9644de0536c28b85393f699390bee96f63932b6451889a847e660001b61117a565b610bbd7f8231a1abd815c9b7b3a2d9e774b10750ed76cfd7c82338c3466d45ec05002f4160001b61117a565b610be97fa7376be44985cd1fdb43615f68f1cd004d5c80839ee75b2d713a1e00cb69917e60001b61117a565b60048054610bf690612136565b80601f0160208091040260200160405190810160405280929190818152602001828054610c2290612136565b8015610c6f5780601f10610c4457610100808354040283529160200191610c6f565b820191906000526020600020905b815481529060010190602001808311610c5257829003601f168201915b5050505050905090565b6000610ca77fe816ea9a2b882e18f133c547342a8a332b37fcb09be9b5e7ddf2717612c816d260001b61117a565b610cd37fcaf1cba6c31e4676e571a4837aec9fd012e1231e691dd27b0beea9e2955abed660001b61117a565b610cff7f6bfc28861a075c5ac2d7a89dab2b21c3e6abf903881701a731b1f4326e33dd7660001b61117a565b600060016000610d0d61117d565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050610db37f389e6c31dcd7c861fb8334ff16502b6f9461f9b6d5b06697022c041106c0fe9060001b61117a565b610ddf7fc4040f467abbe032773e096338d6a5d6e3ed92571ee5c8cebd01911191374b8760001b61117a565b610e0b7f74206c49e39be316db3e63afdc770c7245ec9afa8ebed982ac6c40cf3901517c60001b61117a565b82811015610e4e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e4590612083565b60405180910390fd5b610e7a7f70ac1700f374e21a67c909cfd567aef4bcd21ea9a4c144539aa2c60bbc58953160001b61117a565b610ea67fe76c03e58012ee3f23a7eccf51691cbd7c958ba2a968012094304c920e06ec7960001b61117a565b610ed27fda77794ccd8e4a6462368611cfa01be41946fca90864a5b42d1444c14703332260001b61117a565b610efe7fc50d317e69b13de59c3431e7a4846387b1eb2f82141d76d5a413234c8aab5ecb60001b61117a565b610f12610f0961117d565b85858403611185565b610f3e7f3aa7f55b73c2459ff80b4b418560a569c4438e6ccbacd325a90d38c60b93bc4f60001b61117a565b610f6a7f7620e05dd7eef400c9c712b4a6e6adac247a616872da6d24d0133c864679146860001b61117a565b600191505092915050565b6000610fa37fc49d7ce38960482144285e7e19f611bd46b18e35c333d48d59c9a7db2cd37f0260001b61117a565b610fcf7fa34c0a9922a59807d02a00c8196cdcec2eb4cc2cf45bca0a69ec290ecbf3a1d860001b61117a565b610ffb7f34222b6a3956774ddd51e24e7aa52a61ccb2b61987f7713888be803ef2e2610d60001b61117a565b61100d61100661117d565b848461158c565b6110397f5342c50c9ba9cca1e7788699e5d90c68afcf8c6002e96e55b9ded2a6139a2d4e60001b61117a565b6110657f7317d19e95eb770a57d1419edf6987706ee2aa98181c191a12198903c87f512260001b61117a565b6001905092915050565b600061109d7f5d0b5c067769bdd4eb26a418c6fc2c20ec447b8919b70558dee10e8ffe871d0f60001b61117a565b6110c97fda56b33688633b7993ba94643c36fc872143fa71236c8fd60151e5d866953e5560001b61117a565b6110f57f856683c4c2f2088ea6cb6353f087c82a3e2f67ee675fb8d1fdc7990e7b842b5760001b61117a565b600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b50565b600033905090565b6111b17f8af4c32cfb766291db648cccf926fb30f1d5d06ef79561ccbd14488d9aac4f2560001b61117a565b6111dd7faf16de7093c974eb40df49f8998dfa8655b7008a792030d8433d6f69dda0804960001b61117a565b6112097f40362f484d1d48bdfed5718f7257371712e96b0e8145a1c496df4f369973a69d60001b61117a565b6112357fc61cba890cea17a05bc416efcba73f4c9171b964bccee7414d84804bafac2c9860001b61117a565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156112a5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161129c9061201f565b60405180910390fd5b6112d17f3d49695055d115d86659495f59ca6f2313144f91b2bbb1af4bc7af98ce0a949460001b61117a565b6112fd7f9bded3017a9e02f482896c110c9fc88bddf576e2de1a1d0cc387eaddc910d71f60001b61117a565b6113297f850b83474aa5cd57a36beddb87aebbd57c842c5dc38cd766a614a21756bb8b7560001b61117a565b6113557f07c15d0cf1f91e26c5d7074a82b7ebb8d910e1c713b37e36a49dcbf5b42373f260001b61117a565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156113c5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113bc90611e8f565b60405180910390fd5b6113f17f82a9dca28c31a5aef8377688b3b40282216e1bafd36964c3ef0747fcb5b6886c60001b61117a565b61141d7f1741ddd1d805a00e1c798a2f5286fa5308e8f5020692dc61b77de6a8f5a253c060001b61117a565b6114497f4b09e5bdbb2266d133a943b0ce0ed4e12b40a01bdb744aaa8fe9265999f8b39960001b61117a565b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506114f67faf352c8a44847816cbb932ce80ac7899074dbcb9c321c0d8aa35e208fa3bcf1860001b61117a565b6115227faa21580e013ef9c9d057eec3ddec10154db67e988b4a1ca0d762000e94c80fb460001b61117a565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258360405161157f91906120e7565b60405180910390a3505050565b6115b87fa1a9eeee412c21bdf87e64bfbf5ec9ea7e15524b7d66c54c91f100468eabcbab60001b61117a565b6115e47f9bac5d2f7622a69a7ddbcac7db5be730a581f686907523a0d7917aee23bb638260001b61117a565b6116107f628256d355b3b42c800a440dbbe81f4dc15d758602e4d68bf69340b2089bbdc960001b61117a565b61163c7f574467afd9917770ea46db2695911c2ef558c51084cef65365efb730e202f13c60001b61117a565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156116ac576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016116a390611fbb565b60405180910390fd5b6116d87f225fff03e5aec0da21fd223095ae367e28cae2b079eb52d0436ec74caf2dedb760001b61117a565b6117047f6b169d3ba68326de6b23b4d077e295ec142c654276cb927ebd199e9873d743a060001b61117a565b6117307fcc39a364835bd5e352479dc6ec83d982ac85c0e65f83d4119857e2f83ce0e4de60001b61117a565b61175c7ff65a3aab702c67173fa264e027b1cd07ab43d960396cff4886bff823acfaf83660001b61117a565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156117cc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016117c390611e2b565b60405180910390fd5b6117f87fe923a95a39c821ee6b00c2a244f37626f18eebdab8306c703cff7025cc9f54a460001b61117a565b6118247fa1c12fd467c25dcc2fae7b31e4e3bf95289b838752c62b396cc33c5cf4bef81060001b61117a565b6118507fbd6b777df44b090475b76664fb2723dea937b9b5403f6dc500c8220b20ff4b7060001b61117a565b61185b838383611c85565b6118877f7f1f378938d19fc11c55b07e478ef2706472bb120c2b744d3f4fb5b9ae70312e60001b61117a565b6118b37f353f34b45c433da7f6b02fae82e9757b07bc01dca012806705f1e9f829fbc04060001b61117a565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490506119227fb80ef49d6c7d4ed4aa6967e5259424db34a1b7d3243eb25807551009c10bdddb60001b61117a565b61194e7f190b49e762189929c5ceb048d0f1bcb76ecee386c2f336ee297fab22d783c5b460001b61117a565b61197a7f597ef5cb7566c73c7eb4d55e54215aad762de71def4c0cfd74d2f40128e2a9f260001b61117a565b818110156119bd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016119b490611ef3565b60405180910390fd5b6119e97fdfb55313984525b7877a13b67facdb31c50429bd9ca088fc1950363c99e6e90260001b61117a565b611a157ffe9a44685c96d9079bc681b6dc8e27c8cd01994ae6babc650ff956f8bee5e6b460001b61117a565b611a417f56b4e6ccaa82e9ef9872cb045e085281b395d58b026fd703945882c56da4479460001b61117a565b611a6d7f1ab72f6d403a5680e6e15ae932d93a0032b465c4312de2394d880e0c8cc1e43f60001b61117a565b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550611ade7f8f919a1922c4f9f26d59a2d99185592aca09449f296f1cf2b7146cd2e43c4ff560001b61117a565b611b0a7f8d23a2439896cafd986b624ec81d464a3313fc6b0256463d186d2859093a77ae60001b61117a565b816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254611b58919061210c565b92505081905550611b8b7fff69cb14540434dab7840d951b2d38a9c8859938429d9b8b1f269768144addb860001b61117a565b611bb77f81f3e84195502d5ff82abce0ea95d6b18ce4d731f9c58437d61709bc596ca89260001b61117a565b8273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051611c1491906120e7565b60405180910390a3611c487fb8a0488eb1e992e36b7993201c88b78ad2ae5241b401d62fbe6f3320b5bf9c5960001b61117a565b611c747fd3a15c9ebb4487396e6eafd5000ad98d5cce6cb9aac4471606f0e0efe75da45560001b61117a565b611c7f848484611cb6565b50505050565b611cb17fbad49e990b4096807d18b4f4a8225a2099a8f280d8841b79fae4aa4a2bc9bcce60001b61117a565b505050565b611ce27f5b4c30bdf260e83b150223c3fab12c902c46e4e58d63d1f1ad365c136342cbb460001b61117a565b505050565b60008135905060018060a01b0381168114611d0157600080fd5b919050565b600060208284031215611d17578081fd5b611d2082611ce7565b905092915050565b60008060408385031215611d3a578081fd5b611d4383611ce7565b9150611d5160208401611ce7565b90509250929050565b600080600060608486031215611d6e578081fd5b611d7784611ce7565b9250611d8560208501611ce7565b9150604084013590509250925092565b60008060408385031215611da7578182fd5b611db083611ce7565b9150602083013590509250929050565b6000602082019050821515825292915050565b6000602080835283518082850152825b81811015611e0257828187010151604082870101528281019050611de3565b81811115611e135783604083870101525b506040601f19601f8301168501019250505092915050565b600060208252602360208301527f45524332303a207472616e7366657220746f20746865207a65726f206164647260408301527f65737300000000000000000000000000000000000000000000000000000000006060830152608082019050919050565b600060208252602260208301527f45524332303a20617070726f766520746f20746865207a65726f20616464726560408301527f73730000000000000000000000000000000000000000000000000000000000006060830152608082019050919050565b600060208252602660208301527f45524332303a207472616e7366657220616d6f756e742065786365656473206260408301527f616c616e636500000000000000000000000000000000000000000000000000006060830152608082019050919050565b600060208252602860208301527f45524332303a207472616e7366657220616d6f756e742065786365656473206160408301527f6c6c6f77616e63650000000000000000000000000000000000000000000000006060830152608082019050919050565b600060208252602560208301527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460408301527f64726573730000000000000000000000000000000000000000000000000000006060830152608082019050919050565b600060208252602460208301527f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460408301527f72657373000000000000000000000000000000000000000000000000000000006060830152608082019050919050565b600060208252602560208301527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760408301527f207a65726f0000000000000000000000000000000000000000000000000000006060830152608082019050919050565b600060208201905082825292915050565b600060208201905060ff8316825292915050565b6000821982111561212b57634e487b7160e01b81526011600452602481fd5b828201905092915050565b6000600282049050600182168061214e57607f821691505b6020821081141561216f57634e487b7160e01b600052602260045260246000fd5b5091905056fea2646970667358221220422f6a71d61dd1efdd282479563a1501980dba2e27669e5e17aa85b629de75ea64736f6c63430008020033";

type ERC20ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC20ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC20__factory extends ContractFactory {
  constructor(...args: ERC20ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    name_: PromiseOrValue<string>,
    symbol_: PromiseOrValue<string>,
    decimals_: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ERC20> {
    return super.deploy(
      name_,
      symbol_,
      decimals_,
      overrides || {}
    ) as Promise<ERC20>;
  }
  override getDeployTransaction(
    name_: PromiseOrValue<string>,
    symbol_: PromiseOrValue<string>,
    decimals_: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      name_,
      symbol_,
      decimals_,
      overrides || {}
    );
  }
  override attach(address: string): ERC20 {
    return super.attach(address) as ERC20;
  }
  override connect(signer: Signer): ERC20__factory {
    return super.connect(signer) as ERC20__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC20Interface {
    return new utils.Interface(_abi) as ERC20Interface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): ERC20 {
    return new Contract(address, _abi, signerOrProvider) as ERC20;
  }
}
