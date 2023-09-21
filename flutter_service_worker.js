'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "d41d4128579151a9c92a9271211d5f70",
"index.html": "bb7288105fa01879c12a567db2c6ef86",
"/": "bb7288105fa01879c12a567db2c6ef86",
"main.dart.js": "d9c7d870ed2eacbfff00ee2a5266c1e9",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"README.md": "3f0b2b2e0cad8af26ec900bd6b64da57",
"favicon.png": "aa38f900dc7d554cbb9bc5027bfff120",
"icons/icon-192x192.png": "2991743817ae06602edbec12dab6b408",
"icons/icon.png": "84e2944613d1f95f83f15595896fb353",
"icons/langding.png": "f4457380f3990650b4bf3fdbed5213af",
"icons/favicon.png": "6530156b6c2d8223b60724bff69cd719",
"icons/icon-512x512.png": "db8fd607f3c06d50054087c52f614896",
"manifest.json": "9b743913491e1b97f834fa63246e8e28",
".git/config": "baf735346c9a16d913f6acc5c95554d2",
".git/objects/61/1f037bfa7608068a1326d6fbb1fb94a253bbd8": "f025ba74e75f3611c8548f4573b1e41c",
".git/objects/95/aa867ff27e5ceb6afb3dab2913f4a9fe88d7cd": "143147ccc726a365ce14a76945f7d8ce",
".git/objects/0c/4520510ea97fa6f5d57b6aebe7f9349e0b56fa": "d33d9c757ac6a088eba3b714e09dc985",
".git/objects/0c/d0b91434d3c5b83a0fb6e805aa68a2c6f1338b": "014fdc31139f5db9de04427a32777ff1",
".git/objects/66/deba58fefce9e2fa30c0bc94ce099595359cad": "b5462fe0dbb1d175d187d32e5f245adf",
".git/objects/68/44769be0da551ce1752184eff24eb2853f945e": "479435bb71673b62912ec319cac2b482",
".git/objects/68/db466fdf23f52061d5d50aab1f3c2ccb346a20": "193b0fc55f6e429f4eeaf8de153b5b43",
".git/objects/57/6b5b60e55f23378e6d47373f5b3336adf050a1": "c0430828fa601c049b6c29753f87b2a8",
".git/objects/3b/e1ce9c919f9c5e3e689e7ec85645d75c7c21bb": "72972eea16df152fdc0a56befae31671",
".git/objects/03/d83c92b03fa6319fe18d95be0be351fb36e762": "baacb514219ba9fefb9adaa5850d6db6",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/9b/10202509e6b9090539d208a6bcb332b401b5af": "28d675c6c7fcc64d956d16d8bb899208",
".git/objects/9b/ad440121f2a79adf9c75affe806e79afbd82fb": "1bf315dabcd0e9ff3a1684aa362cac3b",
".git/objects/9e/469a6b09fb47fb3c0ef1d8a3258c4c8a4f981e": "b05cab44592d5b5bda5b65ad2168bcb9",
".git/objects/04/c281eaa7d95c78aff679ee2477482c19f60876": "688d9d9d91043a86e6e7872c832edb6e",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/3c/0da3104c802f2adf77a9290b9f7ffa035f287c": "e17f38fdee0af2bfdf641b68552fc145",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/51/4d67da350c2eeb489ce10804cf2d30bfe221c5": "75f3adad5a06c829bee736394c74bd91",
".git/objects/3d/1dca52f184b4c4af9026d658f9db75759fca62": "c8c28ec3ca8e8d55976d918f75462075",
".git/objects/3d/eb4d64fe3756a803065900f0d53984afcc07d8": "fc1aadcf4975fe66fa5b9019ba7682bb",
".git/objects/58/ce9dc88b033d95a7cffe16332678b06ec10692": "f310f57729ca514ca2891576534394f6",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/60/4d4ba75890b30a65bc4dac4bf78e0e17cc73d0": "77d735bec70e95e9efb6c92f2c4a80bf",
".git/objects/60/219732c1e75e9d36dd050cf2e7d34598bd2fdc": "c8192995c1cb13f174cda8dfbd68aef5",
".git/objects/02/e731dd711940a76bdc895166a5a7b6952ad809": "e2fd8842ffcab850c31b3a0a7fc1462a",
".git/objects/02/5a37c64c58bbecfbbdefbee186e411d0a2d280": "86f4046794a540efc6e5d73ec2d68e9b",
".git/objects/a3/a7a1fce00e4ed61403d195df4317c10c54f6d4": "08ef06b696c5c4d9ad9dda9bab579ca6",
".git/objects/b5/884095ce5e5a68bbb2d59917b84675eb612574": "32372a48a4faed153fecf5f41e37fdc8",
".git/objects/b5/e744d322494fade53cd33ca1ebba176ee4b070": "f8949b6c9175aab3b4b819be0b183bb4",
".git/objects/b2/b204804f06654be4983b1560dc076ef60ba5ba": "b6217f600ced98159fabff7bb0aa8a6d",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b2/338b1c29f65ecd69017586d0ca6f1721273ed8": "2cfe31dfe713b45014bf904e1a797133",
".git/objects/b2/f5f2c861cdb1db8455b7f26740cd36877ea886": "ca537bff71a9644d7972486ffd997eca",
".git/objects/ac/abe0f778285a9ee2ea79fee391f6a25bf5b1cc": "dfdda8071d61eb15adc2f390bc20638c",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/d7/b93dfd72c8f2ece189b20fa8d807e8a556e865": "5fabb9dc4f91aac48474b3ae4274393b",
".git/objects/d7/f70bdbf994d806a80c85e6c85724312fe4bbdd": "c661a9059b576ccdc5a2c57f47565b95",
".git/objects/be/3aa728b2293dcd1224f69629de416ffd6520ff": "66da9de9d8217ce5a2b88fdad9980d4d",
".git/objects/be/afcc041936610db1f4be8cef4be80a3708e772": "2ac67fd93c2a6928ec96cce55c81fb6a",
".git/objects/be/53bf2828b4dac130a4a605f77559bb8c9b722e": "30fded30bb31795f89c328b1e6d683b5",
".git/objects/b3/881162c22d9c7a1d85f329f1f4d94dbdf41270": "a6a8d2e4bef696cfbcac8ba11a2d4ff4",
".git/objects/df/e5189090ef92c5e762cfbdc8e65081b706e635": "ce20356c2abd564eb4bfba4ea4c1943e",
".git/objects/da/ded5c161112489ef5bbce6636eef8bac4709ae": "7db324ffbb0796e27da0c470c0e6d775",
".git/objects/bd/19cd242ddc81662cc0540de8204ba5bc4d55af": "48453e6a7685a47893d1d218cef21485",
".git/objects/d6/eb6ab39c372acf14ab05756180872b6fb46e3c": "00d7204501b62da6a11e14a12087698d",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/e5/058ee837601e75cc1d73d18ab241de528c458b": "237ca77897a934467a776099c2e29a02",
".git/objects/c0/adbec733003476f1798d01a2b2e6a5d6fd1308": "0edc012c1cf078caf8f44961acb95717",
".git/objects/c9/60f91d96594e93d0a7318be90e0e1c3d6ffd97": "e87a1a3c3deaae1c2d6e7b4593b35944",
".git/objects/fc/18dcebb466642cfed45252dba8b69afe7acf3f": "b05758583f6f85f1bedb76cfc8fdc877",
".git/objects/f5/ed984572ca4b1d01e7fdbc689d16d556d86007": "b917f6c701d6d871abd8bf4da3e9628c",
".git/objects/f5/3f20298317e528fc167cf28c940c35b5486838": "3372b42dbf83a2187c04a4aa0720767d",
".git/objects/e3/d0f2c918bcdf59beaec7a3ab709e5a84e10086": "1907297c9a284c7cbd58be6a4b13f26d",
".git/objects/e4/7b1c617fc5209477ea17232fb98c8be4baa829": "56c44b563a651f6bffcdecb1dc7b8914",
".git/objects/fe/e0eaba553d5e9e1ca90d57aa32aa8a3bb45ed7": "37529dbfc1213dfb106b7e9fe2714dc7",
".git/objects/c8/09319878f23be4ebbcb3895d6250bec42a38e9": "2b5ad2519c5bdafa21c75a117dd7385f",
".git/objects/c6/64724861c0babebe4077da1b8b9e85d8cf3f65": "faaae72ea331eddfb9c13a7c76518339",
".git/objects/ec/04ccbd14d9fe2a85152c4e39fbfd261626152b": "a914634390b3e90291e95280de693c19",
".git/objects/ec/fc46cb3930c10e627ab294521b6942ce4293de": "d16e3e8823fed031fee6f03169a44c81",
".git/objects/ec/090d6c848eb0d0e18ee3d1015513c93f6a6e1e": "a124fb8a7790cbc54db3c4c0b0a1a7c9",
".git/objects/20/1b2306cdd28d5d4e6cd7040199987ed4ae770f": "320bf262c1c4c1665a74aeec47a835cf",
".git/objects/18/b2e593252e3981961a590821bc326c67ada74f": "381196d59fbe186847a637862daf7ca9",
".git/objects/18/0bf58fcd7d9718338e75015db5da6f7dca9e73": "57c2a238fede9197df5fa26dec69bdb8",
".git/objects/4b/d26c95262eeaccbe1bac0b62aa4c099fd5bcc6": "e7acec53fac654d8decf8abeafbec9a7",
".git/objects/11/fa4c7437d826c144d4e05617381dc7de8db53a": "ad022f464391432a58df20f31cfa8e26",
".git/objects/7c/5a0d74b770d8509d2a94044f38cd5442161147": "24c8151095769aa92be95372521b395e",
".git/objects/16/9e45e2b72ea1abf84892bbb56de1ebe0379a3d": "aecd8af3d6be68a9055355611431d7c8",
".git/objects/42/16b134e14f3f6d0f1e7b5c77900019bf36835c": "3bf5be49b2846bb6891b2e54e51de6fb",
".git/objects/89/13ea3edf30511e7edac01792bbdf7a910fd3d6": "b7969a97e38dd9bb8c471a2ad808d763",
".git/objects/45/9022b38dda9649c69deae68f70ae43a8bb4dc2": "689d200bef6f768b294ca51027caa58e",
".git/objects/1f/b5358b20d27b4fcaec15a4f66f6a17cd2171bf": "a5e0afe8fc42ab04d0373a59d3fcf0e0",
".git/objects/80/6a96b0adf06a61aa289f85ab2ed18c875d3b74": "c137a17a287b92770b907e5329a67f58",
".git/objects/74/0eddfd4bcdd3356a88ede846665fcd64b17d45": "b09d2e1d22c45ec4908f7a0b53d88aea",
".git/objects/74/189df354efbe81ff6d6b69da03bd887e410fe3": "4724940b8fb745f7b5c197e6291c0560",
".git/objects/74/2cfbb04c6515a3f7649fa75be3ae762e780eb1": "1e1577b5cb6cc4019f58b4eef57e78c2",
".git/objects/8f/4fcdef49c459d172a843479a8713714193818f": "bdac02270e172a99964b7b498ebba415",
".git/objects/8f/4748fc00c811696af757cde5274822ee4bd926": "9898b21e733d8f9c4d9d148c6fd53824",
".git/objects/8a/a192f1b161aa014db3a97e60ffb511c378c3f2": "47e5c567c7943b04138ce20fe37b987e",
".git/objects/7e/a501393bc8f4a187d20ab9fa09a35b329a2842": "cab09e79f3c3c7e7e1c4d96cc5f51d6b",
".git/objects/19/6817c3c68a9336564d35a440ec24e543a4fbc6": "49d4b11883f9531cb0c8253f7e4f0ba1",
".git/objects/19/5cc0c79b82b3d00bc1e57e4f97531568c4e599": "275fa487f873238e8973f69d826754e3",
".git/objects/19/790b8201a678194b1433adabbbbb1c5b8e5a6a": "8565867ce5e0137f2c6bbde1a72d8052",
".git/objects/4c/c81dd397c11cee0d3698449dd2bc83c93be877": "f1d1d8c090d55a58bb83fea9bcd7fbe6",
".git/objects/4c/9c33c1ad023aee9bceade0789e0c81afc0e7b6": "564e7bf0b32766f638e1378078787b98",
".git/objects/26/d5246b6df291ca7e4ecd03b307d8c0b91783b5": "4f96719f571ea072953a424359dba814",
".git/objects/26/1eaa5ae366a127243a5ba83e5298fd2b212d9d": "5cafc15cbea7495f46d472374ef2873c",
".git/objects/21/cd613d1d0d91443eba2941bf1fe07cbfb3adbf": "992bd6eb1c84fec122ca99b937626616",
".git/objects/4d/b0e42628d4e484f9c848297a2b7677b2c3935d": "5e33cda94da43b0641e2720e990c2bf5",
".git/objects/4d/c0e7f5d576ca015211bc1a399e361420db679d": "93da824df4d542021885809ae9a1dbf0",
".git/objects/75/2cd22241b5aed802b014811f74484425dc9ee8": "b8d173eedc6511c94cd8e55f10537001",
".git/objects/81/ce542d87d7028e8fc21156ff5d5c2ff32fdcce": "8b4e062bbd673c9144dce21560154598",
".git/objects/81/582a50bfe86ec33fdce842a4d954488db0362d": "9ed964c3fd691a6c9c17ef2da23579db",
".git/objects/86/9a3c49d43c67b708570075d082f028b8624966": "52d5432affed8804e686ad9d85e8e598",
".git/objects/44/941086d8342a56543b2cf23fbf4ac3aed7f110": "f1198c6c7dd833fad7b6d6f7245fbdb1",
".git/objects/2a/0304b21e44fd078bbb9672b956385b72965714": "9bcf51d0450b65834d0d6c48ece7717f",
".git/objects/2a/578bb41be3e94b02b4abba25b7eb6780af5512": "5a3cac024670066b931ba6c80695c8ca",
".git/objects/2f/69fe207efbffc57cc27714870f8678fb580421": "2dcc0d3688108323dbf001754be19e62",
".git/objects/43/93193f2d17e6078b23745e7b102be9a11479af": "56d4eabd559b81aabff5854dcd3a1752",
".git/objects/6b/a033740733a508d77f74ca908f39adf9bc6567": "72253f66269a1bc4aa6b99cb316af6ca",
".git/objects/6b/87b4d4ac1586ba1e4cd468a37cc26922bb839c": "5441fdba2426de234055e38999132ec4",
".git/objects/00/383469860d5d2912b27ce759fcd55c2bbd8889": "871e78ef7c96f2b46a58c65c3401dec6",
".git/objects/00/2476bb38151e9f3894d146fe213852cd9c385c": "eb5beb427246bbf7c8c0d5f6f45a93a2",
".git/objects/00/b2caa4201976ff9954577492efc660977f6043": "4e2fb3481fde63b8789116caebaff092",
".git/objects/6e/288961477c45b275fcba5ff02f46a4c2033945": "53ed3bde49c3ceb5d8bd1b526b6e656f",
".git/objects/36/7bfb9defb38874cb8bee7b4071d1225819d170": "f157a40c7e994959f0c84e1ac26d9e2c",
".git/objects/5c/be60d3c2fa781f7b146fcc5aa66b6a851e92f3": "69709fafd0631c0389ae4b1f10c40d5f",
".git/objects/5c/05b3757e41aa8afc817464217d76b6f4fd32f7": "87123efac24e0e35bae4d992abac6ecd",
".git/objects/09/0858c4111de51b75a3d95f18a42899bfddf1eb": "b8d748a7bdf5ca8bbdd14ecf9e979e5a",
".git/objects/5d/955b2d1792f51e278261bdac3ea53bcc92b823": "eba84de594b104c44fd7b84ba844ac45",
".git/objects/62/6f92fd6901b3bc20f33221a2b6d819f84ed38f": "95a6c4e1a98d61885e4609b26815f76d",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/96/180b42471e2381ed9845fc4e4f8e606da3b5cd": "c3b252ee2d7fb3959c96071d96b515e2",
".git/objects/96/3f9858ea0b5d85ea2a36350ac2d0778a7dcbdb": "db76ae20b119375f98aaadf105ef4ee0",
".git/objects/54/a2f4d471a13d0122a57e53713928529845d80d": "927e6430f4453a974c48f89b73c648f9",
".git/objects/3f/6328ebf497c69d17193c4d7044e65c3c494a50": "0373050f645cf3b6048190b26f11302f",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/08/ca649adbc52ed2d1f2335d47fd8701a933ebd0": "d12a01f6e98c4903d451f138db7ce459",
".git/objects/08/5468d540c41172a09ec8ce0fcec9c0c90533bb": "e0a02de2f70c7c1034be1d4b4fcbe159",
".git/objects/06/87c07a7c5dcaaeb4ee3290514168fc283d4b33": "87bc26f3eb96c4cb4364a405dd80504c",
".git/objects/06/eb5230b606692f588d726791a247c354859e2d": "78a8967ac8338e0f19ed2d3a11301c23",
".git/objects/39/6d6b6ac49e3a33dbbdadace045c2674f1d471f": "a25c74f1e5718a708cc6b9b21e2fadad",
".git/objects/55/a5f98b47ed0e7be86926bbb1df2a66549fc9d4": "24ef33d0a96808f625ace8f1a2446d9f",
".git/objects/63/43093b74564b015c3185fdea001f1b50cc124c": "f11ddba5b82565a63a565294c9a3e8bc",
".git/objects/0f/2333bae373545a0642cfa457af224a345c4288": "e704855a63d8ef6c89b30e4222ac4b7f",
".git/objects/0a/df75f63f5c6b4cf48c020634871db17dfbe22d": "129835c3d52bb6fb82b18c962cc57886",
".git/objects/64/2af23264fe1a0e9b18314842b9a1bd81ab825f": "99abc026e3f3619490d34d2a352114f6",
".git/objects/90/cb96009ddac4f64e7429718360dd0f69a0b728": "ddc4785a1afa13d17154a41b67eda9d5",
".git/objects/90/d629aaa3cbf98543b1d68f959726c7a4d17d71": "15842020d3d62c744ca2369383c8e6b3",
".git/objects/90/4ca22e25eeca01f1c666497b48c94bce39e516": "ca24ee5d0f17310776af2196e4ec827b",
".git/objects/d3/2e9e38225f3a55080be87a2065a826e8019265": "35d12dfe83b8bf90e670ed083d3f025c",
".git/objects/d3/1fd72217d87384aa672a477064aa0cf46748ae": "927665c9a20cbd8bf4eb01902f2a3a6f",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/ba/ff1020f76b1b6cd05ff49775e0aa261d62c6de": "c84662855e88955d12006840863652b2",
".git/objects/ba/af1747beca837df14bc6d18cb8291d71ff78ec": "672160a6656edbecb6afbdcd46cc9fc1",
".git/objects/a0/df71b84e142a90dd271c708593e9cb0198d6ae": "6ce1dcab5fd071fb04ed1de985e6163c",
".git/objects/a9/9ada288b98502edf34fc1d78f0cf336076fa4d": "da15b263144f908c4256193df51f67a4",
".git/objects/d5/a3a1565b661252c0ce1316bcfd0d05eed24093": "341bd71cb2b206084fe0b333156a4cc8",
".git/objects/d5/9220454805c96af573e690fc20dbc34d4eb700": "25db30318bd1c9bdc3752959840076f6",
".git/objects/d5/35f4c6f02929660ca356b64563abb31abf04be": "8764f1085bb3d164b08df103364466e4",
".git/objects/b7/c45abd11a07b4eee509101e2689dbe2ca16c25": "7f3a021a368752d48bf6e9c2e44ded68",
".git/objects/a8/20e856f519a64ffc988222ae36fc85244f5f1e": "9fca9fa7539b58b6a9e84dca782ff35c",
".git/objects/a6/8ba9cf922c66ac4a313519939189800663b909": "12651f62623590fbdefdfe75460b9244",
".git/objects/a1/c19b513a6dab77c9f6c6c3dfe23ce2c01d2fb4": "879682fd15387bd35e7bec56ab8773c0",
".git/objects/c4/17205c582a99d59cccd796204ceb67d960fd7b": "19dd5c4e28b9b05dcb90c80aa01feb71",
".git/objects/ea/a6757820b32b34539897b4c7d0309bb3cc8f69": "29b97c0797c364d4f09a133fbe73693b",
".git/objects/ea/8dc2cb5149abb24c0a809a51091cbdb2d1e6d8": "0c855a025c5810d5a908c8fd1b826788",
".git/objects/ea/346e427858efa34e3af6a74880846d269c0101": "2f3575fc65ea50120284353bd821c99e",
".git/objects/e1/88cd93b06f9449287338128ef44b932f8e183a": "3cade6da1c3b0706575b488e6a420983",
".git/objects/ff/97d99f0b13c58694adf0779ad627fa57738c67": "4b6d9bba20a8f0a05705d861e05e114e",
".git/objects/c5/19102dc54aa8fbb924be9a71cce4af2199cf4e": "b3432d32a464e75641e91fbb9b3b0d3a",
".git/objects/f6/9a22486cffffd84bbb04a967a635ccc6ab26f4": "efc8eff682fc5c1bd74b9bb532031b65",
".git/objects/e9/82f2548977fdaf96e08b4a3e3946eed04509e3": "abb1ba87ef6182bd2dc789850389921a",
".git/objects/e9/224d95f4dc5fb5ce64d5e929c547ab1a64a2e6": "5064e1cf2f1bfaeee8c8aa2e18adf812",
".git/objects/e9/8537965ad105521c4fbbe84959ded3fc103638": "f23124c62901428f8e3b7fc6eca3f23a",
".git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
".git/objects/ce/b58fc2615d7ea4d01b7ed0fcd03855c28088ba": "4801d00d745f4ed0177c412115b274aa",
".git/objects/ce/ccea641ad44574e57093548e94716ac69e4812": "f83ed077190500d1149189a6152c3274",
".git/objects/ce/1852c35b8b8103ee6ff923089dce65190040af": "8765fac9aaf1245f15cebe21945484fd",
".git/objects/79/278966b246cf06bb6d175266f4a4787c27a4d2": "92a2005a20f553371bbe2456443aaf60",
".git/objects/2d/59a9abe5b8c436ecf508f4e6ae4a7d6b9ba7cc": "36c2acc88d833e2b90059ea808dfe620",
".git/objects/41/583a51b2ed7d6d99d00633aaacc7500f80c89a": "97bb64f88eeb112468ec43bc931cca62",
".git/objects/1b/8bf93de0682b564657105869478dde658e19db": "9d303846cdc0afb1abff3510da7622bd",
".git/objects/77/994057bc051b0eec4794baffb364f7f05bf4f8": "483155db50bcd8ad2d40a4cf33721969",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/84/694bea5f65a8ef7d9193573085ca0d25fdef0b": "fbd967114a9360d6fbce5d4811ec26d4",
".git/objects/4a/e0a653f7bc5647a2b3df71b5f181bee795cba4": "66419ea2340795f92f43ec0165684ded",
".git/objects/23/0001e346cb94a8f29ac3fe2068fe74aacf6baa": "3b85dd4ba782c17547998d352d58931e",
".git/objects/23/23fad3438fea4803b362700a4cc646674a8691": "fda5f3b13ccbd781ba99a6de9ce7f212",
".git/objects/23/00e1e39927340ab21b94a7e1009513f48f4c25": "485d4d6dc1e839dd821d1b57aacaf756",
".git/objects/4f/eb03b2b659750871c177e0d0303efec5eec735": "177134712f27579108f76c944e3766c5",
".git/objects/15/d385a3ba84dd518d89ca73a11f4dee36c401f2": "da94990898fa98a2b127332096f6aec2",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/71/5617857027be2629cd0b0925aba73951e18179": "96e441ca0dcd99afa096c613148d309d",
".git/objects/49/441a77b1ec10a7fb1f574b45736c0f43046ac4": "7f941153530b026652974a25bbd0dc42",
".git/objects/49/88c7f41aea8878508b7f8347047a56efc4241b": "840930f6f316440dd8d4f45374ef1898",
".git/objects/49/a80fdae19ecc29be2a876ec61021a603a4cf67": "33e81936d301f3f66037227f2bce9b59",
".git/objects/40/42d6b31a84ad9d02aaab0ba03a9bfb43d449e8": "d9aa4cff55ee3e6d8df3254565298a18",
".git/objects/2e/fb61d21019f832d4b0763b1c967cf19e74f643": "12febfb6f06721edbccc18dbbc329c6d",
".git/objects/2e/bf733771425d2f048eedc43690a71dbdb8bdb4": "fe1e5d911d6775f259049643729b0fa1",
".git/objects/2e/ff8861aa255ad895baf1b3e32ba8b017686553": "3e7a7ab5b7dec1459d783788b2c1bcaf",
".git/objects/47/9b0e34d555e8edbc762bc5fb5a23b0bca0a55f": "b5b03354c271fc56124668bc8e5516f0",
".git/objects/13/7230ef753c71639a5a28360125d982c3550658": "e9a5ff30004117b24af357ae9576513f",
".git/objects/7f/b16ab3d8bb9119344b4bbac270f0de7729ae0a": "6ee9fdb97ed775a372fe3d017632bb6d",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/25/701e014c93d21136210e8f261d195197957d7b": "f1287322ed6ff1aaabfa71bb93beed0c",
".git/objects/25/af021b881c2fb5e3c924604d563c3c53f0cc4f": "57b8f546ab3efa56f452b5e5e5537cbc",
".git/objects/25/baed0d4c50b01405acb2314a3cf8f91692e187": "dfec2d39e04576826c5f061b4be67f1d",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "9b9c330c70feda6fd02e2359802ac052",
".git/logs/refs/heads/main": "ddf672836c025606be898adb03e6e6a1",
".git/logs/refs/remotes/origin/main": "7accbab00e872466b1b57592e6dc39db",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "e3e4dd354cae9491d2983154d6e9a81a",
".git/refs/remotes/origin/main": "e3e4dd354cae9491d2983154d6e9a81a",
".git/index": "a06282b6d03ea76f0f2a78be2669759e",
".git/COMMIT_EDITMSG": "02fc3b983fa2341dc76c62d1bc65d4f1",
".git/FETCH_HEAD": "72ef687193f116cd09b4a6706af57038",
"assets/AssetManifest.json": "85a57369bc83a68bcb96d297cc81d801",
"assets/NOTICES": "970bd0eb147b0ed468c6cf11498ce204",
"assets/FontManifest.json": "08d7f8ae9f8bea732977198e1123df51",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "c1926e326947a7193409dc9af497650d",
"assets/fonts/MaterialIcons-Regular.otf": "b1e2acbe47a72c8f289d945882963588",
"assets/assets/customers/asiahawala.png": "4916adcbc773a5fdfcede759d1663836",
"assets/assets/customers/iraqcom.png": "11562f0c66124221e8bce8af83cabf67",
"assets/assets/customers/iac.png": "391eefea6f22c33ff23f37243722b54e",
"assets/assets/customers/camlife.png": "a79dbe1682d675e857e525e260ac0afa",
"assets/assets/customers/asiacell.png": "2ff77faf0582a46dc3d09a95f52656f7",
"assets/assets/customers/fisheries_admin.png": "813ccf14be3466a5452bdb7ae4617c76",
"assets/assets/customers/infinity.png": "1ef4538d37bf280f0ec4793982eae29c",
"assets/assets/mission.png": "1e5f820a45e1cf2e56b5ebd35f476fce",
"assets/assets/vision.png": "b654103918f1dad752e44ed1cb6e63f3",
"assets/assets/consulting.png": "2f7a0ffe9aa819e0f63344c827466e7f",
"assets/assets/company-building.png": "36cc77d5e86ebe15b1322dd4eff818d7",
"assets/assets/vision.svg": "a9b8a89a1c29485606bba613d33af137",
"assets/assets/mission.svg": "64b400a47c0ead85218f863a392e45cd",
"assets/assets/social/telegram.png": "4145c426726e7e097fbc77d3ec3310ce",
"assets/assets/social/fb.png": "cb3a7557aa862bcf92ba49ac91cb1a1d",
"assets/assets/social/linkedin.png": "ffa47c44e380f8a9fcdeb62030f12a67",
"assets/assets/president.svg": "af60a0ee22c9ae5ba0d3461f0e6a3d67",
"assets/assets/logo.png": "97fce9d66f300dc19f7f9f732ad8d5bf",
"assets/assets/distribution.svg": "1a03cdc46e802d31c6367a5219c206aa",
"assets/assets/experts/socheata.png": "341c8fea047c2248abea130c4e23811d",
"assets/assets/experts/rotha.svg": "f12c35a049606d626e0333b9b1293b84",
"assets/assets/experts/chealing.png": "dbb4368b9287c25161e0a39307d0eb24",
"assets/assets/experts/phanno.svg": "504b8af712147c6646359baa7ec3e228",
"assets/assets/experts/phanno.png": "ab287fb64d176fd55add22f90483c3cf",
"assets/assets/experts/chealing.svg": "76fd61d48e5b491b84bd99d5d7da68ce",
"assets/assets/experts/rotha.png": "6a79721f8f360181bc317ab77a8c097d",
"assets/assets/experts/rotha-test.svg": "977e282854426fe7d3fb1cd6ec0b3a69",
"assets/assets/experts/socheata.svg": "e145306fef3b6cd14c6ffa6cd3421ba8",
"assets/assets/experts/pisey.svg": "4c242173ce8490936517e3e69dd37758",
"assets/assets/experts/phallen.png": "0bcf83133174b318a49fb84b2d63221d",
"assets/assets/experts/president.svg": "6fdc69e99f2d4cdc5c84785efafd6eab",
"assets/assets/experts/pideth.svg": "7f2b564d1ff06bf4c721d6f4dd2ccc7c",
"assets/assets/experts/kosal.png": "5cb282e12ae6675d528257a10040341a",
"assets/assets/experts/chanthorn.svg": "8b7056c9556994567274aa81b73371f2",
"assets/assets/experts/chanthorn.png": "c2c97bcf69c1add6ab55b5bcc97a6d7f",
"assets/assets/experts/kosal.svg": "22940b9920caa9ad478d72ec87650bd0",
"assets/assets/experts/pideth.png": "72d5b5147a177732596bea8d17b32fa5",
"assets/assets/experts/president.png": "55cfca00531817c04fb9c2a8f839391f",
"assets/assets/experts/pisey.png": "86fa67dcce6a2de536285476d2268aba",
"assets/assets/experts/phallen.svg": "5edf4d4499bacf2bbfebb7860edcaff0",
"assets/assets/distribution.png": "e166b1c5f2c4fe1447789491724ddf94",
"assets/assets/fonts/NexaRegularItalic.otf": "fc8669b4330fd66bf709dc0d48e83fe4",
"assets/assets/fonts/Nexa%2520Light.otf": "12108809f49c49bcdc126dcecc938761",
"assets/assets/fonts/Nexa%2520Bold.otf": "c9f309b3d47969ecac64a77a6c672594",
"assets/assets/services/taxi.png": "fe8a82753d7ff30eb407fe0acd3a3531",
"assets/assets/services/it_consultation.png": "f7b7c4d078a81c6c90e4a97ec3a516fc",
"assets/assets/services/vms.png": "024f996a6d6df7593cb8fa31185cdbe9",
"assets/assets/services/in_house.png": "798f2b678af9a21885593510b6a66085",
"assets/assets/services/insurance.png": "0a22284c237f20b1edd8b93938b88d13",
"assets/assets/services/web_mobile.png": "f8024eaf9d54dffd389ada5acb86b958",
"assets/assets/services/sms_gateway.png": "2836152075ea01c1f04f4a833d690881",
"assets/assets/services/delivery_platform.png": "042fe4ed01032fa1541be0f248254787",
"assets/assets/services/payment_gateway.png": "49b9dd4ed134febffdd16615f5ea03f3",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
