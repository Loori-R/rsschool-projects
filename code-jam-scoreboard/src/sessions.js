const Rsschool = [`{
    "_id": {
        "$oid": "5bfc37a4e42e8f000a00003e"
    },
    "game": "CSSQuickDraw",
    "game_master_id": "a58dc9923e939274",
    "puzzles": [{
        "game": "CSSQuickDraw",
        "name": "Matching Game",
        "input": "003cheader data-qdid=0003eheader003c/header003e003cmain data-qdid=1003e003cdiv class=match data-qdid=2003ecellar door003c/div003e003c/main003e003cfooter data-qdid=3003efooter003c/footer003e",
        "expected": "[2]",
        "hidden": [],
        "options": {
            "timeLimit": {
                "$numberLong": "150"
            },
            "bannedCharacters": []
        },
        "sandboxSettings": {
            "timeout": {
                "$numberLong": "150"
            },
            "reloadWorkers": null,
            "refillWorkers": null,
            "inputCopies": null
        }
    }, {
        "game": "CSSQuickDraw",
        "name": "Matching Game II",
        "input": "003cheader data-qdid=0003eheader003c/header003e003cmain data-qdid=1003e003carticle data-qdid=2003ecellar door003c/article003e003c/main003e003cfooter data-qdid=3003efooter003c/footer003e",
        "expected": "[2]",
        "hidden": [],
        "options": {
            "timeLimit": {
                "$numberLong": "150"
            },
            "bannedCharacters": []
        },
        "sandboxSettings": {
            "timeout": {
                "$numberLong": "150"
            },
            "reloadWorkers": null,
            "refillWorkers": null,
            "inputCopies": null
        }
    }, {
        "game": "CSSQuickDraw",
        "name": "Classy",
        "input": "003cdiv class=glass door data-qdid=0003e003c/div003e003cdiv class=cellar data-qdid=1003e003cdiv class=door data-qdid=2003e003cdiv class=behind cellar door data-qdid=3003e003c/div003e003cspan class=jar of pickles data-qdid=4003e003c/span003e003c/div003e003c/div003e003cdiv class=door cellar data-qdid=5003e003c/div003e003cdiv class=little cellar data-qdid=6003e003c/div003e",
        "expected": "[3, 5]",
        "hidden": [],
        "options": {
            "timeLimit": {
                "$numberLong": "150"
            },
            "bannedCharacters": []
        },
        "sandboxSettings": {
            "timeout": {
                "$numberLong": "150"
            },
            "reloadWorkers": null,
            "refillWorkers": null,
            "inputCopies": null
        }
    }, {
        "game": "CSSQuickDraw",
        "name": "Articles Everywhere",
        "input": "003carticle data-qdid=0003e003cdiv data-qdid=1003e003c/div003e003cspan data-qdid=2003e003c/span003e003cp data-qdid=3003e003c/p003e003ca data-qdid=4003e003c/a003e003c/article003e",
        "expected": "[1, 2, 3, 4]",
        "hidden": [],
        "options": {
            "timeLimit": {
                "$numberLong": "150"
            },
            "bannedCharacters": ["p", "~", "+"]
        },
        "sandboxSettings": {
            "timeout": {
                "$numberLong": "150"
            },
            "reloadWorkers": null,
            "refillWorkers": null,
            "inputCopies": null
        }
    }, {
        "game": "CSSQuickDraw",
        "name": "Anchor",
        "input": "003cdiv data-qdid=0003e003c/div003e003cdiv data-qdid=1003e003c/div003e003cdiv data-qdid=2003e003c/div003e003cdiv data-qdid=3003e003c/div003e003cdiv data-anchor data-qdid=4003e003c/div003e003cdiv data-qdid=5003e003c/div003e003cdiv data-qdid=6003e003c/div003e003cdiv data-qdid=7003e003c/div003e003cdiv data-qdid=8003e003c/div003e",
        "expected": "[5]",
        "hidden": [],
        "options": {
            "timeLimit": {
                "$numberLong": "150"
            },
            "bannedCharacters": [":"]
        },
        "sandboxSettings": {
            "timeout": {
                "$numberLong": "150"
            },
            "reloadWorkers": null,
            "refillWorkers": null,
            "inputCopies": null
        }
    }, {
        "game": "CSSQuickDraw",
        "name": "Signing Up",
        "input": "003cmain data-qdid=0003e003cinput data-qdid=1 type=text /003e003cinput data-qdid=2 type=number /003e003cinput data-qdid=3 type=checkbox checked /003e003cinput data-qdid=4 type=checkbox /003e003cinput data-qdid=5 type=text /003e003c/main003e",
        "expected": "[3]",
        "hidden": [],
        "options": {
            "timeLimit": {
                "$numberLong": "150"
            },
            "bannedCharacters": ["n", "["]
        },
        "sandboxSettings": {
            "timeout": {
                "$numberLong": "150"
            },
            "reloadWorkers": null,
            "refillWorkers": null,
            "inputCopies": null
        }
    }, {
        "game": "CSSQuickDraw",
        "name": "Linear",
        "input": "003cul data-qdid=0003e003cli data-qdid=1003e003c/li003e003cli data-qdid=2003e003c/li003e003cli data-qdid=3003e003c/li003e003cli data-qdid=4003e003c/li003e003cli data-qdid=5003e003c/li003e003cli data-qdid=6003e003c/li003e003cli data-qdid=7003e003c/li003e003cli data-qdid=8003e003c/li003e003c/ul003e",
        "expected": "[2, 4]",
        "hidden": [],
        "options": {
            "timeLimit": {
                "$numberLong": "150"
            },
            "bannedCharacters": []
        },
        "sandboxSettings": {
            "timeout": {
                "$numberLong": "150"
            },
            "reloadWorkers": null,
            "refillWorkers": null,
            "inputCopies": null
        }
    }, {
        "game": "CSSQuickDraw",
        "name": "Envious Heirs",
        "input": "003cdiv data-qdid=0003e003cdiv class=firstborn data-qdid=1003e003c/div003e003cdiv id=second-son data-qdid=2003e003c/div003e003cspan data-qdid=3003e003c/span003e003cdiv data-qdid=4003e003c/div003e003cspan data-qdid=5003e003c/span003e003c/div003e",
        "expected": "[2, 3, 4, 5]",
        "hidden": [],
        "options": {
            "timeLimit": {
                "$numberLong": "150"
            },
            "bannedCharacters": [","]
        },
        "sandboxSettings": {
            "timeout": {
                "$numberLong": "150"
            },
            "reloadWorkers": null,
            "refillWorkers": null,
            "inputCopies": null
        }
    }, {
        "game": "CSSQuickDraw",
        "name": "Mariana",
        "input": "003cdiv data-qdid=0003e003cdiv data-qdid=1003e003cdiv data-qdid=2003e003cdiv data-qdid=3003e003cdiv data-qdid=4003e003cdiv data-qdid=5003e003cdiv data-qdid=6003e003cdiv data-qdid=7003e003cdiv data-qdid=8003e003c/div003e003c/div003e003c/div003e003c/div003e003c/div003e003c/div003e003c/div003e003c/div003e003c/div003e",
        "expected": "[8]",
        "hidden": [],
        "options": {
            "timeLimit": {
                "$numberLong": "150"
            },
            "bannedCharacters": []
        },
        "sandboxSettings": {
            "timeout": {
                "$numberLong": "150"
            },
            "reloadWorkers": null,
            "refillWorkers": null,
            "inputCopies": null
        }
    }, {
        "game": "CSSQuickDraw",
        "name": "Tech Stack",
        "input": "003cdiv data-attr=c s s data-qdid=0003e003c/div003e003cspan data-attr=j s data-qdid=1003e003c/span003e003cdiv data-attr=x m l data-qdid=2003e003c/div003e003cdiv data-attr=soap data-qdid=3003e003c/div003e003cdiv data-attr=j s o n data-qdid=4003e003c/div003e",
        "expected": "[0, 1, 4]",
        "hidden": [],
        "options": {
            "timeLimit": {
                "$numberLong": "150"
            },
            "bannedCharacters": [":", "+", ","]
        },
        "sandboxSettings": {
            "timeout": {
                "$numberLong": "150"
            },
            "reloadWorkers": null,
            "refillWorkers": null,
            "inputCopies": null
        }
    }],
    "sandbox_status": "Requested",
    "participants": {
        "0dc9eee89960aa8c": {
            "uid": "0dc9eee89960aa8c"
        },
        "0dcc5ccce8ea8724": {
            "uid": "0dcc5ccce8ea8724"
        },
        "11013b79d46cadbc": {
            "uid": "11013b79d46cadbc"
        },
        "13516a858ed509bc": {
            "uid": "13516a858ed509bc"
        },
        "147cd0646fe74c51": {
            "uid": "147cd0646fe74c51"
        },
        "14d1d70f31909467": {
            "uid": "14d1d70f31909467"
        },
        "1662516da39bd248": {
            "uid": "1662516da39bd248"
        },
        "174fb3408368ee14": {
            "uid": "174fb3408368ee14"
        },
        "18a015071bed690d": {
            "uid": "18a015071bed690d"
        },
        "1b4f3cf40f6f6c4a": {
            "uid": "1b4f3cf40f6f6c4a"
        },
        "201af50fd3b736ba": {
            "uid": "201af50fd3b736ba"
        },
        "24b339e7f88f73de": {
            "uid": "24b339e7f88f73de"
        },
        "24b848f155c0b3b7": {
            "uid": "24b848f155c0b3b7"
        },
        "2f201db12c801e85": {
            "uid": "2f201db12c801e85"
        },
        "2f6a509eafbbb15c": {
            "uid": "2f6a509eafbbb15c"
        },
        "30959179ed650cd1": {
            "uid": "30959179ed650cd1"
        },
        "350ebb347c1ad556": {
            "uid": "350ebb347c1ad556"
        },
        "3720867adefd1d26": {
            "uid": "3720867adefd1d26"
        },
        "3c5258124b324a11": {
            "uid": "3c5258124b324a11"
        },
        "491d66dad9c08b8c": {
            "uid": "491d66dad9c08b8c"
        },
        "50a7d9c3900376d4": {
            "uid": "50a7d9c3900376d4"
        },
        "50f3b5f06c1d21a1": {
            "uid": "50f3b5f06c1d21a1"
        },
        "5154c91bcd705420": {
            "uid": "5154c91bcd705420"
        },
        "598dc546faccea96": {
            "uid": "598dc546faccea96"
        },
        "5fa0dc84f5366d5d": {
            "uid": "5fa0dc84f5366d5d"
        },
        "608a221e132cfb0e": {
            "uid": "608a221e132cfb0e"
        },
        "6120442cb00ddf3f": {
            "uid": "6120442cb00ddf3f"
        },
        "6be274af29d69012": {
            "uid": "6be274af29d69012"
        },
        "703e792787acb96a": {
            "uid": "703e792787acb96a"
        },
        "738824e90ee1a521": {
            "uid": "738824e90ee1a521"
        },
        "758f08ff64d4fbed": {
            "uid": "758f08ff64d4fbed"
        },
        "7f48769c943032b7": {
            "uid": "7f48769c943032b7"
        },
        "8190a67e4972f187": {
            "uid": "8190a67e4972f187"
        },
        "82e8b6c0d88e0003": {
            "uid": "82e8b6c0d88e0003"
        },
        "8875dc4e9876728e": {
            "uid": "8875dc4e9876728e"
        },
        "898447718f00f0c7": {
            "uid": "898447718f00f0c7"
        },
        "8aad0f70a1b1269b": {
            "uid": "8aad0f70a1b1269b"
        },
        "8c9feac04348414f": {
            "uid": "8c9feac04348414f"
        },
        "94ae2983d85b56f3": {
            "uid": "94ae2983d85b56f3"
        },
        "96a9d51e700ea6d9": {
            "uid": "96a9d51e700ea6d9"
        },
        "97dbe566f05bad1e": {
            "uid": "97dbe566f05bad1e"
        },
        "9e1ad98e7ed497c0": {
            "uid": "9e1ad98e7ed497c0"
        },
        "9eb7f3047b78db41": {
            "uid": "9eb7f3047b78db41"
        },
        "9f57ba8fbeaabc8f": {
            "uid": "9f57ba8fbeaabc8f"
        },
        "a58dc9923e939274": {
            "uid": "a58dc9923e939274"
        },
        "a59abf0ef6dd72ee": {
            "uid": "a59abf0ef6dd72ee"
        },
        "a5cff54715b5e728": {
            "uid": "a5cff54715b5e728"
        },
        "ac306151b36609fd": {
            "uid": "ac306151b36609fd"
        },
        "ad1db3469049502b": {
            "uid": "ad1db3469049502b"
        },
        "ade8a9fbb5003944": {
            "uid": "ade8a9fbb5003944"
        },
        "b2913665b1d38784": {
            "uid": "b2913665b1d38784"
        },
        "b46b33d779ec951f": {
            "uid": "b46b33d779ec951f"
        },
        "b51a79256e2462a5": {
            "uid": "b51a79256e2462a5"
        },
        "b7037f74a55b1ded": {
            "uid": "b7037f74a55b1ded"
        },
        "b9f4eab4145bb27a": {
            "uid": "b9f4eab4145bb27a"
        },
        "bbe008738217e35f": {
            "uid": "bbe008738217e35f"
        },
        "c6782ec9fbfacc49": {
            "uid": "c6782ec9fbfacc49"
        },
        "c825ef755969b747": {
            "uid": "c825ef755969b747"
        },
        "cb0b66dbc547fb22": {
            "uid": "cb0b66dbc547fb22"
        },
        "cb13a1cb1bf89459": {
            "uid": "cb13a1cb1bf89459"
        },
        "d417fd8dd5e48efe": {
            "uid": "d417fd8dd5e48efe"
        },
        "d4a5deb84ce836e9": {
            "uid": "d4a5deb84ce836e9"
        },
        "dd7da88658f252c6": {
            "uid": "dd7da88658f252c6"
        },
        "e0c2f4026aaf9e95": {
            "uid": "e0c2f4026aaf9e95"
        },
        "e4924b8e7499d2e8": {
            "uid": "e4924b8e7499d2e8"
        },
        "e8a0543d60a31174": {
            "uid": "e8a0543d60a31174"
        },
        "f3a692ff48114271": {
            "uid": "f3a692ff48114271"
        },
        "f47878383710d5dd": {
            "uid": "f47878383710d5dd"
        },
        "f7b65f853512e069": {
            "uid": "f7b65f853512e069"
        },
        "f95bda2df3fd514e": {
            "uid": "f95bda2df3fd514e"
        },
        "ff32798839089a73": {
            "uid": "ff32798839089a73"
        }
    },
    "rounds": [{
        "puzzleIndex": {
            "$numberLong": "0"
        },
        "startTime": {
            "$date": "2018-11-26T18:16:35.997Z"
        },
        "solutions": {
            "02ef04098b9feadf": {
                "code": ".match",
                "time": {
                    "$numberLong": "25"
                },
                "correct": "Correct"
            },
            "044b7810d5b21241": {
                "code": ".match",
                "time": {
                    "$numberLong": "13"
                },
                "correct": "Correct"
            },
            "0505908ca880da63": {
                "code": ".match",
                "time": {
                    "$numberLong": "15"
                },
                "correct": "Correct"
            },
            "0546833d81e75f8e": {
                "code": "div",
                "time": {
                    "$numberLong": "24"
                },
                "correct": "Correct"
            },
            "06d4b563eb1ae200": {
                "code": "section",
                "time": {
                    "$numberLong": "106"
                },
                "correct": "Incorrect"
            },
            "074732b4e4e7f8c2": {
                "code": ".match",
                "time": {
                    "$numberLong": "13"
                },
                "correct": "Correct"
            },
            "07a655995e3a34a5": {
                "code": "div",
                "time": {
                    "$numberLong": "8"
                },
                "correct": "Correct"
            },
            "0960cde31955389a": {
                "code": ".match",
                "time": {
                    "$numberLong": "14"
                },
                "correct": "Correct"
            },
            "096ccaaf699480f6": {
                "code": ".match",
                "time": {
                    "$numberLong": "15"
                },
                "correct": "Correct"
            },
            "0a69fc38555dc6b2": {
                "code": "div",
                "time": {
                    "$numberLong": "3"
                },
                "correct": "Correct"
            },
            "0a9dea941704145b": {
                "code": ".match",
                "time": {
                    "$numberLong": "23"
                },
                "correct": "Correct"
            },
            "0be05f1edf9ac0c9": {
                "code": "div",
                "time": {
                    "$numberLong": "5"
                },
                "correct": "Correct"
            },
            "0c5610ad65714d07": {
                "code": "div",
                "time": {
                    "$numberLong": "15"
                },
                "correct": "Correct"
            },
            "0cb7b730eb24cd97": {
                "code": ".match",
                "time": {
                    "$numberLong": "5"
                },
                "correct": "Correct"
            },
            "0dc9eee89960aa8c": {
                "code": "[class",
                "time": {
                    "$numberLong": "15"
                },
                "correct": "Correct"
            },
            "0dcc5ccce8ea8724": {
                "code": ".match",
                "time": {
                    "$numberLong": "19"
                },
                "correct": "Correct"
            },
            "0f62193273f6c54f": {
                "code": "div",
                "time": {
                    "$numberLong": "7"
                },
                "correct": "Correct"
            },
            "0f68663169b43508": {
                "code": ".match",
                "time": {
                    "$numberLong": "2"
                },
                "correct": "Correct"
            },
            "10878b8d10d2ae2b": {
                "code": ".match",
                "time": {
                    "$numberLong": "7"
                },
                "correct": "Correct"
            },
            "10f87b94846c7dd2": {
                "code": ".match",
                "time": {
                    "$numberLong": "16"
                },
                "correct": "Correct"
            },
            "11013b79d46cadbc": {
                "code": "div",
                "time": {
                    "$numberLong": "6"
                },
                "correct": "Correct"
            },
            "1291f8effc0fb1e1": {
                "code": ".match",
                "time": {
                    "$numberLong": "24"
                },
                "correct": "Correct"
            },
            "13516a858ed509bc": {
                "code": ".match",
                "time": {
                    "$numberLong": "6"
                },
                "correct": "Correct"
            },
            "13ebc713ecdb0c31": {
                "code": ".match",
                "time": {
                    "$numberLong": "8"
                },
                "correct": "Correct"
            },
            "147cd0646fe74c51": {
                "code": ".match",
                "time": {
                    "$numberLong": "38"
                },
                "correct": "Correct"
            },
            "14d1d70f31909467": {
                "code": ".match",
                "time": {
                    "$numberLong": "12"
                },
                "correct": "Correct"
            },
            "15085d8de21f8860": {
                "code": "div",
                "time": {
                    "$numberLong": "4"
                },
                "correct": "Correct"
            },
            "15d30689cee2cf3d": {
                "code": ".match",
                "time": {
                    "$numberLong": "15"
                },
                "correct": "Correct"
            },
            "1662516da39bd248": {
                "code": ".match",
                "time": {
                    "$numberLong": "17"
                },
                "correct": "Correct"
            },
            "167a5b071e75c309": {
                "code": ".match",
                "time": {
                    "$numberLong": "12"
                },
                "correct": "Correct"
            },
            "174fb3408368ee14": {
                "code": ".match",
                "time": {
                    "$numberLong": "27"
                },
                "correct": "Correct"
            },
            "18a015071bed690d": {
                "code": ".match",
                "time": {
                    "$numberLong": "15"
                },
                "correct": "Correct"
            },
            "1a001ccb65b08947": {
                "code": ".match",
                "time": {
                    "$numberLong": "7"
                },
                "correct": "Correct"
            },
            "1a495818e81cd4fa": {
                "code": ".match",
                "time": {
                    "$numberLong": "30"
                },
                "correct": "Correct"
            },
            "1b834e64b9e1baf7": {
                "code": ".match",
                "time": {
                    "$numberLong": "14"
                },
                "correct": "Correct"
            },
            "1c207b98b51ff73d": {
                "code": ".match",
                "time": {
                    "$numberLong": "11"
                },
                "correct": "Correct"
            },
            "1c82933fa21c91af": {
                "code": ".match",
                "time": {
                    "$numberLong": "11"
                },
                "correct": "Correct"
            },
            "1c93a7a4711bff70": {
                "code": "div",
                "time": {
                    "$numberLong": "26"
                },
                "correct": "Correct"
            },
            "1e349ef8c3bc9f7a": {
                "code": ".match",
                "time": {
                    "$numberLong": "38"
                },
                "correct": "Correct"
            },
            "1ea00611e97c6ea6": {
                "code": ".match",
                "time": {
                    "$numberLong": "9"
                },
                "correct": "Correct"
            },
            "201af50fd3b736ba": {
                "code": "div",
                "time": {
                    "$numberLong": "3"
                },
                "correct": "Correct"
            },
            "214efb907df65375": {
                "code": "div",
                "time": {
                    "$numberLong": "4"
                },
                "correct": "Correct"
            },
            "21b91283c47ddf5e": {
                "code": ".match",
                "time": {
                    "$numberLong": "22"
                },
                "correct": "Correct"
            },
            "2272f07c112385b1": {
                "code": ".match",
                "time": {
                    "$numberLong": "25"
                },
                "correct": "Correct"
            },
            "24337d34f84c3b29": {
                "code": ".match",
                "time": {
                    "$numberLong": "15"
                },
                "correct": "Correct"
            },
            "249db831162d981a": {
                "code": "document.querySelector('.match'); ",
                "time": {
                    "$numberLong": "143"
                },
                "correct": "Incorrect"
            },
            "24b339e7f88f73de": {
                "code": ".match",
                "time": {
                    "$numberLong": "4"
                },
                "correct": "Correct"
            },
            "24b54a457abe06f4": {
                "code": ".match",
                "time": {
                    "$numberLong": "21"
                },
                "correct": "Correct"
            },
            "24b848f155c0b3b7": {
                "code": ".match",
                "time": {
                    "$numberLong": "6"
                },
                "correct": "Correct"
            },
            "24d4763d41328ec4": {
                "code": ".match",
                "time": {
                    "$numberLong": "10"
                },
                "correct": "Correct"
            },
            "250e04bcb5fbe4f7": {
                "code": ".match",
                "time": {
                    "$numberLong": "18"
                },
                "correct": "Correct"
            },
            "25f9ecca44c1cd46": {
                "code": "[class]",
                "time": {
                    "$numberLong": "15"
                },
                "correct": "Correct"
            },
            "2651ba874a6c8d94": {
                "code": "main .match",
                "time": {
                    "$numberLong": "23"
                },
                "correct": "Correct"
            },
            "27a619553e988074": {
                "code": "div",
                "time": {
                    "$numberLong": "10"
                },
                "correct": "Correct"
            },
            "27bef6362f6c3153": {
                "code": ".match",
                "time": {
                    "$numberLong": "6"
                },
                "correct": "Correct"
            },
            "284a6bf537e9bc4d": {
                "code": ".match",
                "time": {
                    "$numberLong": "13"
                },
                "correct": "Correct"
            },
            "2aced08264036ea8": {
                "code": "div",
                "time": {
                    "$numberLong": "42"
                },
                "correct": "Correct"
            },
            "2c5dea2ca5f0d036": {
                "code": "div",
                "time": {
                    "$numberLong": "16"
                },
                "correct": "Correct"
            },
            "2cb5d5d4c8d4b19a": {
                "code": ".match",
                "time": {
                    "$numberLong": "28"
                },
                "correct": "Correct"
            },
            "2cecb227110f5c46": {
                "code": "div",
                "time": {
                    "$numberLong": "6"
                },
                "correct": "Correct"
            },
            "2d960df34e645807": {
                "code": ".match",
                "time": {
                    "$numberLong": "15"
                },
                "correct": "Correct"
            },
            "2f201db12c801e85": {
                "code": "div",
                "time": {
                    "$numberLong": "20"
                },
                "correct": "Correct"
            },
            "2f6a509eafbbb15c": {
                "code": ".match",
                "time": {
                    "$numberLong": "6"
                },
                "correct": "Correct"
            },
            "2fe6410a79f03048": {
                "code": ".match",
                "time": {
                    "$numberLong": "7"
                },
                "correct": "Correct"
            },
            "30959179ed650cd1": {
                "code": ".match",
                "time": {
                    "$numberLong": "5"
                },
                "correct": "Correct"
            },
            "34a24dd3d6aa750b": {
                "code": "div",
                "time": {
                    "$numberLong": "4"
                },
                "correct": "Correct"
            },
            "34a4f2506ce3d182": {
                "code": ".match",
                "time": {
                    "$numberLong": "27"
                },
                "correct": "Correct"
            },
            "350ebb347c1ad556": {
                "code": ".match",
                "time": {
                    "$numberLong": "19"
                },
                "correct": "Correct"
            },
            "3549c28b38369744": {
                "code": ".match",
                "time": {
                    "$numberLong": "46"
                },
                "correct": "Correct"
            },
            "36cfe6300f509bd5": {
                "code": "div",
                "time": {
                    "$numberLong": "14"
                },
                "correct": "Correct"
            },
            "36e8f42039c184db": {
                "code": "div",
                "time": {
                    "$numberLong": "2"
                },
                "correct": "Correct"
            },
            "3720867adefd1d26": {
                "code": ".match",
                "time": {
                    "$numberLong": "7"
                },
                "correct": "Correct"
            },
            "37b36e389ab7fe80": {
                "code": ".match",
                "time": {
                    "$numberLong": "7"
                },
                "correct": "Correct"
            },
            "39a2e48e45b49980": {
                "code": ".match",
                "time": {
                    "$numberLong": "14"
                },
                "correct": "Correct"
            },
            "39fe9e521f177219": {
                "code": ".match",
                "time": {
                    "$numberLong": "9"
                },
                "correct": "Correct"
            },
            "3a562770cb99a7f4": {
                "code": ".match",
                "time": {
                    "$numberLong": "8"
                },
                "correct": "Correct"
            },
            "3ab170848134a2ff": {
                "code": ".match",
                "time": {
                    "$numberLong": "5"
                },
                "correct": "Correct"
            },
            "3c5258124b324a11": {
                "code": ".match",
                "time": {
                    "$numberLong": "5"
                },
                "correct": "Correct"
            },
            "3cb038073228740f": {
                "code": "div",
                "time": {
                    "$numberLong": "7"
                },
                "correct": "Correct"
            },
            "3d63b802d486029c": {
                "code": ".match",
                "time": {
                    "$numberLong": "8"
                },
                "correct": "Correct"
            },
            "3dc599a7d0323291": {
                "code": ".match",
                "time": {
                    "$numberLong": "7"
                },
                "correct": "Correct"
            },
            "3efffe88342c3ee5": {
                "code": ".match",
                "time": {
                    "$numberLong": "8"
                },
                "correct": "Correct"
            },
            "4139b7d383e0b65c": {
                "code": "div",
                "time": {
                    "$numberLong": "2"
                },
                "correct": "Correct"
            },
            "418ca735584f1e3a": {
                "code": ".match",
                "time": {
                    "$numberLong": "7"
                },
                "correct": "Correct"
            },
            "42d7cc27726e8052": {
                "code": "div",
                "time": {
                    "$numberLong": "5"
                },
                "correct": "Correct"
            },
            "454f621946346eed": {
                "code": "div",
                "time": {
                    "$numberLong": "9"
                },
                "correct": "Correct"
            },
            "4639b56895b8be0c": {
                "code": "div",
                "time": {
                    "$numberLong": "13"
                },
                "correct": "Correct"
            },
            "491d66dad9c08b8c": {
                "code": "div",
                "time": {
                    "$numberLong": "15"
                },
                "correct": "Correct"
            },
            "4c239ebf3cc37c4e": {
                "code": ".match",
                "time": {
                    "$numberLong": "13"
                },
                "correct": "Correct"
            },
            "4d9c4a8566aaca2e": {
                "code": ".match",
                "time": {
                    "$numberLong": "13"
                },
                "correct": "Correct"
            },
            "4f2d802143f78fdc": {
                "code": "div",
                "time": {
                    "$numberLong": "4"
                },
                "correct": "Correct"
            },
            "50a7d9c3900376d4": {
                "code": ".match",
                "time": {
                    "$numberLong": "7"
                },
                "correct": "Correct"
            },
            "50e718838ec3ed69": {
                "code": "div",
                "time": {
                    "$numberLong": "8"
                },
                "correct": "Correct"
            },
            "50f3b5f06c1d21a1": {
                "code": ".match",
                "time": {
                    "$numberLong": "12"
                },
                "correct": "Correct"
            },
            "5154c91bcd705420": {
                "code": ".match",
                "time": {
                    "$numberLong": "17"
                },
                "correct": "Correct"
            },
            "52131ae4ea1f02db": {
                "code": ".match",
                "time": {
                    "$numberLong": "14"
                },
                "correct": "Correct"
            },
            "54757d6425a18652": {
                "code": "div",
                "time": {
                    "$numberLong": "4"
                },
                "correct": "Correct"
            },
            "57a19a29c66f273a": {
                "code": ".match",
                "time": {
                    "$numberLong": "21"
                },
                "correct": "Correct"
            },
            "597eaca2f80bb597": {
                "code": ".match",
                "time": {
                    "$numberLong": "4"
                },
                "correct": "Correct"
            },
            "598dc546faccea96": {
                "code": ".match",
                "time": {
                    "$numberLong": "27"
                },
                "correct": "Correct"
            },
            "5fa0dc84f5366d5d": {
                "code": ".match",
                "time": {
                    "$numberLong": "9"
                },
                "correct": "Correct"
            },
            "607b0abda0c50b0c": {
                "code": ".match",
                "time": {
                    "$numberLong": "84"
                },
                "correct": "Correct"
            },
            "608a221e132cfb0e": {
                "code": "document.querySelector(.match);",
                "time": {
                    "$numberLong": "146"
                },
                "correct": "Incorrect"
            },
            "610358eb6ad04b78": {
                "code": ".match",
                "time": {
                    "$numberLong": "18"
                },
                "correct": "Correct"
            },
            "63da271cdd05f72a": {
                "code": "div",
                "time": {
                    "$numberLong": "18"
                },
                "correct": "Correct"
            },
            "645a56e6b8555c48": {
                "code": ".match",
                "time": {
                    "$numberLong": "14"
                },
                "correct": "Correct"
            },
            "6877303d0bc23e9f": {
                "code": "#match.",
                "time": {
                    "$numberLong": "47"
                },
                "correct": "Incorrect"
            },
            "690d4a3fa53cafe6": {
                "code": ".match",
                "time": {
                    "$numberLong": "26"
                },
                "correct": "Correct"
            },
            "69a28f1b78baef56": {
                "code": "div",
                "time": {
                    "$numberLong": "8"
                },
                "correct": "Correct"
            },
            "6a6720574c217df1": {
                "code": ".match",
                "time": {
                    "$numberLong": "11"
                },
                "correct": "Correct"
            },
            "6ac831e069244801": {
                "code": ".match",
                "time": {
                    "$numberLong": "10"
                },
                "correct": "Correct"
            },
            "6be274af29d69012": {
                "code": ".match",
                "time": {
                    "$numberLong": "11"
                },
                "correct": "Correct"
            },
            "6d772a3e4250147a": {
                "code": ".match",
                "time": {
                    "$numberLong": "13"
                },
                "correct": "Correct"
            },
            "703e792787acb96a": {
                "code": ".match",
                "time": {
                    "$numberLong": "25"
                },
                "correct": "Correct"
            },
            "70c2126a27a7ff92": {
                "code": ".match",
                "time": {
                    "$numberLong": "8"
                },
                "correct": "Correct"
            },
            "738824e90ee1a521": {
                "code": ".match",
                "time": {
                    "$numberLong": "14"
                },
                "correct": "Correct"
            },
            "758f08ff64d4fbed": {
                "code": ".match",
                "time": {
                    "$numberLong": "28"
                },
                "correct": "Correct"
            },
            "77bfda6e1e04388a": {
                "code": "div",
                "time": {
                    "$numberLong": "2"
                },
                "correct": "Correct"
            },
            "784e2a35a5f02a51": {
                "code": "div",
                "time": {
                    "$numberLong": "11"
                },
                "correct": "Correct"
            },
            "7876d097648ce241": {
                "code": "",
                "time": {
                    "$numberLong": "138"
                },
                "correct": "Incorrect"
            },
            "7913e18db9805385": {
                "code": ".match",
                "time": {
                    "$numberLong": "9"
                },
                "correct": "Correct"
            },
            "79991eac2ed55971": {
                "code": "div",
                "time": {
                    "$numberLong": "23"
                },
                "correct": "Correct"
            },
            "79d3d5a874c0fedb": {
                "code": ".match",
                "time": {
                    "$numberLong": "88"
                },
                "correct": "Correct"
            },
            "7cd8dd365d287663": {
                "code": ".match",
                "time": {
                    "$numberLong": "28"
                },
                "correct": "Correct"
            },
            "7d9ab4e430491d3c": {
                "code": ".match",
                "time": {
                    "$numberLong": "5"
                },
                "correct": "Correct"
            },
            "7ef1e4b829e0b3d6": {
                "code": "main 003e div",
                "time": {
                    "$numberLong": "17"
                },
                "correct": "Correct"
            },
            "7f48769c943032b7": {
                "code": "div",
                "time": {
                    "$numberLong": "14"
                },
                "correct": "Correct"
            },
            "8150b6bbc7717883": {
                "code": ".match",
                "time": {
                    "$numberLong": "4"
                },
                "correct": "Correct"
            },
            "8190a67e4972f187": {
                "code": "div",
                "time": {
                    "$numberLong": "11"
                },
                "correct": "Correct"
            },
            "82e8b6c0d88e0003": {
                "code": ".match",
                "time": {
                    "$numberLong": "11"
                },
                "correct": "Correct"
            },
            "8373c834e2ac08bd": {
                "code": ".match",
                "time": {
                    "$numberLong": "18"
                },
                "correct": "Correct"
            },
            "85faf02e7002468e": {
                "code": ".match",
                "time": {
                    "$numberLong": "7"
                },
                "correct": "Correct"
            },
            "860ce7d23f02e7d3": {
                "code": ".match",
                "time": {
                    "$numberLong": "106"
                },
                "correct": "Correct"
            },
            "867cfd1b76269046": {
                "code": "main div",
                "time": {
                    "$numberLong": "8"
                },
                "correct": "Correct"
            },
            "8682698b0efcbb49": {
                "code": ".match",
                "time": {
                    "$numberLong": "7"
                },
                "correct": "Correct"
            },
            "870545b496fb9231": {
                "code": ".match",
                "time": {
                    "$numberLong": "13"
                },
                "correct": "Correct"
            },
            "8875dc4e9876728e": {
                "code": ".match",
                "time": {
                    "$numberLong": "7"
                },
                "correct": "Correct"
            },
            "898447718f00f0c7": {
                "code": ".match",
                "time": {
                    "$numberLong": "10"
                },
                "correct": "Correct"
            },
            "89f7ff1ba54776b9": {
                "code": ".match",
                "time": {
                    "$numberLong": "14"
                },
                "correct": "Correct"
            },
            "89fb2b288bdbd651": {
                "code": ".match",
                "time": {
                    "$numberLong": "61"
                },
                "correct": "Correct"
            },
            "8b3e94c6bb875abd": {
                "code": ".match",
                "time": {
                    "$numberLong": "28"
                },
                "correct": "Correct"
            },
            "8c9feac04348414f": {
                "code": "div",
                "time": {
                    "$numberLong": "16"
                },
                "correct": "Correct"
            },
            "8ce246e288c504b7": {
                "code": ".match",
                "time": {
                    "$numberLong": "9"
                },
                "correct": "Correct"
            },
            "8d0b871a3aac7646": {
                "code": ".match",
                "time": {
                    "$numberLong": "16"
                },
                "correct": "Correct"
            },
            "8efb6e527bd50aae": {
                "code": "div",
                "time": {
                    "$numberLong": "8"
                },
                "correct": "Correct"
            },
            "92352b0b01aac98b": {
                "code": ".match",
                "time": {
                    "$numberLong": "15"
                },
                "correct": "Correct"
            },
            "93e87af5faea4465": {
                "code": ".match",
                "time": {
                    "$numberLong": "13"
                },
                "correct": "Correct"
            },
            "94ae2983d85b56f3": {
                "code": "div",
                "time": {
                    "$numberLong": "12"
                },
                "correct": "Correct"
            },
            "94bac471a8a06f41": {
                "code": ".match",
                "time": {
                    "$numberLong": "17"
                },
                "correct": "Correct"
            },
            "94e6f0f36d96cca7": {
                "code": ".match",
                "time": {
                    "$numberLong": "17"
                },
                "correct": "Correct"
            },
            "95da8c87fe0966a9": {
                "code": "div",
                "time": {
                    "$numberLong": "6"
                },
                "correct": "Correct"
            },
            "9615130025e3bf23": {
                "code": "div",
                "time": {
                    "$numberLong": "8"
                },
                "correct": "Correct"
            },
            "96a9d51e700ea6d9": {
                "code": ".match",
                "time": {
                    "$numberLong": "18"
                },
                "correct": "Correct"
            },
            "96c9015ae13475fb": {
                "code": "div",
                "time": {
                    "$numberLong": "3"
                },
                "correct": "Correct"
            },
            "97dbe566f05bad1e": {
                "code": ".match",
                "time": {
                    "$numberLong": "4"
                },
                "correct": "Correct"
            },
            "9a1d3ecd70ce4b81": {
                "code": ".match",
                "time": {
                    "$numberLong": "4"
                },
                "correct": "Correct"
            },
            "9b7a7e62033b42fd": {
                "code": ".match",
                "time": {
                    "$numberLong": "108"
                },
                "correct": "Correct"
            },
            "9ba3cd7d2209cdb1": {
                "code": "div",
                "time": {
                    "$numberLong": "7"
                },
                "correct": "Correct"
            },
            "9decf80a3668a04c": {
                "code": ".match",
                "time": {
                    "$numberLong": "4"
                },
                "correct": "Correct"
            },
            "9e1ad98e7ed497c0": {
                "code": ".match",
                "time": {
                    "$numberLong": "37"
                },
                "correct": "Correct"
            },
            "9e8ceb488c61bfc6": {
                "code": ".match",
                "time": {
                    "$numberLong": "7"
                },
                "correct": "Correct"
            },
            "9eb7f3047b78db41": {
                "code": ".match",
                "time": {
                    "$numberLong": "15"
                },
                "correct": "Correct"
            },
            "9f3c76f5aebfad0a": {
                "code": ".match",
                "time": {
                    "$numberLong": "11"
                },
                "correct": "Correct"
            },
            "9f57ba8fbeaabc8f": {
                "code": ".match",
                "time": {
                    "$numberLong": "10"
                },
                "correct": "Correct"
            },
            "9f79120ff09e7b32": {
                "code": "div",
                "time": {
                    "$numberLong": "19"
                },
                "correct": "Correct"
            },
            "9f98758762638c79": {
                "code": ".match",
                "time": {
                    "$numberLong": "17"
                },
                "correct": "Correct"
            },
            "9fc6640ffb5bcf88": {
                "code": ".match",
                "time": {
                    "$numberLong": "9"
                },
                "correct": "Correct"
            },
            "a59abf0ef6dd72ee": {
                "code": ".match",
                "time": {
                    "$numberLong": "16"
                },
                "correct": "Correct"
            },
            "a5cff54715b5e728": {
                "code": "div",
                "time": {
                    "$numberLong": "5"
                },
                "correct": "Correct"
            },
            "a68d50ef4eaf5330": {
                "code": ".match",
                "time": {
                    "$numberLong": "3"
                },
                "correct": "Correct"
            },
            "a7faf246f1fec897": {
                "code": ".match",
                "time": {
                    "$numberLong": "5"
                },
                "correct": "Correct"
            },
            "a82a83d5b2316bbb": {
                "code": "div",
                "time": {
                    "$numberLong": "7"
                },
                "correct": "Correct"
            },
            "a87fa4ebabc2a0ce": {
                "code": "div",
                "time": {
                    "$numberLong": "4"
                },
                "correct": "Correct"
            },
            "ac306151b36609fd": {
                "code": "main div",
                "time": {
                    "$numberLong": "8"
                },
                "correct": "Correct"
            },
            "ad1db3469049502b": {
                "code": "div",
                "time": {
                    "$numberLong": "22"
                },
                "correct": "Correct"
            },
            "add0cf5b0e6f0061": {
                "code": ".match",
                "time": {
                    "$numberLong": "11"
                },
                "correct": "Correct"
            },
            "ade8a9fbb5003944": {
                "code": "003cdiv class match003e#0003c/div003e",
                "time": {
                    "$numberLong": "72"
                },
                "correct": "Incorrect"
            },
            "ae9e54473d676c54": {
                "code": ".match",
                "time": {
                    "$numberLong": "17"
                },
                "correct": "Correct"
            },
            "b0963184aa7f246b": {
                "code": ".match",
                "time": {
                    "$numberLong": "65"
                },
                "correct": "Correct"
            },
            "b1926b5f5e8b806b": {
                "code": ".match",
                "time": {
                    "$numberLong": "11"
                },
                "correct": "Correct"
            },
            "b1cbf3ca65c56e0d": {
                "code": ".match",
                "time": {
                    "$numberLong": "11"
                },
                "correct": "Correct"
            },
            "b278646f280691cb": {
                "code": "div",
                "time": {
                    "$numberLong": "10"
                },
                "correct": "Correct"
            },
            "b2913665b1d38784": {
                "code": ".match",
                "time": {
                    "$numberLong": "6"
                },
                "correct": "Correct"
            },
            "b46b33d779ec951f": {
                "code": "div",
                "time": {
                    "$numberLong": "4"
                },
                "correct": "Correct"
            },
            "b4e84dc5f950be34": {
                "code": "div",
                "time": {
                    "$numberLong": "7"
                },
                "correct": "Correct"
            },
            "b4f4b5c6dfcb6d07": {
                "code": ".match",
                "time": {
                    "$numberLong": "11"
                },
                "correct": "Correct"
            },
            "b51a79256e2462a5": {
                "code": "div",
                "time": {
                    "$numberLong": "23"
                },
                "correct": "Correct"
            },
            "b7037f74a55b1ded": {
                "code": ".match",
                "time": {
                    "$numberLong": "13"
                },
                "correct": "Correct"
            },
            "b70e0f3eadc8fa6a": {
                "code": ".match",
                "time": {
                    "$numberLong": "29"
                },
                "correct": "Correct"
            },
            "b87bfaa63e377a71": {
                "code": ".match",
                "time": {
                    "$numberLong": "13"
                },
                "correct": "Correct"
            },
            "b913aff5711ffd5b": {
                "code": "div",
                "time": {
                    "$numberLong": "8"
                },
                "correct": "Correct"
            },
            "b928c37c17806191": {
                "code": ".match",
                "time": {
                    "$numberLong": "9"
                },
                "correct": "Correct"
            },
            "b9d1dfe7e37afeb2": {
                "code": ".match",
                "time": {
                    "$numberLong": "16"
                },
                "correct": "Correct"
            },
            "b9f4eab4145bb27a": {
                "code": ".match",
                "time": {
                    "$numberLong": "3"
                },
                "correct": "Correct"
            },
            "bbe008738217e35f": {
                "code": ".match",
                "time": {
                    "$numberLong": "10"
                },
                "correct": "Correct"
            },
            "c1219d67fe1e51c2": {
                "code": "main 003e div",
                "time": {
                    "$numberLong": "9"
                },
                "correct": "Correct"
            },
            "c13f401d134bbdb7": {
                "code": ".match",
                "time": {
                    "$numberLong": "11"
                },
                "correct": "Correct"
            },
            "c18131119872b238": {
                "code": "div",
                "time": {
                    "$numberLong": "19"
                },
                "correct": "Correct"
            },
            "c3713ba000985baf": {
                "code": "div",
                "time": {
                    "$numberLong": "4"
                },
                "correct": "Correct"
            },
            "c486a74f6d914600": {
                "code": "div",
                "time": {
                    "$numberLong": "13"
                },
                "correct": "Correct"
            },
            "c4b129ee6608ab4e": {
                "code": ".match",
                "time": {
                    "$numberLong": "18"
                },
                "correct": "Correct"
            },
            "c61f85976fa0f880": {
                "code": "div",
                "time": {
                    "$numberLong": "9"
                },
                "correct": "Correct"
            },
            "c62f6a6327b38df0": {
                "code": "main div",
                "time": {
                    "$numberLong": "6"
                },
                "correct": "Correct"
            },
            "c6782ec9fbfacc49": {
                "code": ".match",
                "time": {
                    "$numberLong": "27"
                },
                "correct": "Correct"
            },
            "c81886dde372d437": {
                "code": "div",
                "time": {
                    "$numberLong": "18"
                },
                "correct": "Correct"
            },
            "c825ef755969b747": {
                "code": "div",
                "time": {
                    "$numberLong": "4"
                },
                "correct": "Correct"
            },
            "c95463f778ff93ca": {
                "code": ".match",
                "time": {
                    "$numberLong": "12"
                },
                "correct": "Correct"
            },
            "ca348e67a411e031": {
                "code": ".match",
                "time": {
                    "$numberLong": "15"
                },
                "correct": "Correct"
            },
            "ca60244540ed755d": {
                "code": ".match",
                "time": {
                    "$numberLong": "30"
                },
                "correct": "Correct"
            },
            "cab8ee9fdec69ee8": {
                "code": "div",
                "time": {
                    "$numberLong": "8"
                },
                "correct": "Correct"
            },
            "cb0b66dbc547fb22": {
                "code": "div",
                "time": {
                    "$numberLong": "15"
                },
                "correct": "Correct"
            },
            "cb13a1cb1bf89459": {
                "code": ".match",
                "time": {
                    "$numberLong": "5"
                },
                "correct": "Correct"
            },
            "cf8643fb83e99e86": {
                "code": ".match",
                "time": {
                    "$numberLong": "7"
                },
                "correct": "Correct"
            },
            "cfa10e7229340f70": {
                "code": ".match",
                "time": {
                    "$numberLong": "65"
                },
                "correct": "Correct"
            },
            "d0b031eec85e6911": {
                "code": ".match",
                "time": {
                    "$numberLong": "10"
                },
                "correct": "Correct"
            },
            "d1346365de590ccf": {
                "code": ".match",
                "time": {
                    "$numberLong": "9"
                },
                "correct": "Correct"
            },
            "d417fd8dd5e48efe": {
                "code": ".match",
                "time": {
                    "$numberLong": "14"
                },
                "correct": "Correct"
            },
            "d4a5deb84ce836e9": {
                "code": ".match",
                "time": {
                    "$numberLong": "82"
                },
                "correct": "Correct"
            },
            "d52887dab0fb075f": {
                "code": ".match",
                "time": {
                    "$numberLong": "7"
                },
                "correct": "Correct"
            },
            "d57163ee2e28e4b2": {
                "code": "div",
                "time": {
                    "$numberLong": "4"
                },
                "correct": "Correct"
            },
            "d66e5b11f0731612": {
                "code": ".match",
                "time": {
                    "$numberLong": "14"
                },
                "correct": "Correct"
            },
            "d6f6f6c7a9301bbe": {
                "code": ".match",
                "time": {
                    "$numberLong": "34"
                },
                "correct": "Correct"
            },
            "d8c54e85ccd5b21c": {
                "code": "div",
                "time": {
                    "$numberLong": "6"
                },
                "correct": "Correct"
            },
            "d9c232089e7ae571": {
                "code": ".match",
                "time": {
                    "$numberLong": "34"
                },
                "correct": "Correct"
            },
            "d9f697ce2a414d53": {
                "code": ".match",
                "time": {
                    "$numberLong": "17"
                },
                "correct": "Correct"
            },
            "db9d65f484e4d137": {
                "code": "div",
                "time": {
                    "$numberLong": "11"
                },
                "correct": "Correct"
            },
            "dba3419fda42d93b": {
                "code": ".match",
                "time": {
                    "$numberLong": "38"
                },
                "correct": "Correct"
            },
            "dd7da88658f252c6": {
                "code": ".match",
                "time": {
                    "$numberLong": "22"
                },
                "correct": "Correct"
            },
            "dda5b4fc568bd7e7": {
                "code": ".match",
                "time": {
                    "$numberLong": "7"
                },
                "correct": "Correct"
            },
            "de33e71b1fe6587c": {
                "code": ".match",
                "time": {
                    "$numberLong": "17"
                },
                "correct": "Correct"
            },
            "de7c64d3d7de70a5": {
                "code": "div",
                "time": {
                    "$numberLong": "8"
                },
                "correct": "Correct"
            },
            "e0c2f4026aaf9e95": {
                "code": ".match",
                "time": {
                    "$numberLong": "9"
                },
                "correct": "Correct"
            },
            "e3dc40112d98c593": {
                "code": ".match",
                "time": {
                    "$numberLong": "5"
                },
                "correct": "Correct"
            },
            "e4692b2237b13270": {
                "code": "main 003e div",
                "time": {
                    "$numberLong": "9"
                },
                "correct": "Correct"
            },
            "e4924b8e7499d2e8": {
                "code": ".match",
                "time": {
                    "$numberLong": "7"
                },
                "correct": "Correct"
            },
            "e609701dd7bbad52": {
                "code": ".match",
                "time": {
                    "$numberLong": "14"
                },
                "correct": "Correct"
            },
            "e70b30486b960ca2": {
                "code": "div",
                "time": {
                    "$numberLong": "10"
                },
                "correct": "Correct"
            },
            "e8a0543d60a31174": {
                "code": ".match",
                "time": {
                    "$numberLong": "13"
                },
                "correct": "Correct"
            },
            "eaa4e4a573bbdf56": {
                "code": ".match",
                "time": {
                    "$numberLong": "11"
                },
                "correct": "Correct"
            },
            "eb3c03ba165df064": {
                "code": "div.match",
                "time": {
                    "$numberLong": "17"
                },
                "correct": "Correct"
            },
            "eb8cc549bad70c0b": {
                "code": ".match",
                "time": {
                    "$numberLong": "18"
                },
                "correct": "Correct"
            },
            "ec083ecdf7de4e1e": {
                "code": "div",
                "time": {
                    "$numberLong": "7"
                },
                "correct": "Correct"
            },
            "f060b45c72736520": {
                "code": "div",
                "time": {
                    "$numberLong": "6"
                },
                "correct": "Correct"
            },
            "f1544a9bfe0cd1ad": {
                "code": ".match",
                "time": {
                    "$numberLong": "13"
                },
                "correct": "Correct"
            },
            "f1c05dde29065cc5": {
                "code": ".match",
                "time": {
                    "$numberLong": "16"
                },
                "correct": "Correct"
            },
            "f1d6c124613e4dc3": {
                "code": "class",
                "time": {
                    "$numberLong": "150"
                },
                "correct": "Incorrect"
            },
            "f271aeb2b417cd7e": {
                "code": ".match",
                "time": {
                    "$numberLong": "4"
                },
                "correct": "Correct"
            },
            "f3a692ff48114271": {
                "code": "main div",
                "time": {
                    "$numberLong": "12"
                },
                "correct": "Correct"
            },
            "f3f8cd8f734b6082": {
                "code": ".match",
                "time": {
                    "$numberLong": "20"
                },
                "correct": "Correct"
            },
            "f47878383710d5dd": {
                "code": "[class]",
                "time": {
                    "$numberLong": "26"
                },
                "correct": "Correct"
            },
            "f5c71290739e03bc": {
                "code": ".match",
                "time": {
                    "$numberLong": "42"
                },
                "correct": "Correct"
            },
            "f5e8f96eee818651": {
                "code": ".match",
                "time": {
                    "$numberLong": "23"
                },
                "correct": "Correct"
            },
            "f6829fc871613b65": {
                "code": ".match",
                "time": {
                    "$numberLong": "7"
                },
                "correct": "Correct"
            },
            "f711acd5f09bbdf6": {
                "code": "div",
                "time": {
                    "$numberLong": "7"
                },
                "correct": "Correct"
            },
            "f7b65f853512e069": {
                "code": ".match",
                "time": {
                    "$numberLong": "27"
                },
                "correct": "Correct"
            },
            "f881ad2049d118b3": {
                "code": "div",
                "time": {
                    "$numberLong": "14"
                },
                "correct": "Correct"
            },
            "f8fea8fffdca4d43": {
                "code": ".match",
                "time": {
                    "$numberLong": "17"
                },
                "correct": "Correct"
            },
            "f92800e8fbf079ac": {
                "code": "div",
                "time": {
                    "$numberLong": "4"
                },
                "correct": "Correct"
            },
            "f95bda2df3fd514e": {
                "code": ".match",
                "time": {
                    "$numberLong": "5"
                },
                "correct": "Correct"
            },
            "fc98beaf678455f7": {
                "code": ".match",
                "time": {
                    "$numberLong": "7"
                },
                "correct": "Correct"
            },
            "fcc928c4a2b55a70": {
                "code": "div",
                "time": {
                    "$numberLong": "17"
                },
                "correct": "Correct"
            },
            "fdf286213a36687f": {
                "code": ".match",
                "time": {
                    "$numberLong": "10"
                },
                "correct": "Correct"
            },
            "fe5c52f5db2f1cea": {
                "code": ".match",
                "time": {
                    "$numberLong": "36"
                },
                "correct": "Correct"
            },
            "fe981eb56e6aa2eb": {
                "code": ".match",
                "time": {
                    "$numberLong": "8"
                },
                "correct": "Correct"
            },
            "ff32798839089a73": {
                "code": ".match",
                "time": {
                    "$numberLong": "5"
                },
                "correct": "Correct"
            },
            "ffbc2f2c9e5c74bd": {
                "code": ".match",
                "time": {
                    "$numberLong": "7"
                },
                "correct": "Correct"
            }
        }
    }, {
        "puzzleIndex": {
            "$numberLong": "1"
        },
        "startTime": {
            "$date": "2018-11-26T18:21:38.047Z"
        },
        "solutions": {
            "02ef04098b9feadf": {
                "code": "main article",
                "time": {
                    "$numberLong": "12"
                },
                "correct": "Correct"
            },
            "044b7810d5b21241": {
                "code": "article",
                "time": {
                    "$numberLong": "6"
                },
                "correct": "Correct"
            },
            "0505908ca880da63": {
                "code": "article",
                "time": {
                    "$numberLong": "8"
                },
                "correct": "Correct"
            },
            "0546833d81e75f8e": {
                "code": "article",
                "time": {
                    "$numberLong": "7"
                },
                "correct": "Correct"
            },
            "074732b4e4e7f8c2": {
                "code": "article",
                "time": {
                    "$numberLong": "7"
                },
                "correct": "Correct"
            },
            "07a655995e3a34a5": {
                "code": "article",
                "time": {
                    "$numberLong": "7"
                },
                "correct": "Correct"
            },
            "0960cde31955389a": {
                "code": "article",
                "time": {
                    "$numberLong": "7"
                },
                "correct": "Correct"
            },
            "096ccaaf699480f6": {
                "code": "article",
                "time": {
                    "$numberLong": "9"
                },
                "correct": "Correct"
            },
            "0a69fc38555dc6b2": {
                "code": "article",
                "time": {
                    "$numberLong": "3"
                },
                "correct": "Correct"
            },
            "0a9dea941704145b": {
                "code": "article",
                "time": {
                    "$numberLong": "10"
                },
                "correct": "Correct"
            },
            "0be05f1edf9ac0c9": {
                "code": "article",
                "time": {
                    "$numberLong": "7"
                },
                "correct": "Correct"
            },
            "0c5610ad65714d07": {
                "code": "article",
                "time": {
                    "$numberLong": "7"
                },
                "correct": "Correct"
            },
            "0cb7b730eb24cd97": {
                "code": "article",
                "time": {
                    "$numberLong": "4"
                },
                "correct": "Correct"
            },
            "0dc9eee89960aa8c": {
                "code": "article",
                "time": {
                    "$numberLong": "14"
                },
                "correct": "Correct"
            },
            "0dcc5ccce8ea8724": {
                "code": "article",
                "time": {
                    "$numberLong": "13"
                },
                "correct": "Correct"
            },
            "0e11826c10b3c359": {
                "code": "003carticle003e",
                "time": {
                    "$numberLong": "141"
                },
                "correct": "Incorrect"
            },
            "0f62193273f6c54f": {
                "code": "article",
                "time": {
                    "$numberLong": "8"
                },
                "correct": "Correct"
            },
            "0f68663169b43508": {
                "code": "article",
                "time": {
                    "$numberLong": "1"
                },
                "correct": "Correct"
            },
            "10878b8d10d2ae2b": {
                "code": "article",
                "time": {
                    "$numberLong": "5"
                },
                "correct": "Correct"
            },
            "10f87b94846c7dd2": {
                "code": "article",
                "time": {
                    "$numberLong": "8"
                },
                "correct": "Correct"
            },
            "11013b79d46cadbc": {
                "code": "article",
                "time": {
                    "$numberLong": "5"
                },
                "correct": "Correct"
            },
            "1291f8effc0fb1e1": {
                "code": "article",
                "time": {
                    "$numberLong": "7"
                },
                "correct": "Correct"
            },
            "13516a858ed509bc": {
                "code": "main article",
                "time": {
                    "$numberLong": "8"
                },
                "correct": "Correct"
            },
            "13ebc713ecdb0c31": {
                "code": "article",
                "time": {
                    "$numberLong": "5"
                },
                "correct": "Correct"
            },
            "147cd0646fe74c51": {
                "code": "article",
                "time": {
                    "$numberLong": "6"
                },
                "correct": "Correct"
            },
            "14d1d70f31909467": {
                "code": "article",
                "time": {
                    "$numberLong": "5"
                },
                "correct": "Correct"
            },
            "15085d8de21f8860": {
                "code": "article",
                "time": {
                    "$numberLong": "3"
                },
                "correct": "Correct"
            },
            "15d30689cee2cf3d": {
                "code": "article",
                "time": {
                    "$numberLong": "8"
                },
                "correct": "Correct"
            },
            "1662516da39bd248": {
                "code": "article",
                "time": {
                    "$numberLong": "13"
                },
                "correct": "Correct"
            },
            "167a5b071e75c309": {
                "code": "article",
                "time": {
                    "$numberLong": "6"
                },
                "correct": "Correct"
            },
            "174fb3408368ee14": {
                "code": "article",
                "time": {
                    "$numberLong": "7"
                },
                "correct": "Correct"
            },
            "18a015071bed690d": {
                "code": "article",
                "time": {
                    "$numberLong": "8"
                },
                "correct": "Correct"
            },
            "1a001ccb65b08947": {
                "code": "article",
                "time": {
                    "$numberLong": "8"
                },
                "correct": "Correct"
            },
            "1a495818e81cd4fa": {
                "code": "article",
                "time": {
                    "$numberLong": "9"
                },
                "correct": "Correct"
            },
            "1b834e64b9e1baf7": {
                "code": "article",
                "time": {
                    "$numberLong": "7"
                },
                "correct": "Correct"
            },
            "1c207b98b51ff73d": {
                "code": "article",
                "time": {
                    "$numberLong": "5"
                },
                "correct": "Correct"
            },
            "1c82933fa21c91af": {
                "code": "article",
                "time": {
                    "$numberLong": "8"
                },
                "correct": "Correct"
            },
            "1c93a7a4711bff70": {
                "code": "article",
                "time": {
                    "$numberLong": "31"
                },
                "correct": "Correct"
            },
            "1e349ef8c3bc9f7a": {
                "code": "article",
                "time": {
                    "$numberLong": "3"
                },
                "correct": "Correct"
            },
            "1ea00611e97c6ea6": {
                "code": "article",
                "time": {
                    "$numberLong": "9"
                },
                "correct": "Correct"
            },
            "201af50fd3b736ba": {
                "code": "article",
                "time": {
                    "$numberLong": "7"
                },
                "correct": "Correct"
            },
            "214efb907df65375": {
                "code": "article",
                "time": {
                    "$numberLong": "5"
                },
                "correct": "Correct"
            },
            "21b91283c47ddf5e": {
                "code": "article",
                "time": {
                    "$numberLong": "9"
                },
                "correct": "Correct"
            },
            "2272f07c112385b1": {
                "code": "article",
                "time": {
                    "$numberLong": "8"
                },
                "correct": "Correct"
            },
            "24337d34f84c3b29": {
                "code": "article",
                "time": {
                    "$numberLong": "8"
                },
                "correct": "Correct"
            },
            "249db831162d981a": {
                "code": "article",
                "time": {
                    "$numberLong": "6"
                },
                "correct": "Correct"
            },
            "24b339e7f88f73de": {
                "code": "article",
                "time": {
                    "$numberLong": "4"
                },
                "correct": "Correct"
            },
            "24b54a457abe06f4": {
                "code": "article",
                "time": {
                    "$numberLong": "9"
                },
                "correct": "Correct"
            },
            "24b848f155c0b3b7": {
                "code": "article",
                "time": {
                    "$numberLong": "11"
                },
                "correct": "Correct"
            },
            "24d4763d41328ec4": {
                "code": "article",
                "time": {
                    "$numberLong": "6"
                },
                "correct": "Correct"
            },
            "250e04bcb5fbe4f7": {
                "code": "article",
                "time": {
                    "$numberLong": "7"
                },
                "correct": "Correct"
            },
            "25f9ecca44c1cd46": {
                "code": "article",
                "time": {
                    "$numberLong": "7"
                },
                "correct": "Correct"
            },
            "2651ba874a6c8d94": {
                "code": "article",
                "time": {
                    "$numberLong": "5"
                },
                "correct": "Correct"
            },
            "27a619553e988074": {
                "code": "article",
                "time": {
                    "$numberLong": "6"
                },
                "correct": "Correct"
            },
            "27bef6362f6c3153": {
                "code": "article",
                "time": {
                    "$numberLong": "3"
                },
                "correct": "Correct"
            },
            "284a6bf537e9bc4d": {
                "code": "article",
                "time": {
                    "$numberLong": "8"
                },
                "correct": "Correct"
            },
            "2aced08264036ea8": {
                "code": "article",
                "time": {
                    "$numberLong": "10"
                },
                "correct": "Correct"
            },
            "2c5dea2ca5f0d036": {
                "code": "article",
                "time": {
                    "$numberLong": "12"
                },
                "correct": "Correct"
            },
            "2cb5d5d4c8d4b19a": {
                "code": "article",
                "time": {
                    "$numberLong": "6"
                },
                "correct": "Correct"
            },
            "2cecb227110f5c46": {
                "code": "article",
                "time": {
                    "$numberLong": "58"
                },
                "correct": "Correct"
            },
            "2d960df34e645807": {
                "code": "article",
                "time": {
                    "$numberLong": "12"
                },
                "correct": "Correct"
            },
            "2f201db12c801e85": {
                "code": "article",
                "time": {
                    "$numberLong": "8"
                },
                "correct": "Correct"
            },
            "2f6a509eafbbb15c": {
                "code": "article",
                "time": {
                    "$numberLong": "7"
                },
                "correct": "Correct"
            },
            "2fe6410a79f03048": {
                "code": "main article",
                "time": {
                    "$numberLong": "10"
                },
                "correct": "Correct"
            },
            "30959179ed650cd1": {
                "code": "article",
                "time": {
                    "$numberLong": "4"
                },
                "correct": "Correct"
            },
            "34a24dd3d6aa750b": {
                "code": "article",
                "time": {
                    "$numberLong": "5"
                },
                "correct": "Correct"
            },
            "34a4f2506ce3d182": {
                "code": "article",
                "time": {
                    "$numberLong": "11"
                },
                "correct": "Correct"
            },
            "350ebb347c1ad556": {
                "code": "main article",
                "time": {
                    "$numberLong": "12"
                },
                "correct": "Correct"
            },
            "3549c28b38369744": {
                "code": "article",
                "time": {
                    "$numberLong": "7"
                },
                "correct": "Correct"
            },
            "36cfe6300f509bd5": {
                "code": "article",
                "time": {
                    "$numberLong": "10"
                },
                "correct": "Correct"
            },
            "36e8f42039c184db": {
                "code": "article",
                "time": {
                    "$numberLong": "17"
                },
                "correct": "Correct"
            },
            "3720867adefd1d26": {
                "code": "article",
                "time": {
                    "$numberLong": "7"
                },
                "correct": "Correct"
            },
            "37b36e389ab7fe80": {
                "code": "article",
                "time": {
                    "$numberLong": "5"
                },
                "correct": "Correct"
            },
            "39a2e48e45b49980": {
                "code": "article",
                "time": {
                    "$numberLong": "16"
                },
                "correct": "Correct"
            },
            "39fe9e521f177219": {
                "code": "article",
                "time": {
                    "$numberLong": "13"
                },
                "correct": "Correct"
            },
            "3a562770cb99a7f4": {
                "code": "article",
                "time": {
                    "$numberLong": "4"
                },
                "correct": "Correct"
            },
            "3ab170848134a2ff": {
                "code": "article",
                "time": {
                    "$numberLong": "4"
                },
                "correct": "Correct"
            },
            "3c5258124b324a11": {
                "code": "article",
                "time": {
                    "$numberLong": "5"
                },
                "correct": "Correct"
            },
            "3cb038073228740f": {
                "code": "article",
                "time": {
                    "$numberLong": "5"
                },
                "correct": "Correct"
            },
            "3ceec99315a58f1c": {
                "code": "article",
                "time": {
                    "$numberLong": "48"
                },
                "correct": "Correct"
            },
            "3d63b802d486029c": {
                "code": "article",
                "time": {
                    "$numberLong": "8"
                },
                "correct": "Correct"
            },
            "3dc599a7d0323291": {
                "code": "article",
                "time": {
                    "$numberLong": "4"
                },
                "correct": "Correct"
            },
            "3efffe88342c3ee5": {
                "code": "article",
                "time": {
                    "$numberLong": "4"
                },
                "correct": "Correct"
            },
            "4139b7d383e0b65c": {
                "code": "article",
                "time": {
                    "$numberLong": "11"
                },
                "correct": "Correct"
            },
            "418ca735584f1e3a": {
                "code": "article",
                "time": {
                    "$numberLong": "10"
                },
                "correct": "Correct"
            },
            "42d7cc27726e8052": {
                "code": "article",
                "time": {
                    "$numberLong": "8"
                },
                "correct": "Correct"
            },
            "454f621946346eed": {
                "code": "article",
                "time": {
                    "$numberLong": "8"
                },
                "correct": "Correct"
            },
            "4639b56895b8be0c": {
                "code": "main 003e article",
                "time": {
                    "$numberLong": "13"
                },
                "correct": "Correct"
            },
            "490953804af2d720": {
                "code": "article",
                "time": {
                    "$numberLong": "72"
                },
                "correct": "Correct"
            },
            "491d66dad9c08b8c": {
                "code": "article",
                "time": {
                    "$numberLong": "7"
                },
                "correct": "Correct"
            },
            "4c239ebf3cc37c4e": {
                "code": "article",
                "time": {
                    "$numberLong": "9"
                },
                "correct": "Correct"
            },
            "4d9c4a8566aaca2e": {
                "code": "article",
                "time": {
                    "$numberLong": "7"
                },
                "correct": "Correct"
            },
            "4f2d802143f78fdc": {
                "code": "article",
                "time": {
                    "$numberLong": "3"
                },
                "correct": "Correct"
            },
            "50a7d9c3900376d4": {
                "code": "article",
                "time": {
                    "$numberLong": "10"
                },
                "correct": "Correct"
            },
            "50e718838ec3ed69": {
                "code": "article",
                "time": {
                    "$numberLong": "4"
                },
                "correct": "Correct"
            },
            "50f3b5f06c1d21a1": {
                "code": "article",
                "time": {
                    "$numberLong": "6"
                },
                "correct": "Correct"
            },
            "5154c91bcd705420": {
                "code": "article",
                "time": {
                    "$numberLong": "11"
                },
                "correct": "Correct"
            },
            "52131ae4ea1f02db": {
                "code": "article",
                "time": {
                    "$numberLong": "6"
                },
                "correct": "Correct"
            },
            "54757d6425a18652": {
                "code": "article",
                "time": {
                    "$numberLong": "3"
                },
                "correct": "Correct"
            },
            "57a19a29c66f273a": {
                "code": "article",
                "time": {
                    "$numberLong": "3"
                },
                "correct": "Correct"
            },
            "597eaca2f80bb597": {
                "code": "article",
                "time": {
                    "$numberLong": "4"
                },
                "correct": "Correct"
            },
            "598dc546faccea96": {
                "code": "article",
                "time": {
                    "$numberLong": "26"
                },
                "correct": "Correct"
            },
            "5cbbd38ec27acc0d": {
                "code": "article",
                "time": {
                    "$numberLong": "94"
                },
                "correct": "Correct"
            },
            "5f2b55c93f8dfc50": {
                "code": "article",
                "time": {
                    "$numberLong": "55"
                },
                "correct": "Correct"
            },
            "5fa0dc84f5366d5d": {
                "code": "article",
                "time": {
                    "$numberLong": "8"
                },
                "correct": "Correct"
            },
            "607b0abda0c50b0c": {
                "code": "article",
                "time": {
                    "$numberLong": "19"
                },
                "correct": "Correct"
            },
            "608a221e132cfb0e": {
                "code": "article",
                "time": {
                    "$numberLong": "8"
                },
                "correct": "Correct"
            },
            "610358eb6ad04b78": {
                "code": "article",
                "time": {
                    "$numberLong": "10"
                },
                "correct": "Correct"
            },
            "63da271cdd05f72a": {
                "code": "article",
                "time": {
                    "$numberLong": "4"
                },
                "correct": "Correct"
            },
            "645a56e6b8555c48": {
                "code": "article",
                "time": {
                    "$numberLong": "2"
                },
                "correct": "Correct"
            },
            "6877303d0bc23e9f": {
                "code": "article",
                "time": {
                    "$numberLong": "12"
                },
                "correct": "Correct"
            },
            "690d4a3fa53cafe6": {
                "code": "article",
                "time": {
                    "$numberLong": "7"
                },
                "correct": "Correct"
            },
            "69a28f1b78baef56": {
                "code": "article",
                "time": {
                    "$numberLong": "15"
                },
                "correct": "Correct"
            },
            "6a6720574c217df1": {
                "code": "article",
                "time": {
                    "$numberLong": "7"
                },
                "correct": "Correct"
            },
            "6ac831e069244801": {
                "code": "article",
                "time": {
                    "$numberLong": "4"
                },
                "correct": "Correct"
            },
            "6be274af29d69012": {
                "code": "article",
                "time": {
                    "$numberLong": "8"
                },
                "correct": "Correct"
            },
            "6d772a3e4250147a": {
                "code": "article",
                "time": {
                    "$numberLong": "10"
                },
                "correct": "Correct"
            },
            "703e792787acb96a": {
                "code": "article",
                "time": {
                    "$numberLong": "9"
                },
                "correct": "Correct"
            },
            "70c2126a27a7ff92": {
                "code": "article",
                "time": {
                    "$numberLong": "7"
                },
                "correct": "Correct"
            },
            "738824e90ee1a521": {
                "code": "article",
                "time": {
                    "$numberLong": "12"
                },
                "correct": "Correct"
            },
            "758f08ff64d4fbed": {
                "code": "article",
                "time": {
                    "$numberLong": "15"
                },
                "correct": "Correct"
            },
            "77bfda6e1e04388a": {
                "code": "article",
                "time": {
                    "$numberLong": "4"
                },
                "correct": "Correct"
            },
            "784e2a35a5f02a51": {
                "code": "article",
                "time": {
                    "$numberLong": "10"
                },
                "correct": "Correct"
            },
            "7876d097648ce241": {
                "code": "article",
                "time": {
                    "$numberLong": "5"
                },
                "correct": "Correct"
            },
            "7913e18db9805385": {
                "code": "article",
                "time": {
                    "$numberLong": "8"
                },
                "correct": "Correct"
            },
            "79991eac2ed55971": {
                "code": "article",
                "time": {
                    "$numberLong": "6"
                },
                "correct": "Correct"
            },
            "79d3d5a874c0fedb": {
                "code": "article",
                "time": {
                    "$numberLong": "11"
                },
                "correct": "Correct"
            },
            "7cd8dd365d287663": {
                "code": "main article",
                "time": {
                    "$numberLong": "64"
                },
                "correct": "Correct"
            },
            "7d9ab4e430491d3c": {
                "code": "article",
                "time": {
                    "$numberLong": "8"
                },
                "correct": "Correct"
            },
            "7ef1e4b829e0b3d6": {
                "code": "article",
                "time": {
                    "$numberLong": "10"
                },
                "correct": "Correct"
            },
            "7f48769c943032b7": {
                "code": "article",
                "time": {
                    "$numberLong": "6"
                },
                "correct": "Correct"
            },
            "8150b6bbc7717883": {
                "code": "article",
                "time": {
                    "$numberLong": "8"
                },
                "correct": "Correct"
            },
            "8190a67e4972f187": {
                "code": "article",
                "time": {
                    "$numberLong": "10"
                },
                "correct": "Correct"
            },
            "82e8b6c0d88e0003": {
                "code": "article",
                "time": {
                    "$numberLong": "5"
                },
                "correct": "Correct"
            },
            "8373c834e2ac08bd": {
                "code": "article",
                "time": {
                    "$numberLong": "5"
                },
                "correct": "Correct"
            },
            "85faf02e7002468e": {
                "code": "article",
                "time": {
                    "$numberLong": "3"
                },
                "correct": "Correct"
            },
            "860ce7d23f02e7d3": {
                "code": "article",
                "time": {
                    "$numberLong": "6"
                },
                "correct": "Correct"
            },
            "867cfd1b76269046": {
                "code": "article",
                "time": {
                    "$numberLong": "5"
                },
                "correct": "Correct"
            },
            "8682698b0efcbb49": {
                "code": "article",
                "time": {
                    "$numberLong": "5"
                },
                "correct": "Correct"
            },
            "870545b496fb9231": {
                "code": "article",
                "time": {
                    "$numberLong": "29"
                },
                "correct": "Correct"
            },
            "8875dc4e9876728e": {
                "code": "article",
                "time": {
                    "$numberLong": "6"
                },
                "correct": "Correct"
            },
            "898447718f00f0c7": {
                "code": "article",
                "time": {
                    "$numberLong": "8"
                },
                "correct": "Correct"
            },
            "89f7ff1ba54776b9": {
                "code": "article",
                "time": {
                    "$numberLong": "32"
                },
                "correct": "Correct"
            },
            "89fb2b288bdbd651": {
                "code": "article",
                "time": {
                    "$numberLong": "7"
                },
                "correct": "Correct"
            },
            "8b3e94c6bb875abd": {
                "code": "article",
                "time": {
                    "$numberLong": "6"
                },
                "correct": "Correct"
            },
            "8c9feac04348414f": {
                "code": "article",
                "time": {
                    "$numberLong": "8"
                },
                "correct": "Correct"
            },
            "8ce246e288c504b7": {
                "code": "article",
                "time": {
                    "$numberLong": "7"
                },
                "correct": "Correct"
            },
            "8d0b871a3aac7646": {
                "code": "article",
                "time": {
                    "$numberLong": "5"
                },
                "correct": "Correct"
            },
            "8efb6e527bd50aae": {
                "code": "article",
                "time": {
                    "$numberLong": "5"
                },
                "correct": "Correct"
            },
            "92352b0b01aac98b": {
                "code": "article",
                "time": {
                    "$numberLong": "7"
                },
                "correct": "Correct"
            },
            "93e87af5faea4465": {
                "code": "article",
                "time": {
                    "$numberLong": "8"
                },
                "correct": "Correct"
            },
            "94ae2983d85b56f3": {
                "code": "article",
                "time": {
                    "$numberLong": "10"
                },
                "correct": "Correct"
            },
            "94bac471a8a06f41": {
                "code": "article",
                "time": {
                    "$numberLong": "7"
                },
                "correct": "Correct"
            },
            "94e6f0f36d96cca7": {
                "code": "article",
                "time": {
                    "$numberLong": "7"
                },
                "correct": "Correct"
            },
            "95da8c87fe0966a9": {
                "code": "article",
                "time": {
                    "$numberLong": "9"
                },
                "correct": "Correct"
            },
            "9615130025e3bf23": {
                "code": "article",
                "time": {
                    "$numberLong": "8"
                },
                "correct": "Correct"
            },
            "96a9d51e700ea6d9": {
                "code": "article",
                "time": {
                    "$numberLong": "7"
                },
                "correct": "Correct"
            },
            "96c9015ae13475fb": {
                "code": "article",
                "time": {
                    "$numberLong": "2"
                },
                "correct": "Correct"
            },
            "97dbe566f05bad1e": {
                "code": "article",
                "time": {
                    "$numberLong": "6"
                },
                "correct": "Correct"
            },
            "9a1d3ecd70ce4b81": {
                "code": "article",
                "time": {
                    "$numberLong": "3"
                },
                "correct": "Correct"
            },
            "9ba3cd7d2209cdb1": {
                "code": "article",
                "time": {
                    "$numberLong": "6"
                },
                "correct": "Correct"
            },
            "9decf80a3668a04c": {
                "code": "article",
                "time": {
                    "$numberLong": "10"
                },
                "correct": "Correct"
            },
            "9e1ad98e7ed497c0": {
                "code": "article",
                "time": {
                    "$numberLong": "84"
                },
                "correct": "Correct"
            },
            "9e8ceb488c61bfc6": {
                "code": "article",
                "time": {
                    "$numberLong": "9"
                },
                "correct": "Correct"
            },
            "9eb7f3047b78db41": {
                "code": "article",
                "time": {
                    "$numberLong": "3"
                },
                "correct": "Correct"
            },
            "9f3c76f5aebfad0a": {
                "code": "article",
                "time": {
                    "$numberLong": "5"
                },
                "correct": "Correct"
            },
            "9f57ba8fbeaabc8f": {
                "code": "article",
                "time": {
                    "$numberLong": "18"
                },
                "correct": "Correct"
            },
            "9f79120ff09e7b32": {
                "code": "article",
                "time": {
                    "$numberLong": "7"
                },
                "correct": "Correct"
            },
            "9f98758762638c79": {
                "code": "article",
                "time": {
                    "$numberLong": "8"
                },
                "correct": "Correct"
            },
            "9fc6640ffb5bcf88": {
                "code": "article",
                "time": {
                    "$numberLong": "4"
                },
                "correct": "Correct"
            },
            "a59abf0ef6dd72ee": {
                "code": "article",
                "time": {
                    "$numberLong": "4"
                },
                "correct": "Correct"
            },
            "a5cff54715b5e728": {
                "code": "article",
                "time": {
                    "$numberLong": "5"
                },
                "correct": "Correct"
            },
            "a68d50ef4eaf5330": {
                "code": "article",
                "time": {
                    "$numberLong": "3"
                },
                "correct": "Correct"
            },
            "a7faf246f1fec897": {
                "code": "article",
                "time": {
                    "$numberLong": "19"
                },
                "correct": "Correct"
            },
            "a82a83d5b2316bbb": {
                "code": "article",
                "time": {
                    "$numberLong": "3"
                },
                "correct": "Correct"
            },
            "a87fa4ebabc2a0ce": {
                "code": "article",
                "time": {
                    "$numberLong": "5"
                },
                "correct": "Correct"
            },
            "ac306151b36609fd": {
                "code": "main article",
                "time": {
                    "$numberLong": "8"
                },
                "correct": "Correct"
            },
            "ad1db3469049502b": {
                "code": "article",
                "time": {
                    "$numberLong": "10"
                },
                "correct": "Correct"
            },
            "add0cf5b0e6f0061": {
                "code": "article",
                "time": {
                    "$numberLong": "8"
                },
                "correct": "Correct"
            },
            "ade8a9fbb5003944": {
                "code": "article",
                "time": {
                    "$numberLong": "32"
                },
                "correct": "Correct"
            },
            "ae9e54473d676c54": {
                "code": "article",
                "time": {
                    "$numberLong": "7"
                },
                "correct": "Correct"
            },
            "af5c9cf12b2832c8": {
                "code": "article",
                "time": {
                    "$numberLong": "149"
                },
                "correct": "Correct"
            },
            "affe91192214b1ab": {
                "code": "article",
                "time": {
                    "$numberLong": "47"
                },
                "correct": "Correct"
            },
            "b0963184aa7f246b": {
                "code": "article",
                "time": {
                    "$numberLong": "12"
                },
                "correct": "Correct"
            },
            "b1926b5f5e8b806b": {
                "code": "article",
                "time": {
                    "$numberLong": "7"
                },
                "correct": "Correct"
            },
            "b1cbf3ca65c56e0d": {
                "code": "article",
                "time": {
                    "$numberLong": "4"
                },
                "correct": "Correct"
            },
            "b278646f280691cb": {
                "code": "article",
                "time": {
                    "$numberLong": "11"
                },
                "correct": "Correct"
            },
            "b2913665b1d38784": {
                "code": "article",
                "time": {
                    "$numberLong": "5"
                },
                "correct": "Correct"
            },
            "b46b33d779ec951f": {
                "code": "article",
                "time": {
                    "$numberLong": "3"
                },
                "correct": "Correct"
            },
            "b4e84dc5f950be34": {
                "code": "article",
                "time": {
                    "$numberLong": "10"
                },
                "correct": "Correct"
            },
            "b4f4b5c6dfcb6d07": {
                "code": "article",
                "time": {
                    "$numberLong": "4"
                },
                "correct": "Correct"
            },
            "b51a79256e2462a5": {
                "code": "article",
                "time": {
                    "$numberLong": "10"
                },
                "correct": "Correct"
            },
            "b7037f74a55b1ded": {
                "code": "article",
                "time": {
                    "$numberLong": "8"
                },
                "correct": "Correct"
            },
            "b70e0f3eadc8fa6a": {
                "code": "article",
                "time": {
                    "$numberLong": "19"
                },
                "correct": "Correct"
            },
            "b87bfaa63e377a71": {
                "code": "article",
                "time": {
                    "$numberLong": "6"
                },
                "correct": "Correct"
            },
            "b913aff5711ffd5b": {
                "code": "article",
                "time": {
                    "$numberLong": "5"
                },
                "correct": "Correct"
            },
            "b928c37c17806191": {
                "code": "article",
                "time": {
                    "$numberLong": "4"
                },
                "correct": "Correct"
            },
            "b9d1dfe7e37afeb2": {
                "code": "article",
                "time": {
                    "$numberLong": "12"
                },
                "correct": "Correct"
            },
            "b9f4eab4145bb27a": {
                "code": "article",
                "time": {
                    "$numberLong": "9"
                },
                "correct": "Correct"
            },
            "bbe008738217e35f": {
                "code": "article",
                "time": {
                    "$numberLong": "4"
                },
                "correct": "Correct"
            },
            "c1219d67fe1e51c2": {
                "code": "article",
                "time": {
                    "$numberLong": "5"
                },
                "correct": "Correct"
            },
            "c13f401d134bbdb7": {
                "code": "article",
                "time": {
                    "$numberLong": "9"
                },
                "correct": "Correct"
            },
            "c18131119872b238": {
                "code": "article",
                "time": {
                    "$numberLong": "31"
                },
                "correct": "Correct"
            },
            "c3713ba000985baf": {
                "code": "article",
                "time": {
                    "$numberLong": "4"
                },
                "correct": "Correct"
            },
            "c486a74f6d914600": {
                "code": "article",
                "time": {
                    "$numberLong": "14"
                },
                "correct": "Correct"
            },
            "c4b129ee6608ab4e": {
                "code": "article",
                "time": {
                    "$numberLong": "10"
                },
                "correct": "Correct"
            },
            "c61f85976fa0f880": {
                "code": "article",
                "time": {
                    "$numberLong": "5"
                },
                "correct": "Correct"
            },
            "c62f6a6327b38df0": {
                "code": "article",
                "time": {
                    "$numberLong": "8"
                },
                "correct": "Correct"
            },
            "c6782ec9fbfacc49": {
                "code": "article",
                "time": {
                    "$numberLong": "4"
                },
                "correct": "Correct"
            },
            "c81886dde372d437": {
                "code": "article",
                "time": {
                    "$numberLong": "7"
                },
                "correct": "Correct"
            },
            "c825ef755969b747": {
                "code": "article",
                "time": {
                    "$numberLong": "7"
                },
                "correct": "Correct"
            },
            "c95463f778ff93ca": {
                "code": "article",
                "time": {
                    "$numberLong": "4"
                },
                "correct": "Correct"
            },
            "ca348e67a411e031": {
                "code": "article",
                "time": {
                    "$numberLong": "11"
                },
                "correct": "Correct"
            },
            "ca60244540ed755d": {
                "code": "article",
                "time": {
                    "$numberLong": "18"
                },
                "correct": "Correct"
            },
            "cab8ee9fdec69ee8": {
                "code": "article",
                "time": {
                    "$numberLong": "6"
                },
                "correct": "Correct"
            },
            "cb0b66dbc547fb22": {
                "code": "article",
                "time": {
                    "$numberLong": "6"
                },
                "correct": "Correct"
            },
            "cb13a1cb1bf89459": {
                "code": "article",
                "time": {
                    "$numberLong": "4"
                },
                "correct": "Correct"
            },
            "cf8643fb83e99e86": {
                "code": "article",
                "time": {
                    "$numberLong": "6"
                },
                "correct": "Correct"
            },
            "cfa10e7229340f70": {
                "code": "article",
                "time": {
                    "$numberLong": "17"
                },
                "correct": "Correct"
            },
            "d0b031eec85e6911": {
                "code": "article",
                "time": {
                    "$numberLong": "7"
                },
                "correct": "Correct"
            },
            "d1346365de590ccf": {
                "code": "article",
                "time": {
                    "$numberLong": "2"
                },
                "correct": "Correct"
            },
            "d417fd8dd5e48efe": {
                "code": "article",
                "time": {
                    "$numberLong": "4"
                },
                "correct": "Correct"
            },
            "d4a5deb84ce836e9": {
                "code": "article",
                "time": {
                    "$numberLong": "78"
                },
                "correct": "Correct"
            },
            "d52887dab0fb075f": {
                "code": "article",
                "time": {
                    "$numberLong": "5"
                },
                "correct": "Correct"
            },
            "d57163ee2e28e4b2": {
                "code": "article",
                "time": {
                    "$numberLong": "2"
                },
                "correct": "Correct"
            },
            "d66e5b11f0731612": {
                "code": "article",
                "time": {
                    "$numberLong": "7"
                },
                "correct": "Correct"
            },
            "d6f6f6c7a9301bbe": {
                "code": "article",
                "time": {
                    "$numberLong": "4"
                },
                "correct": "Correct"
            },
            "d8c54e85ccd5b21c": {
                "code": "article",
                "time": {
                    "$numberLong": "4"
                },
                "correct": "Correct"
            },
            "d9c232089e7ae571": {
                "code": "article",
                "time": {
                    "$numberLong": "56"
                },
                "correct": "Correct"
            },
            "d9f697ce2a414d53": {
                "code": "article",
                "time": {
                    "$numberLong": "5"
                },
                "correct": "Correct"
            },
            "db9d65f484e4d137": {
                "code": "article",
                "time": {
                    "$numberLong": "8"
                },
                "correct": "Correct"
            },
            "dba3419fda42d93b": {
                "code": "article",
                "time": {
                    "$numberLong": "6"
                },
                "correct": "Correct"
            },
            "dd7da88658f252c6": {
                "code": "article",
                "time": {
                    "$numberLong": "15"
                },
                "correct": "Correct"
            },
            "dda5b4fc568bd7e7": {
                "code": "article",
                "time": {
                    "$numberLong": "9"
                },
                "correct": "Correct"
            },
            "de33e71b1fe6587c": {
                "code": "article",
                "time": {
                    "$numberLong": "29"
                },
                "correct": "Correct"
            },
            "de7c64d3d7de70a5": {
                "code": "main *",
                "time": {
                    "$numberLong": "142"
                },
                "correct": "Correct"
            },
            "e0c2f4026aaf9e95": {
                "code": "article",
                "time": {
                    "$numberLong": "7"
                },
                "correct": "Correct"
            },
            "e3dc40112d98c593": {
                "code": "article",
                "time": {
                    "$numberLong": "3"
                },
                "correct": "Correct"
            },
            "e4692b2237b13270": {
                "code": "main 003e article",
                "time": {
                    "$numberLong": "11"
                },
                "correct": "Correct"
            },
            "e4924b8e7499d2e8": {
                "code": "article",
                "time": {
                    "$numberLong": "7"
                },
                "correct": "Correct"
            },
            "e609701dd7bbad52": {
                "code": "article",
                "time": {
                    "$numberLong": "5"
                },
                "correct": "Correct"
            },
            "e70b30486b960ca2": {
                "code": "article",
                "time": {
                    "$numberLong": "7"
                },
                "correct": "Correct"
            },
            "e8a0543d60a31174": {
                "code": "article",
                "time": {
                    "$numberLong": "9"
                },
                "correct": "Correct"
            },
            "eaa4e4a573bbdf56": {
                "code": "article",
                "time": {
                    "$numberLong": "5"
                },
                "correct": "Correct"
            },
            "eb3c03ba165df064": {
                "code": "article",
                "time": {
                    "$numberLong": "4"
                },
                "correct": "Correct"
            },
            "eb8cc549bad70c0b": {
                "code": "article",
                "time": {
                    "$numberLong": "9"
                },
                "correct": "Correct"
            },
            "ec083ecdf7de4e1e": {
                "code": "article",
                "time": {
                    "$numberLong": "4"
                },
                "correct": "Correct"
            },
            "f060b45c72736520": {
                "code": "article",
                "time": {
                    "$numberLong": "6"
                },
                "correct": "Correct"
            },
            "f1544a9bfe0cd1ad": {
                "code": "article",
                "time": {
                    "$numberLong": "8"
                },
                "correct": "Correct"
            },
            "f1c05dde29065cc5": {
                "code": "article",
                "time": {
                    "$numberLong": "4"
                },
                "correct": "Correct"
            },
            "f1d6c124613e4dc3": {
                "code": "article",
                "time": {
                    "$numberLong": "74"
                },
                "correct": "Correct"
            },
            "f271aeb2b417cd7e": {
                "code": "article",
                "time": {
                    "$numberLong": "5"
                },
                "correct": "Correct"
            },
            "f3a692ff48114271": {
                "code": "article",
                "time": {
                    "$numberLong": "9"
                },
                "correct": "Correct"
            },
            "f3f8cd8f734b6082": {
                "code": "main article",
                "time": {
                    "$numberLong": "33"
                },
                "correct": "Correct"
            },
            "f47878383710d5dd": {
                "code": "article",
                "time": {
                    "$numberLong": "34"
                },
                "correct": "Correct"
            },
            "f5c71290739e03bc": {
                "code": "article",
                "time": {
                    "$numberLong": "9"
                },
                "correct": "Correct"
            },
            "f5e8f96eee818651": {
                "code": "article",
                "time": {
                    "$numberLong": "7"
                },
                "correct": "Correct"
            },
            "f6829fc871613b65": {
                "code": "article",
                "time": {
                    "$numberLong": "5"
                },
                "correct": "Correct"
            },
            "f711acd5f09bbdf6": {
                "code": "article",
                "time": {
                    "$numberLong": "6"
                },
                "correct": "Correct"
            },
            "f7b65f853512e069": {
                "code": "main article",
                "time": {
                    "$numberLong": "15"
                },
                "correct": "Correct"
            },
            "f881ad2049d118b3": {
                "code": "article",
                "time": {
                    "$numberLong": "7"
                },
                "correct": "Correct"
            },
            "f8fea8fffdca4d43": {
                "code": "article",
                "time": {
                    "$numberLong": "29"
                },
                "correct": "Correct"
            },
            "f92800e8fbf079ac": {
                "code": "article",
                "time": {
                    "$numberLong": "3"
                },
                "correct": "Correct"
            },
            "f95bda2df3fd514e": {
                "code": "article",
                "time": {
                    "$numberLong": "2"
                },
                "correct": "Correct"
            },
            "fc98beaf678455f7": {
                "code": "article",
                "time": {
                    "$numberLong": "4"
                },
                "correct": "Correct"
            },
            "fcc928c4a2b55a70": {
                "code": "article",
                "time": {
                    "$numberLong": "3"
                },
                "correct": "Correct"
            },
            "fdf286213a36687f": {
                "code": "article",
                "time": {
                    "$numberLong": "7"
                },
                "correct": "Correct"
            },
            "fe5c52f5db2f1cea": {
                "code": "article",
                "time": {
                    "$numberLong": "7"
                },
                "correct": "Correct"
            },
            "fe981eb56e6aa2eb": {
                "code": "article",
                "time": {
                    "$numberLong": "7"
                },
                "correct": "Correct"
            },
            "ff32798839089a73": {
                "code": "article",
                "time": {
                    "$numberLong": "4"
                },
                "correct": "Correct"
            },
            "ffbc2f2c9e5c74bd": {
                "code": "article",
                "time": {
                    "$numberLong": "6"
                },
                "correct": "Correct"
            }
        }
    }, {
        "puzzleIndex": {
            "$numberLong": "2"
        },
        "startTime": {
            "$date": "2018-11-26T18:24:27.419Z"
        },
        "solutions": {
            "02ef04098b9feadf": {
                "code": ".door-cellar",
                "time": {
                    "$numberLong": "151"
                },
                "correct": "Incorrect"
            },
            "044b7810d5b21241": {
                "code": "div.cellar.door",
                "time": {
                    "$numberLong": "33"
                },
                "correct": "Correct"
            },
            "0505908ca880da63": {
                "code": "[class='door cellar'",
                "time": {
                    "$numberLong": "140"
                },
                "correct": "Incorrect"
            },
            "0546833d81e75f8e": {
                "code": ".door.cellar",
                "time": {
                    "$numberLong": "32"
                },
                "correct": "Correct"
            },
            "06d4b563eb1ae200": {
                "code": "003carticle class=behind cellar door003e003c/article003e",
                "time": {
                    "$numberLong": "112"
                },
                "correct": "Incorrect"
            },
            "074732b4e4e7f8c2": {
                "code": "div[class=behind cellar door], div[class=door cellar",
                "time": {
                    "$numberLong": "92"
                },
                "correct": "Correct"
            },
            "07a655995e3a34a5": {
                "code": ".door .cellar, .cellar.door  ",
                "time": {
                    "$numberLong": "54"
                },
                "correct": "Correct"
            },
            "0960cde31955389a": {
                "code": ".door.cellar",
                "time": {
                    "$numberLong": "16"
                },
                "correct": "Correct"
            },
            "096ccaaf699480f6": {
                "code": ".door.cellar",
                "time": {
                    "$numberLong": "23"
                },
                "correct": "Correct"
            },
            "0a69fc38555dc6b2": {
                "code": ".cellar.door",
                "time": {
                    "$numberLong": "28"
                },
                "correct": "Correct"
            },
            "0a9dea941704145b": {
                "code": "[class*='door cellar']",
                "time": {
                    "$numberLong": "150"
                },
                "correct": "Incorrect"
            },
            "0be05f1edf9ac0c9": {
                "code": ".door.cellar",
                "time": {
                    "$numberLong": "140"
                },
                "correct": "Correct"
            },
            "0c5610ad65714d07": {
                "code": ".cellar.door",
                "time": {
                    "$numberLong": "25"
                },
                "correct": "Correct"
            },
            "0cb7b730eb24cd97": {
                "code": ".door.cellar",
                "time": {
                    "$numberLong": "30"
                },
                "correct": "Correct"
            },
            "0dc9eee89960aa8c": {
                "code": "[class~= cellar]",
                "time": {
                    "$numberLong": "144"
                },
                "correct": "Incorrect"
            },
            "0dcc5ccce8ea8724": {
                "code": "div .door .cellar",
                "time": {
                    "$numberLong": "137"
                },
                "correct": "Incorrect"
            },
            "0e11826c10b3c359": {
                "code": ".behind cellar door .door cellar",
                "time": {
                    "$numberLong": "136"
                },
                "correct": "Incorrect"
            },
            "0f62193273f6c54f": {
                "code": "[class==behind cellar door], [class==behind cellar door],",
                "time": {
                    "$numberLong": "144"
                },
                "correct": "Incorrect"
            },
            "0f68663169b43508": {
                "code": ".door.cellar",
                "time": {
                    "$numberLong": "0"
                },
                "correct": "Correct"
            },
            "101366111d88b96c": {
                "code": ".door",
                "time": {
                    "$numberLong": "139"
                },
                "correct": "Incorrect"
            },
            "10878b8d10d2ae2b": {
                "code": "",
                "time": {
                    "$numberLong": "147"
                },
                "correct": "Incorrect"
            },
            "10f87b94846c7dd2": {
                "code": ".cellar.door",
                "time": {
                    "$numberLong": "26"
                },
                "correct": "Correct"
            },
            "11013b79d46cadbc": {
                "code": ".door.cellar",
                "time": {
                    "$numberLong": "35"
                },
                "correct": "Correct"
            },
            "1291f8effc0fb1e1": {
                "code": ".behind cellar door, .door cellar",
                "time": {
                    "$numberLong": "146"
                },
                "correct": "Incorrect"
            },
            "13516a858ed509bc": {
                "code": ".door.cellar",
                "time": {
                    "$numberLong": "87"
                },
                "correct": "Correct"
            },
            "13ebc713ecdb0c31": {
                "code": ".door.cellar",
                "time": {
                    "$numberLong": "24"
                },
                "correct": "Correct"
            },
            "147cd0646fe74c51": {
                "code": ".behin.door ",
                "time": {
                    "$numberLong": "151"
                },
                "correct": "Incorrect"
            },
            "14d1d70f31909467": {
                "code": ".door.cellar",
                "time": {
                    "$numberLong": "9"
                },
                "correct": "Correct"
            },
            "15085d8de21f8860": {
                "code": ".door.cellar",
                "time": {
                    "$numberLong": "9"
                },
                "correct": "Correct"
            },
            "15d30689cee2cf3d": {
                "code": ".door.cellar",
                "time": {
                    "$numberLong": "99"
                },
                "correct": "Correct"
            },
            "1662516da39bd248": {
                "code": ".door.cellar",
                "time": {
                    "$numberLong": "26"
                },
                "correct": "Correct"
            },
            "167a5b071e75c309": {
                "code": "div.door.cellar",
                "time": {
                    "$numberLong": "25"
                },
                "correct": "Correct"
            },
            "174fb3408368ee14": {
                "code": ".behind, .door.cellar",
                "time": {
                    "$numberLong": "133"
                },
                "correct": "Correct"
            },
            "18a015071bed690d": {
                "code": ".cellar.door",
                "time": {
                    "$numberLong": "49"
                },
                "correct": "Correct"
            },
            "1a001ccb65b08947": {
                "code": ".door 003e .behind, .door:nt",
                "time": {
                    "$numberLong": "151"
                },
                "correct": "Incorrect"
            },
            "1a495818e81cd4fa": {
                "code": ".cellar.door",
                "time": {
                    "$numberLong": "100"
                },
                "correct": "Correct"
            },
            "1b834e64b9e1baf7": {
                "code": "div[class*=cellar][class*=d]",
                "time": {
                    "$numberLong": "78"
                },
                "correct": "Correct"
            },
            "1c207b98b51ff73d": {
                "code": "",
                "time": {
                    "$numberLong": "150"
                },
                "correct": "Incorrect"
            },
            "1c82933fa21c91af": {
                "code": ".cellar.door",
                "time": {
                    "$numberLong": "38"
                },
                "correct": "Correct"
            },
            "1c93a7a4711bff70": {
                "code": "div.behind",
                "time": {
                    "$numberLong": "149"
                },
                "correct": "Incorrect"
            },
            "1e349ef8c3bc9f7a": {
                "code": ".behind + .doo",
                "time": {
                    "$numberLong": "151"
                },
                "correct": "Incorrect"
            },
            "1ea00611e97c6ea6": {
                "code": "[class~='cellar']",
                "time": {
                    "$numberLong": "125"
                },
                "correct": "Incorrect"
            },
            "201af50fd3b736ba": {
                "code": ".door.cellar",
                "time": {
                    "$numberLong": "19"
                },
                "correct": "Correct"
            },
            "214efb907df65375": {
                "code": ".door.cellar",
                "time": {
                    "$numberLong": "15"
                },
                "correct": "Correct"
            },
            "21b91283c47ddf5e": {
                "code": ".door.cellar",
                "time": {
                    "$numberLong": "36"
                },
                "correct": "Correct"
            },
            "2272f07c112385b1": {
                "code": "",
                "time": {
                    "$numberLong": "147"
                },
                "correct": "Incorrect"
            },
            "24337d34f84c3b29": {
                "code": ".door 003e .behind, .ce",
                "time": {
                    "$numberLong": "149"
                },
                "correct": "Incorrect"
            },
            "249db831162d981a": {
                "code": ".behind door, .cellar .door",
                "time": {
                    "$numberLong": "149"
                },
                "correct": "Incorrect"
            },
            "24b339e7f88f73de": {
                "code": ".cellar.door",
                "time": {
                    "$numberLong": "57"
                },
                "correct": "Correct"
            },
            "24b54a457abe06f4": {
                "code": "",
                "time": {
                    "$numberLong": "149"
                },
                "correct": "Incorrect"
            },
            "24b848f155c0b3b7": {
                "code": "[class=behind cellar door], [class=door cellar]",
                "time": {
                    "$numberLong": "127"
                },
                "correct": "Correct"
            },
            "24d4763d41328ec4": {
                "code": ".cellar.door",
                "time": {
                    "$numberLong": "21"
                },
                "correct": "Correct"
            },
            "250e04bcb5fbe4f7": {
                "code": ".door 003e .door, .door .cellar",
                "time": {
                    "$numberLong": "127"
                },
                "correct": "Incorrect"
            },
            "25f9ecca44c1cd46": {
                "code": ".door.cellar",
                "time": {
                    "$numberLong": "85"
                },
                "correct": "Correct"
            },
            "2651ba874a6c8d94": {
                "code": "",
                "time": {
                    "$numberLong": "150"
                },
                "correct": "Incorrect"
            },
            "27a619553e988074": {
                "code": ".cellar.door",
                "time": {
                    "$numberLong": "66"
                },
                "correct": "Correct"
            },
            "27bef6362f6c3153": {
                "code": ".door.cellar",
                "time": {
                    "$numberLong": "32"
                },
                "correct": "Correct"
            },
            "284a6bf537e9bc4d": {
                "code": ".door .cellar ",
                "time": {
                    "$numberLong": "143"
                },
                "correct": "Incorrect"
            },
            "2aced08264036ea8": {
                "code": ".door:nth-child(3), .behind",
                "time": {
                    "$numberLong": "148"
                },
                "correct": "Correct"
            },
            "2c5dea2ca5f0d036": {
                "code": "",
                "time": {
                    "$numberLong": "133"
                },
                "correct": "Incorrect"
            },
            "2cb5d5d4c8d4b19a": {
                "code": ".door.cellar ",
                "time": {
                    "$numberLong": "115"
                },
                "correct": "Correct"
            },
            "2cecb227110f5c46": {
                "code": ".door.cellar",
                "time": {
                    "$numberLong": "22"
                },
                "correct": "Correct"
            },
            "2d960df34e645807": {
                "code": ".door.cellar",
                "time": {
                    "$numberLong": "45"
                },
                "correct": "Correct"
            },
            "2f201db12c801e85": {
                "code": ".door.cellar",
                "time": {
                    "$numberLong": "19"
                },
                "correct": "Correct"
            },
            "2f6a509eafbbb15c": {
                "code": ".cellar.door",
                "time": {
                    "$numberLong": "138"
                },
                "correct": "Correct"
            },
            "2fe6410a79f03048": {
                "code": ".cellar.door",
                "time": {
                    "$numberLong": "31"
                },
                "correct": "Correct"
            },
            "30959179ed650cd1": {
                "code": ".door.cellar",
                "time": {
                    "$numberLong": "13"
                },
                "correct": "Correct"
            },
            "34a24dd3d6aa750b": {
                "code": "div.cellar.door",
                "time": {
                    "$numberLong": "32"
                },
                "correct": "Correct"
            },
            "34a4f2506ce3d182": {
                "code": "div",
                "time": {
                    "$numberLong": "145"
                },
                "correct": "Incorrect"
            },
            "350ebb347c1ad556": {
                "code": "div .cellar /",
                "time": {
                    "$numberLong": "151"
                },
                "correct": "Incorrect"
            },
            "3549c28b38369744": {
                "code": ".door.cellar",
                "time": {
                    "$numberLong": "33"
                },
                "correct": "Correct"
            },
            "36cfe6300f509bd5": {
                "code": "div[class^=door]",
                "time": {
                    "$numberLong": "97"
                },
                "correct": "Incorrect"
            },
            "36e8f42039c184db": {
                "code": ".door.cellar",
                "time": {
                    "$numberLong": "13"
                },
                "correct": "Correct"
            },
            "3720867adefd1d26": {
                "code": ".cellar.door",
                "time": {
                    "$numberLong": "16"
                },
                "correct": "Correct"
            },
            "37b36e389ab7fe80": {
                "code": "div[class=behind cellar door], div[class=door cellar]",
                "time": {
                    "$numberLong": "136"
                },
                "correct": "Correct"
            },
            "39a2e48e45b49980": {
                "code": "div .door.cellar",
                "time": {
                    "$numberLong": "70"
                },
                "correct": "Correct"
            },
            "39fe9e521f177219": {
                "code": ".cellar.door",
                "time": {
                    "$numberLong": "27"
                },
                "correct": "Correct"
            },
            "3a562770cb99a7f4": {
                "code": ".door.cellar",
                "time": {
                    "$numberLong": "33"
                },
                "correct": "Correct"
            },
            "3ab170848134a2ff": {
                "code": ".cellar.door",
                "time": {
                    "$numberLong": "16"
                },
                "correct": "Correct"
            },
            "3c5258124b324a11": {
                "code": "[class=behind cellar door], [class=door cellar",
                "time": {
                    "$numberLong": "123"
                },
                "correct": "Correct"
            },
            "3cb038073228740f": {
                "code": "div.cellar.door",
                "time": {
                    "$numberLong": "71"
                },
                "correct": "Correct"
            },
            "3ceec99315a58f1c": {
                "code": ".door.cellar",
                "time": {
                    "$numberLong": "44"
                },
                "correct": "Correct"
            },
            "3d63b802d486029c": {
                "code": ".cellar.door",
                "time": {
                    "$numberLong": "16"
                },
                "correct": "Correct"
            },
            "3dc599a7d0323291": {
                "code": ".behind.cellar.door, .door.cellar",
                "time": {
                    "$numberLong": "18"
                },
                "correct": "Correct"
            },
            "3efffe88342c3ee5": {
                "code": "[class*=cellar][class*=d]",
                "time": {
                    "$numberLong": "80"
                },
                "correct": "Correct"
            },
            "4139b7d383e0b65c": {
                "code": "div.cellar.door",
                "time": {
                    "$numberLong": "23"
                },
                "correct": "Correct"
            },
            "418ca735584f1e3a": {
                "code": ".cellar.door",
                "time": {
                    "$numberLong": "29"
                },
                "correct": "Correct"
            },
            "42d7cc27726e8052": {
                "code": ".cellar.door",
                "time": {
                    "$numberLong": "30"
                },
                "correct": "Correct"
            },
            "454f621946346eed": {
                "code": ".cellar.door",
                "time": {
                    "$numberLong": "23"
                },
                "correct": "Correct"
            },
            "4639b56895b8be0c": {
                "code": ".cellar .door",
                "time": {
                    "$numberLong": "149"
                },
                "correct": "Incorrect"
            },
            "491d66dad9c08b8c": {
                "code": "div.door",
                "time": {
                    "$numberLong": "151"
                },
                "correct": "Incorrect"
            },
            "4c239ebf3cc37c4e": {
                "code": ".door.cellar",
                "time": {
                    "$numberLong": "87"
                },
                "correct": "Correct"
            },
            "4d9c4a8566aaca2e": {
                "code": ".door.cellar",
                "time": {
                    "$numberLong": "84"
                },
                "correct": "Correct"
            },
            "4f2d802143f78fdc": {
                "code": "div.door.cellar",
                "time": {
                    "$numberLong": "15"
                },
                "correct": "Correct"
            },
            "50a7d9c3900376d4": {
                "code": ".cellar.door",
                "time": {
                    "$numberLong": "142"
                },
                "correct": "Correct"
            },
            "50e718838ec3ed69": {
                "code": ".door.cellar",
                "time": {
                    "$numberLong": "25"
                },
                "correct": "Correct"
            },
            "50f3b5f06c1d21a1": {
                "code": "[class~=cellar]",
                "time": {
                    "$numberLong": "130"
                },
                "correct": "Incorrect"
            },
            "5154c91bcd705420": {
                "code": ".cellar.door",
                "time": {
                    "$numberLong": "56"
                },
                "correct": "Correct"
            },
            "52131ae4ea1f02db": {
                "code": ".behind,  .cellar:nth-of-type(3n)",
                "time": {
                    "$numberLong": "113"
                },
                "correct": "Correct"
            },
            "54757d6425a18652": {
                "code": ".door.cellar",
                "time": {
                    "$numberLong": "126"
                },
                "correct": "Correct"
            },
            "57a19a29c66f273a": {
                "code": ".door.cellar",
                "time": {
                    "$numberLong": "123"
                },
                "correct": "Correct"
            },
            "597eaca2f80bb597": {
                "code": ".cellar.door",
                "time": {
                    "$numberLong": "19"
                },
                "correct": "Correct"
            },
            "598dc546faccea96": {
                "code": "div[class=behind cellar door]",
                "time": {
                    "$numberLong": "149"
                },
                "correct": "Incorrect"
            },
            "5cbbd38ec27acc0d": {
                "code": ".behind cellar door",
                "time": {
                    "$numberLong": "131"
                },
                "correct": "Incorrect"
            },
            "5f2b55c93f8dfc50": {
                "code": "div .cellar ",
                "time": {
                    "$numberLong": "107"
                },
                "correct": "Incorrect"
            },
            "5fa0dc84f5366d5d": {
                "code": ":nth-child.door .cellar, .cellar",
                "time": {
                    "$numberLong": "150"
                },
                "correct": "Incorrect"
            },
            "607b0abda0c50b0c": {
                "code": ".behind cellar door, .door cellar",
                "time": {
                    "$numberLong": "147"
                },
                "correct": "Incorrect"
            },
            "608a221e132cfb0e": {
                "code": ".door.cellar",
                "time": {
                    "$numberLong": "138"
                },
                "correct": "Correct"
            },
            "610358eb6ad04b78": {
                "code": ":nth-child(2n+2)",
                "time": {
                    "$numberLong": "151"
                },
                "correct": "Incorrect"
            },
            "63da271cdd05f72a": {
                "code": "div.cellar.door",
                "time": {
                    "$numberLong": "21"
                },
                "correct": "Correct"
            },
            "645a56e6b8555c48": {
                "code": "div.cellar.door",
                "time": {
                    "$numberLong": "30"
                },
                "correct": "Correct"
            },
            "6877303d0bc23e9f": {
                "code": ".behind cellar door, .door cellar",
                "time": {
                    "$numberLong": "101"
                },
                "correct": "Incorrect"
            },
            "690d4a3fa53cafe6": {
                "code": ".door.cellar",
                "time": {
                    "$numberLong": "45"
                },
                "correct": "Correct"
            },
            "69a28f1b78baef56": {
                "code": ".cellar.door ",
                "time": {
                    "$numberLong": "82"
                },
                "correct": "Correct"
            },
            "6a6720574c217df1": {
                "code": ".behind.cellar.door, .door.cellar",
                "time": {
                    "$numberLong": "34"
                },
                "correct": "Correct"
            },
            "6ac831e069244801": {
                "code": "div.cellar.door",
                "time": {
                    "$numberLong": "73"
                },
                "correct": "Correct"
            },
            "6be274af29d69012": {
                "code": "div[class *= 'celar door']",
                "time": {
                    "$numberLong": "149"
                },
                "correct": "Incorrect"
            },
            "6d772a3e4250147a": {
                "code": ".cellar.door",
                "time": {
                    "$numberLong": "64"
                },
                "correct": "Correct"
            },
            "703e792787acb96a": {
                "code": ".behindcellardoor .doorcellar",
                "time": {
                    "$numberLong": "148"
                },
                "correct": "Incorrect"
            },
            "70c2126a27a7ff92": {
                "code": ".cellar.door",
                "time": {
                    "$numberLong": "14"
                },
                "correct": "Correct"
            },
            "738824e90ee1a521": {
                "code": ".door.cellar, .behind",
                "time": {
                    "$numberLong": "97"
                },
                "correct": "Correct"
            },
            "758f08ff64d4fbed": {
                "code": ".behind .door",
                "time": {
                    "$numberLong": "143"
                },
                "correct": "Incorrect"
            },
            "77bfda6e1e04388a": {
                "code": ".door003e.behind, .cellar + .door",
                "time": {
                    "$numberLong": "122"
                },
                "correct": "Correct"
            },
            "784e2a35a5f02a51": {
                "code": "div.door.cellar",
                "time": {
                    "$numberLong": "59"
                },
                "correct": "Correct"
            },
            "7876d097648ce241": {
                "code": "div.cellar.door",
                "time": {
                    "$numberLong": "55"
                },
                "correct": "Correct"
            },
            "7913e18db9805385": {
                "code": ".cellar.door",
                "time": {
                    "$numberLong": "36"
                },
                "correct": "Correct"
            },
            "79991eac2ed55971": {
                "code": "div.cellar.door",
                "time": {
                    "$numberLong": "79"
                },
                "correct": "Correct"
            },
            "79d3d5a874c0fedb": {
                "code": ".cellar.door",
                "time": {
                    "$numberLong": "55"
                },
                "correct": "Correct"
            },
            "7cd8dd365d287663": {
                "code": ".cellar.door",
                "time": {
                    "$numberLong": "90"
                },
                "correct": "Correct"
            },
            "7d9ab4e430491d3c": {
                "code": ".door.cellar",
                "time": {
                    "$numberLong": "20"
                },
                "correct": "Correct"
            },
            "7ef1e4b829e0b3d6": {
                "code": ".cellar.door",
                "time": {
                    "$numberLong": "40"
                },
                "correct": "Correct"
            },
            "7f48769c943032b7": {
                "code": ".door.cellar",
                "time": {
                    "$numberLong": "43"
                },
                "correct": "Correct"
            },
            "8150b6bbc7717883": {
                "code": ".door.cellar",
                "time": {
                    "$numberLong": "61"
                },
                "correct": "Correct"
            },
            "8190a67e4972f187": {
                "code": ".door.cellar",
                "time": {
                    "$numberLong": "42"
                },
                "correct": "Correct"
            },
            "82e8b6c0d88e0003": {
                "code": ".door.cellar",
                "time": {
                    "$numberLong": "17"
                },
                "correct": "Correct"
            },
            "8373c834e2ac08bd": {
                "code": ".door.cellar",
                "time": {
                    "$numberLong": "133"
                },
                "correct": "Correct"
            },
            "85faf02e7002468e": {
                "code": "",
                "time": {
                    "$numberLong": "145"
                },
                "correct": "Incorrect"
            },
            "860ce7d23f02e7d3": {
                "code": ".door .cellar .behind, .door.cellar",
                "time": {
                    "$numberLong": "54"
                },
                "correct": "Correct"
            },
            "867cfd1b76269046": {
                "code": "div.cellar.door",
                "time": {
                    "$numberLong": "43"
                },
                "correct": "Correct"
            },
            "8682698b0efcbb49": {
                "code": ".door.cellar",
                "time": {
                    "$numberLong": "135"
                },
                "correct": "Correct"
            },
            "870545b496fb9231": {
                "code": ".behind, .door:th-last-child(3",
                "time": {
                    "$numberLong": "151"
                },
                "correct": "Incorrect"
            },
            "8875dc4e9876728e": {
                "code": ".door.cellar",
                "time": {
                    "$numberLong": "54"
                },
                "correct": "Correct"
            },
            "898447718f00f0c7": {
                "code": ".cellar.door",
                "time": {
                    "$numberLong": "80"
                },
                "correct": "Correct"
            },
            "89f7ff1ba54776b9": {
                "code": ".cellar.door",
                "time": {
                    "$numberLong": "24"
                },
                "correct": "Correct"
            },
            "89fb2b288bdbd651": {
                "code": ".cellar.door",
                "time": {
                    "$numberLong": "39"
                },
                "correct": "Correct"
            },
            "8b3e94c6bb875abd": {
                "code": ".cellar.door",
                "time": {
                    "$numberLong": "60"
                },
                "correct": "Correct"
            },
            "8c9feac04348414f": {
                "code": ".door.cellar",
                "time": {
                    "$numberLong": "10"
                },
                "correct": "Correct"
            },
            "8ce246e288c504b7": {
                "code": ".door.cellar",
                "time": {
                    "$numberLong": "16"
                },
                "correct": "Correct"
            },
            "8d0b871a3aac7646": {
                "code": ".cellar .door",
                "time": {
                    "$numberLong": "147"
                },
                "correct": "Incorrect"
            },
            "8efb6e527bd50aae": {
                "code": ".door.cellar",
                "time": {
                    "$numberLong": "65"
                },
                "correct": "Correct"
            },
            "92352b0b01aac98b": {
                "code": "div:first-child",
                "time": {
                    "$numberLong": "137"
                },
                "correct": "Incorrect"
            },
            "93e87af5faea4465": {
                "code": ".door.cellar",
                "time": {
                    "$numberLong": "31"
                },
                "correct": "Correct"
            },
            "94ae2983d85b56f3": {
                "code": ".door.cellar",
                "time": {
                    "$numberLong": "29"
                },
                "correct": "Correct"
            },
            "94bac471a8a06f41": {
                "code": ".cellar.door",
                "time": {
                    "$numberLong": "35"
                },
                "correct": "Correct"
            },
            "94e6f0f36d96cca7": {
                "code": ".door.cellar",
                "time": {
                    "$numberLong": "60"
                },
                "correct": "Correct"
            },
            "95da8c87fe0966a9": {
                "code": ".cellar.door",
                "time": {
                    "$numberLong": "67"
                },
                "correct": "Correct"
            },
            "9615130025e3bf23": {
                "code": "div, div, .behind cellar door .door cellar ",
                "time": {
                    "$numberLong": "147"
                },
                "correct": "Incorrect"
            },
            "96a9d51e700ea6d9": {
                "code": ".cellar.door",
                "time": {
                    "$numberLong": "37"
                },
                "correct": "Correct"
            },
            "96c9015ae13475fb": {
                "code": ".cellar.door",
                "time": {
                    "$numberLong": "43"
                },
                "correct": "Correct"
            },
            "97dbe566f05bad1e": {
                "code": ".behind.cellar, .door.cellar",
                "time": {
                    "$numberLong": "41"
                },
                "correct": "Correct"
            },
            "9a1d3ecd70ce4b81": {
                "code": ".cellar.door",
                "time": {
                    "$numberLong": "15"
                },
                "correct": "Correct"
            },
            "9ba3cd7d2209cdb1": {
                "code": "[class=door cellar],[class=",
                "time": {
                    "$numberLong": "146"
                },
                "correct": "Incorrect"
            },
            "9decf80a3668a04c": {
                "code": ".door.cellar",
                "time": {
                    "$numberLong": "4"
                },
                "correct": "Correct"
            },
            "9e1ad98e7ed497c0": {
                "code": ".door.cellar",
                "time": {
                    "$numberLong": "85"
                },
                "correct": "Correct"
            },
            "9e8ceb488c61bfc6": {
                "code": "[class~=cellar]",
                "time": {
                    "$numberLong": "121"
                },
                "correct": "Incorrect"
            },
            "9eb7f3047b78db41": {
                "code": "[class= door cellar], [class = behind cellar door]",
                "time": {
                    "$numberLong": "116"
                },
                "correct": "Correct"
            },
            "9f3c76f5aebfad0a": {
                "code": ".behind, .door.cellar",
                "time": {
                    "$numberLong": "24"
                },
                "correct": "Correct"
            },
            "9f57ba8fbeaabc8f": {
                "code": "[class=door cellar],[class^=behind]",
                "time": {
                    "$numberLong": "115"
                },
                "correct": "Correct"
            },
            "9f79120ff09e7b32": {
                "code": "[class=door cellar]",
                "time": {
                    "$numberLong": "126"
                },
                "correct": "Incorrect"
            },
            "9f98758762638c79": {
                "code": ".door.cellar",
                "time": {
                    "$numberLong": "34"
                },
                "correct": "Correct"
            },
            "9fc6640ffb5bcf88": {
                "code": ".cellar.door",
                "time": {
                    "$numberLong": "43"
                },
                "correct": "Correct"
            },
            "a59abf0ef6dd72ee": {
                "code": ".cellar.door",
                "time": {
                    "$numberLong": "38"
                },
                "correct": "Correct"
            },
            "a5cff54715b5e728": {
                "code": "div[class^='door '],div[class$=' door']",
                "time": {
                    "$numberLong": "145"
                },
                "correct": "Incorrect"
            },
            "a68d50ef4eaf5330": {
                "code": "div[class*='cellar']",
                "time": {
                    "$numberLong": "150"
                },
                "correct": "Incorrect"
            },
            "a7faf246f1fec897": {
                "code": "[class~='cellar'][class~='door']",
                "time": {
                    "$numberLong": "117"
                },
                "correct": "Correct"
            },
            "a82a83d5b2316bbb": {
                "code": "[class=cellar door]",
                "time": {
                    "$numberLong": "140"
                },
                "correct": "Incorrect"
            },
            "a87fa4ebabc2a0ce": {
                "code": "div.door.cellar",
                "time": {
                    "$numberLong": "17"
                },
                "correct": "Correct"
            },
            "ac306151b36609fd": {
                "code": ".door.cellar",
                "time": {
                    "$numberLong": "21"
                },
                "correct": "Correct"
            },
            "ad1db3469049502b": {
                "code": "[class~=door][class~=cellar]",
                "time": {
                    "$numberLong": "86"
                },
                "correct": "Correct"
            },
            "add0cf5b0e6f0061": {
                "code": ".cellar003e.door003e.cellar",
                "time": {
                    "$numberLong": "135"
                },
                "correct": "Incorrect"
            },
            "ade8a9fbb5003944": {
                "code": ".door.cellar",
                "time": {
                    "$numberLong": "43"
                },
                "correct": "Correct"
            },
            "ae9e54473d676c54": {
                "code": ".cellar.door",
                "time": {
                    "$numberLong": "34"
                },
                "correct": "Correct"
            },
            "af5c9cf12b2832c8": {
                "code": ".dor .begind, .door.cellar",
                "time": {
                    "$numberLong": "87"
                },
                "correct": "Correct"
            },
            "affe91192214b1ab": {
                "code": ".behind cellar door, .door cellar",
                "time": {
                    "$numberLong": "129"
                },
                "correct": "Incorrect"
            },
            "b0963184aa7f246b": {
                "code": ".cellar.door",
                "time": {
                    "$numberLong": "45"
                },
                "correct": "Correct"
            },
            "b1926b5f5e8b806b": {
                "code": ".behind, .door.cellar",
                "time": {
                    "$numberLong": "66"
                },
                "correct": "Correct"
            },
            "b1cbf3ca65c56e0d": {
                "code": ".cellar.door",
                "time": {
                    "$numberLong": "22"
                },
                "correct": "Correct"
            },
            "b278646f280691cb": {
                "code": "[class^='cellar'] [class^='door']",
                "time": {
                    "$numberLong": "134"
                },
                "correct": "Incorrect"
            },
            "b2913665b1d38784": {
                "code": "div.cellar.door",
                "time": {
                    "$numberLong": "79"
                },
                "correct": "Correct"
            },
            "b46b33d779ec951f": {
                "code": ".door.cellar",
                "time": {
                    "$numberLong": "55"
                },
                "correct": "Correct"
            },
            "b4e84dc5f950be34": {
                "code": "div.door div.behind",
                "time": {
                    "$numberLong": "151"
                },
                "correct": "Incorrect"
            },
            "b4f4b5c6dfcb6d07": {
                "code": ".door.cellar",
                "time": {
                    "$numberLong": "41"
                },
                "correct": "Correct"
            },
            "b51a79256e2462a5": {
                "code": "div.cellar.door",
                "time": {
                    "$numberLong": "87"
                },
                "correct": "Correct"
            },
            "b7037f74a55b1ded": {
                "code": ".behind, div:nth-child(3)",
                "time": {
                    "$numberLong": "132"
                },
                "correct": "Correct"
            },
            "b70e0f3eadc8fa6a": {
                "code": "div003e div003e div .door",
                "time": {
                    "$numberLong": "141"
                },
                "correct": "Incorrect"
            },
            "b87bfaa63e377a71": {
                "code": ".cellar.door",
                "time": {
                    "$numberLong": "61"
                },
                "correct": "Correct"
            },
            "b913aff5711ffd5b": {
                "code": ".door.cellar",
                "time": {
                    "$numberLong": "64"
                },
                "correct": "Correct"
            },
            "b928c37c17806191": {
                "code": "div .cellar.door",
                "time": {
                    "$numberLong": "46"
                },
                "correct": "Correct"
            },
            "b9d1dfe7e37afeb2": {
                "code": "div .door.cellar",
                "time": {
                    "$numberLong": "96"
                },
                "correct": "Correct"
            },
            "b9f4eab4145bb27a": {
                "code": ".behind, .door.cellar",
                "time": {
                    "$numberLong": "50"
                },
                "correct": "Correct"
            },
            "bbe008738217e35f": {
                "code": ".door.cellar",
                "time": {
                    "$numberLong": "23"
                },
                "correct": "Correct"
            },
            "c1219d67fe1e51c2": {
                "code": "[class*='cellar'][class*='door']",
                "time": {
                    "$numberLong": "83"
                },
                "correct": "Correct"
            },
            "c13f401d134bbdb7": {
                "code": ".door.cellar",
                "time": {
                    "$numberLong": "69"
                },
                "correct": "Correct"
            },
            "c18131119872b238": {
                "code": "div[class=cellar door i]",
                "time": {
                    "$numberLong": "146"
                },
                "correct": "Incorrect"
            },
            "c3713ba000985baf": {
                "code": "div.door.cellar",
                "time": {
                    "$numberLong": "26"
                },
                "correct": "Correct"
            },
            "c486a74f6d914600": {
                "code": ".door.cellar",
                "time": {
                    "$numberLong": "18"
                },
                "correct": "Correct"
            },
            "c4b129ee6608ab4e": {
                "code": ".cellar.door",
                "time": {
                    "$numberLong": "32"
                },
                "correct": "Correct"
            },
            "c61f85976fa0f880": {
                "code": ".door.cellar",
                "time": {
                    "$numberLong": "31"
                },
                "correct": "Correct"
            },
            "c62f6a6327b38df0": {
                "code": "div.behind",
                "time": {
                    "$numberLong": "145"
                },
                "correct": "Incorrect"
            },
            "c6782ec9fbfacc49": {
                "code": ".cellar.door",
                "time": {
                    "$numberLong": "13"
                },
                "correct": "Correct"
            },
            "c81886dde372d437": {
                "code": ".door.cellar",
                "time": {
                    "$numberLong": "63"
                },
                "correct": "Correct"
            },
            "c825ef755969b747": {
                "code": ".door.behind, .door.cellar",
                "time": {
                    "$numberLong": "49"
                },
                "correct": "Correct"
            },
            "c95463f778ff93ca": {
                "code": ".cellar.door",
                "time": {
                    "$numberLong": "20"
                },
                "correct": "Correct"
            },
            "ca348e67a411e031": {
                "code": ".door.cellar",
                "time": {
                    "$numberLong": "46"
                },
                "correct": "Correct"
            },
            "ca60244540ed755d": {
                "code": ".door.cellar",
                "time": {
                    "$numberLong": "19"
                },
                "correct": "Correct"
            },
            "cab8ee9fdec69ee8": {
                "code": ".cellar.door",
                "time": {
                    "$numberLong": "19"
                },
                "correct": "Correct"
            },
            "cb0b66dbc547fb22": {
                "code": ".door.cellar",
                "time": {
                    "$numberLong": "82"
                },
                "correct": "Correct"
            },
            "cb13a1cb1bf89459": {
                "code": ".door.cellar",
                "time": {
                    "$numberLong": "12"
                },
                "correct": "Correct"
            },
            "cf8643fb83e99e86": {
                "code": ".cellar.door",
                "time": {
                    "$numberLong": "15"
                },
                "correct": "Correct"
            },
            "cfa10e7229340f70": {
                "code": "#[behind cellar door] #[door cellar]",
                "time": {
                    "$numberLong": "145"
                },
                "correct": "Incorrect"
            },
            "d0b031eec85e6911": {
                "code": "[class*=cellar]",
                "time": {
                    "$numberLong": "145"
                },
                "correct": "Incorrect"
            },
            "d1346365de590ccf": {
                "code": "div 003e.cellar+.door",
                "time": {
                    "$numberLong": "149"
                },
                "correct": "Incorrect"
            },
            "d417fd8dd5e48efe": {
                "code": ".door.cellar",
                "time": {
                    "$numberLong": "47"
                },
                "correct": "Correct"
            },
            "d4a5deb84ce836e9": {
                "code": ".door.cellar",
                "time": {
                    "$numberLong": "63"
                },
                "correct": "Correct"
            },
            "d52887dab0fb075f": {
                "code": ".cellar.door",
                "time": {
                    "$numberLong": "52"
                },
                "correct": "Correct"
            },
            "d57163ee2e28e4b2": {
                "code": "div .cellar.door",
                "time": {
                    "$numberLong": "102"
                },
                "correct": "Correct"
            },
            "d66e5b11f0731612": {
                "code": ".cellar  .door",
                "time": {
                    "$numberLong": "140"
                },
                "correct": "Incorrect"
            },
            "d6f6f6c7a9301bbe": {
                "code": ".door .cellar",
                "time": {
                    "$numberLong": "131"
                },
                "correct": "Incorrect"
            },
            "d8c54e85ccd5b21c": {
                "code": ".cellar.door",
                "time": {
                    "$numberLong": "23"
                },
                "correct": "Correct"
            },
            "d9c232089e7ae571": {
                "code": ".door",
                "time": {
                    "$numberLong": "147"
                },
                "correct": "Incorrect"
            },
            "d9f697ce2a414d53": {
                "code": ".cellar.door",
                "time": {
                    "$numberLong": "81"
                },
                "correct": "Correct"
            },
            "db9d65f484e4d137": {
                "code": "div.cellar.door",
                "time": {
                    "$numberLong": "75"
                },
                "correct": "Correct"
            },
            "dba3419fda42d93b": {
                "code": ".cellar.door ",
                "time": {
                    "$numberLong": "38"
                },
                "correct": "Correct"
            },
            "dd7da88658f252c6": {
                "code": ".cellar.door",
                "time": {
                    "$numberLong": "61"
                },
                "correct": "Correct"
            },
            "dda5b4fc568bd7e7": {
                "code": "div .door cellar",
                "time": {
                    "$numberLong": "118"
                },
                "correct": "Incorrect"
            },
            "de33e71b1fe6587c": {
                "code": "[class~=door",
                "time": {
                    "$numberLong": "138"
                },
                "correct": "Incorrect"
            },
            "e0c2f4026aaf9e95": {
                "code": ".door.cellar",
                "time": {
                    "$numberLong": "15"
                },
                "correct": "Correct"
            },
            "e3dc40112d98c593": {
                "code": ".behind, [class=door cellar]",
                "time": {
                    "$numberLong": "93"
                },
                "correct": "Correct"
            },
            "e4692b2237b13270": {
                "code": "div[class$=cellar]",
                "time": {
                    "$numberLong": "140"
                },
                "correct": "Incorrect"
            },
            "e4924b8e7499d2e8": {
                "code": "[class~=door] [class~=cellar]",
                "time": {
                    "$numberLong": "146"
                },
                "correct": "Incorrect"
            },
            "e609701dd7bbad52": {
                "code": ".door.cellar",
                "time": {
                    "$numberLong": "44"
                },
                "correct": "Correct"
            },
            "e70b30486b960ca2": {
                "code": ".door div, div.door cellar",
                "time": {
                    "$numberLong": "149"
                },
                "correct": "Incorrect"
            },
            "e8a0543d60a31174": {
                "code": ".cellar.door",
                "time": {
                    "$numberLong": "29"
                },
                "correct": "Correct"
            },
            "eaa4e4a573bbdf56": {
                "code": "div.behind.cellar.door, div.door.cellar",
                "time": {
                    "$numberLong": "71"
                },
                "correct": "Correct"
            },
            "eb3c03ba165df064": {
                "code": ".cellar.door",
                "time": {
                    "$numberLong": "23"
                },
                "correct": "Correct"
            },
            "eb8cc549bad70c0b": {
                "code": ".cellar.door",
                "time": {
                    "$numberLong": "30"
                },
                "correct": "Correct"
            },
            "ec083ecdf7de4e1e": {
                "code": ".door.cellar",
                "time": {
                    "$numberLong": "46"
                },
                "correct": "Correct"
            },
            "f060b45c72736520": {
                "code": ".cellar.door",
                "time": {
                    "$numberLong": "70"
                },
                "correct": "Correct"
            },
            "f1208bfce1e68eca": {
                "code": ".cellar .doo",
                "time": {
                    "$numberLong": "151"
                },
                "correct": "Incorrect"
            },
            "f1544a9bfe0cd1ad": {
                "code": ".cellar.door",
                "time": {
                    "$numberLong": "146"
                },
                "correct": "Correct"
            },
            "f1c05dde29065cc5": {
                "code": ".cellar.door",
                "time": {
                    "$numberLong": "43"
                },
                "correct": "Correct"
            },
            "f1d6c124613e4dc3": {
                "code": ".door",
                "time": {
                    "$numberLong": "140"
                },
                "correct": "Incorrect"
            },
            "f271aeb2b417cd7e": {
                "code": ".door.cellar",
                "time": {
                    "$numberLong": "9"
                },
                "correct": "Correct"
            },
            "f3a692ff48114271": {
                "code": "[class*=cellar][class*=d]",
                "time": {
                    "$numberLong": "40"
                },
                "correct": "Correct"
            },
            "f3f8cd8f734b6082": {
                "code": "div[class=behind cellar door], div[class=door cellar]",
                "time": {
                    "$numberLong": "140"
                },
                "correct": "Correct"
            },
            "f47878383710d5dd": {
                "code": "",
                "time": {
                    "$numberLong": "149"
                },
                "correct": "Incorrect"
            },
            "f5c71290739e03bc": {
                "code": "div .cellar",
                "time": {
                    "$numberLong": "148"
                },
                "correct": "Incorrect"
            },
            "f5e8f96eee818651": {
                "code": ".door.cellar",
                "time": {
                    "$numberLong": "24"
                },
                "correct": "Correct"
            },
            "f6829fc871613b65": {
                "code": "div.cellar.door",
                "time": {
                    "$numberLong": "27"
                },
                "correct": "Correct"
            },
            "f711acd5f09bbdf6": {
                "code": ".cellar.door",
                "time": {
                    "$numberLong": "13"
                },
                "correct": "Correct"
            },
            "f7b65f853512e069": {
                "code": ".door.cellar",
                "time": {
                    "$numberLong": "35"
                },
                "correct": "Correct"
            },
            "f881ad2049d118b3": {
                "code": "div",
                "time": {
                    "$numberLong": "150"
                },
                "correct": "Incorrect"
            },
            "f8fea8fffdca4d43": {
                "code": "div.door.cellar",
                "time": {
                    "$numberLong": "63"
                },
                "correct": "Correct"
            },
            "f92800e8fbf079ac": {
                "code": "div:nth-child(3), [class=behind cellar door]",
                "time": {
                    "$numberLong": "84"
                },
                "correct": "Correct"
            },
            "f95bda2df3fd514e": {
                "code": ".cellar + .door, .behind",
                "time": {
                    "$numberLong": "132"
                },
                "correct": "Correct"
            },
            "fc98beaf678455f7": {
                "code": ".behind",
                "time": {
                    "$numberLong": "149"
                },
                "correct": "Incorrect"
            },
            "fcc928c4a2b55a70": {
                "code": ".door 003e di",
                "time": {
                    "$numberLong": "150"
                },
                "correct": "Incorrect"
            },
            "fdf286213a36687f": {
                "code": "div:",
                "time": {
                    "$numberLong": "148"
                },
                "correct": "Incorrect"
            },
            "fe5c52f5db2f1cea": {
                "code": ".door .selector",
                "time": {
                    "$numberLong": "150"
                },
                "correct": "Incorrect"
            },
            "fe981eb56e6aa2eb": {
                "code": ".cellar.door",
                "time": {
                    "$numberLong": "83"
                },
                "correct": "Correct"
            },
            "ff32798839089a73": {
                "code": ".cellar.door",
                "time": {
                    "$numberLong": "18"
                },
                "correct": "Correct"
            },
            "ffbc2f2c9e5c74bd": {
                "code": ".cellar.door",
                "time": {
                    "$numberLong": "26"
                },
                "correct": "Correct"
            }
        }
    }, {
        "puzzleIndex": {
            "$numberLong": "3"
        },
        "startTime": {
            "$date": "2018-11-26T18:28:36.146Z"
        },
        "solutions": {
            "02ef04098b9feadf": {
                "code": "article 003e *",
                "time": {
                    "$numberLong": "19"
                },
                "correct": "Correct"
            },
            "044b7810d5b21241": {
                "code": "article *",
                "time": {
                    "$numberLong": "11"
                },
                "correct": "Correct"
            },
            "0505908ca880da63": {
                "code": "article *",
                "time": {
                    "$numberLong": "102"
                },
                "correct": "Correct"
            },
            "0546833d81e75f8e": {
                "code": "article:nth",
                "time": {
                    "$numberLong": "126"
                },
                "correct": "Incorrect"
            },
            "074732b4e4e7f8c2": {
                "code": "article *",
                "time": {
                    "$numberLong": "26"
                },
                "correct": "Correct"
            },
            "07a655995e3a34a5": {
                "code": "article003e*",
                "time": {
                    "$numberLong": "54"
                },
                "correct": "Correct"
            },
            "0960cde31955389a": {
                "code": "article *",
                "time": {
                    "$numberLong": "20"
                },
                "correct": "Correct"
            },
            "096ccaaf699480f6": {
                "code": "article 003e *",
                "time": {
                    "$numberLong": "8"
                },
                "correct": "Correct"
            },
            "0a69fc38555dc6b2": {
                "code": "article:",
                "time": {
                    "$numberLong": "134"
                },
                "correct": "Incorrect"
            },
            "0a9dea941704145b": {
                "code": "article *",
                "time": {
                    "$numberLong": "39"
                },
                "correct": "Correct"
            },
            "0be05f1edf9ac0c9": {
                "code": "article *",
                "time": {
                    "$numberLong": "72"
                },
                "correct": "Correct"
            },
            "0c5610ad65714d07": {
                "code": "article *",
                "time": {
                    "$numberLong": "19"
                },
                "correct": "Correct"
            },
            "0cb7b730eb24cd97": {
                "code": "article *",
                "time": {
                    "$numberLong": "7"
                },
                "correct": "Correct"
            },
            "0dc9eee89960aa8c": {
                "code": "article 003e *",
                "time": {
                    "$numberLong": "117"
                },
                "correct": "Correct"
            },
            "0dcc5ccce8ea8724": {
                "code": "article.querySelectorAll",
                "time": {
                    "$numberLong": "150"
                },
                "correct": "Incorrect"
            },
            "0f62193273f6c54f": {
                "code": "article 003e *",
                "time": {
                    "$numberLong": "10"
                },
                "correct": "Correct"
            },
            "0f68663169b43508": {
                "code": "article *",
                "time": {
                    "$numberLong": "3"
                },
                "correct": "Correct"
            },
            "101366111d88b96c": {
                "code": "article003e*",
                "time": {
                    "$numberLong": "45"
                },
                "correct": "Correct"
            },
            "10878b8d10d2ae2b": {
                "code": "article 003e *",
                "time": {
                    "$numberLong": "5"
                },
                "correct": "Correct"
            },
            "10f87b94846c7dd2": {
                "code": "article *",
                "time": {
                    "$numberLong": "40"
                },
                "correct": "Correct"
            },
            "11013b79d46cadbc": {
                "code": "article *",
                "time": {
                    "$numberLong": "11"
                },
                "correct": "Correct"
            },
            "1291f8effc0fb1e1": {
                "code": "",
                "time": {
                    "$numberLong": "151"
                },
                "correct": "Incorrect"
            },
            "13516a858ed509bc": {
                "code": "article *",
                "time": {
                    "$numberLong": "28"
                },
                "correct": "Correct"
            },
            "13ebc713ecdb0c31": {
                "code": "article 003e *",
                "time": {
                    "$numberLong": "18"
                },
                "correct": "Correct"
            },
            "147cd0646fe74c51": {
                "code": "article *",
                "time": {
                    "$numberLong": "18"
                },
                "correct": "Correct"
            },
            "14d1d70f31909467": {
                "code": "",
                "time": {
                    "$numberLong": "146"
                },
                "correct": "Incorrect"
            },
            "15085d8de21f8860": {
                "code": "article *",
                "time": {
                    "$numberLong": "13"
                },
                "correct": "Correct"
            },
            "15d30689cee2cf3d": {
                "code": "article *",
                "time": {
                    "$numberLong": "8"
                },
                "correct": "Correct"
            },
            "1662516da39bd248": {
                "code": "article *",
                "time": {
                    "$numberLong": "8"
                },
                "correct": "Correct"
            },
            "167a5b071e75c309": {
                "code": "article 003e *",
                "time": {
                    "$numberLong": "11"
                },
                "correct": "Correct"
            },
            "174fb3408368ee14": {
                "code": "article *",
                "time": {
                    "$numberLong": "49"
                },
                "correct": "Correct"
            },
            "18a015071bed690d": {
                "code": "article003e*",
                "time": {
                    "$numberLong": "28"
                },
                "correct": "Correct"
            },
            "1a001ccb65b08947": {
                "code": "article 003e *",
                "time": {
                    "$numberLong": "11"
                },
                "correct": "Correct"
            },
            "1a495818e81cd4fa": {
                "code": "article *",
                "time": {
                    "$numberLong": "35"
                },
                "correct": "Correct"
            },
            "1b834e64b9e1baf7": {
                "code": "article *",
                "time": {
                    "$numberLong": "52"
                },
                "correct": "Correct"
            },
            "1c207b98b51ff73d": {
                "code": "*:not(article",
                "time": {
                    "$numberLong": "14"
                },
                "correct": "Correct"
            },
            "1c82933fa21c91af": {
                "code": "article003e*",
                "time": {
                    "$numberLong": "35"
                },
                "correct": "Correct"
            },
            "1c93a7a4711bff70": {
                "code": "article003e*",
                "time": {
                    "$numberLong": "24"
                },
                "correct": "Correct"
            },
            "1e349ef8c3bc9f7a": {
                "code": "div, a, article:nth-child(2), article:nth-child(3)",
                "time": {
                    "$numberLong": "135"
                },
                "correct": "Incorrect"
            },
            "1ea00611e97c6ea6": {
                "code": "div, article a, arctic",
                "time": {
                    "$numberLong": "151"
                },
                "correct": "Incorrect"
            },
            "201af50fd3b736ba": {
                "code": "article003e*",
                "time": {
                    "$numberLong": "30"
                },
                "correct": "Correct"
            },
            "214efb907df65375": {
                "code": "article *",
                "time": {
                    "$numberLong": "7"
                },
                "correct": "Correct"
            },
            "21b91283c47ddf5e": {
                "code": "article *",
                "time": {
                    "$numberLong": "19"
                },
                "correct": "Correct"
            },
            "2272f07c112385b1": {
                "code": "article *",
                "time": {
                    "$numberLong": "50"
                },
                "correct": "Correct"
            },
            "24337d34f84c3b29": {
                "code": "article 003e *",
                "time": {
                    "$numberLong": "23"
                },
                "correct": "Correct"
            },
            "249db831162d981a": {
                "code": "article003e",
                "time": {
                    "$numberLong": "144"
                },
                "correct": "Incorrect"
            },
            "24b339e7f88f73de": {
                "code": "article003e*",
                "time": {
                    "$numberLong": "54"
                },
                "correct": "Correct"
            },
            "24b54a457abe06f4": {
                "code": "article :nth-child(1n)",
                "time": {
                    "$numberLong": "117"
                },
                "correct": "Correct"
            },
            "24b848f155c0b3b7": {
                "code": "article *",
                "time": {
                    "$numberLong": "119"
                },
                "correct": "Correct"
            },
            "24d4763d41328ec4": {
                "code": "article *",
                "time": {
                    "$numberLong": "10"
                },
                "correct": "Correct"
            },
            "250e04bcb5fbe4f7": {
                "code": "article *",
                "time": {
                    "$numberLong": "12"
                },
                "correct": "Correct"
            },
            "25f9ecca44c1cd46": {
                "code": "article :nth-child(n)",
                "time": {
                    "$numberLong": "45"
                },
                "correct": "Correct"
            },
            "2651ba874a6c8d94": {
                "code": "article *",
                "time": {
                    "$numberLong": "54"
                },
                "correct": "Correct"
            },
            "27a619553e988074": {
                "code": "article 003e *",
                "time": {
                    "$numberLong": "121"
                },
                "correct": "Correct"
            },
            "27bef6362f6c3153": {
                "code": "article003e*",
                "time": {
                    "$numberLong": "11"
                },
                "correct": "Correct"
            },
            "284a6bf537e9bc4d": {
                "code": "article 003e *",
                "time": {
                    "$numberLong": "127"
                },
                "correct": "Correct"
            },
            "2aced08264036ea8": {
                "code": "article 003e *",
                "time": {
                    "$numberLong": "37"
                },
                "correct": "Correct"
            },
            "2c5dea2ca5f0d036": {
                "code": "article 003e *",
                "time": {
                    "$numberLong": "145"
                },
                "correct": "Correct"
            },
            "2cb5d5d4c8d4b19a": {
                "code": "Querselector(all)",
                "time": {
                    "$numberLong": "130"
                },
                "correct": "Incorrect"
            },
            "2cecb227110f5c46": {
                "code": "article 003e *",
                "time": {
                    "$numberLong": "90"
                },
                "correct": "Correct"
            },
            "2d960df34e645807": {
                "code": "article003e*",
                "time": {
                    "$numberLong": "23"
                },
                "correct": "Correct"
            },
            "2f201db12c801e85": {
                "code": "article *",
                "time": {
                    "$numberLong": "6"
                },
                "correct": "Correct"
            },
            "2f6a509eafbbb15c": {
                "code": "article *",
                "time": {
                    "$numberLong": "24"
                },
                "correct": "Correct"
            },
            "2fe6410a79f03048": {
                "code": "article *",
                "time": {
                    "$numberLong": "81"
                },
                "correct": "Correct"
            },
            "30959179ed650cd1": {
                "code": "article *",
                "time": {
                    "$numberLong": "7"
                },
                "correct": "Correct"
            },
            "34a24dd3d6aa750b": {
                "code": "article003e*",
                "time": {
                    "$numberLong": "17"
                },
                "correct": "Correct"
            },
            "34a4f2506ce3d182": {
                "code": "article 003e",
                "time": {
                    "$numberLong": "150"
                },
                "correct": "Incorrect"
            },
            "350ebb347c1ad556": {
                "code": "article:nth-child(1), article:nth-child(2), article:nth-child(3), article:nth-child(4)",
                "time": {
                    "$numberLong": "147"
                },
                "correct": "Incorrect"
            },
            "3549c28b38369744": {
                "code": "article *",
                "time": {
                    "$numberLong": "140"
                },
                "correct": "Correct"
            },
            "36cfe6300f509bd5": {
                "code": "div, span, a, p",
                "time": {
                    "$numberLong": "142"
                },
                "correct": "Incorrect"
            },
            "36e8f42039c184db": {
                "code": "article *",
                "time": {
                    "$numberLong": "8"
                },
                "correct": "Correct"
            },
            "3720867adefd1d26": {
                "code": "article003e*",
                "time": {
                    "$numberLong": "56"
                },
                "correct": "Correct"
            },
            "37b36e389ab7fe80": {
                "code": "article *",
                "time": {
                    "$numberLong": "14"
                },
                "correct": "Correct"
            },
            "39a2e48e45b49980": {
                "code": "article *",
                "time": {
                    "$numberLong": "74"
                },
                "correct": "Correct"
            },
            "39fe9e521f177219": {
                "code": "article003e *",
                "time": {
                    "$numberLong": "14"
                },
                "correct": "Correct"
            },
            "3a562770cb99a7f4": {
                "code": "article *",
                "time": {
                    "$numberLong": "123"
                },
                "correct": "Correct"
            },
            "3ab170848134a2ff": {
                "code": "article *",
                "time": {
                    "$numberLong": "8"
                },
                "correct": "Correct"
            },
            "3c5258124b324a11": {
                "code": "article003e*",
                "time": {
                    "$numberLong": "7"
                },
                "correct": "Correct"
            },
            "3cb038073228740f": {
                "code": "article *",
                "time": {
                    "$numberLong": "12"
                },
                "correct": "Correct"
            },
            "3ceec99315a58f1c": {
                "code": "article *",
                "time": {
                    "$numberLong": "90"
                },
                "correct": "Correct"
            },
            "3d63b802d486029c": {
                "code": "*:not(article)",
                "time": {
                    "$numberLong": "12"
                },
                "correct": "Correct"
            },
            "3dc599a7d0323291": {
                "code": "article *",
                "time": {
                    "$numberLong": "8"
                },
                "correct": "Correct"
            },
            "3efffe88342c3ee5": {
                "code": "*:not(article",
                "time": {
                    "$numberLong": "17"
                },
                "correct": "Correct"
            },
            "4139b7d383e0b65c": {
                "code": "article ",
                "time": {
                    "$numberLong": "151"
                },
                "correct": "Incorrect"
            },
            "418ca735584f1e3a": {
                "code": "article :nth-child(n",
                "time": {
                    "$numberLong": "53"
                },
                "correct": "Correct"
            },
            "42d7cc27726e8052": {
                "code": "article003e*",
                "time": {
                    "$numberLong": "52"
                },
                "correct": "Correct"
            },
            "454f621946346eed": {
                "code": "article *",
                "time": {
                    "$numberLong": "17"
                },
                "correct": "Correct"
            },
            "4639b56895b8be0c": {
                "code": "article 003e *",
                "time": {
                    "$numberLong": "47"
                },
                "correct": "Correct"
            },
            "491d66dad9c08b8c": {
                "code": "",
                "time": {
                    "$numberLong": "130"
                },
                "correct": "Incorrect"
            },
            "4c239ebf3cc37c4e": {
                "code": "article",
                "time": {
                    "$numberLong": "144"
                },
                "correct": "Incorrect"
            },
            "4d9c4a8566aaca2e": {
                "code": "article003e*",
                "time": {
                    "$numberLong": "65"
                },
                "correct": "Correct"
            },
            "4f2d802143f78fdc": {
                "code": "article *",
                "time": {
                    "$numberLong": "9"
                },
                "correct": "Correct"
            },
            "50a7d9c3900376d4": {
                "code": ":not(article",
                "time": {
                    "$numberLong": "42"
                },
                "correct": "Correct"
            },
            "50e718838ec3ed69": {
                "code": "article  *",
                "time": {
                    "$numberLong": "19"
                },
                "correct": "Correct"
            },
            "50f3b5f06c1d21a1": {
                "code": "article003e*",
                "time": {
                    "$numberLong": "78"
                },
                "correct": "Correct"
            },
            "5154c91bcd705420": {
                "code": "all: article;",
                "time": {
                    "$numberLong": "148"
                },
                "correct": "Incorrect"
            },
            "52131ae4ea1f02db": {
                "code": "*:not(article) ",
                "time": {
                    "$numberLong": "62"
                },
                "correct": "Correct"
            },
            "54757d6425a18652": {
                "code": "article *",
                "time": {
                    "$numberLong": "46"
                },
                "correct": "Correct"
            },
            "57a19a29c66f273a": {
                "code": "article",
                "time": {
                    "$numberLong": "151"
                },
                "correct": "Incorrect"
            },
            "597eaca2f80bb597": {
                "code": "article 003e *",
                "time": {
                    "$numberLong": "7"
                },
                "correct": "Correct"
            },
            "598dc546faccea96": {
                "code": "article [dix",
                "time": {
                    "$numberLong": "151"
                },
                "correct": "Incorrect"
            },
            "5cbbd38ec27acc0d": {
                "code": "div, span, p, a, ",
                "time": {
                    "$numberLong": "149"
                },
                "correct": "Incorrect"
            },
            "5f2b55c93f8dfc50": {
                "code": "article:f",
                "time": {
                    "$numberLong": "151"
                },
                "correct": "Incorrect"
            },
            "5fa0dc84f5366d5d": {
                "code": "article *",
                "time": {
                    "$numberLong": "9"
                },
                "correct": "Correct"
            },
            "607b0abda0c50b0c": {
                "code": "div span ",
                "time": {
                    "$numberLong": "150"
                },
                "correct": "Incorrect"
            },
            "608a221e132cfb0e": {
                "code": "article003e*",
                "time": {
                    "$numberLong": "52"
                },
                "correct": "Correct"
            },
            "610358eb6ad04b78": {
                "code": ":nth-child(3n-1),  :nth-child(4n-1), :nth-child(5n-1), :nth-child(4n-2)",
                "time": {
                    "$numberLong": "150"
                },
                "correct": "Incorrect"
            },
            "63da271cdd05f72a": {
                "code": "article *",
                "time": {
                    "$numberLong": "27"
                },
                "correct": "Correct"
            },
            "645a56e6b8555c48": {
                "code": "article *",
                "time": {
                    "$numberLong": "6"
                },
                "correct": "Correct"
            },
            "6877303d0bc23e9f": {
                "code": "article ",
                "time": {
                    "$numberLong": "113"
                },
                "correct": "Incorrect"
            },
            "690d4a3fa53cafe6": {
                "code": "article:all",
                "time": {
                    "$numberLong": "117"
                },
                "correct": "Incorrect"
            },
            "69a28f1b78baef56": {
                "code": "article003e*",
                "time": {
                    "$numberLong": "83"
                },
                "correct": "Correct"
            },
            "6a6720574c217df1": {
                "code": "article:first-child",
                "time": {
                    "$numberLong": "119"
                },
                "correct": "Incorrect"
            },
            "6ac831e069244801": {
                "code": "article 003e *",
                "time": {
                    "$numberLong": "37"
                },
                "correct": "Correct"
            },
            "6be274af29d69012": {
                "code": "article:only-child",
                "time": {
                    "$numberLong": "111"
                },
                "correct": "Incorrect"
            },
            "6be81d9143dc01ec": {
                "code": "",
                "time": {
                    "$numberLong": "103"
                },
                "correct": "Incorrect"
            },
            "6d772a3e4250147a": {
                "code": "article *",
                "time": {
                    "$numberLong": "11"
                },
                "correct": "Correct"
            },
            "703e792787acb96a": {
                "code": "",
                "time": {
                    "$numberLong": "143"
                },
                "correct": "Incorrect"
            },
            "70c2126a27a7ff92": {
                "code": "article *",
                "time": {
                    "$numberLong": "13"
                },
                "correct": "Correct"
            },
            "738824e90ee1a521": {
                "code": "div, a, article",
                "time": {
                    "$numberLong": "149"
                },
                "correct": "Incorrect"
            },
            "758f08ff64d4fbed": {
                "code": ":not(article ",
                "time": {
                    "$numberLong": "122"
                },
                "correct": "Correct"
            },
            "77bfda6e1e04388a": {
                "code": "article *",
                "time": {
                    "$numberLong": "6"
                },
                "correct": "Correct"
            },
            "784e2a35a5f02a51": {
                "code": "article:first-child, article: last-child, article: nth-child(2), article:n",
                "time": {
                    "$numberLong": "151"
                },
                "correct": "Incorrect"
            },
            "7876d097648ce241": {
                "code": "document.querySelectorAll(article)",
                "time": {
                    "$numberLong": "150"
                },
                "correct": "Incorrect"
            },
            "7913e18db9805385": {
                "code": "article 003e *",
                "time": {
                    "$numberLong": "12"
                },
                "correct": "Correct"
            },
            "79991eac2ed55971": {
                "code": "article *",
                "time": {
                    "$numberLong": "22"
                },
                "correct": "Correct"
            },
            "79d3d5a874c0fedb": {
                "code": "",
                "time": {
                    "$numberLong": "109"
                },
                "correct": "Incorrect"
            },
            "7cd8dd365d287663": {
                "code": "article",
                "time": {
                    "$numberLong": "149"
                },
                "correct": "Incorrect"
            },
            "7d9ab4e430491d3c": {
                "code": "article *",
                "time": {
                    "$numberLong": "11"
                },
                "correct": "Correct"
            },
            "7ef1e4b829e0b3d6": {
                "code": "article 003e *",
                "time": {
                    "$numberLong": "21"
                },
                "correct": "Correct"
            },
            "7f48769c943032b7": {
                "code": "*:not(article",
                "time": {
                    "$numberLong": "85"
                },
                "correct": "Correct"
            },
            "8150b6bbc7717883": {
                "code": "article *",
                "time": {
                    "$numberLong": "13"
                },
                "correct": "Correct"
            },
            "8190a67e4972f187": {
                "code": "article *",
                "time": {
                    "$numberLong": "19"
                },
                "correct": "Correct"
            },
            "82e8b6c0d88e0003": {
                "code": "article 003e *",
                "time": {
                    "$numberLong": "73"
                },
                "correct": "Correct"
            },
            "8373c834e2ac08bd": {
                "code": "article{div}",
                "time": {
                    "$numberLong": "151"
                },
                "correct": "Incorrect"
            },
            "85faf02e7002468e": {
                "code": "",
                "time": {
                    "$numberLong": "86"
                },
                "correct": "Incorrect"
            },
            "860ce7d23f02e7d3": {
                "code": "article *",
                "time": {
                    "$numberLong": "17"
                },
                "correct": "Correct"
            },
            "867cfd1b76269046": {
                "code": "article *",
                "time": {
                    "$numberLong": "43"
                },
                "correct": "Correct"
            },
            "8682698b0efcbb49": {
                "code": "article::only-child",
                "time": {
                    "$numberLong": "149"
                },
                "correct": "Incorrect"
            },
            "870545b496fb9231": {
                "code": "",
                "time": {
                    "$numberLong": "133"
                },
                "correct": "Incorrect"
            },
            "8875dc4e9876728e": {
                "code": "* :not(article",
                "time": {
                    "$numberLong": "39"
                },
                "correct": "Correct"
            },
            "898447718f00f0c7": {
                "code": "",
                "time": {
                    "$numberLong": "122"
                },
                "correct": "Incorrect"
            },
            "89f7ff1ba54776b9": {
                "code": "article 003e *",
                "time": {
                    "$numberLong": "15"
                },
                "correct": "Correct"
            },
            "89fb2b288bdbd651": {
                "code": "article *",
                "time": {
                    "$numberLong": "9"
                },
                "correct": "Correct"
            },
            "8b3e94c6bb875abd": {
                "code": "article *",
                "time": {
                    "$numberLong": "19"
                },
                "correct": "Correct"
            },
            "8c9feac04348414f": {
                "code": "article 003e *",
                "time": {
                    "$numberLong": "11"
                },
                "correct": "Correct"
            },
            "8ce246e288c504b7": {
                "code": "article *",
                "time": {
                    "$numberLong": "11"
                },
                "correct": "Correct"
            },
            "8d0b871a3aac7646": {
                "code": "article *",
                "time": {
                    "$numberLong": "138"
                },
                "correct": "Correct"
            },
            "8efb6e527bd50aae": {
                "code": "article003e *",
                "time": {
                    "$numberLong": "12"
                },
                "correct": "Correct"
            },
            "92352b0b01aac98b": {
                "code": "a",
                "time": {
                    "$numberLong": "150"
                },
                "correct": "Incorrect"
            },
            "93e87af5faea4465": {
                "code": "article:",
                "time": {
                    "$numberLong": "141"
                },
                "correct": "Incorrect"
            },
            "94ae2983d85b56f3": {
                "code": "article *",
                "time": {
                    "$numberLong": "20"
                },
                "correct": "Correct"
            },
            "94bac471a8a06f41": {
                "code": "article003e*",
                "time": {
                    "$numberLong": "74"
                },
                "correct": "Correct"
            },
            "94e6f0f36d96cca7": {
                "code": "article *",
                "time": {
                    "$numberLong": "35"
                },
                "correct": "Correct"
            },
            "95da8c87fe0966a9": {
                "code": "article003e*",
                "time": {
                    "$numberLong": "78"
                },
                "correct": "Correct"
            },
            "9615130025e3bf23": {
                "code": "",
                "time": {
                    "$numberLong": "132"
                },
                "correct": "Incorrect"
            },
            "96a9d51e700ea6d9": {
                "code": "article *",
                "time": {
                    "$numberLong": "112"
                },
                "correct": "Correct"
            },
            "96c9015ae13475fb": {
                "code": "article 003e *",
                "time": {
                    "$numberLong": "10"
                },
                "correct": "Correct"
            },
            "97dbe566f05bad1e": {
                "code": "*:not(article",
                "time": {
                    "$numberLong": "11"
                },
                "correct": "Correct"
            },
            "9a1d3ecd70ce4b81": {
                "code": "article 003e *",
                "time": {
                    "$numberLong": "6"
                },
                "correct": "Correct"
            },
            "9ba3cd7d2209cdb1": {
                "code": "article *",
                "time": {
                    "$numberLong": "31"
                },
                "correct": "Correct"
            },
            "9decf80a3668a04c": {
                "code": "article *",
                "time": {
                    "$numberLong": "15"
                },
                "correct": "Correct"
            },
            "9e1ad98e7ed497c0": {
                "code": "article *",
                "time": {
                    "$numberLong": "35"
                },
                "correct": "Correct"
            },
            "9e8ceb488c61bfc6": {
                "code": "",
                "time": {
                    "$numberLong": "145"
                },
                "correct": "Incorrect"
            },
            "9eb7f3047b78db41": {
                "code": "article :nth-child(1),article :nth-child(2),article :nth-child(3),article :nth-child(4)",
                "time": {
                    "$numberLong": "120"
                },
                "correct": "Correct"
            },
            "9f3c76f5aebfad0a": {
                "code": "article *",
                "time": {
                    "$numberLong": "18"
                },
                "correct": "Correct"
            },
            "9f57ba8fbeaabc8f": {
                "code": "article *",
                "time": {
                    "$numberLong": "18"
                },
                "correct": "Correct"
            },
            "9f79120ff09e7b32": {
                "code": "article 003e *",
                "time": {
                    "$numberLong": "98"
                },
                "correct": "Correct"
            },
            "9f98758762638c79": {
                "code": "article *",
                "time": {
                    "$numberLong": "13"
                },
                "correct": "Correct"
            },
            "9fc6640ffb5bcf88": {
                "code": "article *",
                "time": {
                    "$numberLong": "93"
                },
                "correct": "Correct"
            },
            "a59abf0ef6dd72ee": {
                "code": " article 003e*",
                "time": {
                    "$numberLong": "112"
                },
                "correct": "Correct"
            },
            "a5cff54715b5e728": {
                "code": "article003e*",
                "time": {
                    "$numberLong": "14"
                },
                "correct": "Correct"
            },
            "a68d50ef4eaf5330": {
                "code": "*:not(article",
                "time": {
                    "$numberLong": "75"
                },
                "correct": "Correct"
            },
            "a7faf246f1fec897": {
                "code": "article 003e *",
                "time": {
                    "$numberLong": "17"
                },
                "correct": "Correct"
            },
            "a82a83d5b2316bbb": {
                "code": "article *",
                "time": {
                    "$numberLong": "10"
                },
                "correct": "Correct"
            },
            "a87fa4ebabc2a0ce": {
                "code": "article003e*",
                "time": {
                    "$numberLong": "10"
                },
                "correct": "Correct"
            },
            "ac306151b36609fd": {
                "code": "article *",
                "time": {
                    "$numberLong": "52"
                },
                "correct": "Correct"
            },
            "ad1db3469049502b": {
                "code": "article :nth-child(n)",
                "time": {
                    "$numberLong": "143"
                },
                "correct": "Correct"
            },
            "add0cf5b0e6f0061": {
                "code": "*:not(article)",
                "time": {
                    "$numberLong": "114"
                },
                "correct": "Correct"
            },
            "ade8a9fbb5003944": {
                "code": "article 003e div",
                "time": {
                    "$numberLong": "150"
                },
                "correct": "Incorrect"
            },
            "ae9e54473d676c54": {
                "code": "article 003e *",
                "time": {
                    "$numberLong": "6"
                },
                "correct": "Correct"
            },
            "af5c9cf12b2832c8": {
                "code": "article:nth-child(1n)",
                "time": {
                    "$numberLong": "142"
                },
                "correct": "Incorrect"
            },
            "affe91192214b1ab": {
                "code": "*",
                "time": {
                    "$numberLong": "138"
                },
                "correct": "Incorrect"
            },
            "b0963184aa7f246b": {
                "code": "article :nth-child(n)",
                "time": {
                    "$numberLong": "48"
                },
                "correct": "Correct"
            },
            "b1926b5f5e8b806b": {
                "code": "article *",
                "time": {
                    "$numberLong": "19"
                },
                "correct": "Correct"
            },
            "b1cbf3ca65c56e0d": {
                "code": "article *",
                "time": {
                    "$numberLong": "18"
                },
                "correct": "Correct"
            },
            "b278646f280691cb": {
                "code": "article *",
                "time": {
                    "$numberLong": "16"
                },
                "correct": "Correct"
            },
            "b2913665b1d38784": {
                "code": "article *",
                "time": {
                    "$numberLong": "9"
                },
                "correct": "Correct"
            },
            "b46b33d779ec951f": {
                "code": "article *",
                "time": {
                    "$numberLong": "11"
                },
                "correct": "Correct"
            },
            "b4e84dc5f950be34": {
                "code": "article *",
                "time": {
                    "$numberLong": "23"
                },
                "correct": "Correct"
            },
            "b4f4b5c6dfcb6d07": {
                "code": "article *",
                "time": {
                    "$numberLong": "19"
                },
                "correct": "Correct"
            },
            "b51a79256e2462a5": {
                "code": "article *",
                "time": {
                    "$numberLong": "10"
                },
                "correct": "Correct"
            },
            "b7037f74a55b1ded": {
                "code": "article *",
                "time": {
                    "$numberLong": "141"
                },
                "correct": "Correct"
            },
            "b70e0f3eadc8fa6a": {
                "code": "article *",
                "time": {
                    "$numberLong": "47"
                },
                "correct": "Correct"
            },
            "b87bfaa63e377a71": {
                "code": "article 003e *",
                "time": {
                    "$numberLong": "43"
                },
                "correct": "Correct"
            },
            "b913aff5711ffd5b": {
                "code": ":nth-child(n)",
                "time": {
                    "$numberLong": "149"
                },
                "correct": "Incorrect"
            },
            "b928c37c17806191": {
                "code": "article *",
                "time": {
                    "$numberLong": "17"
                },
                "correct": "Correct"
            },
            "b9d1dfe7e37afeb2": {
                "code": "article 003e *",
                "time": {
                    "$numberLong": "96"
                },
                "correct": "Correct"
            },
            "b9f4eab4145bb27a": {
                "code": "article 003e *",
                "time": {
                    "$numberLong": "72"
                },
                "correct": "Correct"
            },
            "bbe008738217e35f": {
                "code": "article 003e *",
                "time": {
                    "$numberLong": "8"
                },
                "correct": "Correct"
            },
            "c1219d67fe1e51c2": {
                "code": "div  ",
                "time": {
                    "$numberLong": "148"
                },
                "correct": "Incorrect"
            },
            "c13f401d134bbdb7": {
                "code": "div, a",
                "time": {
                    "$numberLong": "150"
                },
                "correct": "Incorrect"
            },
            "c18131119872b238": {
                "code": " ",
                "time": {
                    "$numberLong": "142"
                },
                "correct": "Incorrect"
            },
            "c3713ba000985baf": {
                "code": "article 003e *",
                "time": {
                    "$numberLong": "9"
                },
                "correct": "Correct"
            },
            "c486a74f6d914600": {
                "code": "article *",
                "time": {
                    "$numberLong": "21"
                },
                "correct": "Correct"
            },
            "c4b129ee6608ab4e": {
                "code": "article *",
                "time": {
                    "$numberLong": "61"
                },
                "correct": "Correct"
            },
            "c61f85976fa0f880": {
                "code": "article * ",
                "time": {
                    "$numberLong": "23"
                },
                "correct": "Correct"
            },
            "c62f6a6327b38df0": {
                "code": "article 003e *",
                "time": {
                    "$numberLong": "73"
                },
                "correct": "Correct"
            },
            "c6782ec9fbfacc49": {
                "code": "article *",
                "time": {
                    "$numberLong": "13"
                },
                "correct": "Correct"
            },
            "c81886dde372d437": {
                "code": "article *",
                "time": {
                    "$numberLong": "87"
                },
                "correct": "Correct"
            },
            "c825ef755969b747": {
                "code": "article *",
                "time": {
                    "$numberLong": "7"
                },
                "correct": "Correct"
            },
            "c95463f778ff93ca": {
                "code": "article *",
                "time": {
                    "$numberLong": "4"
                },
                "correct": "Correct"
            },
            "ca348e67a411e031": {
                "code": "article *",
                "time": {
                    "$numberLong": "44"
                },
                "correct": "Correct"
            },
            "ca60244540ed755d": {
                "code": "article003e*",
                "time": {
                    "$numberLong": "15"
                },
                "correct": "Correct"
            },
            "cab8ee9fdec69ee8": {
                "code": "div:nth-child",
                "time": {
                    "$numberLong": "140"
                },
                "correct": "Incorrect"
            },
            "cb0b66dbc547fb22": {
                "code": "article *",
                "time": {
                    "$numberLong": "108"
                },
                "correct": "Correct"
            },
            "cb13a1cb1bf89459": {
                "code": "article *",
                "time": {
                    "$numberLong": "29"
                },
                "correct": "Correct"
            },
            "cf8643fb83e99e86": {
                "code": "article *",
                "time": {
                    "$numberLong": "18"
                },
                "correct": "Correct"
            },
            "cfa10e7229340f70": {
                "code": "",
                "time": {
                    "$numberLong": "129"
                },
                "correct": "Incorrect"
            },
            "d0b031eec85e6911": {
                "code": "article:nth-child(n)",
                "time": {
                    "$numberLong": "144"
                },
                "correct": "Incorrect"
            },
            "d1346365de590ccf": {
                "code": "article:n",
                "time": {
                    "$numberLong": "151"
                },
                "correct": "Incorrect"
            },
            "d417fd8dd5e48efe": {
                "code": "article *",
                "time": {
                    "$numberLong": "10"
                },
                "correct": "Correct"
            },
            "d4a5deb84ce836e9": {
                "code": "",
                "time": {
                    "$numberLong": "138"
                },
                "correct": "Incorrect"
            },
            "d52887dab0fb075f": {
                "code": "article 003e*",
                "time": {
                    "$numberLong": "101"
                },
                "correct": "Correct"
            },
            "d57163ee2e28e4b2": {
                "code": "article *",
                "time": {
                    "$numberLong": "11"
                },
                "correct": "Correct"
            },
            "d66e5b11f0731612": {
                "code": "article * ",
                "time": {
                    "$numberLong": "118"
                },
                "correct": "Correct"
            },
            "d6f6f6c7a9301bbe": {
                "code": "article div ,spa",
                "time": {
                    "$numberLong": "151"
                },
                "correct": "Incorrect"
            },
            "d8c54e85ccd5b21c": {
                "code": "article *",
                "time": {
                    "$numberLong": "9"
                },
                "correct": "Correct"
            },
            "d9c232089e7ae571": {
                "code": "article *",
                "time": {
                    "$numberLong": "55"
                },
                "correct": "Correct"
            },
            "d9f697ce2a414d53": {
                "code": ":not(article",
                "time": {
                    "$numberLong": "56"
                },
                "correct": "Correct"
            },
            "db9d65f484e4d137": {
                "code": "article *",
                "time": {
                    "$numberLong": "13"
                },
                "correct": "Correct"
            },
            "dba3419fda42d93b": {
                "code": "article *",
                "time": {
                    "$numberLong": "98"
                },
                "correct": "Correct"
            },
            "dd7da88658f252c6": {
                "code": "article *",
                "time": {
                    "$numberLong": "22"
                },
                "correct": "Correct"
            },
            "dda5b4fc568bd7e7": {
                "code": "div, a ",
                "time": {
                    "$numberLong": "126"
                },
                "correct": "Incorrect"
            },
            "de33e71b1fe6587c": {
                "code": "article *",
                "time": {
                    "$numberLong": "18"
                },
                "correct": "Correct"
            },
            "de7c64d3d7de70a5": {
                "code": ":not(article",
                "time": {
                    "$numberLong": "126"
                },
                "correct": "Correct"
            },
            "e0c2f4026aaf9e95": {
                "code": "article003e*",
                "time": {
                    "$numberLong": "14"
                },
                "correct": "Correct"
            },
            "e3dc40112d98c593": {
                "code": "article *",
                "time": {
                    "$numberLong": "7"
                },
                "correct": "Correct"
            },
            "e4692b2237b13270": {
                "code": "article 003e div",
                "time": {
                    "$numberLong": "127"
                },
                "correct": "Incorrect"
            },
            "e4924b8e7499d2e8": {
                "code": "article *",
                "time": {
                    "$numberLong": "11"
                },
                "correct": "Correct"
            },
            "e609701dd7bbad52": {
                "code": "article *",
                "time": {
                    "$numberLong": "19"
                },
                "correct": "Correct"
            },
            "e70b30486b960ca2": {
                "code": "article:nth-child()",
                "time": {
                    "$numberLong": "125"
                },
                "correct": "Incorrect"
            },
            "e8a0543d60a31174": {
                "code": "article *",
                "time": {
                    "$numberLong": "29"
                },
                "correct": "Correct"
            },
            "eaa4e4a573bbdf56": {
                "code": "article * ",
                "time": {
                    "$numberLong": "61"
                },
                "correct": "Correct"
            },
            "eb3c03ba165df064": {
                "code": "article 003e *",
                "time": {
                    "$numberLong": "66"
                },
                "correct": "Correct"
            },
            "eb8cc549bad70c0b": {
                "code": "article 003e * ",
                "time": {
                    "$numberLong": "21"
                },
                "correct": "Correct"
            },
            "ec083ecdf7de4e1e": {
                "code": "article 003e*",
                "time": {
                    "$numberLong": "27"
                },
                "correct": "Correct"
            },
            "f060b45c72736520": {
                "code": "article003e*",
                "time": {
                    "$numberLong": "13"
                },
                "correct": "Correct"
            },
            "f1544a9bfe0cd1ad": {
                "code": "article *",
                "time": {
                    "$numberLong": "34"
                },
                "correct": "Correct"
            },
            "f1c05dde29065cc5": {
                "code": "article *",
                "time": {
                    "$numberLong": "30"
                },
                "correct": "Correct"
            },
            "f1d6c124613e4dc3": {
                "code": "article003e*",
                "time": {
                    "$numberLong": "45"
                },
                "correct": "Correct"
            },
            "f271aeb2b417cd7e": {
                "code": "article *",
                "time": {
                    "$numberLong": "7"
                },
                "correct": "Correct"
            },
            "f3a692ff48114271": {
                "code": "article *:nth-child(n)",
                "time": {
                    "$numberLong": "48"
                },
                "correct": "Correct"
            },
            "f3f8cd8f734b6082": {
                "code": "article *",
                "time": {
                    "$numberLong": "37"
                },
                "correct": "Correct"
            },
            "f47878383710d5dd": {
                "code": "article *",
                "time": {
                    "$numberLong": "26"
                },
                "correct": "Correct"
            },
            "f5c71290739e03bc": {
                "code": "",
                "time": {
                    "$numberLong": "132"
                },
                "correct": "Incorrect"
            },
            "f5e8f96eee818651": {
                "code": "",
                "time": {
                    "$numberLong": "146"
                },
                "correct": "Incorrect"
            },
            "f6829fc871613b65": {
                "code": "div,a, div",
                "time": {
                    "$numberLong": "136"
                },
                "correct": "Incorrect"
            },
            "f711acd5f09bbdf6": {
                "code": "article 003e *",
                "time": {
                    "$numberLong": "14"
                },
                "correct": "Correct"
            },
            "f7b65f853512e069": {
                "code": "article 003e *",
                "time": {
                    "$numberLong": "85"
                },
                "correct": "Correct"
            },
            "f881ad2049d118b3": {
                "code": "*:not(article",
                "time": {
                    "$numberLong": "73"
                },
                "correct": "Correct"
            },
            "f8fea8fffdca4d43": {
                "code": "*:not(article)",
                "time": {
                    "$numberLong": "120"
                },
                "correct": "Correct"
            },
            "f92800e8fbf079ac": {
                "code": "article *",
                "time": {
                    "$numberLong": "6"
                },
                "correct": "Correct"
            },
            "f95bda2df3fd514e": {
                "code": "",
                "time": {
                    "$numberLong": "143"
                },
                "correct": "Incorrect"
            },
            "fc98beaf678455f7": {
                "code": ":not(article ",
                "time": {
                    "$numberLong": "125"
                },
                "correct": "Correct"
            },
            "fcc928c4a2b55a70": {
                "code": "article 003e *",
                "time": {
                    "$numberLong": "18"
                },
                "correct": "Correct"
            },
            "fdf286213a36687f": {
                "code": ":not(article",
                "time": {
                    "$numberLong": "88"
                },
                "correct": "Correct"
            },
            "fe5c52f5db2f1cea": {
                "code": "article 003e *",
                "time": {
                    "$numberLong": "52"
                },
                "correct": "Correct"
            },
            "fe981eb56e6aa2eb": {
                "code": "article *",
                "time": {
                    "$numberLong": "19"
                },
                "correct": "Correct"
            },
            "ff32798839089a73": {
                "code": "article *",
                "time": {
                    "$numberLong": "11"
                },
                "correct": "Correct"
            },
            "ffbc2f2c9e5c74bd": {
                "code": "div,a ",
                "time": {
                    "$numberLong": "141"
                },
                "correct": "Incorrect"
            }
        }
    }, {
        "puzzleIndex": {
            "$numberLong": "4"
        },
        "startTime": {
            "$date": "2018-11-26T18:32:01.466Z"
        },
        "solutions": {
            "02ef04098b9feadf": {
                "code": "div[data-anchor] + div",
                "time": {
                    "$numberLong": "93"
                },
                "correct": "Correct"
            },
            "044b7810d5b21241": {
                "code": "[data-anchor] + div",
                "time": {
                    "$numberLong": "44"
                },
                "correct": "Correct"
            },
            "0505908ca880da63": {
                "code": "[data-anchor]+div",
                "time": {
                    "$numberLong": "86"
                },
                "correct": "Correct"
            },
            "0546833d81e75f8e": {
                "code": "div['data-anchoir'] + div",
                "time": {
                    "$numberLong": "137"
                },
                "correct": "Incorrect"
            },
            "074732b4e4e7f8c2": {
                "code": "div[data-anchor] + div",
                "time": {
                    "$numberLong": "30"
                },
                "correct": "Correct"
            },
            "07a655995e3a34a5": {
                "code": "[data-anchor]+div",
                "time": {
                    "$numberLong": "116"
                },
                "correct": "Correct"
            },
            "0960cde31955389a": {
                "code": "div[data-anchor] + div",
                "time": {
                    "$numberLong": "37"
                },
                "correct": "Correct"
            },
            "096ccaaf699480f6": {
                "code": "[data-anchor] + div",
                "time": {
                    "$numberLong": "86"
                },
                "correct": "Correct"
            },
            "0a69fc38555dc6b2": {
                "code": "[data-anchor]+div",
                "time": {
                    "$numberLong": "88"
                },
                "correct": "Correct"
            },
            "0a9dea941704145b": {
                "code": "[data-anchor]+div",
                "time": {
                    "$numberLong": "116"
                },
                "correct": "Correct"
            },
            "0be05f1edf9ac0c9": {
                "code": "[data-anchor] + div",
                "time": {
                    "$numberLong": "105"
                },
                "correct": "Correct"
            },
            "0c5610ad65714d07": {
                "code": "div[data-anchor]+div",
                "time": {
                    "$numberLong": "42"
                },
                "correct": "Correct"
            },
            "0cb7b730eb24cd97": {
                "code": "[data-anchor] + div",
                "time": {
                    "$numberLong": "12"
                },
                "correct": "Correct"
            },
            "0dc9eee89960aa8c": {
                "code": "",
                "time": {
                    "$numberLong": "52"
                },
                "correct": "Incorrect"
            },
            "0dcc5ccce8ea8724": {
                "code": "[data-anchor]+div",
                "time": {
                    "$numberLong": "131"
                },
                "correct": "Correct"
            },
            "0f62193273f6c54f": {
                "code": "div.data-anchor 003e",
                "time": {
                    "$numberLong": "146"
                },
                "correct": "Incorrect"
            },
            "0f68663169b43508": {
                "code": "[data-anchor] + div",
                "time": {
                    "$numberLong": "3"
                },
                "correct": "Correct"
            },
            "101366111d88b96c": {
                "code": "div[data-anchor] + div",
                "time": {
                    "$numberLong": "136"
                },
                "correct": "Correct"
            },
            "10878b8d10d2ae2b": {
                "code": "[data-anchor] + div",
                "time": {
                    "$numberLong": "94"
                },
                "correct": "Correct"
            },
            "10f87b94846c7dd2": {
                "code": "div[data-anchor]+div",
                "time": {
                    "$numberLong": "59"
                },
                "correct": "Correct"
            },
            "11013b79d46cadbc": {
                "code": "div[data-anchor] + div",
                "time": {
                    "$numberLong": "29"
                },
                "correct": "Correct"
            },
            "1291f8effc0fb1e1": {
                "code": "[data-anchor]+div",
                "time": {
                    "$numberLong": "41"
                },
                "correct": "Correct"
            },
            "13516a858ed509bc": {
                "code": ".data-anchor + div",
                "time": {
                    "$numberLong": "109"
                },
                "correct": "Incorrect"
            },
            "13ebc713ecdb0c31": {
                "code": "[data-anchor] + *",
                "time": {
                    "$numberLong": "28"
                },
                "correct": "Correct"
            },
            "147cd0646fe74c51": {
                "code": "[data-anchor]+div",
                "time": {
                    "$numberLong": "76"
                },
                "correct": "Correct"
            },
            "14d1d70f31909467": {
                "code": "[data-anchor]+div",
                "time": {
                    "$numberLong": "130"
                },
                "correct": "Correct"
            },
            "15085d8de21f8860": {
                "code": "[data-anchor]+*",
                "time": {
                    "$numberLong": "52"
                },
                "correct": "Correct"
            },
            "15d30689cee2cf3d": {
                "code": "div[data-anchor] + div",
                "time": {
                    "$numberLong": "95"
                },
                "correct": "Correct"
            },
            "1662516da39bd248": {
                "code": "",
                "time": {
                    "$numberLong": "140"
                },
                "correct": "Incorrect"
            },
            "167a5b071e75c309": {
                "code": "div[data-anchor] + div",
                "time": {
                    "$numberLong": "46"
                },
                "correct": "Correct"
            },
            "174fb3408368ee14": {
                "code": ".data-anchor + div",
                "time": {
                    "$numberLong": "135"
                },
                "correct": "Incorrect"
            },
            "18a015071bed690d": {
                "code": "[data-anchor]+div",
                "time": {
                    "$numberLong": "35"
                },
                "correct": "Correct"
            },
            "1a001ccb65b08947": {
                "code": "div[data-anchor] + div",
                "time": {
                    "$numberLong": "63"
                },
                "correct": "Correct"
            },
            "1a495818e81cd4fa": {
                "code": "[data-anchor] + div",
                "time": {
                    "$numberLong": "106"
                },
                "correct": "Correct"
            },
            "1b834e64b9e1baf7": {
                "code": "[data-anchor]+div",
                "time": {
                    "$numberLong": "50"
                },
                "correct": "Correct"
            },
            "1c207b98b51ff73d": {
                "code": "[data-anchor]+div",
                "time": {
                    "$numberLong": "77"
                },
                "correct": "Correct"
            },
            "1c82933fa21c91af": {
                "code": "[data-anchor]+div",
                "time": {
                    "$numberLong": "43"
                },
                "correct": "Correct"
            },
            "1c93a7a4711bff70": {
                "code": "#data-anchor.вшм",
                "time": {
                    "$numberLong": "151"
                },
                "correct": "Incorrect"
            },
            "1e349ef8c3bc9f7a": {
                "code": "",
                "time": {
                    "$numberLong": "147"
                },
                "correct": "Incorrect"
            },
            "1ea00611e97c6ea6": {
                "code": "div[data-anchor]+div",
                "time": {
                    "$numberLong": "70"
                },
                "correct": "Correct"
            },
            "201af50fd3b736ba": {
                "code": "[data-anchor]+div",
                "time": {
                    "$numberLong": "47"
                },
                "correct": "Correct"
            },
            "214efb907df65375": {
                "code": "[data-anchor] + div",
                "time": {
                    "$numberLong": "33"
                },
                "correct": "Correct"
            },
            "21b91283c47ddf5e": {
                "code": "[data-anchor =]",
                "time": {
                    "$numberLong": "149"
                },
                "correct": "Incorrect"
            },
            "2272f07c112385b1": {
                "code": "[data-anchor] + div",
                "time": {
                    "$numberLong": "36"
                },
                "correct": "Correct"
            },
            "24337d34f84c3b29": {
                "code": "[data-anchor].next",
                "time": {
                    "$numberLong": "71"
                },
                "correct": "Incorrect"
            },
            "249db831162d981a": {
                "code": "",
                "time": {
                    "$numberLong": "147"
                },
                "correct": "Incorrect"
            },
            "24b339e7f88f73de": {
                "code": "[data-anchor]+div",
                "time": {
                    "$numberLong": "26"
                },
                "correct": "Correct"
            },
            "24b54a457abe06f4": {
                "code": "div.data-anchor 003e div",
                "time": {
                    "$numberLong": "147"
                },
                "correct": "Incorrect"
            },
            "24b848f155c0b3b7": {
                "code": "[data-anchor] +*",
                "time": {
                    "$numberLong": "60"
                },
                "correct": "Correct"
            },
            "24d4763d41328ec4": {
                "code": "[data-anchor] + div",
                "time": {
                    "$numberLong": "22"
                },
                "correct": "Correct"
            },
            "250e04bcb5fbe4f7": {
                "code": "[data-value=data-anchor] ",
                "time": {
                    "$numberLong": "100"
                },
                "correct": "Incorrect"
            },
            "25f9ecca44c1cd46": {
                "code": "[data-anchor] + div",
                "time": {
                    "$numberLong": "28"
                },
                "correct": "Correct"
            },
            "2651ba874a6c8d94": {
                "code": " .data-anchor  div",
                "time": {
                    "$numberLong": "108"
                },
                "correct": "Incorrect"
            },
            "27a619553e988074": {
                "code": "[data-anchor*=] + div",
                "time": {
                    "$numberLong": "149"
                },
                "correct": "Incorrect"
            },
            "27bef6362f6c3153": {
                "code": "div~.data-anchor",
                "time": {
                    "$numberLong": "151"
                },
                "correct": "Incorrect"
            },
            "284a6bf537e9bc4d": {
                "code": "div[data-anchor] + div",
                "time": {
                    "$numberLong": "96"
                },
                "correct": "Correct"
            },
            "2aced08264036ea8": {
                "code": "[data-anchor] ",
                "time": {
                    "$numberLong": "88"
                },
                "correct": "Incorrect"
            },
            "2c5dea2ca5f0d036": {
                "code": "div[data-anchor] + div",
                "time": {
                    "$numberLong": "57"
                },
                "correct": "Correct"
            },
            "2cb5d5d4c8d4b19a": {
                "code": "",
                "time": {
                    "$numberLong": "150"
                },
                "correct": "Incorrect"
            },
            "2cecb227110f5c46": {
                "code": "[data-ancor]/div",
                "time": {
                    "$numberLong": "145"
                },
                "correct": "Incorrect"
            },
            "2d960df34e645807": {
                "code": "div[data-anchor] ",
                "time": {
                    "$numberLong": "139"
                },
                "correct": "Incorrect"
            },
            "2f201db12c801e85": {
                "code": "div[data-anchor]+ div",
                "time": {
                    "$numberLong": "115"
                },
                "correct": "Correct"
            },
            "2f6a509eafbbb15c": {
                "code": "[data-anchor]+div",
                "time": {
                    "$numberLong": "20"
                },
                "correct": "Correct"
            },
            "2fe6410a79f03048": {
                "code": "[data-anchor] + div",
                "time": {
                    "$numberLong": "129"
                },
                "correct": "Correct"
            },
            "30959179ed650cd1": {
                "code": "div[data-anchor]+ div",
                "time": {
                    "$numberLong": "42"
                },
                "correct": "Correct"
            },
            "34a24dd3d6aa750b": {
                "code": "[data-anchor]+div",
                "time": {
                    "$numberLong": "52"
                },
                "correct": "Correct"
            },
            "34a4f2506ce3d182": {
                "code": "nth-child(4n)",
                "time": {
                    "$numberLong": "108"
                },
                "correct": "Incorrect"
            },
            "350ebb347c1ad556": {
                "code": "[data-anchor] + div",
                "time": {
                    "$numberLong": "57"
                },
                "correct": "Correct"
            },
            "3549c28b38369744": {
                "code": "div[data]+",
                "time": {
                    "$numberLong": "109"
                },
                "correct": "Incorrect"
            },
            "36cfe6300f509bd5": {
                "code": ".data-anchor(ltr)",
                "time": {
                    "$numberLong": "138"
                },
                "correct": "Incorrect"
            },
            "36e8f42039c184db": {
                "code": "[data-anchor]+div",
                "time": {
                    "$numberLong": "25"
                },
                "correct": "Correct"
            },
            "3720867adefd1d26": {
                "code": "[data-anchor] + div",
                "time": {
                    "$numberLong": "62"
                },
                "correct": "Correct"
            },
            "37b36e389ab7fe80": {
                "code": "div [data-anchor]+div",
                "time": {
                    "$numberLong": "62"
                },
                "correct": "Correct"
            },
            "39a2e48e45b49980": {
                "code": "div[data-anchor]+div",
                "time": {
                    "$numberLong": "59"
                },
                "correct": "Correct"
            },
            "39fe9e521f177219": {
                "code": "[data-anchor] + div",
                "time": {
                    "$numberLong": "43"
                },
                "correct": "Correct"
            },
            "3a562770cb99a7f4": {
                "code": "[data-anchor] + div",
                "time": {
                    "$numberLong": "26"
                },
                "correct": "Correct"
            },
            "3ab170848134a2ff": {
                "code": "[data-anchor] + div",
                "time": {
                    "$numberLong": "27"
                },
                "correct": "Correct"
            },
            "3c5258124b324a11": {
                "code": "[data-anchor]+div",
                "time": {
                    "$numberLong": "31"
                },
                "correct": "Correct"
            },
            "3cb038073228740f": {
                "code": "div[data-anchor]+div",
                "time": {
                    "$numberLong": "51"
                },
                "correct": "Correct"
            },
            "3ceec99315a58f1c": {
                "code": ".data-anchor + div",
                "time": {
                    "$numberLong": "128"
                },
                "correct": "Incorrect"
            },
            "3d63b802d486029c": {
                "code": ".data-anchor + div",
                "time": {
                    "$numberLong": "148"
                },
                "correct": "Incorrect"
            },
            "3dc599a7d0323291": {
                "code": "[data-anchor]+div",
                "time": {
                    "$numberLong": "38"
                },
                "correct": "Correct"
            },
            "3efffe88342c3ee5": {
                "code": "[data-anchor]+div",
                "time": {
                    "$numberLong": "83"
                },
                "correct": "Correct"
            },
            "4139b7d383e0b65c": {
                "code": "[data-anchor] + div",
                "time": {
                    "$numberLong": "14"
                },
                "correct": "Correct"
            },
            "418ca735584f1e3a": {
                "code": "[data-anchor] + div ",
                "time": {
                    "$numberLong": "34"
                },
                "correct": "Correct"
            },
            "42d7cc27726e8052": {
                "code": "#",
                "time": {
                    "$numberLong": "151"
                },
                "correct": "Incorrect"
            },
            "454f621946346eed": {
                "code": "[data-anchor] + div",
                "time": {
                    "$numberLong": "41"
                },
                "correct": "Correct"
            },
            "4639b56895b8be0c": {
                "code": "[data-anchor] + div",
                "time": {
                    "$numberLong": "61"
                },
                "correct": "Correct"
            },
            "491d66dad9c08b8c": {
                "code": ".data-anchor ",
                "time": {
                    "$numberLong": "150"
                },
                "correct": "Incorrect"
            },
            "4c239ebf3cc37c4e": {
                "code": "div003edata-anchor",
                "time": {
                    "$numberLong": "150"
                },
                "correct": "Incorrect"
            },
            "4d9c4a8566aaca2e": {
                "code": "[data-anchor]+*",
                "time": {
                    "$numberLong": "24"
                },
                "correct": "Correct"
            },
            "4f2d802143f78fdc": {
                "code": "[data-anchor]+div",
                "time": {
                    "$numberLong": "18"
                },
                "correct": "Correct"
            },
            "50a7d9c3900376d4": {
                "code": "[data-anchor] + div",
                "time": {
                    "$numberLong": "125"
                },
                "correct": "Correct"
            },
            "50e718838ec3ed69": {
                "code": "[data-anchor]+div",
                "time": {
                    "$numberLong": "15"
                },
                "correct": "Correct"
            },
            "50f3b5f06c1d21a1": {
                "code": "div ",
                "time": {
                    "$numberLong": "130"
                },
                "correct": "Incorrect"
            },
            "5154c91bcd705420": {
                "code": ".data-anchor[div]",
                "time": {
                    "$numberLong": "126"
                },
                "correct": "Incorrect"
            },
            "52131ae4ea1f02db": {
                "code": "[data-anchor] + div",
                "time": {
                    "$numberLong": "20"
                },
                "correct": "Correct"
            },
            "54757d6425a18652": {
                "code": "[data-anchor=] + div",
                "time": {
                    "$numberLong": "66"
                },
                "correct": "Correct"
            },
            "57a19a29c66f273a": {
                "code": "div [data-anchor]",
                "time": {
                    "$numberLong": "130"
                },
                "correct": "Incorrect"
            },
            "597eaca2f80bb597": {
                "code": "[data-anchor] + *",
                "time": {
                    "$numberLong": "14"
                },
                "correct": "Correct"
            },
            "598dc546faccea96": {
                "code": "div[data-anchor] + div",
                "time": {
                    "$numberLong": "69"
                },
                "correct": "Correct"
            },
            "5cbbd38ec27acc0d": {
                "code": "div 003e data-anchor",
                "time": {
                    "$numberLong": "85"
                },
                "correct": "Incorrect"
            },
            "5f2b55c93f8dfc50": {
                "code": "div[attr^=data-anchor]",
                "time": {
                    "$numberLong": "139"
                },
                "correct": "Incorrect"
            },
            "5fa0dc84f5366d5d": {
                "code": "[data-anchor]+div",
                "time": {
                    "$numberLong": "23"
                },
                "correct": "Correct"
            },
            "607b0abda0c50b0c": {
                "code": "div 003c .",
                "time": {
                    "$numberLong": "148"
                },
                "correct": "Incorrect"
            },
            "608a221e132cfb0e": {
                "code": "[data-anchor]+div",
                "time": {
                    "$numberLong": "151"
                },
                "correct": "Correct"
            },
            "610358eb6ad04b78": {
                "code": "[data-anchor]+div",
                "time": {
                    "$numberLong": "47"
                },
                "correct": "Correct"
            },
            "63da271cdd05f72a": {
                "code": "[data-anchor] + div",
                "time": {
                    "$numberLong": "38"
                },
                "correct": "Correct"
            },
            "645a56e6b8555c48": {
                "code": "[data-anchor] + div",
                "time": {
                    "$numberLong": "17"
                },
                "correct": "Correct"
            },
            "6877303d0bc23e9f": {
                "code": "",
                "time": {
                    "$numberLong": "125"
                },
                "correct": "Incorrect"
            },
            "690d4a3fa53cafe6": {
                "code": ".data-anchor+div",
                "time": {
                    "$numberLong": "126"
                },
                "correct": "Incorrect"
            },
            "6a6720574c217df1": {
                "code": "div[data-anchor]+div",
                "time": {
                    "$numberLong": "135"
                },
                "correct": "Correct"
            },
            "6ac831e069244801": {
                "code": "[data-anchor] + div",
                "time": {
                    "$numberLong": "32"
                },
                "correct": "Correct"
            },
            "6be274af29d69012": {
                "code": "div[data-anchor]+*",
                "time": {
                    "$numberLong": "48"
                },
                "correct": "Correct"
            },
            "6be81d9143dc01ec": {
                "code": "div[data-anchor]",
                "time": {
                    "$numberLong": "139"
                },
                "correct": "Incorrect"
            },
            "6d772a3e4250147a": {
                "code": "[data-anchor] + div",
                "time": {
                    "$numberLong": "119"
                },
                "correct": "Correct"
            },
            "703e792787acb96a": {
                "code": "div 003e data-achor",
                "time": {
                    "$numberLong": "151"
                },
                "correct": "Incorrect"
            },
            "70c2126a27a7ff92": {
                "code": "div[data-anchor] + div",
                "time": {
                    "$numberLong": "36"
                },
                "correct": "Correct"
            },
            "738824e90ee1a521": {
                "code": "",
                "time": {
                    "$numberLong": "138"
                },
                "correct": "Incorrect"
            },
            "77bfda6e1e04388a": {
                "code": "div[data-anchor] + div",
                "time": {
                    "$numberLong": "38"
                },
                "correct": "Correct"
            },
            "784e2a35a5f02a51": {
                "code": "div[data-anchor]+div",
                "time": {
                    "$numberLong": "46"
                },
                "correct": "Correct"
            },
            "7876d097648ce241": {
                "code": "div.data-anchor + div",
                "time": {
                    "$numberLong": "146"
                },
                "correct": "Incorrect"
            },
            "7913e18db9805385": {
                "code": "[data-anchor] + div",
                "time": {
                    "$numberLong": "26"
                },
                "correct": "Correct"
            },
            "79991eac2ed55971": {
                "code": "div[data-anchor]+div",
                "time": {
                    "$numberLong": "106"
                },
                "correct": "Correct"
            },
            "79d3d5a874c0fedb": {
                "code": ".data-anchor ~ div",
                "time": {
                    "$numberLong": "116"
                },
                "correct": "Incorrect"
            },
            "7cd8dd365d287663": {
                "code": "[data-anchor] ",
                "time": {
                    "$numberLong": "118"
                },
                "correct": "Incorrect"
            },
            "7d9ab4e430491d3c": {
                "code": "[data-anchor] + div",
                "time": {
                    "$numberLong": "48"
                },
                "correct": "Correct"
            },
            "7ef1e4b829e0b3d6": {
                "code": "",
                "time": {
                    "$numberLong": "133"
                },
                "correct": "Incorrect"
            },
            "7f48769c943032b7": {
                "code": "[data-anchor]+*",
                "time": {
                    "$numberLong": "38"
                },
                "correct": "Correct"
            },
            "8150b6bbc7717883": {
                "code": "[data-anchor] + div",
                "time": {
                    "$numberLong": "43"
                },
                "correct": "Correct"
            },
            "8190a67e4972f187": {
                "code": "[data-anchor]+div",
                "time": {
                    "$numberLong": "41"
                },
                "correct": "Correct"
            },
            "82e8b6c0d88e0003": {
                "code": "[data-anchor]+div",
                "time": {
                    "$numberLong": "36"
                },
                "correct": "Correct"
            },
            "8373c834e2ac08bd": {
                "code": "div*",
                "time": {
                    "$numberLong": "150"
                },
                "correct": "Incorrect"
            },
            "85faf02e7002468e": {
                "code": "[data-anchor] + div",
                "time": {
                    "$numberLong": "25"
                },
                "correct": "Correct"
            },
            "860ce7d23f02e7d3": {
                "code": "[data-anchor]+1",
                "time": {
                    "$numberLong": "110"
                },
                "correct": "Incorrect"
            },
            "867cfd1b76269046": {
                "code": "div[data-anchor] + div",
                "time": {
                    "$numberLong": "66"
                },
                "correct": "Correct"
            },
            "8682698b0efcbb49": {
                "code": "[data-anchor] + div",
                "time": {
                    "$numberLong": "150"
                },
                "correct": "Correct"
            },
            "870545b496fb9231": {
                "code": ".data-anchor",
                "time": {
                    "$numberLong": "128"
                },
                "correct": "Incorrect"
            },
            "8875dc4e9876728e": {
                "code": "[data-anchor]+div",
                "time": {
                    "$numberLong": "23"
                },
                "correct": "Correct"
            },
            "898447718f00f0c7": {
                "code": "[div = data-anchor] ~ div",
                "time": {
                    "$numberLong": "144"
                },
                "correct": "Incorrect"
            },
            "89f7ff1ba54776b9": {
                "code": "[data-anchor] + div",
                "time": {
                    "$numberLong": "73"
                },
                "correct": "Correct"
            },
            "89fb2b288bdbd651": {
                "code": "[data-anchor]+div",
                "time": {
                    "$numberLong": "33"
                },
                "correct": "Correct"
            },
            "8b3e94c6bb875abd": {
                "code": "div[data-anchor] + div",
                "time": {
                    "$numberLong": "21"
                },
                "correct": "Correct"
            },
            "8c9feac04348414f": {
                "code": "div[data-anchor] + div",
                "time": {
                    "$numberLong": "32"
                },
                "correct": "Correct"
            },
            "8ce246e288c504b7": {
                "code": "[data-anchor] + div",
                "time": {
                    "$numberLong": "30"
                },
                "correct": "Correct"
            },
            "8d0b871a3aac7646": {
                "code": "div+div+div+div+div+div±",
                "time": {
                    "$numberLong": "151"
                },
                "correct": "Incorrect"
            },
            "8efb6e527bd50aae": {
                "code": "[data-anchor] + div",
                "time": {
                    "$numberLong": "57"
                },
                "correct": "Correct"
            },
            "92352b0b01aac98b": {
                "code": "div[data-anchor]+div",
                "time": {
                    "$numberLong": "105"
                },
                "correct": "Correct"
            },
            "93e87af5faea4465": {
                "code": "div[data-anchor]+div",
                "time": {
                    "$numberLong": "53"
                },
                "correct": "Correct"
            },
            "94ae2983d85b56f3": {
                "code": "[data-anchor] + div",
                "time": {
                    "$numberLong": "43"
                },
                "correct": "Correct"
            },
            "94bac471a8a06f41": {
                "code": "data-anchor + *",
                "time": {
                    "$numberLong": "125"
                },
                "correct": "Incorrect"
            },
            "94e6f0f36d96cca7": {
                "code": "[data-anchor] + div",
                "time": {
                    "$numberLong": "53"
                },
                "correct": "Correct"
            },
            "95da8c87fe0966a9": {
                "code": "[data-anchor] ~ ",
                "time": {
                    "$numberLong": "151"
                },
                "correct": "Incorrect"
            },
            "9615130025e3bf23": {
                "code": "",
                "time": {
                    "$numberLong": "150"
                },
                "correct": "Incorrect"
            },
            "96a9d51e700ea6d9": {
                "code": "[data-anchor] + div",
                "time": {
                    "$numberLong": "104"
                },
                "correct": "Correct"
            },
            "96c9015ae13475fb": {
                "code": "[data-anchor] + div",
                "time": {
                    "$numberLong": "121"
                },
                "correct": "Correct"
            },
            "97dbe566f05bad1e": {
                "code": "[data-anchor]+div",
                "time": {
                    "$numberLong": "20"
                },
                "correct": "Correct"
            },
            "9a1d3ecd70ce4b81": {
                "code": "[data-anchor] + div",
                "time": {
                    "$numberLong": "12"
                },
                "correct": "Correct"
            },
            "9ba3cd7d2209cdb1": {
                "code": "[data=data-anchor]",
                "time": {
                    "$numberLong": "146"
                },
                "correct": "Incorrect"
            },
            "9decf80a3668a04c": {
                "code": "[data-anchor]+div",
                "time": {
                    "$numberLong": "11"
                },
                "correct": "Correct"
            },
            "9e1ad98e7ed497c0": {
                "code": "",
                "time": {
                    "$numberLong": "71"
                },
                "correct": "Incorrect"
            },
            "9e8ceb488c61bfc6": {
                "code": "[data-anchor]+div",
                "time": {
                    "$numberLong": "72"
                },
                "correct": "Correct"
            },
            "9eb7f3047b78db41": {
                "code": "[data-anchor]+div",
                "time": {
                    "$numberLong": "68"
                },
                "correct": "Correct"
            },
            "9f3c76f5aebfad0a": {
                "code": "[data-anchor]+div",
                "time": {
                    "$numberLong": "10"
                },
                "correct": "Correct"
            },
            "9f57ba8fbeaabc8f": {
                "code": "div[data-anchor]+div",
                "time": {
                    "$numberLong": "39"
                },
                "correct": "Correct"
            },
            "9f79120ff09e7b32": {
                "code": "div.data-anchor + div",
                "time": {
                    "$numberLong": "128"
                },
                "correct": "Incorrect"
            },
            "9f98758762638c79": {
                "code": "div[data-anchor] + div",
                "time": {
                    "$numberLong": "80"
                },
                "correct": "Correct"
            },
            "9fc6640ffb5bcf88": {
                "code": "[data-anchor]+div",
                "time": {
                    "$numberLong": "38"
                },
                "correct": "Correct"
            },
            "a59abf0ef6dd72ee": {
                "code": "[data-anchor]+div",
                "time": {
                    "$numberLong": "29"
                },
                "correct": "Correct"
            },
            "a5cff54715b5e728": {
                "code": "div [data-anchor]+div",
                "time": {
                    "$numberLong": "69"
                },
                "correct": "Correct"
            },
            "a68d50ef4eaf5330": {
                "code": "",
                "time": {
                    "$numberLong": "140"
                },
                "correct": "Incorrect"
            },
            "a7faf246f1fec897": {
                "code": "[data-anchor] + div",
                "time": {
                    "$numberLong": "24"
                },
                "correct": "Correct"
            },
            "a82a83d5b2316bbb": {
                "code": "[data-anchor] + div",
                "time": {
                    "$numberLong": "86"
                },
                "correct": "Correct"
            },
            "a87fa4ebabc2a0ce": {
                "code": "[data-anchor]+*",
                "time": {
                    "$numberLong": "16"
                },
                "correct": "Correct"
            },
            "ac306151b36609fd": {
                "code": "*not div[]",
                "time": {
                    "$numberLong": "119"
                },
                "correct": "Incorrect"
            },
            "ad1db3469049502b": {
                "code": "[data-anchor] + div",
                "time": {
                    "$numberLong": "94"
                },
                "correct": "Correct"
            },
            "add0cf5b0e6f0061": {
                "code": "[data-anchor]+div",
                "time": {
                    "$numberLong": "87"
                },
                "correct": "Correct"
            },
            "ade8a9fbb5003944": {
                "code": "[data-anchor] ",
                "time": {
                    "$numberLong": "139"
                },
                "correct": "Incorrect"
            },
            "ae9e54473d676c54": {
                "code": "[data-anchor] + div",
                "time": {
                    "$numberLong": "21"
                },
                "correct": "Correct"
            },
            "af5c9cf12b2832c8": {
                "code": "div[data-anchor]+div",
                "time": {
                    "$numberLong": "124"
                },
                "correct": "Correct"
            },
            "affe91192214b1ab": {
                "code": "",
                "time": {
                    "$numberLong": "147"
                },
                "correct": "Incorrect"
            },
            "b0963184aa7f246b": {
                "code": "data-colums",
                "time": {
                    "$numberLong": "150"
                },
                "correct": "Incorrect"
            },
            "b1926b5f5e8b806b": {
                "code": "[data-anchor] + div",
                "time": {
                    "$numberLong": "89"
                },
                "correct": "Correct"
            },
            "b1cbf3ca65c56e0d": {
                "code": "div[data-anchor] + div",
                "time": {
                    "$numberLong": "66"
                },
                "correct": "Correct"
            },
            "b278646f280691cb": {
                "code": "div. + div",
                "time": {
                    "$numberLong": "150"
                },
                "correct": "Incorrect"
            },
            "b2913665b1d38784": {
                "code": "div[data-anchor] + div",
                "time": {
                    "$numberLong": "57"
                },
                "correct": "Correct"
            },
            "b46b33d779ec951f": {
                "code": "[data-anchor] + div",
                "time": {
                    "$numberLong": "78"
                },
                "correct": "Correct"
            },
            "b4e84dc5f950be34": {
                "code": "[data-anchor]+div",
                "time": {
                    "$numberLong": "64"
                },
                "correct": "Correct"
            },
            "b4f4b5c6dfcb6d07": {
                "code": "div[data-anchor]+div",
                "time": {
                    "$numberLong": "67"
                },
                "correct": "Correct"
            },
            "b51a79256e2462a5": {
                "code": "[data-anchor] + div",
                "time": {
                    "$numberLong": "53"
                },
                "correct": "Correct"
            },
            "b7037f74a55b1ded": {
                "code": "[data-anchor]+div",
                "time": {
                    "$numberLong": "65"
                },
                "correct": "Correct"
            },
            "b70e0f3eadc8fa6a": {
                "code": "div[target=data-anchor] 003e div",
                "time": {
                    "$numberLong": "147"
                },
                "correct": "Incorrect"
            },
            "b87bfaa63e377a71": {
                "code": "[data-anchor]+div",
                "time": {
                    "$numberLong": "70"
                },
                "correct": "Correct"
            },
            "b913aff5711ffd5b": {
                "code": "[data-anchor]+p",
                "time": {
                    "$numberLong": "142"
                },
                "correct": "Incorrect"
            },
            "b928c37c17806191": {
                "code": "[data-anchor] + div",
                "time": {
                    "$numberLong": "41"
                },
                "correct": "Correct"
            },
            "b9d1dfe7e37afeb2": {
                "code": "div[data-anchor]+div",
                "time": {
                    "$numberLong": "86"
                },
                "correct": "Correct"
            },
            "b9f4eab4145bb27a": {
                "code": "[data-anchor]+div",
                "time": {
                    "$numberLong": "20"
                },
                "correct": "Correct"
            },
            "bbe008738217e35f": {
                "code": "[data-anchor]+div",
                "time": {
                    "$numberLong": "26"
                },
                "correct": "Correct"
            },
            "c1219d67fe1e51c2": {
                "code": "[data-anchor] + div",
                "time": {
                    "$numberLong": "54"
                },
                "correct": "Correct"
            },
            "c13f401d134bbdb7": {
                "code": "div",
                "time": {
                    "$numberLong": "148"
                },
                "correct": "Incorrect"
            },
            "c18131119872b238": {
                "code": "div[data-anchor] + div",
                "time": {
                    "$numberLong": "45"
                },
                "correct": "Correct"
            },
            "c3713ba000985baf": {
                "code": "div[data-anchor] + div",
                "time": {
                    "$numberLong": "13"
                },
                "correct": "Correct"
            },
            "c486a74f6d914600": {
                "code": "[data-anchor] + div",
                "time": {
                    "$numberLong": "100"
                },
                "correct": "Correct"
            },
            "c4b129ee6608ab4e": {
                "code": "[data-anchor]+div",
                "time": {
                    "$numberLong": "103"
                },
                "correct": "Correct"
            },
            "c61f85976fa0f880": {
                "code": "div[data-anchor] + div",
                "time": {
                    "$numberLong": "38"
                },
                "correct": "Correct"
            },
            "c62f6a6327b38df0": {
                "code": "div[data-anchor] + *",
                "time": {
                    "$numberLong": "31"
                },
                "correct": "Correct"
            },
            "c6782ec9fbfacc49": {
                "code": "div[data-anchor]+div",
                "time": {
                    "$numberLong": "24"
                },
                "correct": "Correct"
            },
            "c81886dde372d437": {
                "code": "div[data-anchor] + div",
                "time": {
                    "$numberLong": "130"
                },
                "correct": "Correct"
            },
            "c825ef755969b747": {
                "code": "[data-anchor]+div",
                "time": {
                    "$numberLong": "89"
                },
                "correct": "Correct"
            },
            "c95463f778ff93ca": {
                "code": "[data-anchor]+div",
                "time": {
                    "$numberLong": "143"
                },
                "correct": "Correct"
            },
            "ca348e67a411e031": {
                "code": "div[data-anchor]+div",
                "time": {
                    "$numberLong": "64"
                },
                "correct": "Correct"
            },
            "ca60244540ed755d": {
                "code": "div[data-anchor]+*",
                "time": {
                    "$numberLong": "109"
                },
                "correct": "Correct"
            },
            "cab8ee9fdec69ee8": {
                "code": "[data-anchor]+div",
                "time": {
                    "$numberLong": "37"
                },
                "correct": "Correct"
            },
            "cb0b66dbc547fb22": {
                "code": "[data-anchor] + div",
                "time": {
                    "$numberLong": "118"
                },
                "correct": "Correct"
            },
            "cb13a1cb1bf89459": {
                "code": "[data-anchor]+div",
                "time": {
                    "$numberLong": "28"
                },
                "correct": "Correct"
            },
            "cf8643fb83e99e86": {
                "code": "[data-anchor]",
                "time": {
                    "$numberLong": "134"
                },
                "correct": "Incorrect"
            },
            "cfa10e7229340f70": {
                "code": "",
                "time": {
                    "$numberLong": "146"
                },
                "correct": "Incorrect"
            },
            "d0b031eec85e6911": {
                "code": "",
                "time": {
                    "$numberLong": "9"
                },
                "correct": "Incorrect"
            },
            "d1346365de590ccf": {
                "code": "div[data-anchor]+div",
                "time": {
                    "$numberLong": "61"
                },
                "correct": "Correct"
            },
            "d417fd8dd5e48efe": {
                "code": "[data-anchor] + div",
                "time": {
                    "$numberLong": "42"
                },
                "correct": "Correct"
            },
            "d4a5deb84ce836e9": {
                "code": "[data-anchor]+div",
                "time": {
                    "$numberLong": "133"
                },
                "correct": "Correct"
            },
            "d52887dab0fb075f": {
                "code": "[data-anchor]+div",
                "time": {
                    "$numberLong": "45"
                },
                "correct": "Correct"
            },
            "d57163ee2e28e4b2": {
                "code": "[data-anchor] + div",
                "time": {
                    "$numberLong": "47"
                },
                "correct": "Correct"
            },
            "d66e5b11f0731612": {
                "code": "div[data-anchor] + div ",
                "time": {
                    "$numberLong": "134"
                },
                "correct": "Correct"
            },
            "d6f6f6c7a9301bbe": {
                "code": "[data-anchor]+div",
                "time": {
                    "$numberLong": "61"
                },
                "correct": "Correct"
            },
            "d8c54e85ccd5b21c": {
                "code": "[data-anchor] + div",
                "time": {
                    "$numberLong": "19"
                },
                "correct": "Correct"
            },
            "d9c232089e7ae571": {
                "code": "div",
                "time": {
                    "$numberLong": "146"
                },
                "correct": "Incorrect"
            },
            "d9f697ce2a414d53": {
                "code": "",
                "time": {
                    "$numberLong": "138"
                },
                "correct": "Incorrect"
            },
            "db9d65f484e4d137": {
                "code": "div[data-anchor]+div",
                "time": {
                    "$numberLong": "65"
                },
                "correct": "Correct"
            },
            "dba3419fda42d93b": {
                "code": "",
                "time": {
                    "$numberLong": "107"
                },
                "correct": "Incorrect"
            },
            "dd7da88658f252c6": {
                "code": "[data-anchor] + div",
                "time": {
                    "$numberLong": "33"
                },
                "correct": "Correct"
            },
            "dda5b4fc568bd7e7": {
                "code": "[div=data-anchor]003e",
                "time": {
                    "$numberLong": "127"
                },
                "correct": "Incorrect"
            },
            "de33e71b1fe6587c": {
                "code": "[data-anchor] + div",
                "time": {
                    "$numberLong": "33"
                },
                "correct": "Correct"
            },
            "de7c64d3d7de70a5": {
                "code": "",
                "time": {
                    "$numberLong": "150"
                },
                "correct": "Incorrect"
            },
            "e0c2f4026aaf9e95": {
                "code": "[data-anchor]+div",
                "time": {
                    "$numberLong": "30"
                },
                "correct": "Correct"
            },
            "e3dc40112d98c593": {
                "code": "[data-anchor] + div",
                "time": {
                    "$numberLong": "23"
                },
                "correct": "Correct"
            },
            "e4692b2237b13270": {
                "code": "[data-anchor]+div",
                "time": {
                    "$numberLong": "71"
                },
                "correct": "Correct"
            },
            "e4924b8e7499d2e8": {
                "code": "[data-anchor] + div",
                "time": {
                    "$numberLong": "27"
                },
                "correct": "Correct"
            },
            "e609701dd7bbad52": {
                "code": "[data-anchor] + div",
                "time": {
                    "$numberLong": "54"
                },
                "correct": "Correct"
            },
            "e70b30486b960ca2": {
                "code": "",
                "time": {
                    "$numberLong": "127"
                },
                "correct": "Incorrect"
            },
            "e8a0543d60a31174": {
                "code": "[data-anchor] + div",
                "time": {
                    "$numberLong": "84"
                },
                "correct": "Correct"
            },
            "eaa4e4a573bbdf56": {
                "code": "[data-anchor] + div",
                "time": {
                    "$numberLong": "53"
                },
                "correct": "Correct"
            },
            "eb3c03ba165df064": {
                "code": "[data-achor]",
                "time": {
                    "$numberLong": "150"
                },
                "correct": "Incorrect"
            },
            "eb8cc549bad70c0b": {
                "code": "[data-anchor]+*",
                "time": {
                    "$numberLong": "38"
                },
                "correct": "Correct"
            },
            "ec083ecdf7de4e1e": {
                "code": "div.data-anchor + div",
                "time": {
                    "$numberLong": "73"
                },
                "correct": "Incorrect"
            },
            "f060b45c72736520": {
                "code": "[data-anchor]+div",
                "time": {
                    "$numberLong": "117"
                },
                "correct": "Correct"
            },
            "f1544a9bfe0cd1ad": {
                "code": "[data-anchor] + div",
                "time": {
                    "$numberLong": "33"
                },
                "correct": "Correct"
            },
            "f1c05dde29065cc5": {
                "code": "div[dataanchor",
                "time": {
                    "$numberLong": "150"
                },
                "correct": "Incorrect"
            },
            "f1d6c124613e4dc3": {
                "code": "div [div-anchor] + div",
                "time": {
                    "$numberLong": "145"
                },
                "correct": "Incorrect"
            },
            "f271aeb2b417cd7e": {
                "code": "[data-anchor]+div",
                "time": {
                    "$numberLong": "21"
                },
                "correct": "Correct"
            },
            "f3a692ff48114271": {
                "code": "[data-anchor]+div",
                "time": {
                    "$numberLong": "34"
                },
                "correct": "Correct"
            },
            "f3f8cd8f734b6082": {
                "code": " div [data-anchor] +div",
                "time": {
                    "$numberLong": "90"
                },
                "correct": "Correct"
            },
            "f47878383710d5dd": {
                "code": "[data-anchor]+div",
                "time": {
                    "$numberLong": "56"
                },
                "correct": "Correct"
            },
            "f5c71290739e03bc": {
                "code": "div.",
                "time": {
                    "$numberLong": "124"
                },
                "correct": "Incorrect"
            },
            "f5e8f96eee818651": {
                "code": "",
                "time": {
                    "$numberLong": "147"
                },
                "correct": "Incorrect"
            },
            "f6829fc871613b65": {
                "code": " div.data-anchor ",
                "time": {
                    "$numberLong": "148"
                },
                "correct": "Incorrect"
            },
            "f711acd5f09bbdf6": {
                "code": "[data-anchor] + div",
                "time": {
                    "$numberLong": "110"
                },
                "correct": "Correct"
            },
            "f7b65f853512e069": {
                "code": "[data-anchor]+div",
                "time": {
                    "$numberLong": "53"
                },
                "correct": "Correct"
            },
            "f881ad2049d118b3": {
                "code": "[div*=data]+div",
                "time": {
                    "$numberLong": "134"
                },
                "correct": "Incorrect"
            },
            "f8fea8fffdca4d43": {
                "code": "div[data-anchor]",
                "time": {
                    "$numberLong": "142"
                },
                "correct": "Incorrect"
            },
            "f92800e8fbf079ac": {
                "code": "[data-anchor] + div",
                "time": {
                    "$numberLong": "68"
                },
                "correct": "Correct"
            },
            "f95bda2df3fd514e": {
                "code": "div + div[data-anchor] + div",
                "time": {
                    "$numberLong": "131"
                },
                "correct": "Correct"
            },
            "fc98beaf678455f7": {
                "code": ".data-anchor + div",
                "time": {
                    "$numberLong": "80"
                },
                "correct": "Incorrect"
            },
            "fcc928c4a2b55a70": {
                "code": "[data-anchor] + div",
                "time": {
                    "$numberLong": "12"
                },
                "correct": "Correct"
            },
            "fdf286213a36687f": {
                "code": "data-anchor",
                "time": {
                    "$numberLong": "146"
                },
                "correct": "Incorrect"
            },
            "fe5c52f5db2f1cea": {
                "code": "[data-anchor] + div",
                "time": {
                    "$numberLong": "108"
                },
                "correct": "Correct"
            },
            "fe981eb56e6aa2eb": {
                "code": "[data-anchor] + div",
                "time": {
                    "$numberLong": "35"
                },
                "correct": "Correct"
            },
            "ff32798839089a73": {
                "code": "[data-anchor] + div",
                "time": {
                    "$numberLong": "40"
                },
                "correct": "Correct"
            },
            "ffbc2f2c9e5c74bd": {
                "code": "[data-anchor] + div",
                "time": {
                    "$numberLong": "31"
                },
                "correct": "Correct"
            }
        }
    }, {
        "puzzleIndex": {
            "$numberLong": "5"
        },
        "startTime": {
            "$date": "2018-11-26T18:36:18.930Z"
        },
        "solutions": {
            "02ef04098b9feadf": {
                "code": "]",
                "time": {
                    "$numberLong": "148"
                },
                "correct": "Incorrect"
            },
            "044b7810d5b21241": {
                "code": ":checked",
                "time": {
                    "$numberLong": "114"
                },
                "correct": "Correct"
            },
            "0505908ca880da63": {
                "code": "*:nth-child(3)",
                "time": {
                    "$numberLong": "108"
                },
                "correct": "Incorrect"
            },
            "0546833d81e75f8e": {
                "code": "",
                "time": {
                    "$numberLong": "140"
                },
                "correct": "Incorrect"
            },
            "074732b4e4e7f8c2": {
                "code": ":checked",
                "time": {
                    "$numberLong": "25"
                },
                "correct": "Correct"
            },
            "07a655995e3a34a5": {
                "code": "*:checked",
                "time": {
                    "$numberLong": "81"
                },
                "correct": "Correct"
            },
            "0960cde31955389a": {
                "code": "* 003e *",
                "time": {
                    "$numberLong": "137"
                },
                "correct": "Incorrect"
            },
            "096ccaaf699480f6": {
                "code": ":checked",
                "time": {
                    "$numberLong": "29"
                },
                "correct": "Correct"
            },
            "0a69fc38555dc6b2": {
                "code": ":checked",
                "time": {
                    "$numberLong": "34"
                },
                "correct": "Correct"
            },
            "0a9dea941704145b": {
                "code": ":checked",
                "time": {
                    "$numberLong": "77"
                },
                "correct": "Correct"
            },
            "0be05f1edf9ac0c9": {
                "code": ":checked",
                "time": {
                    "$numberLong": "99"
                },
                "correct": "Correct"
            },
            "0c5610ad65714d07": {
                "code": ":checked",
                "time": {
                    "$numberLong": "27"
                },
                "correct": "Correct"
            },
            "0cb7b730eb24cd97": {
                "code": "*:checked",
                "time": {
                    "$numberLong": "48"
                },
                "correct": "Correct"
            },
            "0dc9eee89960aa8c": {
                "code": ":checked",
                "time": {
                    "$numberLong": "108"
                },
                "correct": "Correct"
            },
            "0dcc5ccce8ea8724": {
                "code": ":checked",
                "time": {
                    "$numberLong": "43"
                },
                "correct": "Correct"
            },
            "0e11826c10b3c359": {
                "code": ":checkbox",
                "time": {
                    "$numberLong": "117"
                },
                "correct": "Incorrect"
            },
            "0f62193273f6c54f": {
                "code": ":checked",
                "time": {
                    "$numberLong": "113"
                },
                "correct": "Correct"
            },
            "0f68663169b43508": {
                "code": ":checked",
                "time": {
                    "$numberLong": "2"
                },
                "correct": "Correct"
            },
            "101366111d88b96c": {
                "code": "",
                "time": {
                    "$numberLong": "148"
                },
                "correct": "Incorrect"
            },
            "10878b8d10d2ae2b": {
                "code": ":checked",
                "time": {
                    "$numberLong": "60"
                },
                "correct": "Correct"
            },
            "10f87b94846c7dd2": {
                "code": "*:checked",
                "time": {
                    "$numberLong": "68"
                },
                "correct": "Correct"
            },
            "11013b79d46cadbc": {
                "code": "*",
                "time": {
                    "$numberLong": "104"
                },
                "correct": "Incorrect"
            },
            "1291f8effc0fb1e1": {
                "code": ":checked",
                "time": {
                    "$numberLong": "73"
                },
                "correct": "Correct"
            },
            "13516a858ed509bc": {
                "code": ":checked",
                "time": {
                    "$numberLong": "85"
                },
                "correct": "Correct"
            },
            "13ebc713ecdb0c31": {
                "code": "*",
                "time": {
                    "$numberLong": "150"
                },
                "correct": "Incorrect"
            },
            "147cd0646fe74c51": {
                "code": ":checked",
                "time": {
                    "$numberLong": "81"
                },
                "correct": "Correct"
            },
            "14d1d70f31909467": {
                "code": ":checked",
                "time": {
                    "$numberLong": "37"
                },
                "correct": "Correct"
            },
            "15085d8de21f8860": {
                "code": "",
                "time": {
                    "$numberLong": "141"
                },
                "correct": "Incorrect"
            },
            "15d30689cee2cf3d": {
                "code": ":checked",
                "time": {
                    "$numberLong": "43"
                },
                "correct": "Correct"
            },
            "1662516da39bd248": {
                "code": "ty:first-of-type",
                "time": {
                    "$numberLong": "151"
                },
                "correct": "Incorrect"
            },
            "167a5b071e75c309": {
                "code": ":checked",
                "time": {
                    "$numberLong": "53"
                },
                "correct": "Correct"
            },
            "174fb3408368ee14": {
                "code": ":checked",
                "time": {
                    "$numberLong": "59"
                },
                "correct": "Correct"
            },
            "18a015071bed690d": {
                "code": "*:checked",
                "time": {
                    "$numberLong": "53"
                },
                "correct": "Correct"
            },
            "1a001ccb65b08947": {
                "code": ":checked",
                "time": {
                    "$numberLong": "59"
                },
                "correct": "Correct"
            },
            "1a495818e81cd4fa": {
                "code": "",
                "time": {
                    "$numberLong": "144"
                },
                "correct": "Incorrect"
            },
            "1b834e64b9e1baf7": {
                "code": ":checked",
                "time": {
                    "$numberLong": "62"
                },
                "correct": "Correct"
            },
            "1c207b98b51ff73d": {
                "code": ":checked",
                "time": {
                    "$numberLong": "72"
                },
                "correct": "Correct"
            },
            "1c82933fa21c91af": {
                "code": "*:checked",
                "time": {
                    "$numberLong": "91"
                },
                "correct": "Correct"
            },
            "1c93a7a4711bff70": {
                "code": "",
                "time": {
                    "$numberLong": "150"
                },
                "correct": "Incorrect"
            },
            "1e349ef8c3bc9f7a": {
                "code": "",
                "time": {
                    "$numberLong": "128"
                },
                "correct": "Incorrect"
            },
            "1ea00611e97c6ea6": {
                "code": ":checked",
                "time": {
                    "$numberLong": "30"
                },
                "correct": "Correct"
            },
            "201af50fd3b736ba": {
                "code": ":checked",
                "time": {
                    "$numberLong": "105"
                },
                "correct": "Correct"
            },
            "214efb907df65375": {
                "code": ":checked",
                "time": {
                    "$numberLong": "12"
                },
                "correct": "Correct"
            },
            "21b91283c47ddf5e": {
                "code": "input:checked {}",
                "time": {
                    "$numberLong": "147"
                },
                "correct": "Incorrect"
            },
            "2272f07c112385b1": {
                "code": ":checked",
                "time": {
                    "$numberLong": "52"
                },
                "correct": "Correct"
            },
            "24337d34f84c3b29": {
                "code": "",
                "time": {
                    "$numberLong": "149"
                },
                "correct": "Incorrect"
            },
            "249db831162d981a": {
                "code": "",
                "time": {
                    "$numberLong": "133"
                },
                "correct": "Incorrect"
            },
            "24b339e7f88f73de": {
                "code": ":checked",
                "time": {
                    "$numberLong": "15"
                },
                "correct": "Correct"
            },
            "24b54a457abe06f4": {
                "code": "",
                "time": {
                    "$numberLong": "88"
                },
                "correct": "Incorrect"
            },
            "24b848f155c0b3b7": {
                "code": ":checked",
                "time": {
                    "$numberLong": "133"
                },
                "correct": "Correct"
            },
            "24d4763d41328ec4": {
                "code": ":checked",
                "time": {
                    "$numberLong": "30"
                },
                "correct": "Correct"
            },
            "250e04bcb5fbe4f7": {
                "code": "type='checkbox'",
                "time": {
                    "$numberLong": "149"
                },
                "correct": "Incorrect"
            },
            "25f9ecca44c1cd46": {
                "code": ":first-child:",
                "time": {
                    "$numberLong": "148"
                },
                "correct": "Incorrect"
            },
            "2651ba874a6c8d94": {
                "code": ":checked",
                "time": {
                    "$numberLong": "81"
                },
                "correct": "Correct"
            },
            "27a619553e988074": {
                "code": "*:checked",
                "time": {
                    "$numberLong": "99"
                },
                "correct": "Correct"
            },
            "27bef6362f6c3153": {
                "code": "*:checked",
                "time": {
                    "$numberLong": "36"
                },
                "correct": "Correct"
            },
            "284a6bf537e9bc4d": {
                "code": ":checked",
                "time": {
                    "$numberLong": "130"
                },
                "correct": "Correct"
            },
            "2aced08264036ea8": {
                "code": ":checked",
                "time": {
                    "$numberLong": "102"
                },
                "correct": "Correct"
            },
            "2c5dea2ca5f0d036": {
                "code": "main 003e ",
                "time": {
                    "$numberLong": "135"
                },
                "correct": "Incorrect"
            },
            "2cb5d5d4c8d4b19a": {
                "code": "",
                "time": {
                    "$numberLong": "102"
                },
                "correct": "Incorrect"
            },
            "2cecb227110f5c46": {
                "code": "",
                "time": {
                    "$numberLong": "139"
                },
                "correct": "Incorrect"
            },
            "2f201db12c801e85": {
                "code": " *:checked",
                "time": {
                    "$numberLong": "81"
                },
                "correct": "Correct"
            },
            "2f6a509eafbbb15c": {
                "code": ":checked",
                "time": {
                    "$numberLong": "42"
                },
                "correct": "Correct"
            },
            "2fe6410a79f03048": {
                "code": ":checked",
                "time": {
                    "$numberLong": "55"
                },
                "correct": "Correct"
            },
            "30959179ed650cd1": {
                "code": ":checked",
                "time": {
                    "$numberLong": "27"
                },
                "correct": "Correct"
            },
            "34a24dd3d6aa750b": {
                "code": "",
                "time": {
                    "$numberLong": "140"
                },
                "correct": "Incorrect"
            },
            "34a4f2506ce3d182": {
                "code": ":checked",
                "time": {
                    "$numberLong": "144"
                },
                "correct": "Correct"
            },
            "350ebb347c1ad556": {
                "code": ":checked",
                "time": {
                    "$numberLong": "48"
                },
                "correct": "Correct"
            },
            "3549c28b38369744": {
                "code": ":checked",
                "time": {
                    "$numberLong": "67"
                },
                "correct": "Correct"
            },
            "36cfe6300f509bd5": {
                "code": "",
                "time": {
                    "$numberLong": "149"
                },
                "correct": "Incorrect"
            },
            "36e8f42039c184db": {
                "code": ":checked",
                "time": {
                    "$numberLong": "7"
                },
                "correct": "Correct"
            },
            "3720867adefd1d26": {
                "code": ":checked ",
                "time": {
                    "$numberLong": "141"
                },
                "correct": "Correct"
            },
            "37b36e389ab7fe80": {
                "code": ":checked",
                "time": {
                    "$numberLong": "33"
                },
                "correct": "Correct"
            },
            "39a2e48e45b49980": {
                "code": ":checked",
                "time": {
                    "$numberLong": "111"
                },
                "correct": "Correct"
            },
            "39fe9e521f177219": {
                "code": ":checked",
                "time": {
                    "$numberLong": "6"
                },
                "correct": "Correct"
            },
            "3a562770cb99a7f4": {
                "code": "*:checked",
                "time": {
                    "$numberLong": "65"
                },
                "correct": "Correct"
            },
            "3ab170848134a2ff": {
                "code": ":checked",
                "time": {
                    "$numberLong": "31"
                },
                "correct": "Correct"
            },
            "3c5258124b324a11": {
                "code": ":checked",
                "time": {
                    "$numberLong": "4"
                },
                "correct": "Correct"
            },
            "3cb038073228740f": {
                "code": ":checked",
                "time": {
                    "$numberLong": "106"
                },
                "correct": "Correct"
            },
            "3ceec99315a58f1c": {
                "code": ":checked",
                "time": {
                    "$numberLong": "33"
                },
                "correct": "Correct"
            },
            "3d63b802d486029c": {
                "code": "*:checked",
                "time": {
                    "$numberLong": "53"
                },
                "correct": "Correct"
            },
            "3dc599a7d0323291": {
                "code": ":checked",
                "time": {
                    "$numberLong": "31"
                },
                "correct": "Correct"
            },
            "3efffe88342c3ee5": {
                "code": ":checked",
                "time": {
                    "$numberLong": "37"
                },
                "correct": "Correct"
            },
            "4139b7d383e0b65c": {
                "code": "",
                "time": {
                    "$numberLong": "151"
                },
                "correct": "Incorrect"
            },
            "418ca735584f1e3a": {
                "code": "*:checked",
                "time": {
                    "$numberLong": "52"
                },
                "correct": "Correct"
            },
            "42d7cc27726e8052": {
                "code": ":checked",
                "time": {
                    "$numberLong": "58"
                },
                "correct": "Correct"
            },
            "454f621946346eed": {
                "code": ":checked",
                "time": {
                    "$numberLong": "15"
                },
                "correct": "Correct"
            },
            "4639b56895b8be0c": {
                "code": "",
                "time": {
                    "$numberLong": "139"
                },
                "correct": "Incorrect"
            },
            "491d66dad9c08b8c": {
                "code": ":checked",
                "time": {
                    "$numberLong": "36"
                },
                "correct": "Correct"
            },
            "4c239ebf3cc37c4e": {
                "code": "input:checked",
                "time": {
                    "$numberLong": "140"
                },
                "correct": "Incorrect"
            },
            "4d9c4a8566aaca2e": {
                "code": "",
                "time": {
                    "$numberLong": "126"
                },
                "correct": "Incorrect"
            },
            "4f2d802143f78fdc": {
                "code": ":checked",
                "time": {
                    "$numberLong": "91"
                },
                "correct": "Correct"
            },
            "50a7d9c3900376d4": {
                "code": ":only-of-type(checked)",
                "time": {
                    "$numberLong": "130"
                },
                "correct": "Incorrect"
            },
            "50e718838ec3ed69": {
                "code": "",
                "time": {
                    "$numberLong": "145"
                },
                "correct": "Incorrect"
            },
            "50f3b5f06c1d21a1": {
                "code": "",
                "time": {
                    "$numberLong": "138"
                },
                "correct": "Incorrect"
            },
            "5154c91bcd705420": {
                "code": ".checked + input;",
                "time": {
                    "$numberLong": "146"
                },
                "correct": "Incorrect"
            },
            "52131ae4ea1f02db": {
                "code": ":checked",
                "time": {
                    "$numberLong": "52"
                },
                "correct": "Correct"
            },
            "54757d6425a18652": {
                "code": ":checked",
                "time": {
                    "$numberLong": "8"
                },
                "correct": "Correct"
            },
            "57a19a29c66f273a": {
                "code": "",
                "time": {
                    "$numberLong": "134"
                },
                "correct": "Incorrect"
            },
            "597eaca2f80bb597": {
                "code": ":checked",
                "time": {
                    "$numberLong": "5"
                },
                "correct": "Correct"
            },
            "598dc546faccea96": {
                "code": "",
                "time": {
                    "$numberLong": "138"
                },
                "correct": "Incorrect"
            },
            "5f2b55c93f8dfc50": {
                "code": ":first-of-type checkbox",
                "time": {
                    "$numberLong": "148"
                },
                "correct": "Incorrect"
            },
            "5fa0dc84f5366d5d": {
                "code": "",
                "time": {
                    "$numberLong": "114"
                },
                "correct": "Incorrect"
            },
            "607b0abda0c50b0c": {
                "code": ":checked",
                "time": {
                    "$numberLong": "69"
                },
                "correct": "Correct"
            },
            "608a221e132cfb0e": {
                "code": ":checked",
                "time": {
                    "$numberLong": "141"
                },
                "correct": "Correct"
            },
            "610358eb6ad04b78": {
                "code": ":checked",
                "time": {
                    "$numberLong": "100"
                },
                "correct": "Correct"
            },
            "63da271cdd05f72a": {
                "code": ":checked",
                "time": {
                    "$numberLong": "96"
                },
                "correct": "Correct"
            },
            "645a56e6b8555c48": {
                "code": ":checked",
                "time": {
                    "$numberLong": "57"
                },
                "correct": "Correct"
            },
            "6877303d0bc23e9f": {
                "code": "",
                "time": {
                    "$numberLong": "111"
                },
                "correct": "Incorrect"
            },
            "690d4a3fa53cafe6": {
                "code": ":checked",
                "time": {
                    "$numberLong": "58"
                },
                "correct": "Correct"
            },
            "69a28f1b78baef56": {
                "code": ":checked",
                "time": {
                    "$numberLong": "81"
                },
                "correct": "Correct"
            },
            "6a6720574c217df1": {
                "code": ":checked",
                "time": {
                    "$numberLong": "144"
                },
                "correct": "Correct"
            },
            "6ac831e069244801": {
                "code": ":checked",
                "time": {
                    "$numberLong": "20"
                },
                "correct": "Correct"
            },
            "6be274af29d69012": {
                "code": "*:checked",
                "time": {
                    "$numberLong": "42"
                },
                "correct": "Correct"
            },
            "6be81d9143dc01ec": {
                "code": "*:checked",
                "time": {
                    "$numberLong": "101"
                },
                "correct": "Correct"
            },
            "6d772a3e4250147a": {
                "code": ":checked",
                "time": {
                    "$numberLong": "109"
                },
                "correct": "Correct"
            },
            "703e792787acb96a": {
                "code": ":checked",
                "time": {
                    "$numberLong": "47"
                },
                "correct": "Correct"
            },
            "70c2126a27a7ff92": {
                "code": ":checked",
                "time": {
                    "$numberLong": "14"
                },
                "correct": "Correct"
            },
            "738824e90ee1a521": {
                "code": ":checked",
                "time": {
                    "$numberLong": "8"
                },
                "correct": "Correct"
            },
            "758f08ff64d4fbed": {
                "code": ":checked",
                "time": {
                    "$numberLong": "14"
                },
                "correct": "Correct"
            },
            "77bfda6e1e04388a": {
                "code": "ЖБЭЭЭЭЭЭЭЭЭЭЭЭЭЭЭЭЭЭЭЭЭЭЭЭЭЭЭЭЭЭЭЭЭЭЭЭЭЭЭЭЭЭЭЭЭЭЭЭЭЭЭЭЭЭЭЭЭЭЭЭЭЭЭЭЭЭЭЭЭЭЭЭЭЭЭЭЭЭЭЭЭЭЭЭЭЭЭЭЭЭЭЭЭЭЭЭЭЭЭЭЭЭЭЭЭЭЭЭЭЭЭЭЭЭЭЭЭЭЭЭ",
                "time": {
                    "$numberLong": "150"
                },
                "correct": "Incorrect"
            },
            "784e2a35a5f02a51": {
                "code": ":checked",
                "time": {
                    "$numberLong": "10"
                },
                "correct": "Correct"
            },
            "7876d097648ce241": {
                "code": "checked",
                "time": {
                    "$numberLong": "112"
                },
                "correct": "Incorrect"
            },
            "7913e18db9805385": {
                "code": ":checked",
                "time": {
                    "$numberLong": "149"
                },
                "correct": "Correct"
            },
            "79991eac2ed55971": {
                "code": ":checked",
                "time": {
                    "$numberLong": "59"
                },
                "correct": "Correct"
            },
            "79d3d5a874c0fedb": {
                "code": ":checked",
                "time": {
                    "$numberLong": "112"
                },
                "correct": "Correct"
            },
            "7cd8dd365d287663": {
                "code": "main:nth-child(3)",
                "time": {
                    "$numberLong": "147"
                },
                "correct": "Incorrect"
            },
            "7d9ab4e430491d3c": {
                "code": ":checked",
                "time": {
                    "$numberLong": "20"
                },
                "correct": "Correct"
            },
            "7ef1e4b829e0b3d6": {
                "code": ":checked",
                "time": {
                    "$numberLong": "118"
                },
                "correct": "Correct"
            },
            "7f48769c943032b7": {
                "code": "input:checked",
                "time": {
                    "$numberLong": "149"
                },
                "correct": "Incorrect"
            },
            "8150b6bbc7717883": {
                "code": "",
                "time": {
                    "$numberLong": "115"
                },
                "correct": "Incorrect"
            },
            "8190a67e4972f187": {
                "code": ":checked",
                "time": {
                    "$numberLong": "62"
                },
                "correct": "Correct"
            },
            "82e8b6c0d88e0003": {
                "code": ":checked",
                "time": {
                    "$numberLong": "61"
                },
                "correct": "Correct"
            },
            "8373c834e2ac08bd": {
                "code": "",
                "time": {
                    "$numberLong": "150"
                },
                "correct": "Incorrect"
            },
            "85faf02e7002468e": {
                "code": ":checked",
                "time": {
                    "$numberLong": "43"
                },
                "correct": "Correct"
            },
            "867cfd1b76269046": {
                "code": ":checked",
                "time": {
                    "$numberLong": "63"
                },
                "correct": "Correct"
            },
            "8682698b0efcbb49": {
                "code": "",
                "time": {
                    "$numberLong": "118"
                },
                "correct": "Incorrect"
            },
            "870545b496fb9231": {
                "code": ":checked",
                "time": {
                    "$numberLong": "103"
                },
                "correct": "Correct"
            },
            "8875dc4e9876728e": {
                "code": ":checked",
                "time": {
                    "$numberLong": "16"
                },
                "correct": "Correct"
            },
            "898447718f00f0c7": {
                "code": "checked",
                "time": {
                    "$numberLong": "151"
                },
                "correct": "Incorrect"
            },
            "89f7ff1ba54776b9": {
                "code": "* last-of-child)",
                "time": {
                    "$numberLong": "151"
                },
                "correct": "Incorrect"
            },
            "89fb2b288bdbd651": {
                "code": "*:checked",
                "time": {
                    "$numberLong": "11"
                },
                "correct": "Correct"
            },
            "8b3e94c6bb875abd": {
                "code": "*:checked",
                "time": {
                    "$numberLong": "99"
                },
                "correct": "Correct"
            },
            "8c9feac04348414f": {
                "code": "(chec",
                "time": {
                    "$numberLong": "151"
                },
                "correct": "Incorrect"
            },
            "8ce246e288c504b7": {
                "code": ":checked",
                "time": {
                    "$numberLong": "82"
                },
                "correct": "Correct"
            },
            "8d0b871a3aac7646": {
                "code": ":checked",
                "time": {
                    "$numberLong": "129"
                },
                "correct": "Correct"
            },
            "8efb6e527bd50aae": {
                "code": "* ",
                "time": {
                    "$numberLong": "148"
                },
                "correct": "Incorrect"
            },
            "92352b0b01aac98b": {
                "code": ".checkbox:first-child",
                "time": {
                    "$numberLong": "149"
                },
                "correct": "Incorrect"
            },
            "93e87af5faea4465": {
                "code": "main input",
                "time": {
                    "$numberLong": "146"
                },
                "correct": "Incorrect"
            },
            "94ae2983d85b56f3": {
                "code": ".checkbox:firstch",
                "time": {
                    "$numberLong": "151"
                },
                "correct": "Incorrect"
            },
            "94bac471a8a06f41": {
                "code": "mai",
                "time": {
                    "$numberLong": "151"
                },
                "correct": "Incorrect"
            },
            "94e6f0f36d96cca7": {
                "code": "",
                "time": {
                    "$numberLong": "145"
                },
                "correct": "Incorrect"
            },
            "95da8c87fe0966a9": {
                "code": ":checked",
                "time": {
                    "$numberLong": "69"
                },
                "correct": "Correct"
            },
            "9615130025e3bf23": {
                "code": "",
                "time": {
                    "$numberLong": "146"
                },
                "correct": "Incorrect"
            },
            "96a9d51e700ea6d9": {
                "code": ":checked",
                "time": {
                    "$numberLong": "25"
                },
                "correct": "Correct"
            },
            "96c9015ae13475fb": {
                "code": ":checked",
                "time": {
                    "$numberLong": "71"
                },
                "correct": "Correct"
            },
            "97dbe566f05bad1e": {
                "code": "*:checked",
                "time": {
                    "$numberLong": "16"
                },
                "correct": "Correct"
            },
            "9a1d3ecd70ce4b81": {
                "code": ":checked",
                "time": {
                    "$numberLong": "11"
                },
                "correct": "Correct"
            },
            "9ba3cd7d2209cdb1": {
                "code": "",
                "time": {
                    "$numberLong": "147"
                },
                "correct": "Incorrect"
            },
            "9decf80a3668a04c": {
                "code": ":checked",
                "time": {
                    "$numberLong": "8"
                },
                "correct": "Correct"
            },
            "9e1ad98e7ed497c0": {
                "code": "",
                "time": {
                    "$numberLong": "69"
                },
                "correct": "Incorrect"
            },
            "9e8ceb488c61bfc6": {
                "code": ":checked",
                "time": {
                    "$numberLong": "32"
                },
                "correct": "Correct"
            },
            "9eb7f3047b78db41": {
                "code": ":checked",
                "time": {
                    "$numberLong": "109"
                },
                "correct": "Correct"
            },
            "9f3c76f5aebfad0a": {
                "code": ":checked",
                "time": {
                    "$numberLong": "69"
                },
                "correct": "Correct"
            },
            "9f57ba8fbeaabc8f": {
                "code": "[]",
                "time": {
                    "$numberLong": "143"
                },
                "correct": "Incorrect"
            },
            "9f79120ff09e7b32": {
                "code": "checked",
                "time": {
                    "$numberLong": "144"
                },
                "correct": "Incorrect"
            },
            "9f98758762638c79": {
                "code": ":checked ",
                "time": {
                    "$numberLong": "97"
                },
                "correct": "Correct"
            },
            "9fc6640ffb5bcf88": {
                "code": ":checked",
                "time": {
                    "$numberLong": "96"
                },
                "correct": "Correct"
            },
            "a59abf0ef6dd72ee": {
                "code": ":checked",
                "time": {
                    "$numberLong": "122"
                },
                "correct": "Correct"
            },
            "a5cff54715b5e728": {
                "code": "*:checked",
                "time": {
                    "$numberLong": "145"
                },
                "correct": "Correct"
            },
            "a68d50ef4eaf5330": {
                "code": "*:last-child",
                "time": {
                    "$numberLong": "147"
                },
                "correct": "Incorrect"
            },
            "a7faf246f1fec897": {
                "code": ":checked",
                "time": {
                    "$numberLong": "24"
                },
                "correct": "Correct"
            },
            "a82a83d5b2316bbb": {
                "code": ":checked",
                "time": {
                    "$numberLong": "133"
                },
                "correct": "Correct"
            },
            "a87fa4ebabc2a0ce": {
                "code": ":checked",
                "time": {
                    "$numberLong": "12"
                },
                "correct": "Correct"
            },
            "ac306151b36609fd": {
                "code": "*:checked",
                "time": {
                    "$numberLong": "55"
                },
                "correct": "Correct"
            },
            "ad1db3469049502b": {
                "code": ":checked",
                "time": {
                    "$numberLong": "9"
                },
                "correct": "Correct"
            },
            "add0cf5b0e6f0061": {
                "code": "0009:checked",
                "time": {
                    "$numberLong": "93"
                },
                "correct": "Correct"
            },
            "ade8a9fbb5003944": {
                "code": ":active",
                "time": {
                    "$numberLong": "143"
                },
                "correct": "Incorrect"
            },
            "ae9e54473d676c54": {
                "code": ":checked",
                "time": {
                    "$numberLong": "34"
                },
                "correct": "Correct"
            },
            "af5c9cf12b2832c8": {
                "code": ":checked ",
                "time": {
                    "$numberLong": "66"
                },
                "correct": "Correct"
            },
            "affe91192214b1ab": {
                "code": "",
                "time": {
                    "$numberLong": "128"
                },
                "correct": "Incorrect"
            },
            "b0963184aa7f246b": {
                "code": "",
                "time": {
                    "$numberLong": "132"
                },
                "correct": "Incorrect"
            },
            "b1926b5f5e8b806b": {
                "code": "",
                "time": {
                    "$numberLong": "102"
                },
                "correct": "Incorrect"
            },
            "b1cbf3ca65c56e0d": {
                "code": ":checked",
                "time": {
                    "$numberLong": "33"
                },
                "correct": "Correct"
            },
            "b278646f280691cb": {
                "code": "[type=checkbox]",
                "time": {
                    "$numberLong": "150"
                },
                "correct": "Incorrect"
            },
            "b2913665b1d38784": {
                "code": ":checked",
                "time": {
                    "$numberLong": "110"
                },
                "correct": "Correct"
            },
            "b46b33d779ec951f": {
                "code": ":checked",
                "time": {
                    "$numberLong": "7"
                },
                "correct": "Correct"
            },
            "b4e84dc5f950be34": {
                "code": ":checked",
                "time": {
                    "$numberLong": "65"
                },
                "correct": "Correct"
            },
            "b4f4b5c6dfcb6d07": {
                "code": "checked:first-of-type",
                "time": {
                    "$numberLong": "150"
                },
                "correct": "Incorrect"
            },
            "b51a79256e2462a5": {
                "code": ":checkbox ",
                "time": {
                    "$numberLong": "150"
                },
                "correct": "Incorrect"
            },
            "b7037f74a55b1ded": {
                "code": ":checked",
                "time": {
                    "$numberLong": "21"
                },
                "correct": "Correct"
            },
            "b70e0f3eadc8fa6a": {
                "code": ":checked",
                "time": {
                    "$numberLong": "81"
                },
                "correct": "Correct"
            },
            "b87bfaa63e377a71": {
                "code": ":checked",
                "time": {
                    "$numberLong": "92"
                },
                "correct": "Correct"
            },
            "b913aff5711ffd5b": {
                "code": ":checked",
                "time": {
                    "$numberLong": "30"
                },
                "correct": "Correct"
            },
            "b928c37c17806191": {
                "code": ":checked",
                "time": {
                    "$numberLong": "41"
                },
                "correct": "Correct"
            },
            "b9d1dfe7e37afeb2": {
                "code": "!checked",
                "time": {
                    "$numberLong": "149"
                },
                "correct": "Incorrect"
            },
            "b9f4eab4145bb27a": {
                "code": "main 003e *",
                "time": {
                    "$numberLong": "148"
                },
                "correct": "Incorrect"
            },
            "bbe008738217e35f": {
                "code": ":checked",
                "time": {
                    "$numberLong": "15"
                },
                "correct": "Correct"
            },
            "c1219d67fe1e51c2": {
                "code": ":checked",
                "time": {
                    "$numberLong": "75"
                },
                "correct": "Correct"
            },
            "c13f401d134bbdb7": {
                "code": ":checked",
                "time": {
                    "$numberLong": "93"
                },
                "correct": "Correct"
            },
            "c18131119872b238": {
                "code": "type{",
                "time": {
                    "$numberLong": "149"
                },
                "correct": "Incorrect"
            },
            "c3713ba000985baf": {
                "code": ":checked",
                "time": {
                    "$numberLong": "61"
                },
                "correct": "Correct"
            },
            "c486a74f6d914600": {
                "code": ":checked",
                "time": {
                    "$numberLong": "21"
                },
                "correct": "Correct"
            },
            "c4b129ee6608ab4e": {
                "code": "*checked",
                "time": {
                    "$numberLong": "134"
                },
                "correct": "Incorrect"
            },
            "c61f85976fa0f880": {
                "code": "*:checked",
                "time": {
                    "$numberLong": "29"
                },
                "correct": "Correct"
            },
            "c62f6a6327b38df0": {
                "code": "*:checked",
                "time": {
                    "$numberLong": "51"
                },
                "correct": "Correct"
            },
            "c6782ec9fbfacc49": {
                "code": ":checked",
                "time": {
                    "$numberLong": "16"
                },
                "correct": "Correct"
            },
            "c81886dde372d437": {
                "code": "",
                "time": {
                    "$numberLong": "110"
                },
                "correct": "Incorrect"
            },
            "c825ef755969b747": {
                "code": ":checked",
                "time": {
                    "$numberLong": "16"
                },
                "correct": "Correct"
            },
            "c95463f778ff93ca": {
                "code": "checked",
                "time": {
                    "$numberLong": "126"
                },
                "correct": "Incorrect"
            },
            "ca348e67a411e031": {
                "code": ":checked",
                "time": {
                    "$numberLong": "109"
                },
                "correct": "Correct"
            },
            "ca60244540ed755d": {
                "code": ":checked",
                "time": {
                    "$numberLong": "101"
                },
                "correct": "Correct"
            },
            "cab8ee9fdec69ee8": {
                "code": "",
                "time": {
                    "$numberLong": "62"
                },
                "correct": "Incorrect"
            },
            "cb0b66dbc547fb22": {
                "code": "",
                "time": {
                    "$numberLong": "139"
                },
                "correct": "Incorrect"
            },
            "cb13a1cb1bf89459": {
                "code": ":checked",
                "time": {
                    "$numberLong": "10"
                },
                "correct": "Correct"
            },
            "cf8643fb83e99e86": {
                "code": ":checked",
                "time": {
                    "$numberLong": "25"
                },
                "correct": "Correct"
            },
            "cfa10e7229340f70": {
                "code": "",
                "time": {
                    "$numberLong": "127"
                },
                "correct": "Incorrect"
            },
            "d0b031eec85e6911": {
                "code": ":checked",
                "time": {
                    "$numberLong": "34"
                },
                "correct": "Correct"
            },
            "d1346365de590ccf": {
                "code": ":checked",
                "time": {
                    "$numberLong": "16"
                },
                "correct": "Correct"
            },
            "d417fd8dd5e48efe": {
                "code": "*:checked",
                "time": {
                    "$numberLong": "36"
                },
                "correct": "Correct"
            },
            "d4a5deb84ce836e9": {
                "code": "{checkbox}",
                "time": {
                    "$numberLong": "118"
                },
                "correct": "Incorrect"
            },
            "d52887dab0fb075f": {
                "code": ":checked",
                "time": {
                    "$numberLong": "114"
                },
                "correct": "Correct"
            },
            "d57163ee2e28e4b2": {
                "code": ":checked ",
                "time": {
                    "$numberLong": "57"
                },
                "correct": "Correct"
            },
            "d66e5b11f0731612": {
                "code": ":checked",
                "time": {
                    "$numberLong": "133"
                },
                "correct": "Correct"
            },
            "d6f6f6c7a9301bbe": {
                "code": ":checked",
                "time": {
                    "$numberLong": "102"
                },
                "correct": "Correct"
            },
            "d8c54e85ccd5b21c": {
                "code": "*:checked",
                "time": {
                    "$numberLong": "107"
                },
                "correct": "Correct"
            },
            "d9c232089e7ae571": {
                "code": "",
                "time": {
                    "$numberLong": "122"
                },
                "correct": "Incorrect"
            },
            "d9f697ce2a414d53": {
                "code": "type='checked'",
                "time": {
                    "$numberLong": "144"
                },
                "correct": "Incorrect"
            },
            "db9d65f484e4d137": {
                "code": ":checked",
                "time": {
                    "$numberLong": "109"
                },
                "correct": "Correct"
            },
            "dba3419fda42d93b": {
                "code": "*:checked ",
                "time": {
                    "$numberLong": "71"
                },
                "correct": "Correct"
            },
            "dd7da88658f252c6": {
                "code": ":checked",
                "time": {
                    "$numberLong": "60"
                },
                "correct": "Correct"
            },
            "dda5b4fc568bd7e7": {
                "code": "",
                "time": {
                    "$numberLong": "103"
                },
                "correct": "Incorrect"
            },
            "de33e71b1fe6587c": {
                "code": "*:checked",
                "time": {
                    "$numberLong": "48"
                },
                "correct": "Correct"
            },
            "e0c2f4026aaf9e95": {
                "code": "c",
                "time": {
                    "$numberLong": "151"
                },
                "correct": "Incorrect"
            },
            "e3dc40112d98c593": {
                "code": ":checked",
                "time": {
                    "$numberLong": "21"
                },
                "correct": "Correct"
            },
            "e4692b2237b13270": {
                "code": "[type=che]",
                "time": {
                    "$numberLong": "151"
                },
                "correct": "Incorrect"
            },
            "e4924b8e7499d2e8": {
                "code": ":checked",
                "time": {
                    "$numberLong": "24"
                },
                "correct": "Correct"
            },
            "e609701dd7bbad52": {
                "code": ":checked",
                "time": {
                    "$numberLong": "28"
                },
                "correct": "Correct"
            },
            "e70b30486b960ca2": {
                "code": "type checkbox",
                "time": {
                    "$numberLong": "111"
                },
                "correct": "Incorrect"
            },
            "e8a0543d60a31174": {
                "code": "*:checked",
                "time": {
                    "$numberLong": "48"
                },
                "correct": "Correct"
            },
            "eaa4e4a573bbdf56": {
                "code": ":checked",
                "time": {
                    "$numberLong": "102"
                },
                "correct": "Correct"
            },
            "eb3c03ba165df064": {
                "code": ":checked",
                "time": {
                    "$numberLong": "42"
                },
                "correct": "Correct"
            },
            "eb8cc549bad70c0b": {
                "code": ":checked",
                "time": {
                    "$numberLong": "74"
                },
                "correct": "Correct"
            },
            "ec083ecdf7de4e1e": {
                "code": "",
                "time": {
                    "$numberLong": "148"
                },
                "correct": "Incorrect"
            },
            "f060b45c72736520": {
                "code": ":checked",
                "time": {
                    "$numberLong": "59"
                },
                "correct": "Correct"
            },
            "f1544a9bfe0cd1ad": {
                "code": ":checked",
                "time": {
                    "$numberLong": "16"
                },
                "correct": "Correct"
            },
            "f1c05dde29065cc5": {
                "code": ":checked",
                "time": {
                    "$numberLong": "49"
                },
                "correct": "Correct"
            },
            "f1d6c124613e4dc3": {
                "code": "():third-child()",
                "time": {
                    "$numberLong": "150"
                },
                "correct": "Incorrect"
            },
            "f271aeb2b417cd7e": {
                "code": ":checked",
                "time": {
                    "$numberLong": "7"
                },
                "correct": "Correct"
            },
            "f3a692ff48114271": {
                "code": ":checked",
                "time": {
                    "$numberLong": "73"
                },
                "correct": "Correct"
            },
            "f3f8cd8f734b6082": {
                "code": ":checked ",
                "time": {
                    "$numberLong": "40"
                },
                "correct": "Correct"
            },
            "f47878383710d5dd": {
                "code": ":checked",
                "time": {
                    "$numberLong": "42"
                },
                "correct": "Correct"
            },
            "f5c71290739e03bc": {
                "code": "",
                "time": {
                    "$numberLong": "70"
                },
                "correct": "Incorrect"
            },
            "f5e8f96eee818651": {
                "code": "",
                "time": {
                    "$numberLong": "131"
                },
                "correct": "Incorrect"
            },
            "f6829fc871613b65": {
                "code": ":checked",
                "time": {
                    "$numberLong": "142"
                },
                "correct": "Correct"
            },
            "f711acd5f09bbdf6": {
                "code": ":checked",
                "time": {
                    "$numberLong": "62"
                },
                "correct": "Correct"
            },
            "f7b65f853512e069": {
                "code": "",
                "time": {
                    "$numberLong": "139"
                },
                "correct": "Incorrect"
            },
            "f881ad2049d118b3": {
                "code": ":first-child",
                "time": {
                    "$numberLong": "123"
                },
                "correct": "Incorrect"
            },
            "f8fea8fffdca4d43": {
                "code": ":checked",
                "time": {
                    "$numberLong": "88"
                },
                "correct": "Correct"
            },
            "f92800e8fbf079ac": {
                "code": ":checked",
                "time": {
                    "$numberLong": "7"
                },
                "correct": "Correct"
            },
            "f95bda2df3fd514e": {
                "code": ":checked",
                "time": {
                    "$numberLong": "30"
                },
                "correct": "Correct"
            },
            "fc98beaf678455f7": {
                "code": "",
                "time": {
                    "$numberLong": "35"
                },
                "correct": "Incorrect"
            },
            "fcc928c4a2b55a70": {
                "code": "",
                "time": {
                    "$numberLong": "149"
                },
                "correct": "Incorrect"
            },
            "fdf286213a36687f": {
                "code": "first-of-type(checkbox)",
                "time": {
                    "$numberLong": "142"
                },
                "correct": "Incorrect"
            },
            "fe5c52f5db2f1cea": {
                "code": ":checked",
                "time": {
                    "$numberLong": "45"
                },
                "correct": "Correct"
            },
            "fe981eb56e6aa2eb": {
                "code": "*:ckecked",
                "time": {
                    "$numberLong": "124"
                },
                "correct": "Incorrect"
            },
            "ff32798839089a73": {
                "code": "main:first-of-type(checked)",
                "time": {
                    "$numberLong": "123"
                },
                "correct": "Incorrect"
            },
            "ffbc2f2c9e5c74bd": {
                "code": "",
                "time": {
                    "$numberLong": "141"
                },
                "correct": "Incorrect"
            }
        }
    }, {
        "puzzleIndex": {
            "$numberLong": "6"
        },
        "startTime": {
            "$date": "2018-11-26T18:39:31.960Z"
        },
        "solutions": {
            "02ef04098b9feadf": {
                "code": "ul :nth-child(2),ul :nth-child(4)",
                "time": {
                    "$numberLong": "82"
                },
                "correct": "Correct"
            },
            "044b7810d5b21241": {
                "code": "ul :nth-of-type(2n-4)",
                "time": {
                    "$numberLong": "146"
                },
                "correct": "Incorrect"
            },
            "0505908ca880da63": {
                "code": "ul li:nth-child(2), ul li:nth-child(4)",
                "time": {
                    "$numberLong": "67"
                },
                "correct": "Correct"
            },
            "0546833d81e75f8e": {
                "code": "li:nth-child(even)",
                "time": {
                    "$numberLong": "150"
                },
                "correct": "Incorrect"
            },
            "074732b4e4e7f8c2": {
                "code": "li:nth-child(2), li:nth-child(4)",
                "time": {
                    "$numberLong": "107"
                },
                "correct": "Correct"
            },
            "07a655995e3a34a5": {
                "code": "li:nth-last-child(2n+5)",
                "time": {
                    "$numberLong": "117"
                },
                "correct": "Correct"
            },
            "0960cde31955389a": {
                "code": "li:nth-child(2n)",
                "time": {
                    "$numberLong": "144"
                },
                "correct": "Incorrect"
            },
            "096ccaaf699480f6": {
                "code": "ul li:nth-child(2n):not(:nth-child(n + 6))",
                "time": {
                    "$numberLong": "103"
                },
                "correct": "Correct"
            },
            "0a69fc38555dc6b2": {
                "code": "ul:nth-child(even)",
                "time": {
                    "$numberLong": "150"
                },
                "correct": "Incorrect"
            },
            "0a9dea941704145b": {
                "code": "ul li:nth-last-of-type(2n+5)",
                "time": {
                    "$numberLong": "149"
                },
                "correct": "Correct"
            },
            "0be05f1edf9ac0c9": {
                "code": "",
                "time": {
                    "$numberLong": "127"
                },
                "correct": "Incorrect"
            },
            "0c5610ad65714d07": {
                "code": "li:nth-child(-2n+4)",
                "time": {
                    "$numberLong": "51"
                },
                "correct": "Correct"
            },
            "0cb7b730eb24cd97": {
                "code": "li:nth-child(2),li:nth-child(4",
                "time": {
                    "$numberLong": "28"
                },
                "correct": "Correct"
            },
            "0dc9eee89960aa8c": {
                "code": "li:nth-child(2), li:nth-child(4)",
                "time": {
                    "$numberLong": "112"
                },
                "correct": "Correct"
            },
            "0dcc5ccce8ea8724": {
                "code": "li:nth-child(2+5)",
                "time": {
                    "$numberLong": "138"
                },
                "correct": "Incorrect"
            },
            "0f62193273f6c54f": {
                "code": "li:nth-child(2), :nth-child(4)",
                "time": {
                    "$numberLong": "61"
                },
                "correct": "Correct"
            },
            "0f68663169b43508": {
                "code": "li:nth-child(2), li:nth-child(4)",
                "time": {
                    "$numberLong": "8"
                },
                "correct": "Correct"
            },
            "101366111d88b96c": {
                "code": "",
                "time": {
                    "$numberLong": "136"
                },
                "correct": "Incorrect"
            },
            "10878b8d10d2ae2b": {
                "code": "ul 003e :nth-child(2)",
                "time": {
                    "$numberLong": "150"
                },
                "correct": "Incorrect"
            },
            "10f87b94846c7dd2": {
                "code": "li:nth-child(2), li:nth-child(4)",
                "time": {
                    "$numberLong": "64"
                },
                "correct": "Correct"
            },
            "11013b79d46cadbc": {
                "code": "li:nth-child(2), li:nth-child(4",
                "time": {
                    "$numberLong": "46"
                },
                "correct": "Correct"
            },
            "1291f8effc0fb1e1": {
                "code": "li:nth-child(2), li:nth-child(4)",
                "time": {
                    "$numberLong": "76"
                },
                "correct": "Correct"
            },
            "13516a858ed509bc": {
                "code": "li:nth-child(2),li:nth-child(4)",
                "time": {
                    "$numberLong": "36"
                },
                "correct": "Correct"
            },
            "13ebc713ecdb0c31": {
                "code": "li:nth-child(2n):not(:last-child):not(:nth-last-child(3",
                "time": {
                    "$numberLong": "101"
                },
                "correct": "Correct"
            },
            "147cd0646fe74c51": {
                "code": ":nth-child(2),:nth-child(4)",
                "time": {
                    "$numberLong": "98"
                },
                "correct": "Correct"
            },
            "14d1d70f31909467": {
                "code": "ul:nth-child(2)+li",
                "time": {
                    "$numberLong": "151"
                },
                "correct": "Incorrect"
            },
            "15085d8de21f8860": {
                "code": ":nth-child(2),:nth-child(4)",
                "time": {
                    "$numberLong": "37"
                },
                "correct": "Correct"
            },
            "15d30689cee2cf3d": {
                "code": "li:nth-child(2), li:nth-child(4)",
                "time": {
                    "$numberLong": "28"
                },
                "correct": "Correct"
            },
            "1662516da39bd248": {
                "code": "li:nth-child()",
                "time": {
                    "$numberLong": "148"
                },
                "correct": "Incorrect"
            },
            "167a5b071e75c309": {
                "code": "ul li:nth-child(2), ul li:nth-child(4",
                "time": {
                    "$numberLong": "133"
                },
                "correct": "Correct"
            },
            "174fb3408368ee14": {
                "code": "li:nth-child(2), li:nth-child(4)",
                "time": {
                    "$numberLong": "82"
                },
                "correct": "Correct"
            },
            "18a015071bed690d": {
                "code": "li:nth-child(2), li:nth-child(4)",
                "time": {
                    "$numberLong": "57"
                },
                "correct": "Correct"
            },
            "1a001ccb65b08947": {
                "code": "li:nth-last-child(2n+5)",
                "time": {
                    "$numberLong": "122"
                },
                "correct": "Correct"
            },
            "1a495818e81cd4fa": {
                "code": "ul :nth-child(2), ul :nth-child(4)  ",
                "time": {
                    "$numberLong": "67"
                },
                "correct": "Correct"
            },
            "1b834e64b9e1baf7": {
                "code": "ul li:nth-child(2), li:nth-child(4)",
                "time": {
                    "$numberLong": "51"
                },
                "correct": "Correct"
            },
            "1c207b98b51ff73d": {
                "code": "li:nth-child(2n)",
                "time": {
                    "$numberLong": "146"
                },
                "correct": "Incorrect"
            },
            "1c82933fa21c91af": {
                "code": "li:nth-child(2), li:nth-child(4)",
                "time": {
                    "$numberLong": "51"
                },
                "correct": "Correct"
            },
            "1c93a7a4711bff70": {
                "code": "ul:nth-child(2) li:nth-child(1)",
                "time": {
                    "$numberLong": "149"
                },
                "correct": "Incorrect"
            },
            "1e349ef8c3bc9f7a": {
                "code": "li:nth-child(2),li:nth-child(4)",
                "time": {
                    "$numberLong": "27"
                },
                "correct": "Correct"
            },
            "1ea00611e97c6ea6": {
                "code": "li:not(li:nth-child(1),)",
                "time": {
                    "$numberLong": "146"
                },
                "correct": "Incorrect"
            },
            "201af50fd3b736ba": {
                "code": "li:nth-of-type(2), li:nth-of-type(4)",
                "time": {
                    "$numberLong": "143"
                },
                "correct": "Correct"
            },
            "214efb907df65375": {
                "code": "li:nth-child(2), li:nth-child(4)",
                "time": {
                    "$numberLong": "103"
                },
                "correct": "Correct"
            },
            "21b91283c47ddf5e": {
                "code": "li:nth-child(2n)",
                "time": {
                    "$numberLong": "144"
                },
                "correct": "Incorrect"
            },
            "2272f07c112385b1": {
                "code": "li:nth-child(n2)",
                "time": {
                    "$numberLong": "151"
                },
                "correct": "Incorrect"
            },
            "24337d34f84c3b29": {
                "code": "li:nth-child(2), li:nth-child(4",
                "time": {
                    "$numberLong": "150"
                },
                "correct": "Correct"
            },
            "249db831162d981a": {
                "code": "li:nth-child(2)+li:nth-child()",
                "time": {
                    "$numberLong": "151"
                },
                "correct": "Incorrect"
            },
            "24b339e7f88f73de": {
                "code": "li:nth-last-child(2n+5)",
                "time": {
                    "$numberLong": "70"
                },
                "correct": "Correct"
            },
            "24b54a457abe06f4": {
                "code": "ul :nth-child(2), ul :nth-child(4",
                "time": {
                    "$numberLong": "73"
                },
                "correct": "Correct"
            },
            "24b848f155c0b3b7": {
                "code": ":nth-child(2n):not(nth-child(n+1))",
                "time": {
                    "$numberLong": "150"
                },
                "correct": "Incorrect"
            },
            "24d4763d41328ec4": {
                "code": "li:nth-child(2),li:nth-child(4)",
                "time": {
                    "$numberLong": "31"
                },
                "correct": "Correct"
            },
            "250e04bcb5fbe4f7": {
                "code": "li:nth-child(2), li:nth-child(4)",
                "time": {
                    "$numberLong": "29"
                },
                "correct": "Correct"
            },
            "25f9ecca44c1cd46": {
                "code": "li:nth-last-of-type(2n+4)",
                "time": {
                    "$numberLong": "150"
                },
                "correct": "Incorrect"
            },
            "2601d4348a0a9688": {
                "code": "",
                "time": {
                    "$numberLong": "88"
                },
                "correct": "Incorrect"
            },
            "2651ba874a6c8d94": {
                "code": " ul li:nth-child(2),ul li:nth-child(4)",
                "time": {
                    "$numberLong": "109"
                },
                "correct": "Correct"
            },
            "27a619553e988074": {
                "code": "li:nth-child(2), li:nth-child(4",
                "time": {
                    "$numberLong": "25"
                },
                "correct": "Correct"
            },
            "27bef6362f6c3153": {
                "code": "li:nth-child(2), li:nth-child(4)",
                "time": {
                    "$numberLong": "25"
                },
                "correct": "Correct"
            },
            "284a6bf537e9bc4d": {
                "code": "li:nth-child(2n )",
                "time": {
                    "$numberLong": "148"
                },
                "correct": "Incorrect"
            },
            "2aced08264036ea8": {
                "code": "li:nth-child(2), :nth-child(4)",
                "time": {
                    "$numberLong": "74"
                },
                "correct": "Correct"
            },
            "2c5dea2ca5f0d036": {
                "code": "",
                "time": {
                    "$numberLong": "145"
                },
                "correct": "Incorrect"
            },
            "2cb5d5d4c8d4b19a": {
                "code": ":nth-child(2n)",
                "time": {
                    "$numberLong": "123"
                },
                "correct": "Incorrect"
            },
            "2cecb227110f5c46": {
                "code": "li:nth-child(2), li:nth-child(4)",
                "time": {
                    "$numberLong": "85"
                },
                "correct": "Correct"
            },
            "2f201db12c801e85": {
                "code": "li:nth-child(2),li:nth-child(4)",
                "time": {
                    "$numberLong": "95"
                },
                "correct": "Correct"
            },
            "2f6a509eafbbb15c": {
                "code": "li:nth-child(2),li:nth-child(4)",
                "time": {
                    "$numberLong": "89"
                },
                "correct": "Correct"
            },
            "2fe6410a79f03048": {
                "code": "li:nth-child(2), li:nth-child(4)",
                "time": {
                    "$numberLong": "102"
                },
                "correct": "Correct"
            },
            "30959179ed650cd1": {
                "code": "li:nth-child(2), li:nth-child(4",
                "time": {
                    "$numberLong": "37"
                },
                "correct": "Correct"
            },
            "34a24dd3d6aa750b": {
                "code": "li:nth-child(2), li:nth-child(4)",
                "time": {
                    "$numberLong": "29"
                },
                "correct": "Correct"
            },
            "34a4f2506ce3d182": {
                "code": ":nth-child(2)",
                "time": {
                    "$numberLong": "102"
                },
                "correct": "Incorrect"
            },
            "350ebb347c1ad556": {
                "code": "li:nth-child(2), li:nth-child(4)",
                "time": {
                    "$numberLong": "77"
                },
                "correct": "Correct"
            },
            "3549c28b38369744": {
                "code": "li:nth-of-type(2n):not(:nth-of-type(6)):not(:nth-of-type(8",
                "time": {
                    "$numberLong": "101"
                },
                "correct": "Correct"
            },
            "36cfe6300f509bd5": {
                "code": "li:nth-child(2), li:nth-child(4)",
                "time": {
                    "$numberLong": "133"
                },
                "correct": "Correct"
            },
            "36e8f42039c184db": {
                "code": "ul li:nth-child(2)",
                "time": {
                    "$numberLong": "109"
                },
                "correct": "Incorrect"
            },
            "3720867adefd1d26": {
                "code": "ul :nth-child(2), ul :nth-child(4)",
                "time": {
                    "$numberLong": "60"
                },
                "correct": "Correct"
            },
            "37b36e389ab7fe80": {
                "code": "child(2), li:nth-child()",
                "time": {
                    "$numberLong": "151"
                },
                "correct": "Incorrect"
            },
            "39a2e48e45b49980": {
                "code": "li:nth-child(1n+2)",
                "time": {
                    "$numberLong": "149"
                },
                "correct": "Incorrect"
            },
            "39fe9e521f177219": {
                "code": "",
                "time": {
                    "$numberLong": "151"
                },
                "correct": "Incorrect"
            },
            "3a562770cb99a7f4": {
                "code": "li:nth-child(2), li:nth-child(4",
                "time": {
                    "$numberLong": "65"
                },
                "correct": "Correct"
            },
            "3ab170848134a2ff": {
                "code": ":nth-child(2),:nth-child(4",
                "time": {
                    "$numberLong": "136"
                },
                "correct": "Correct"
            },
            "3c5258124b324a11": {
                "code": "li:nth-last-of-type(2n+5",
                "time": {
                    "$numberLong": "66"
                },
                "correct": "Correct"
            },
            "3cb038073228740f": {
                "code": ":nth-child(2),:nth-child(4",
                "time": {
                    "$numberLong": "42"
                },
                "correct": "Correct"
            },
            "3ceec99315a58f1c": {
                "code": "li:nth-child(2), li:nth-child(4",
                "time": {
                    "$numberLong": "89"
                },
                "correct": "Correct"
            },
            "3d63b802d486029c": {
                "code": "li:nth-child(2), li:nth-child(4",
                "time": {
                    "$numberLong": "36"
                },
                "correct": "Correct"
            },
            "3dc599a7d0323291": {
                "code": "li:nth-child(2), li:nth-child(4)",
                "time": {
                    "$numberLong": "73"
                },
                "correct": "Correct"
            },
            "3efffe88342c3ee5": {
                "code": "li:nth-child(2),li:nth-child(4",
                "time": {
                    "$numberLong": "60"
                },
                "correct": "Correct"
            },
            "4139b7d383e0b65c": {
                "code": "li:nth-child(2), li:nth-child(4)",
                "time": {
                    "$numberLong": "52"
                },
                "correct": "Correct"
            },
            "418ca735584f1e3a": {
                "code": "",
                "time": {
                    "$numberLong": "142"
                },
                "correct": "Incorrect"
            },
            "42d7cc27726e8052": {
                "code": "li:nth-child(2),li:nth-child(4)",
                "time": {
                    "$numberLong": "102"
                },
                "correct": "Correct"
            },
            "454f621946346eed": {
                "code": "li:nth-of-type(2), li:nth-of-type(4) ",
                "time": {
                    "$numberLong": "50"
                },
                "correct": "Correct"
            },
            "4639b56895b8be0c": {
                "code": "ul :nth-child(2n+2)",
                "time": {
                    "$numberLong": "108"
                },
                "correct": "Incorrect"
            },
            "491d66dad9c08b8c": {
                "code": "ul 003e li",
                "time": {
                    "$numberLong": "101"
                },
                "correct": "Incorrect"
            },
            "4c239ebf3cc37c4e": {
                "code": "li:nth-child(2n)",
                "time": {
                    "$numberLong": "144"
                },
                "correct": "Incorrect"
            },
            "4d9c4a8566aaca2e": {
                "code": "li:nth-child(2), li:nth-child(4",
                "time": {
                    "$numberLong": "34"
                },
                "correct": "Correct"
            },
            "4f2d802143f78fdc": {
                "code": ":nth-last-child(2n+5)",
                "time": {
                    "$numberLong": "41"
                },
                "correct": "Correct"
            },
            "50a7d9c3900376d4": {
                "code": "li:nth-last-child(5n)",
                "time": {
                    "$numberLong": "151"
                },
                "correct": "Incorrect"
            },
            "50e718838ec3ed69": {
                "code": "*:nth-child(-2n+4)",
                "time": {
                    "$numberLong": "90"
                },
                "correct": "Correct"
            },
            "50f3b5f06c1d21a1": {
                "code": "ul003e:nth-child(2)",
                "time": {
                    "$numberLong": "96"
                },
                "correct": "Incorrect"
            },
            "5154c91bcd705420": {
                "code": "li:nth-child(2n);",
                "time": {
                    "$numberLong": "129"
                },
                "correct": "Incorrect"
            },
            "52131ae4ea1f02db": {
                "code": "li:nth-of-type(2), li:nth-of-type(4)",
                "time": {
                    "$numberLong": "58"
                },
                "correct": "Correct"
            },
            "54757d6425a18652": {
                "code": "",
                "time": {
                    "$numberLong": "148"
                },
                "correct": "Incorrect"
            },
            "57a19a29c66f273a": {
                "code": ":nth-child(2):nth-child(4,)",
                "time": {
                    "$numberLong": "150"
                },
                "correct": "Incorrect"
            },
            "597eaca2f80bb597": {
                "code": "li:nth-last-of-type(2n + 5)",
                "time": {
                    "$numberLong": "55"
                },
                "correct": "Correct"
            },
            "598dc546faccea96": {
                "code": "ul003eli+li",
                "time": {
                    "$numberLong": "125"
                },
                "correct": "Incorrect"
            },
            "5cbbd38ec27acc0d": {
                "code": "li:second-of-type",
                "time": {
                    "$numberLong": "119"
                },
                "correct": "Incorrect"
            },
            "5f2b55c93f8dfc50": {
                "code": "ul:nth-child(2):nth-child(4)",
                "time": {
                    "$numberLong": "149"
                },
                "correct": "Incorrect"
            },
            "5fa0dc84f5366d5d": {
                "code": "li:nth-child(2), li:nth-child(4",
                "time": {
                    "$numberLong": "29"
                },
                "correct": "Correct"
            },
            "607b0abda0c50b0c": {
                "code": "li:",
                "time": {
                    "$numberLong": "149"
                },
                "correct": "Incorrect"
            },
            "608a221e132cfb0e": {
                "code": "li:nth-child((-n+4)/)",
                "time": {
                    "$numberLong": "151"
                },
                "correct": "Incorrect"
            },
            "610358eb6ad04b78": {
                "code": "li+li:nth-child(2), li+li:nth-child(4",
                "time": {
                    "$numberLong": "54"
                },
                "correct": "Correct"
            },
            "63da271cdd05f72a": {
                "code": "li:nth-child(2),li:nth-child(4)",
                "time": {
                    "$numberLong": "64"
                },
                "correct": "Correct"
            },
            "645a56e6b8555c48": {
                "code": "li:nth-child(2),li:nth-child(4)",
                "time": {
                    "$numberLong": "18"
                },
                "correct": "Correct"
            },
            "6877303d0bc23e9f": {
                "code": "",
                "time": {
                    "$numberLong": "140"
                },
                "correct": "Incorrect"
            },
            "690d4a3fa53cafe6": {
                "code": "ul li:nth-child(2), li:nth-child(4",
                "time": {
                    "$numberLong": "26"
                },
                "correct": "Correct"
            },
            "69a28f1b78baef56": {
                "code": "li:nth-child(2),li:nth-child(4)",
                "time": {
                    "$numberLong": "105"
                },
                "correct": "Correct"
            },
            "6a6720574c217df1": {
                "code": "ul:nth-child(2)",
                "time": {
                    "$numberLong": "101"
                },
                "correct": "Incorrect"
            },
            "6ac831e069244801": {
                "code": "li:nth-child(2), li:nth-child(4",
                "time": {
                    "$numberLong": "22"
                },
                "correct": "Correct"
            },
            "6be274af29d69012": {
                "code": "li:nth-child(2n):not(:nth-child(2n+6))",
                "time": {
                    "$numberLong": "88"
                },
                "correct": "Correct"
            },
            "6be81d9143dc01ec": {
                "code": "",
                "time": {
                    "$numberLong": "150"
                },
                "correct": "Incorrect"
            },
            "6d772a3e4250147a": {
                "code": "li:nth-child(2), li:nth-child(4) ",
                "time": {
                    "$numberLong": "81"
                },
                "correct": "Correct"
            },
            "703e792787acb96a": {
                "code": "li:nth-child(2n)",
                "time": {
                    "$numberLong": "117"
                },
                "correct": "Incorrect"
            },
            "70c2126a27a7ff92": {
                "code": "li:nth-child(2),li:nth-child(4",
                "time": {
                    "$numberLong": "38"
                },
                "correct": "Correct"
            },
            "738824e90ee1a521": {
                "code": "ul003eli",
                "time": {
                    "$numberLong": "150"
                },
                "correct": "Incorrect"
            },
            "758f08ff64d4fbed": {
                "code": "ul li:nth-child(2) u li:nth-child(4) ",
                "time": {
                    "$numberLong": "151"
                },
                "correct": "Incorrect"
            },
            "77bfda6e1e04388a": {
                "code": "li:nth-child(2), li:nth-child(4)",
                "time": {
                    "$numberLong": "28"
                },
                "correct": "Correct"
            },
            "784e2a35a5f02a51": {
                "code": "li:nth-of-type(2), li:nth-of-type(4)",
                "time": {
                    "$numberLong": "68"
                },
                "correct": "Correct"
            },
            "7876d097648ce241": {
                "code": "",
                "time": {
                    "$numberLong": "114"
                },
                "correct": "Incorrect"
            },
            "7913e18db9805385": {
                "code": "li:nth-child(2n):not(:nth-child(6n)):not(:nth-child(8n))",
                "time": {
                    "$numberLong": "106"
                },
                "correct": "Correct"
            },
            "79991eac2ed55971": {
                "code": "ul :nth-child(2), ul :nth-child(4)",
                "time": {
                    "$numberLong": "98"
                },
                "correct": "Correct"
            },
            "79d3d5a874c0fedb": {
                "code": ":nth-child(4)",
                "time": {
                    "$numberLong": "140"
                },
                "correct": "Incorrect"
            },
            "7cd8dd365d287663": {
                "code": "ul:nth-child(2n+1)",
                "time": {
                    "$numberLong": "150"
                },
                "correct": "Incorrect"
            },
            "7d9ab4e430491d3c": {
                "code": "li:nth-last-child(2n+5)",
                "time": {
                    "$numberLong": "77"
                },
                "correct": "Correct"
            },
            "7ef1e4b829e0b3d6": {
                "code": "li:nth-child(2)",
                "time": {
                    "$numberLong": "140"
                },
                "correct": "Incorrect"
            },
            "7f48769c943032b7": {
                "code": "ul li:nth-child(2n):not(nth-child(odd)",
                "time": {
                    "$numberLong": "150"
                },
                "correct": "Incorrect"
            },
            "8150b6bbc7717883": {
                "code": "",
                "time": {
                    "$numberLong": "147"
                },
                "correct": "Incorrect"
            },
            "8190a67e4972f187": {
                "code": ":nth-child(2),:nth-child(4) ",
                "time": {
                    "$numberLong": "48"
                },
                "correct": "Correct"
            },
            "82e8b6c0d88e0003": {
                "code": "li:nth-child(2),li:nth-child(4)",
                "time": {
                    "$numberLong": "33"
                },
                "correct": "Correct"
            },
            "8373c834e2ac08bd": {
                "code": "li:nth-last-child(7)",
                "time": {
                    "$numberLong": "148"
                },
                "correct": "Incorrect"
            },
            "85faf02e7002468e": {
                "code": "ul li:nth-child(2), ul li:nth-child(4",
                "time": {
                    "$numberLong": "30"
                },
                "correct": "Correct"
            },
            "867cfd1b76269046": {
                "code": "li:nth-child(2),li:nth-child(4",
                "time": {
                    "$numberLong": "114"
                },
                "correct": "Correct"
            },
            "8682698b0efcbb49": {
                "code": "li:nth-child(-2n+4)",
                "time": {
                    "$numberLong": "82"
                },
                "correct": "Correct"
            },
            "870545b496fb9231": {
                "code": ":nth-child(8n+2)",
                "time": {
                    "$numberLong": "149"
                },
                "correct": "Incorrect"
            },
            "8875dc4e9876728e": {
                "code": "li:nth-child(2), li:nth-child(4",
                "time": {
                    "$numberLong": "26"
                },
                "correct": "Correct"
            },
            "898447718f00f0c7": {
                "code": "li:nth-child(2), li:nth-child(4)",
                "time": {
                    "$numberLong": "132"
                },
                "correct": "Correct"
            },
            "89f7ff1ba54776b9": {
                "code": "li:nth-child(2), li:nth-child(4)",
                "time": {
                    "$numberLong": "31"
                },
                "correct": "Correct"
            },
            "89fb2b288bdbd651": {
                "code": "li:nth-child(2)",
                "time": {
                    "$numberLong": "144"
                },
                "correct": "Incorrect"
            },
            "8b3e94c6bb875abd": {
                "code": "li:nth-child(2), li:nth-child(4)",
                "time": {
                    "$numberLong": "30"
                },
                "correct": "Correct"
            },
            "8c9feac04348414f": {
                "code": "li:nth-child(2), li:nth-child(4",
                "time": {
                    "$numberLong": "54"
                },
                "correct": "Correct"
            },
            "8ce246e288c504b7": {
                "code": "li:nth-child(2), li:nth-child(4)",
                "time": {
                    "$numberLong": "62"
                },
                "correct": "Correct"
            },
            "8d0b871a3aac7646": {
                "code": ":nth-child(2) ,:nth-child(4)",
                "time": {
                    "$numberLong": "53"
                },
                "correct": "Correct"
            },
            "8efb6e527bd50aae": {
                "code": "ul :nth-child(2n+2) ",
                "time": {
                    "$numberLong": "128"
                },
                "correct": "Incorrect"
            },
            "92352b0b01aac98b": {
                "code": "li:nth-child(2),",
                "time": {
                    "$numberLong": "147"
                },
                "correct": "Incorrect"
            },
            "93e87af5faea4465": {
                "code": "li+li",
                "time": {
                    "$numberLong": "141"
                },
                "correct": "Incorrect"
            },
            "94ae2983d85b56f3": {
                "code": "li:nth-child(3)",
                "time": {
                    "$numberLong": "80"
                },
                "correct": "Incorrect"
            },
            "94bac471a8a06f41": {
                "code": "li:nth-child(2n-1)",
                "time": {
                    "$numberLong": "151"
                },
                "correct": "Incorrect"
            },
            "94e6f0f36d96cca7": {
                "code": "li:last-of-type(2n, 4)",
                "time": {
                    "$numberLong": "148"
                },
                "correct": "Incorrect"
            },
            "95da8c87fe0966a9": {
                "code": "li:nth-child(2),li:nth-child(4)",
                "time": {
                    "$numberLong": "92"
                },
                "correct": "Correct"
            },
            "9615130025e3bf23": {
                "code": "li:nth-child(2)",
                "time": {
                    "$numberLong": "144"
                },
                "correct": "Incorrect"
            },
            "96a9d51e700ea6d9": {
                "code": ":nth-child(2), :nth-child(4)",
                "time": {
                    "$numberLong": "55"
                },
                "correct": "Correct"
            },
            "96c9015ae13475fb": {
                "code": "li:nth-child(2n)",
                "time": {
                    "$numberLong": "90"
                },
                "correct": "Incorrect"
            },
            "97dbe566f05bad1e": {
                "code": "li:nth-child(2),li:nth-child(4",
                "time": {
                    "$numberLong": "61"
                },
                "correct": "Correct"
            },
            "9a1d3ecd70ce4b81": {
                "code": "li:nth-of-type(2),li:nth-of-type(4)",
                "time": {
                    "$numberLong": "15"
                },
                "correct": "Correct"
            },
            "9ba3cd7d2209cdb1": {
                "code": "ul li:nth-child(2),:nth-child(4)",
                "time": {
                    "$numberLong": "72"
                },
                "correct": "Correct"
            },
            "9decf80a3668a04c": {
                "code": "li:nth-child(2), li:nth-child(4)",
                "time": {
                    "$numberLong": "32"
                },
                "correct": "Correct"
            },
            "9e1ad98e7ed497c0": {
                "code": "li:nth-child(2)",
                "time": {
                    "$numberLong": "149"
                },
                "correct": "Incorrect"
            },
            "9e8ceb488c61bfc6": {
                "code": "li:nth-child(2), :nth-child(4)",
                "time": {
                    "$numberLong": "44"
                },
                "correct": "Correct"
            },
            "9eb7f3047b78db41": {
                "code": "ul :nth-child(2) th-child(4)",
                "time": {
                    "$numberLong": "151"
                },
                "correct": "Incorrect"
            },
            "9f3c76f5aebfad0a": {
                "code": "li:first-child + li,li:nth-child(4",
                "time": {
                    "$numberLong": "133"
                },
                "correct": "Correct"
            },
            "9f57ba8fbeaabc8f": {
                "code": "ul li:nth-child(2n+2) ",
                "time": {
                    "$numberLong": "141"
                },
                "correct": "Incorrect"
            },
            "9f79120ff09e7b32": {
                "code": "ul:n-th-child(2)",
                "time": {
                    "$numberLong": "41"
                },
                "correct": "Incorrect"
            },
            "9f98758762638c79": {
                "code": "ul 003e li:nth-child(2), ul 003e li:nth-child(4)",
                "time": {
                    "$numberLong": "84"
                },
                "correct": "Correct"
            },
            "9fc6640ffb5bcf88": {
                "code": "li:nth-last-child(2n+5)",
                "time": {
                    "$numberLong": "53"
                },
                "correct": "Correct"
            },
            "a59abf0ef6dd72ee": {
                "code": ":nth-child(2),:nth-child(4)",
                "time": {
                    "$numberLong": "81"
                },
                "correct": "Correct"
            },
            "a5cff54715b5e728": {
                "code": "li:nth-child(2), li:nth-child(4)",
                "time": {
                    "$numberLong": "60"
                },
                "correct": "Correct"
            },
            "a68d50ef4eaf5330": {
                "code": "li:nth-child(5n-)",
                "time": {
                    "$numberLong": "150"
                },
                "correct": "Incorrect"
            },
            "a7faf246f1fec897": {
                "code": "li:nth-child(2), li:nth-child(4)",
                "time": {
                    "$numberLong": "39"
                },
                "correct": "Correct"
            },
            "a82a83d5b2316bbb": {
                "code": "li:nth-child(2), li:nth-child(4",
                "time": {
                    "$numberLong": "52"
                },
                "correct": "Correct"
            },
            "a87fa4ebabc2a0ce": {
                "code": "li:nth-child(2), li:nth-child(4)",
                "time": {
                    "$numberLong": "23"
                },
                "correct": "Correct"
            },
            "ac306151b36609fd": {
                "code": "ul li:nth-child(2), li:nth-child(4)",
                "time": {
                    "$numberLong": "24"
                },
                "correct": "Correct"
            },
            "ad1db3469049502b": {
                "code": "li:nth-child(2), li:nth-child(4",
                "time": {
                    "$numberLong": "83"
                },
                "correct": "Correct"
            },
            "add0cf5b0e6f0061": {
                "code": "li:odd",
                "time": {
                    "$numberLong": "143"
                },
                "correct": "Incorrect"
            },
            "ade8a9fbb5003944": {
                "code": ":nth-child(n) ",
                "time": {
                    "$numberLong": "148"
                },
                "correct": "Incorrect"
            },
            "ae9e54473d676c54": {
                "code": ":nth-child(2), :nth-child(4",
                "time": {
                    "$numberLong": "21"
                },
                "correct": "Correct"
            },
            "af5c9cf12b2832c8": {
                "code": ":nth-child(2,)",
                "time": {
                    "$numberLong": "151"
                },
                "correct": "Incorrect"
            },
            "affe91192214b1ab": {
                "code": "li:nth-child(2), li:nth-child(4)",
                "time": {
                    "$numberLong": "64"
                },
                "correct": "Correct"
            },
            "b0963184aa7f246b": {
                "code": "li:nth-child(2), li:nth-child(4",
                "time": {
                    "$numberLong": "61"
                },
                "correct": "Correct"
            },
            "b1926b5f5e8b806b": {
                "code": ":nth-child(2), :nth-child(4) ",
                "time": {
                    "$numberLong": "50"
                },
                "correct": "Correct"
            },
            "b1cbf3ca65c56e0d": {
                "code": "li:nth-child(-2n+4)",
                "time": {
                    "$numberLong": "127"
                },
                "correct": "Correct"
            },
            "b278646f280691cb": {
                "code": "li:nth-last-child(2n + 5)",
                "time": {
                    "$numberLong": "81"
                },
                "correct": "Correct"
            },
            "b2913665b1d38784": {
                "code": ":nth-child(2),:nth-child(4)",
                "time": {
                    "$numberLong": "29"
                },
                "correct": "Correct"
            },
            "b46b33d779ec951f": {
                "code": "ul li:nth-child(2), ul li:nth-child(4)",
                "time": {
                    "$numberLong": "51"
                },
                "correct": "Correct"
            },
            "b4e84dc5f950be34": {
                "code": "li:nth-child(2),:nth-child(4)",
                "time": {
                    "$numberLong": "58"
                },
                "correct": "Correct"
            },
            "b4f4b5c6dfcb6d07": {
                "code": "ul li:nth-child(2), ul li:nth-child(4)",
                "time": {
                    "$numberLong": "55"
                },
                "correct": "Correct"
            },
            "b51a79256e2462a5": {
                "code": "li:nth-child(2),li:nth-child(4)",
                "time": {
                    "$numberLong": "62"
                },
                "correct": "Correct"
            },
            "b7037f74a55b1ded": {
                "code": "li:nth-child(2)",
                "time": {
                    "$numberLong": "150"
                },
                "correct": "Incorrect"
            },
            "b70e0f3eadc8fa6a": {
                "code": ":nth-child(2n)",
                "time": {
                    "$numberLong": "142"
                },
                "correct": "Incorrect"
            },
            "b87bfaa63e377a71": {
                "code": "li:nth-last-child(2n+5",
                "time": {
                    "$numberLong": "47"
                },
                "correct": "Correct"
            },
            "b913aff5711ffd5b": {
                "code": "ul li:nth-child(n+2)",
                "time": {
                    "$numberLong": "149"
                },
                "correct": "Incorrect"
            },
            "b928c37c17806191": {
                "code": "ul li:nth-child(2), li:nth-child(4",
                "time": {
                    "$numberLong": "52"
                },
                "correct": "Correct"
            },
            "b9d1dfe7e37afeb2": {
                "code": "ul 003e li",
                "time": {
                    "$numberLong": "144"
                },
                "correct": "Incorrect"
            },
            "b9f4eab4145bb27a": {
                "code": "li:nth-child(2), li:nth-child(4) ",
                "time": {
                    "$numberLong": "29"
                },
                "correct": "Correct"
            },
            "bbe008738217e35f": {
                "code": "ul 003e li:nth-child(2),li:nth-child(2),li:nth-child(4)",
                "time": {
                    "$numberLong": "90"
                },
                "correct": "Correct"
            },
            "c1219d67fe1e51c2": {
                "code": "li:nth-of-type(2),li:nth-of-type(4)",
                "time": {
                    "$numberLong": "47"
                },
                "correct": "Correct"
            },
            "c13f401d134bbdb7": {
                "code": "ul li:nth-child(2), ul li:nth-child(4)",
                "time": {
                    "$numberLong": "45"
                },
                "correct": "Correct"
            },
            "c18131119872b238": {
                "code": "li+li ",
                "time": {
                    "$numberLong": "137"
                },
                "correct": "Incorrect"
            },
            "c3713ba000985baf": {
                "code": "li:nth-child(2n+2):not(:last-child):not(:nth-child(6))",
                "time": {
                    "$numberLong": "92"
                },
                "correct": "Correct"
            },
            "c486a74f6d914600": {
                "code": ":nth-child(-2n+4)",
                "time": {
                    "$numberLong": "22"
                },
                "correct": "Correct"
            },
            "c4b129ee6608ab4e": {
                "code": "li:nth-child(2), li:nth-child",
                "time": {
                    "$numberLong": "151"
                },
                "correct": "Incorrect"
            },
            "c61f85976fa0f880": {
                "code": "li:nth-child(2), li:nth-child(4)",
                "time": {
                    "$numberLong": "87"
                },
                "correct": "Correct"
            },
            "c62f6a6327b38df0": {
                "code": "li:nth-child(2), li:nth-child(4",
                "time": {
                    "$numberLong": "137"
                },
                "correct": "Correct"
            },
            "c6782ec9fbfacc49": {
                "code": "li:nth-child(-2n+4)",
                "time": {
                    "$numberLong": "40"
                },
                "correct": "Correct"
            },
            "c81886dde372d437": {
                "code": "li:nth-child(2), li:nth-child(4",
                "time": {
                    "$numberLong": "87"
                },
                "correct": "Correct"
            },
            "c825ef755969b747": {
                "code": "li:nth-child(2), li:nth-child(4",
                "time": {
                    "$numberLong": "35"
                },
                "correct": "Correct"
            },
            "c95463f778ff93ca": {
                "code": "li:nth-child(2), li:nth-child(4",
                "time": {
                    "$numberLong": "150"
                },
                "correct": "Correct"
            },
            "ca348e67a411e031": {
                "code": "ul :nth-last-child(2n+5)",
                "time": {
                    "$numberLong": "90"
                },
                "correct": "Correct"
            },
            "ca60244540ed755d": {
                "code": ":nth-child(2) :nth-child(4)",
                "time": {
                    "$numberLong": "144"
                },
                "correct": "Incorrect"
            },
            "cab8ee9fdec69ee8": {
                "code": "ul:nth-child(+3)",
                "time": {
                    "$numberLong": "151"
                },
                "correct": "Incorrect"
            },
            "cb0b66dbc547fb22": {
                "code": "*:nth-child(2) *",
                "time": {
                    "$numberLong": "150"
                },
                "correct": "Incorrect"
            },
            "cb13a1cb1bf89459": {
                "code": ":nth-child(2), :nth-child(4)",
                "time": {
                    "$numberLong": "25"
                },
                "correct": "Correct"
            },
            "cf8643fb83e99e86": {
                "code": "li:nth-child(2), li:nth-child(4",
                "time": {
                    "$numberLong": "83"
                },
                "correct": "Correct"
            },
            "cfa10e7229340f70": {
                "code": "ul li:nth-child(2)  ul li:nth-child(4) ",
                "time": {
                    "$numberLong": "150"
                },
                "correct": "Incorrect"
            },
            "d0b031eec85e6911": {
                "code": ":nth-child(2), :nth-child(4)",
                "time": {
                    "$numberLong": "37"
                },
                "correct": "Correct"
            },
            "d1346365de590ccf": {
                "code": "ul li:nth-child(2),ul li:nth-child(4)",
                "time": {
                    "$numberLong": "22"
                },
                "correct": "Correct"
            },
            "d417fd8dd5e48efe": {
                "code": "li:nth-child(2), :nth-child(4)",
                "time": {
                    "$numberLong": "99"
                },
                "correct": "Correct"
            },
            "d4a5deb84ce836e9": {
                "code": "li:nth-child(2), li:nth-child(4) ",
                "time": {
                    "$numberLong": "137"
                },
                "correct": "Correct"
            },
            "d52887dab0fb075f": {
                "code": ":nth-child(2),:nth-child(4",
                "time": {
                    "$numberLong": "64"
                },
                "correct": "Correct"
            },
            "d57163ee2e28e4b2": {
                "code": "ul",
                "time": {
                    "$numberLong": "117"
                },
                "correct": "Incorrect"
            },
            "d66e5b11f0731612": {
                "code": "ul li:nth-child(-2n+4)",
                "time": {
                    "$numberLong": "96"
                },
                "correct": "Correct"
            },
            "d6f6f6c7a9301bbe": {
                "code": "li:nth-child(2),li:nth-child(4)",
                "time": {
                    "$numberLong": "106"
                },
                "correct": "Correct"
            },
            "d8c54e85ccd5b21c": {
                "code": "li:nth-child(2), li:nth-child(4)",
                "time": {
                    "$numberLong": "56"
                },
                "correct": "Correct"
            },
            "d9c232089e7ae571": {
                "code": "li:first-child",
                "time": {
                    "$numberLong": "150"
                },
                "correct": "Incorrect"
            },
            "d9f697ce2a414d53": {
                "code": "li:nth-child(2),li:nth-child(4",
                "time": {
                    "$numberLong": "87"
                },
                "correct": "Correct"
            },
            "db9d65f484e4d137": {
                "code": ":nth-child(2),:nth-child(4)",
                "time": {
                    "$numberLong": "46"
                },
                "correct": "Correct"
            },
            "dba3419fda42d93b": {
                "code": "*:nth-child(2n):not(n)",
                "time": {
                    "$numberLong": "145"
                },
                "correct": "Incorrect"
            },
            "dd7da88658f252c6": {
                "code": ":nth-child(2), li:nth-child(4)",
                "time": {
                    "$numberLong": "39"
                },
                "correct": "Correct"
            },
            "dda5b4fc568bd7e7": {
                "code": "ul~",
                "time": {
                    "$numberLong": "130"
                },
                "correct": "Incorrect"
            },
            "de33e71b1fe6587c": {
                "code": "ul li:nth-child((2n)",
                "time": {
                    "$numberLong": "151"
                },
                "correct": "Incorrect"
            },
            "de7c64d3d7de70a5": {
                "code": ":nth-child(-2n+4)",
                "time": {
                    "$numberLong": "87"
                },
                "correct": "Correct"
            },
            "e0c2f4026aaf9e95": {
                "code": "li:nth-child(2), :nth-child(4)",
                "time": {
                    "$numberLong": "46"
                },
                "correct": "Correct"
            },
            "e3dc40112d98c593": {
                "code": "ul li:nth-child(2),li:nth-child(4)",
                "time": {
                    "$numberLong": "30"
                },
                "correct": "Correct"
            },
            "e4692b2237b13270": {
                "code": ":nth-child(2),:nth-child(4)",
                "time": {
                    "$numberLong": "51"
                },
                "correct": "Correct"
            },
            "e4924b8e7499d2e8": {
                "code": ":nth-child(2), li:nth-child(4)",
                "time": {
                    "$numberLong": "50"
                },
                "correct": "Correct"
            },
            "e609701dd7bbad52": {
                "code": "li:nth-child(2), li:nth-child(4",
                "time": {
                    "$numberLong": "57"
                },
                "correct": "Correct"
            },
            "e70b30486b960ca2": {
                "code": ":nth-child(2), :nth-child(4)",
                "time": {
                    "$numberLong": "51"
                },
                "correct": "Correct"
            },
            "e8a0543d60a31174": {
                "code": " li:nth-child(2), li:nth-child(4",
                "time": {
                    "$numberLong": "137"
                },
                "correct": "Correct"
            },
            "eaa4e4a573bbdf56": {
                "code": "li:nth-child(2), li:nth-child(4)",
                "time": {
                    "$numberLong": "37"
                },
                "correct": "Correct"
            },
            "eb3c03ba165df064": {
                "code": "li:nth-child(2), li:nth-child(4)",
                "time": {
                    "$numberLong": "30"
                },
                "correct": "Correct"
            },
            "eb8cc549bad70c0b": {
                "code": ":nth-child(2),:nth-child(4)",
                "time": {
                    "$numberLong": "105"
                },
                "correct": "Correct"
            },
            "ec083ecdf7de4e1e": {
                "code": "li:nth-last-child(2n+5)",
                "time": {
                    "$numberLong": "44"
                },
                "correct": "Correct"
            },
            "f060b45c72736520": {
                "code": "li:nth-child(2n-8)",
                "time": {
                    "$numberLong": "150"
                },
                "correct": "Incorrect"
            },
            "f1544a9bfe0cd1ad": {
                "code": "li:nth-child(2), li:nth-child(4)",
                "time": {
                    "$numberLong": "37"
                },
                "correct": "Correct"
            },
            "f1c05dde29065cc5": {
                "code": "li:nth-child(2), li:nth-child(4)",
                "time": {
                    "$numberLong": "71"
                },
                "correct": "Correct"
            },
            "f1d6c124613e4dc3": {
                "code": "",
                "time": {
                    "$numberLong": "142"
                },
                "correct": "Incorrect"
            },
            "f271aeb2b417cd7e": {
                "code": "li:nth-child(2), li:nth-child(4)",
                "time": {
                    "$numberLong": "96"
                },
                "correct": "Correct"
            },
            "f3a692ff48114271": {
                "code": "li:nth-child(2),li:nth-child(4)",
                "time": {
                    "$numberLong": "30"
                },
                "correct": "Correct"
            },
            "f3f8cd8f734b6082": {
                "code": "li:nth-child(2) li",
                "time": {
                    "$numberLong": "151"
                },
                "correct": "Incorrect"
            },
            "f47878383710d5dd": {
                "code": "li:nth-child(2), li:nth-child(4)",
                "time": {
                    "$numberLong": "81"
                },
                "correct": "Correct"
            },
            "f5e8f96eee818651": {
                "code": "ul li:nth-child(2n):not()",
                "time": {
                    "$numberLong": "145"
                },
                "correct": "Incorrect"
            },
            "f6829fc871613b65": {
                "code": "ul003eli:nth-child(2),ul003eli:nth-child(4)",
                "time": {
                    "$numberLong": "23"
                },
                "correct": "Correct"
            },
            "f711acd5f09bbdf6": {
                "code": "li:nth-child(2), li:nth-child(4)",
                "time": {
                    "$numberLong": "72"
                },
                "correct": "Correct"
            },
            "f7b65f853512e069": {
                "code": "li:nth-last-child(2n + 5)",
                "time": {
                    "$numberLong": "99"
                },
                "correct": "Correct"
            },
            "f881ad2049d118b3": {
                "code": "li:nth-child(2),li:nth-child(4) ",
                "time": {
                    "$numberLong": "129"
                },
                "correct": "Correct"
            },
            "f8fea8fffdca4d43": {
                "code": "li:nth-child(2), li:nth-child(4)",
                "time": {
                    "$numberLong": "80"
                },
                "correct": "Correct"
            },
            "f92800e8fbf079ac": {
                "code": "li:nth-child(2), li:nth-child(4)",
                "time": {
                    "$numberLong": "18"
                },
                "correct": "Correct"
            },
            "f95bda2df3fd514e": {
                "code": "",
                "time": {
                    "$numberLong": "141"
                },
                "correct": "Incorrect"
            },
            "fc98beaf678455f7": {
                "code": "li:nth-child(2), li:nth-child(4)",
                "time": {
                    "$numberLong": "71"
                },
                "correct": "Correct"
            },
            "fcc928c4a2b55a70": {
                "code": "li:nth-child(2), li:nth-child(4",
                "time": {
                    "$numberLong": "27"
                },
                "correct": "Correct"
            },
            "fdf286213a36687f": {
                "code": "li:nth-last-child(2n +5 )",
                "time": {
                    "$numberLong": "134"
                },
                "correct": "Correct"
            },
            "fe5c52f5db2f1cea": {
                "code": "li:nth-child(2n)",
                "time": {
                    "$numberLong": "126"
                },
                "correct": "Incorrect"
            },
            "fe981eb56e6aa2eb": {
                "code": ":nth-child(-2n+4)",
                "time": {
                    "$numberLong": "55"
                },
                "correct": "Correct"
            },
            "ff32798839089a73": {
                "code": "li:nth-child(2), li:nth-child(4) ",
                "time": {
                    "$numberLong": "115"
                },
                "correct": "Correct"
            },
            "ffbc2f2c9e5c74bd": {
                "code": "li:nth-child(2)",
                "time": {
                    "$numberLong": "145"
                },
                "correct": "Incorrect"
            }
        }
    }, {
        "puzzleIndex": {
            "$numberLong": "7"
        },
        "startTime": {
            "$date": "2018-11-26T18:43:05.563Z"
        },
        "solutions": {
            "02ef04098b9feadf": {
                "code": ".firstborn ~ *",
                "time": {
                    "$numberLong": "36"
                },
                "correct": "Correct"
            },
            "044b7810d5b21241": {
                "code": ".firstborn ~*",
                "time": {
                    "$numberLong": "26"
                },
                "correct": "Correct"
            },
            "0505908ca880da63": {
                "code": "div div003e:not(.firstborn)",
                "time": {
                    "$numberLong": "84"
                },
                "correct": "Correct"
            },
            "0546833d81e75f8e": {
                "code": "",
                "time": {
                    "$numberLong": "150"
                },
                "correct": "Incorrect"
            },
            "074732b4e4e7f8c2": {
                "code": ":(:nth-child(1))",
                "time": {
                    "$numberLong": "134"
                },
                "correct": "Incorrect"
            },
            "07a655995e3a34a5": {
                "code": ":nth-child():not(.firstborn)",
                "time": {
                    "$numberLong": "135"
                },
                "correct": "Incorrect"
            },
            "0960cde31955389a": {
                "code": "div *:not(.firstborn)",
                "time": {
                    "$numberLong": "134"
                },
                "correct": "Incorrect"
            },
            "096ccaaf699480f6": {
                "code": "div 003e *:not(:first-child)",
                "time": {
                    "$numberLong": "17"
                },
                "correct": "Correct"
            },
            "0a69fc38555dc6b2": {
                "code": "div~*:not(.firstborn)",
                "time": {
                    "$numberLong": "73"
                },
                "correct": "Correct"
            },
            "0a9dea941704145b": {
                "code": ":not(div003e.firstborn)",
                "time": {
                    "$numberLong": "150"
                },
                "correct": "Incorrect"
            },
            "0be05f1edf9ac0c9": {
                "code": "",
                "time": {
                    "$numberLong": "138"
                },
                "correct": "Incorrect"
            },
            "0c5610ad65714d07": {
                "code": "div *:nth-child(n) ",
                "time": {
                    "$numberLong": "140"
                },
                "correct": "Incorrect"
            },
            "0cb7b730eb24cd97": {
                "code": "div  *:not(.firstborn)",
                "time": {
                    "$numberLong": "151"
                },
                "correct": "Incorrect"
            },
            "0dc9eee89960aa8c": {
                "code": "div:not(first-child)",
                "time": {
                    "$numberLong": "141"
                },
                "correct": "Incorrect"
            },
            "0dcc5ccce8ea8724": {
                "code": ".firstborn~*",
                "time": {
                    "$numberLong": "42"
                },
                "correct": "Correct"
            },
            "0e11826c10b3c359": {
                "code": "#second-son",
                "time": {
                    "$numberLong": "133"
                },
                "correct": "Incorrect"
            },
            "0f62193273f6c54f": {
                "code": "div li:nth-child(2), :nth-child(4)(.firstborn)",
                "time": {
                    "$numberLong": "141"
                },
                "correct": "Incorrect"
            },
            "0f68663169b43508": {
                "code": ".firstborn ~ *",
                "time": {
                    "$numberLong": "9"
                },
                "correct": "Correct"
            },
            "101366111d88b96c": {
                "code": "#second-son",
                "time": {
                    "$numberLong": "118"
                },
                "correct": "Incorrect"
            },
            "10878b8d10d2ae2b": {
                "code": "div 003e * :nth-child(n + 2)",
                "time": {
                    "$numberLong": "37"
                },
                "correct": "Correct"
            },
            "10f87b94846c7dd2": {
                "code": "div *:not(:first-child",
                "time": {
                    "$numberLong": "43"
                },
                "correct": "Correct"
            },
            "11013b79d46cadbc": {
                "code": "div *:not(:first-child",
                "time": {
                    "$numberLong": "20"
                },
                "correct": "Correct"
            },
            "1291f8effc0fb1e1": {
                "code": ".firstborn~*",
                "time": {
                    "$numberLong": "82"
                },
                "correct": "Correct"
            },
            "13516a858ed509bc": {
                "code": "div 003e *:not(.firstborn)",
                "time": {
                    "$numberLong": "108"
                },
                "correct": "Incorrect"
            },
            "13ebc713ecdb0c31": {
                "code": "div *:not(:first-child",
                "time": {
                    "$numberLong": "81"
                },
                "correct": "Correct"
            },
            "147cd0646fe74c51": {
                "code": ":not(:first-child)",
                "time": {
                    "$numberLong": "63"
                },
                "correct": "Correct"
            },
            "14d1d70f31909467": {
                "code": ":empty:not(.firstborn",
                "time": {
                    "$numberLong": "94"
                },
                "correct": "Correct"
            },
            "15085d8de21f8860": {
                "code": ":not(:first-child",
                "time": {
                    "$numberLong": "10"
                },
                "correct": "Correct"
            },
            "15d30689cee2cf3d": {
                "code": ".firstborn ~ *",
                "time": {
                    "$numberLong": "138"
                },
                "correct": "Correct"
            },
            "1662516da39bd248": {
                "code": "div * not(:first-child)",
                "time": {
                    "$numberLong": "149"
                },
                "correct": "Incorrect"
            },
            "167a5b071e75c309": {
                "code": "div 003e *:not(*:nth-child(1))",
                "time": {
                    "$numberLong": "81"
                },
                "correct": "Correct"
            },
            "174fb3408368ee14": {
                "code": ":nth-child(2n+3)",
                "time": {
                    "$numberLong": "149"
                },
                "correct": "Incorrect"
            },
            "18a015071bed690d": {
                "code": "div003e:not(:first-child)",
                "time": {
                    "$numberLong": "70"
                },
                "correct": "Correct"
            },
            "1a001ccb65b08947": {
                "code": "div 003e div",
                "time": {
                    "$numberLong": "143"
                },
                "correct": "Incorrect"
            },
            "1a495818e81cd4fa": {
                "code": "div 003e div ~ *",
                "time": {
                    "$numberLong": "119"
                },
                "correct": "Correct"
            },
            "1b834e64b9e1baf7": {
                "code": "div[class]~*",
                "time": {
                    "$numberLong": "82"
                },
                "correct": "Correct"
            },
            "1c207b98b51ff73d": {
                "code": ":not(:first-child",
                "time": {
                    "$numberLong": "35"
                },
                "correct": "Correct"
            },
            "1c82933fa21c91af": {
                "code": "div:nth-child(0",
                "time": {
                    "$numberLong": "151"
                },
                "correct": "Incorrect"
            },
            "1c93a7a4711bff70": {
                "code": "#second-son~span",
                "time": {
                    "$numberLong": "137"
                },
                "correct": "Incorrect"
            },
            "1e349ef8c3bc9f7a": {
                "code": "[class] + *",
                "time": {
                    "$numberLong": "140"
                },
                "correct": "Incorrect"
            },
            "1ea00611e97c6ea6": {
                "code": "div~*:not([class])",
                "time": {
                    "$numberLong": "87"
                },
                "correct": "Correct"
            },
            "201af50fd3b736ba": {
                "code": "div~*",
                "time": {
                    "$numberLong": "87"
                },
                "correct": "Correct"
            },
            "214efb907df65375": {
                "code": "div :not(:first-child)",
                "time": {
                    "$numberLong": "41"
                },
                "correct": "Correct"
            },
            "21b91283c47ddf5e": {
                "code": "div *:not(:first-child)",
                "time": {
                    "$numberLong": "133"
                },
                "correct": "Correct"
            },
            "2272f07c112385b1": {
                "code": ".firstborn ~*",
                "time": {
                    "$numberLong": "59"
                },
                "correct": "Correct"
            },
            "24337d34f84c3b29": {
                "code": ":not(.firstborn)",
                "time": {
                    "$numberLong": "131"
                },
                "correct": "Incorrect"
            },
            "249db831162d981a": {
                "code": "div:nth-child()+",
                "time": {
                    "$numberLong": "150"
                },
                "correct": "Incorrect"
            },
            "24b339e7f88f73de": {
                "code": ".firstborn~*",
                "time": {
                    "$numberLong": "21"
                },
                "correct": "Correct"
            },
            "24b54a457abe06f4": {
                "code": "div :nth-child(1n+2)",
                "time": {
                    "$numberLong": "107"
                },
                "correct": "Correct"
            },
            "24b848f155c0b3b7": {
                "code": ".firstborn ~*",
                "time": {
                    "$numberLong": "43"
                },
                "correct": "Correct"
            },
            "24d4763d41328ec4": {
                "code": "div *:not(div:first-child)",
                "time": {
                    "$numberLong": "136"
                },
                "correct": "Incorrect"
            },
            "250e04bcb5fbe4f7": {
                "code": "#second-son ",
                "time": {
                    "$numberLong": "150"
                },
                "correct": "Incorrect"
            },
            "25f9ecca44c1cd46": {
                "code": "div ~:not(.firstborn)",
                "time": {
                    "$numberLong": "49"
                },
                "correct": "Correct"
            },
            "2601d4348a0a9688": {
                "code": "div:nth-child(2)",
                "time": {
                    "$numberLong": "136"
                },
                "correct": "Incorrect"
            },
            "2651ba874a6c8d94": {
                "code": ":not(:first-child)",
                "time": {
                    "$numberLong": "89"
                },
                "correct": "Correct"
            },
            "27a619553e988074": {
                "code": ".firstborn ~ *",
                "time": {
                    "$numberLong": "22"
                },
                "correct": "Correct"
            },
            "27bef6362f6c3153": {
                "code": "div:nth-child(",
                "time": {
                    "$numberLong": "150"
                },
                "correct": "Incorrect"
            },
            "284a6bf537e9bc4d": {
                "code": ".firstborn ~ *",
                "time": {
                    "$numberLong": "96"
                },
                "correct": "Correct"
            },
            "2aced08264036ea8": {
                "code": "div+:not(.firstborn)",
                "time": {
                    "$numberLong": "145"
                },
                "correct": "Incorrect"
            },
            "2c5dea2ca5f0d036": {
                "code": ":not([class])",
                "time": {
                    "$numberLong": "147"
                },
                "correct": "Incorrect"
            },
            "2cb5d5d4c8d4b19a": {
                "code": "",
                "time": {
                    "$numberLong": "150"
                },
                "correct": "Incorrect"
            },
            "2cecb227110f5c46": {
                "code": "div 003e * :not(.firstborn)",
                "time": {
                    "$numberLong": "104"
                },
                "correct": "Correct"
            },
            "2f201db12c801e85": {
                "code": "div *:not(.firstborn)",
                "time": {
                    "$numberLong": "150"
                },
                "correct": "Incorrect"
            },
            "2f6a509eafbbb15c": {
                "code": "div~*",
                "time": {
                    "$numberLong": "29"
                },
                "correct": "Correct"
            },
            "2fe6410a79f03048": {
                "code": "div:not(firstborn)",
                "time": {
                    "$numberLong": "146"
                },
                "correct": "Incorrect"
            },
            "30959179ed650cd1": {
                "code": ".firstborn ~ *",
                "time": {
                    "$numberLong": "12"
                },
                "correct": "Correct"
            },
            "34a24dd3d6aa750b": {
                "code": "div~*",
                "time": {
                    "$numberLong": "84"
                },
                "correct": "Correct"
            },
            "34a4f2506ce3d182": {
                "code": "div :not(:first-child)",
                "time": {
                    "$numberLong": "111"
                },
                "correct": "Correct"
            },
            "350ebb347c1ad556": {
                "code": "div div:first-child *",
                "time": {
                    "$numberLong": "147"
                },
                "correct": "Incorrect"
            },
            "3549c28b38369744": {
                "code": "div:nth-child",
                "time": {
                    "$numberLong": "150"
                },
                "correct": "Incorrect"
            },
            "36cfe6300f509bd5": {
                "code": ":not(:nth-child(1))",
                "time": {
                    "$numberLong": "80"
                },
                "correct": "Correct"
            },
            "36e8f42039c184db": {
                "code": ":not(.firstborn)",
                "time": {
                    "$numberLong": "127"
                },
                "correct": "Incorrect"
            },
            "3720867adefd1d26": {
                "code": "not(div:first-child)",
                "time": {
                    "$numberLong": "151"
                },
                "correct": "Incorrect"
            },
            "37b36e389ab7fe80": {
                "code": ":not(:nth-child(1))",
                "time": {
                    "$numberLong": "106"
                },
                "correct": "Correct"
            },
            "39a2e48e45b49980": {
                "code": "div *:not(.firstborn)",
                "time": {
                    "$numberLong": "142"
                },
                "correct": "Incorrect"
            },
            "39fe9e521f177219": {
                "code": ".fsecond-son ~ *",
                "time": {
                    "$numberLong": "151"
                },
                "correct": "Incorrect"
            },
            "3a562770cb99a7f4": {
                "code": "div :not(:first-child)",
                "time": {
                    "$numberLong": "76"
                },
                "correct": "Correct"
            },
            "3ab170848134a2ff": {
                "code": "div :not(:first-child",
                "time": {
                    "$numberLong": "12"
                },
                "correct": "Correct"
            },
            "3c5258124b324a11": {
                "code": ":not(div:o",
                "time": {
                    "$numberLong": "149"
                },
                "correct": "Incorrect"
            },
            "3cb038073228740f": {
                "code": "div * :not(.firstborn)",
                "time": {
                    "$numberLong": "84"
                },
                "correct": "Correct"
            },
            "3ceec99315a58f1c": {
                "code": ":nth-child(n+2)",
                "time": {
                    "$numberLong": "143"
                },
                "correct": "Correct"
            },
            "3d63b802d486029c": {
                "code": ":not(:first-child",
                "time": {
                    "$numberLong": "22"
                },
                "correct": "Correct"
            },
            "3dc599a7d0323291": {
                "code": ":not(:first-child)",
                "time": {
                    "$numberLong": "86"
                },
                "correct": "Correct"
            },
            "3efffe88342c3ee5": {
                "code": "div003e:empty:",
                "time": {
                    "$numberLong": "150"
                },
                "correct": "Incorrect"
            },
            "4139b7d383e0b65c": {
                "code": "div:first-child + *:not(.firstborn)",
                "time": {
                    "$numberLong": "146"
                },
                "correct": "Incorrect"
            },
            "418ca735584f1e3a": {
                "code": "div *:not(:first-child",
                "time": {
                    "$numberLong": "30"
                },
                "correct": "Correct"
            },
            "42d7cc27726e8052": {
                "code": "div~:not(.firstborn)",
                "time": {
                    "$numberLong": "116"
                },
                "correct": "Correct"
            },
            "454f621946346eed": {
                "code": "div :not(:first-child)",
                "time": {
                    "$numberLong": "27"
                },
                "correct": "Correct"
            },
            "4639b56895b8be0c": {
                "code": "* 003e *  :not(firstborn) ",
                "time": {
                    "$numberLong": "147"
                },
                "correct": "Incorrect"
            },
            "491d66dad9c08b8c": {
                "code": "div+span",
                "time": {
                    "$numberLong": "142"
                },
                "correct": "Incorrect"
            },
            "4c239ebf3cc37c4e": {
                "code": "div:not(:first-child) ",
                "time": {
                    "$numberLong": "148"
                },
                "correct": "Incorrect"
            },
            "4d9c4a8566aaca2e": {
                "code": "div~*",
                "time": {
                    "$numberLong": "54"
                },
                "correct": "Correct"
            },
            "4f2d802143f78fdc": {
                "code": ".firstborn ~ *",
                "time": {
                    "$numberLong": "48"
                },
                "correct": "Correct"
            },
            "50a7d9c3900376d4": {
                "code": ".firstborn ~ *",
                "time": {
                    "$numberLong": "101"
                },
                "correct": "Correct"
            },
            "50e718838ec3ed69": {
                "code": "*:nth-child(n+2)",
                "time": {
                    "$numberLong": "138"
                },
                "correct": "Correct"
            },
            "50f3b5f06c1d21a1": {
                "code": ".firstborn~*",
                "time": {
                    "$numberLong": "117"
                },
                "correct": "Correct"
            },
            "5154c91bcd705420": {
                "code": "div * :not(first)",
                "time": {
                    "$numberLong": "150"
                },
                "correct": "Incorrect"
            },
            "52131ae4ea1f02db": {
                "code": "div003e *:nth-child(1n+2)",
                "time": {
                    "$numberLong": "139"
                },
                "correct": "Correct"
            },
            "54757d6425a18652": {
                "code": "",
                "time": {
                    "$numberLong": "79"
                },
                "correct": "Incorrect"
            },
            "57a19a29c66f273a": {
                "code": ":not(0)",
                "time": {
                    "$numberLong": "146"
                },
                "correct": "Incorrect"
            },
            "597eaca2f80bb597": {
                "code": "",
                "time": {
                    "$numberLong": "133"
                },
                "correct": "Incorrect"
            },
            "598dc546faccea96": {
                "code": "div003e:not(.firstborn)",
                "time": {
                    "$numberLong": "124"
                },
                "correct": "Incorrect"
            },
            "5cbbd38ec27acc0d": {
                "code": "",
                "time": {
                    "$numberLong": "149"
                },
                "correct": "Incorrect"
            },
            "5f2b55c93f8dfc50": {
                "code": "div #second-son,s",
                "time": {
                    "$numberLong": "146"
                },
                "correct": "Incorrect"
            },
            "5fa0dc84f5366d5d": {
                "code": "div:nth-child(2n+3)",
                "time": {
                    "$numberLong": "150"
                },
                "correct": "Incorrect"
            },
            "607b0abda0c50b0c": {
                "code": "",
                "time": {
                    "$numberLong": "93"
                },
                "correct": "Incorrect"
            },
            "608a221e132cfb0e": {
                "code": ":not(:first-child)",
                "time": {
                    "$numberLong": "46"
                },
                "correct": "Correct"
            },
            "610358eb6ad04b78": {
                "code": "div * :not(.firstborn)",
                "time": {
                    "$numberLong": "66"
                },
                "correct": "Correct"
            },
            "6120442cb00ddf3f": {
                "code": "not(:first-child)",
                "time": {
                    "$numberLong": "141"
                },
                "correct": "Incorrect"
            },
            "63da271cdd05f72a": {
                "code": ":not(:nth-child(1))",
                "time": {
                    "$numberLong": "121"
                },
                "correct": "Correct"
            },
            "645a56e6b8555c48": {
                "code": ".firstborn ~ *",
                "time": {
                    "$numberLong": "115"
                },
                "correct": "Correct"
            },
            "6877303d0bc23e9f": {
                "code": ":not(:nth-child(1))",
                "time": {
                    "$numberLong": "116"
                },
                "correct": "Correct"
            },
            "690d4a3fa53cafe6": {
                "code": "*:not([class=firstborn]) ",
                "time": {
                    "$numberLong": "150"
                },
                "correct": "Incorrect"
            },
            "69a28f1b78baef56": {
                "code": "div~:not(.firstborn)",
                "time": {
                    "$numberLong": "146"
                },
                "correct": "Correct"
            },
            "6a6720574c217df1": {
                "code": ":not(.firstborn)",
                "time": {
                    "$numberLong": "142"
                },
                "correct": "Incorrect"
            },
            "6ac831e069244801": {
                "code": "div ~ *",
                "time": {
                    "$numberLong": "64"
                },
                "correct": "Correct"
            },
            "6be274af29d69012": {
                "code": ".firstborn~*",
                "time": {
                    "$numberLong": "28"
                },
                "correct": "Correct"
            },
            "6be81d9143dc01ec": {
                "code": "",
                "time": {
                    "$numberLong": "146"
                },
                "correct": "Incorrect"
            },
            "6d772a3e4250147a": {
                "code": ".firstborn ~ *",
                "time": {
                    "$numberLong": "21"
                },
                "correct": "Correct"
            },
            "6fad576453e1183c": {
                "code": "",
                "time": {
                    "$numberLong": "143"
                },
                "correct": "Incorrect"
            },
            "703e792787acb96a": {
                "code": "div",
                "time": {
                    "$numberLong": "149"
                },
                "correct": "Incorrect"
            },
            "70c2126a27a7ff92": {
                "code": "div *:not(:first-child",
                "time": {
                    "$numberLong": "29"
                },
                "correct": "Correct"
            },
            "738824e90ee1a521": {
                "code": "",
                "time": {
                    "$numberLong": "109"
                },
                "correct": "Incorrect"
            },
            "758f08ff64d4fbed": {
                "code": ":not(:first-child)",
                "time": {
                    "$numberLong": "103"
                },
                "correct": "Correct"
            },
            "77bfda6e1e04388a": {
                "code": ":not(*:first-child)",
                "time": {
                    "$numberLong": "92"
                },
                "correct": "Correct"
            },
            "784e2a35a5f02a51": {
                "code": "div003e :not(:first-child)",
                "time": {
                    "$numberLong": "142"
                },
                "correct": "Correct"
            },
            "7876d097648ce241": {
                "code": "",
                "time": {
                    "$numberLong": "119"
                },
                "correct": "Incorrect"
            },
            "7913e18db9805385": {
                "code": ".firstborn ~ *",
                "time": {
                    "$numberLong": "23"
                },
                "correct": "Correct"
            },
            "79991eac2ed55971": {
                "code": "div *:not(:first-child)",
                "time": {
                    "$numberLong": "56"
                },
                "correct": "Correct"
            },
            "79d3d5a874c0fedb": {
                "code": "*:not(.firstborn)",
                "time": {
                    "$numberLong": "148"
                },
                "correct": "Incorrect"
            },
            "7cd8dd365d287663": {
                "code": ":nth-child(2n)",
                "time": {
                    "$numberLong": "149"
                },
                "correct": "Incorrect"
            },
            "7d9ab4e430491d3c": {
                "code": "div:first-child:nth",
                "time": {
                    "$numberLong": "150"
                },
                "correct": "Incorrect"
            },
            "7ef1e4b829e0b3d6": {
                "code": "div ~ :not(.firstborn)",
                "time": {
                    "$numberLong": "77"
                },
                "correct": "Correct"
            },
            "7f48769c943032b7": {
                "code": "div+*",
                "time": {
                    "$numberLong": "126"
                },
                "correct": "Incorrect"
            },
            "8150b6bbc7717883": {
                "code": "div ~ *:not(.firstborn)",
                "time": {
                    "$numberLong": "75"
                },
                "correct": "Correct"
            },
            "8190a67e4972f187": {
                "code": "div003e.firstborn~*",
                "time": {
                    "$numberLong": "41"
                },
                "correct": "Correct"
            },
            "82e8b6c0d88e0003": {
                "code": "*+*",
                "time": {
                    "$numberLong": "47"
                },
                "correct": "Correct"
            },
            "8373c834e2ac08bd": {
                "code": "",
                "time": {
                    "$numberLong": "145"
                },
                "correct": "Incorrect"
            },
            "85faf02e7002468e": {
                "code": "",
                "time": {
                    "$numberLong": "117"
                },
                "correct": "Incorrect"
            },
            "860ce7d23f02e7d3": {
                "code": "div *:not([class])",
                "time": {
                    "$numberLong": "95"
                },
                "correct": "Incorrect"
            },
            "867cfd1b76269046": {
                "code": ":not(.firstborn)",
                "time": {
                    "$numberLong": "138"
                },
                "correct": "Incorrect"
            },
            "8682698b0efcbb49": {
                "code": ":not([class])",
                "time": {
                    "$numberLong": "140"
                },
                "correct": "Incorrect"
            },
            "870545b496fb9231": {
                "code": "div::after",
                "time": {
                    "$numberLong": "139"
                },
                "correct": "Incorrect"
            },
            "8875dc4e9876728e": {
                "code": "div ~*:not(.firstborn)",
                "time": {
                    "$numberLong": "59"
                },
                "correct": "Correct"
            },
            "898447718f00f0c7": {
                "code": "[not]:nth-first-child",
                "time": {
                    "$numberLong": "133"
                },
                "correct": "Incorrect"
            },
            "89f7ff1ba54776b9": {
                "code": "div 003e * ~ :empty",
                "time": {
                    "$numberLong": "42"
                },
                "correct": "Correct"
            },
            "89fb2b288bdbd651": {
                "code": "[class]~*",
                "time": {
                    "$numberLong": "59"
                },
                "correct": "Correct"
            },
            "8b3e94c6bb875abd": {
                "code": ":not(:nth-child(1))",
                "time": {
                    "$numberLong": "67"
                },
                "correct": "Correct"
            },
            "8c9feac04348414f": {
                "code": "div ~ *",
                "time": {
                    "$numberLong": "29"
                },
                "correct": "Correct"
            },
            "8ce246e288c504b7": {
                "code": "div div 003e *:not(.firstborn)",
                "time": {
                    "$numberLong": "82"
                },
                "correct": "Correct"
            },
            "8d0b871a3aac7646": {
                "code": "div:empty span:empty0009",
                "time": {
                    "$numberLong": "151"
                },
                "correct": "Incorrect"
            },
            "8efb6e527bd50aae": {
                "code": ".firstborn ~*",
                "time": {
                    "$numberLong": "30"
                },
                "correct": "Correct"
            },
            "92352b0b01aac98b": {
                "code": "*:not(f)",
                "time": {
                    "$numberLong": "150"
                },
                "correct": "Incorrect"
            },
            "93e87af5faea4465": {
                "code": ".firstborn ~ div .firstborn ~ div",
                "time": {
                    "$numberLong": "150"
                },
                "correct": "Incorrect"
            },
            "94ae2983d85b56f3": {
                "code": "div :not(:first-child",
                "time": {
                    "$numberLong": "37"
                },
                "correct": "Correct"
            },
            "94bac471a8a06f41": {
                "code": ":not(:first-child)",
                "time": {
                    "$numberLong": "61"
                },
                "correct": "Correct"
            },
            "94e6f0f36d96cca7": {
                "code": "div:nth-child(n+1):not(.firstbo)",
                "time": {
                    "$numberLong": "151"
                },
                "correct": "Incorrect"
            },
            "95da8c87fe0966a9": {
                "code": "div~:not(.firstborn)",
                "time": {
                    "$numberLong": "130"
                },
                "correct": "Correct"
            },
            "9615130025e3bf23": {
                "code": "",
                "time": {
                    "$numberLong": "135"
                },
                "correct": "Incorrect"
            },
            "96a9d51e700ea6d9": {
                "code": "div + :not(:last-child",
                "time": {
                    "$numberLong": "150"
                },
                "correct": "Incorrect"
            },
            "96c9015ae13475fb": {
                "code": ":not(:first-child)",
                "time": {
                    "$numberLong": "39"
                },
                "correct": "Correct"
            },
            "97dbe566f05bad1e": {
                "code": "div 003e *:not(.firstborn)",
                "time": {
                    "$numberLong": "144"
                },
                "correct": "Incorrect"
            },
            "9a1d3ecd70ce4b81": {
                "code": ".firstborn ~ *",
                "time": {
                    "$numberLong": "26"
                },
                "correct": "Correct"
            },
            "9ba3cd7d2209cdb1": {
                "code": "* div  ",
                "time": {
                    "$numberLong": "147"
                },
                "correct": "Incorrect"
            },
            "9decf80a3668a04c": {
                "code": "div.firstborn~*",
                "time": {
                    "$numberLong": "32"
                },
                "correct": "Correct"
            },
            "9e8ceb488c61bfc6": {
                "code": "div~:not(.firstborn)",
                "time": {
                    "$numberLong": "151"
                },
                "correct": "Correct"
            },
            "9eb7f3047b78db41": {
                "code": "[class=firstborn]~*",
                "time": {
                    "$numberLong": "36"
                },
                "correct": "Correct"
            },
            "9f3c76f5aebfad0a": {
                "code": "div :not(.firstborn)",
                "time": {
                    "$numberLong": "142"
                },
                "correct": "Incorrect"
            },
            "9f57ba8fbeaabc8f": {
                "code": "div 003e *:not(:first-child)",
                "time": {
                    "$numberLong": "43"
                },
                "correct": "Correct"
            },
            "9f79120ff09e7b32": {
                "code": "div 003e div:n-th-last-of-type(3)",
                "time": {
                    "$numberLong": "149"
                },
                "correct": "Incorrect"
            },
            "9f98758762638c79": {
                "code": "div * :not(.firstborn)",
                "time": {
                    "$numberLong": "112"
                },
                "correct": "Correct"
            },
            "9fc6640ffb5bcf88": {
                "code": ":nth-child(n+2",
                "time": {
                    "$numberLong": "48"
                },
                "correct": "Correct"
            },
            "a59abf0ef6dd72ee": {
                "code": ".firstborn ~*",
                "time": {
                    "$numberLong": "85"
                },
                "correct": "Correct"
            },
            "a5cff54715b5e728": {
                "code": "div 003e * :not(.firstborn)",
                "time": {
                    "$numberLong": "144"
                },
                "correct": "Correct"
            },
            "a68d50ef4eaf5330": {
                "code": "div ~ div",
                "time": {
                    "$numberLong": "145"
                },
                "correct": "Incorrect"
            },
            "a7faf246f1fec897": {
                "code": "div~*",
                "time": {
                    "$numberLong": "11"
                },
                "correct": "Correct"
            },
            "a82a83d5b2316bbb": {
                "code": ".firstborn~*",
                "time": {
                    "$numberLong": "21"
                },
                "correct": "Correct"
            },
            "a87fa4ebabc2a0ce": {
                "code": "div~*",
                "time": {
                    "$numberLong": "8"
                },
                "correct": "Correct"
            },
            "ac306151b36609fd": {
                "code": "div + *",
                "time": {
                    "$numberLong": "147"
                },
                "correct": "Incorrect"
            },
            "ad1db3469049502b": {
                "code": "div * :not([class])",
                "time": {
                    "$numberLong": "100"
                },
                "correct": "Correct"
            },
            "add0cf5b0e6f0061": {
                "code": "*:not([class]=first)",
                "time": {
                    "$numberLong": "151"
                },
                "correct": "Incorrect"
            },
            "ade8a9fbb5003944": {
                "code": "div:nth-last-child(-2n+)",
                "time": {
                    "$numberLong": "150"
                },
                "correct": "Incorrect"
            },
            "ae9e54473d676c54": {
                "code": "div003ediv 003e *:not(.firstborn)",
                "time": {
                    "$numberLong": "134"
                },
                "correct": "Correct"
            },
            "af5c9cf12b2832c8": {
                "code": "div 003e :not(:nth-child(1))",
                "time": {
                    "$numberLong": "64"
                },
                "correct": "Correct"
            },
            "affe91192214b1ab": {
                "code": "div 003e *:not(.firstborn)",
                "time": {
                    "$numberLong": "130"
                },
                "correct": "Incorrect"
            },
            "b0963184aa7f246b": {
                "code": "div :not(:first-child",
                "time": {
                    "$numberLong": "35"
                },
                "correct": "Correct"
            },
            "b1926b5f5e8b806b": {
                "code": ":not(:first-child)",
                "time": {
                    "$numberLong": "27"
                },
                "correct": "Correct"
            },
            "b1cbf3ca65c56e0d": {
                "code": "div :not(:first-child",
                "time": {
                    "$numberLong": "56"
                },
                "correct": "Correct"
            },
            "b278646f280691cb": {
                "code": "not(div)",
                "time": {
                    "$numberLong": "148"
                },
                "correct": "Incorrect"
            },
            "b2913665b1d38784": {
                "code": "div * :not(.firstborn)",
                "time": {
                    "$numberLong": "69"
                },
                "correct": "Correct"
            },
            "b46b33d779ec951f": {
                "code": "div 003e *:not(:first-child)",
                "time": {
                    "$numberLong": "23"
                },
                "correct": "Correct"
            },
            "b4e84dc5f950be34": {
                "code": ":not(:first-child)",
                "time": {
                    "$numberLong": "39"
                },
                "correct": "Correct"
            },
            "b4f4b5c6dfcb6d07": {
                "code": ".firstborn + ~",
                "time": {
                    "$numberLong": "141"
                },
                "correct": "Incorrect"
            },
            "b51a79256e2462a5": {
                "code": "div",
                "time": {
                    "$numberLong": "122"
                },
                "correct": "Incorrect"
            },
            "b7037f74a55b1ded": {
                "code": ":not(.firstborn)",
                "time": {
                    "$numberLong": "147"
                },
                "correct": "Incorrect"
            },
            "b70e0f3eadc8fa6a": {
                "code": "not:first-child",
                "time": {
                    "$numberLong": "145"
                },
                "correct": "Incorrect"
            },
            "b87bfaa63e377a71": {
                "code": "div:not(first-child)",
                "time": {
                    "$numberLong": "130"
                },
                "correct": "Incorrect"
            },
            "b913aff5711ffd5b": {
                "code": "div:not-nth-child(n)",
                "time": {
                    "$numberLong": "150"
                },
                "correct": "Incorrect"
            },
            "b928c37c17806191": {
                "code": "div *:not(:first-child",
                "time": {
                    "$numberLong": "27"
                },
                "correct": "Correct"
            },
            "b9d1dfe7e37afeb2": {
                "code": "",
                "time": {
                    "$numberLong": "147"
                },
                "correct": "Incorrect"
            },
            "b9f4eab4145bb27a": {
                "code": "div 003e *003e:not(.firstborn)",
                "time": {
                    "$numberLong": "107"
                },
                "correct": "Correct"
            },
            "bbe008738217e35f": {
                "code": "div~*",
                "time": {
                    "$numberLong": "51"
                },
                "correct": "Correct"
            },
            "c1219d67fe1e51c2": {
                "code": ".firstborn:nth",
                "time": {
                    "$numberLong": "129"
                },
                "correct": "Incorrect"
            },
            "c13f401d134bbdb7": {
                "code": ".firstborn ~div s",
                "time": {
                    "$numberLong": "150"
                },
                "correct": "Incorrect"
            },
            "c18131119872b238": {
                "code": ":nth-child(1) *",
                "time": {
                    "$numberLong": "135"
                },
                "correct": "Incorrect"
            },
            "c3713ba000985baf": {
                "code": ".firstborn ~ *",
                "time": {
                    "$numberLong": "10"
                },
                "correct": "Correct"
            },
            "c486a74f6d914600": {
                "code": ":not(:first-child)",
                "time": {
                    "$numberLong": "19"
                },
                "correct": "Correct"
            },
            "c4b129ee6608ab4e": {
                "code": ".firstborn~*",
                "time": {
                    "$numberLong": "103"
                },
                "correct": "Correct"
            },
            "c61f85976fa0f880": {
                "code": "div 003e (*:not(.firstborn)",
                "time": {
                    "$numberLong": "149"
                },
                "correct": "Incorrect"
            },
            "c62f6a6327b38df0": {
                "code": ":not([f",
                "time": {
                    "$numberLong": "151"
                },
                "correct": "Incorrect"
            },
            "c6782ec9fbfacc49": {
                "code": "div *:not(.firstborn)",
                "time": {
                    "$numberLong": "142"
                },
                "correct": "Incorrect"
            },
            "c81886dde372d437": {
                "code": "*:not:first-child",
                "time": {
                    "$numberLong": "148"
                },
                "correct": "Incorrect"
            },
            "c825ef755969b747": {
                "code": "div:nth-child(1)~*",
                "time": {
                    "$numberLong": "53"
                },
                "correct": "Correct"
            },
            "c95463f778ff93ca": {
                "code": ":not([class])",
                "time": {
                    "$numberLong": "146"
                },
                "correct": "Incorrect"
            },
            "ca348e67a411e031": {
                "code": ":not(div003ediv:first-child)",
                "time": {
                    "$numberLong": "150"
                },
                "correct": "Incorrect"
            },
            "ca60244540ed755d": {
                "code": "div+*",
                "time": {
                    "$numberLong": "145"
                },
                "correct": "Incorrect"
            },
            "cab8ee9fdec69ee8": {
                "code": ".firstborn~*",
                "time": {
                    "$numberLong": "22"
                },
                "correct": "Correct"
            },
            "cb0b66dbc547fb22": {
                "code": "div:not(",
                "time": {
                    "$numberLong": "150"
                },
                "correct": "Incorrect"
            },
            "cb13a1cb1bf89459": {
                "code": "*",
                "time": {
                    "$numberLong": "144"
                },
                "correct": "Incorrect"
            },
            "cf8643fb83e99e86": {
                "code": "div:first-child *:not(:first-child",
                "time": {
                    "$numberLong": "35"
                },
                "correct": "Correct"
            },
            "cfa10e7229340f70": {
                "code": "div :nth-child(n)",
                "time": {
                    "$numberLong": "149"
                },
                "correct": "Incorrect"
            },
            "d0b031eec85e6911": {
                "code": ":nth-child(n+2)",
                "time": {
                    "$numberLong": "31"
                },
                "correct": "Correct"
            },
            "d1346365de590ccf": {
                "code": ":not(:first-child)",
                "time": {
                    "$numberLong": "52"
                },
                "correct": "Correct"
            },
            "d417fd8dd5e48efe": {
                "code": "div :not(.firstborn)",
                "time": {
                    "$numberLong": "144"
                },
                "correct": "Incorrect"
            },
            "d4a5deb84ce836e9": {
                "code": "div+div003espa",
                "time": {
                    "$numberLong": "151"
                },
                "correct": "Incorrect"
            },
            "d52887dab0fb075f": {
                "code": ".firstborn ~*",
                "time": {
                    "$numberLong": "59"
                },
                "correct": "Correct"
            },
            "d57163ee2e28e4b2": {
                "code": ".firstborn ~*",
                "time": {
                    "$numberLong": "58"
                },
                "correct": "Correct"
            },
            "d66e5b11f0731612": {
                "code": "div div  *",
                "time": {
                    "$numberLong": "146"
                },
                "correct": "Incorrect"
            },
            "d6f6f6c7a9301bbe": {
                "code": "div ~:not(.firstborn)",
                "time": {
                    "$numberLong": "127"
                },
                "correct": "Correct"
            },
            "d8c54e85ccd5b21c": {
                "code": "div 003e :not(:first-child)",
                "time": {
                    "$numberLong": "70"
                },
                "correct": "Correct"
            },
            "d9c232089e7ae571": {
                "code": "*:nth-child(5)",
                "time": {
                    "$numberLong": "137"
                },
                "correct": "Incorrect"
            },
            "d9f697ce2a414d53": {
                "code": ":not(:first-child",
                "time": {
                    "$numberLong": "25"
                },
                "correct": "Correct"
            },
            "db9d65f484e4d137": {
                "code": "div * :not(.firstborn)",
                "time": {
                    "$numberLong": "83"
                },
                "correct": "Correct"
            },
            "dba3419fda42d93b": {
                "code": "div+*",
                "time": {
                    "$numberLong": "145"
                },
                "correct": "Incorrect"
            },
            "dd7da88658f252c6": {
                "code": ".firstborn ~ *",
                "time": {
                    "$numberLong": "128"
                },
                "correct": "Correct"
            },
            "dda5b4fc568bd7e7": {
                "code": "#second-son ",
                "time": {
                    "$numberLong": "123"
                },
                "correct": "Incorrect"
            },
            "de33e71b1fe6587c": {
                "code": "div :not(:first-child",
                "time": {
                    "$numberLong": "29"
                },
                "correct": "Correct"
            },
            "de7c64d3d7de70a5": {
                "code": "",
                "time": {
                    "$numberLong": "127"
                },
                "correct": "Incorrect"
            },
            "e0c2f4026aaf9e95": {
                "code": "div~*",
                "time": {
                    "$numberLong": "40"
                },
                "correct": "Correct"
            },
            "e3dc40112d98c593": {
                "code": "div 003e * :not(.firstborn",
                "time": {
                    "$numberLong": "30"
                },
                "correct": "Correct"
            },
            "e4692b2237b13270": {
                "code": "div:nth-child(n-2)",
                "time": {
                    "$numberLong": "150"
                },
                "correct": "Incorrect"
            },
            "e4924b8e7499d2e8": {
                "code": "div ~ :not(.firstborn)",
                "time": {
                    "$numberLong": "141"
                },
                "correct": "Correct"
            },
            "e609701dd7bbad52": {
                "code": ".firstborn ~ *",
                "time": {
                    "$numberLong": "55"
                },
                "correct": "Correct"
            },
            "e70b30486b960ca2": {
                "code": "div*",
                "time": {
                    "$numberLong": "87"
                },
                "correct": "Incorrect"
            },
            "e8a0543d60a31174": {
                "code": ".firstborn ~ *",
                "time": {
                    "$numberLong": "41"
                },
                "correct": "Correct"
            },
            "eaa4e4a573bbdf56": {
                "code": "a",
                "time": {
                    "$numberLong": "150"
                },
                "correct": "Incorrect"
            },
            "eb3c03ba165df064": {
                "code": ".firstborn~*",
                "time": {
                    "$numberLong": "96"
                },
                "correct": "Correct"
            },
            "eb8cc549bad70c0b": {
                "code": "div003e* :not(.firstborn)",
                "time": {
                    "$numberLong": "67"
                },
                "correct": "Correct"
            },
            "ec083ecdf7de4e1e": {
                "code": "div ",
                "time": {
                    "$numberLong": "151"
                },
                "correct": "Incorrect"
            },
            "f060b45c72736520": {
                "code": ".firstborn~*",
                "time": {
                    "$numberLong": "44"
                },
                "correct": "Correct"
            },
            "f1544a9bfe0cd1ad": {
                "code": ".firstborn ~*",
                "time": {
                    "$numberLong": "31"
                },
                "correct": "Correct"
            },
            "f1c05dde29065cc5": {
                "code": "div 003e ",
                "time": {
                    "$numberLong": "148"
                },
                "correct": "Incorrect"
            },
            "f1d6c124613e4dc3": {
                "code": "",
                "time": {
                    "$numberLong": "97"
                },
                "correct": "Incorrect"
            },
            "f271aeb2b417cd7e": {
                "code": "div :not(:first-child)",
                "time": {
                    "$numberLong": "18"
                },
                "correct": "Correct"
            },
            "f3a692ff48114271": {
                "code": ".firstborn~*",
                "time": {
                    "$numberLong": "16"
                },
                "correct": "Correct"
            },
            "f3f8cd8f734b6082": {
                "code": "(:nth-child(1))",
                "time": {
                    "$numberLong": "149"
                },
                "correct": "Incorrect"
            },
            "f5e8f96eee818651": {
                "code": ".firstborn ~*",
                "time": {
                    "$numberLong": "53"
                },
                "correct": "Correct"
            },
            "f6829fc871613b65": {
                "code": "div:nth-child(1n+2) ",
                "time": {
                    "$numberLong": "148"
                },
                "correct": "Incorrect"
            },
            "f711acd5f09bbdf6": {
                "code": "div 003e*:nth-child(-1n+6)",
                "time": {
                    "$numberLong": "148"
                },
                "correct": "Incorrect"
            },
            "f7b65f853512e069": {
                "code": ".firstborn 003e *",
                "time": {
                    "$numberLong": "151"
                },
                "correct": "Incorrect"
            },
            "f881ad2049d118b3": {
                "code": ":not(:first-child",
                "time": {
                    "$numberLong": "42"
                },
                "correct": "Correct"
            },
            "f8fea8fffdca4d43": {
                "code": "[second-son] + :not(first-child)",
                "time": {
                    "$numberLong": "150"
                },
                "correct": "Incorrect"
            },
            "f92800e8fbf079ac": {
                "code": ".firstborn ~ *",
                "time": {
                    "$numberLong": "66"
                },
                "correct": "Correct"
            },
            "f95bda2df3fd514e": {
                "code": "",
                "time": {
                    "$numberLong": "118"
                },
                "correct": "Incorrect"
            },
            "fc98beaf678455f7": {
                "code": "div :not(firstborn)",
                "time": {
                    "$numberLong": "146"
                },
                "correct": "Incorrect"
            },
            "fcc928c4a2b55a70": {
                "code": "div *:not(:first-child)",
                "time": {
                    "$numberLong": "51"
                },
                "correct": "Correct"
            },
            "fdf286213a36687f": {
                "code": "div ~ :not(.firstborn)",
                "time": {
                    "$numberLong": "109"
                },
                "correct": "Correct"
            },
            "fe5c52f5db2f1cea": {
                "code": "div 003e :not(:first-child)",
                "time": {
                    "$numberLong": "33"
                },
                "correct": "Correct"
            },
            "fe981eb56e6aa2eb": {
                "code": "div ~ emt",
                "time": {
                    "$numberLong": "151"
                },
                "correct": "Incorrect"
            },
            "ff32798839089a73": {
                "code": "div *:not(:first-child)",
                "time": {
                    "$numberLong": "50"
                },
                "correct": "Correct"
            },
            "ffbc2f2c9e5c74bd": {
                "code": "*:not(div 003e *:nth-child(1))",
                "time": {
                    "$numberLong": "127"
                },
                "correct": "Incorrect"
            }
        }
    }, {
        "puzzleIndex": {
            "$numberLong": "8"
        },
        "startTime": {
            "$date": "2018-11-26T18:49:02.243Z"
        },
        "solutions": {
            "02ef04098b9feadf": {
                "code": "div div div div div div div div div div",
                "time": {
                    "$numberLong": "37"
                },
                "correct": "Correct"
            },
            "044b7810d5b21241": {
                "code": ":empty",
                "time": {
                    "$numberLong": "44"
                },
                "correct": "Correct"
            },
            "0505908ca880da63": {
                "code": "div div div div div div div div div :only-child",
                "time": {
                    "$numberLong": "92"
                },
                "correct": "Correct"
            },
            "0546833d81e75f8e": {
                "code": "div 003e div 003e div 003e div 003e div 003e div 003e div 003e div 003e div 003e div",
                "time": {
                    "$numberLong": "45"
                },
                "correct": "Correct"
            },
            "074732b4e4e7f8c2": {
                "code": "",
                "time": {
                    "$numberLong": "139"
                },
                "correct": "Incorrect"
            },
            "07a655995e3a34a5": {
                "code": "div:empty",
                "time": {
                    "$numberLong": "80"
                },
                "correct": "Correct"
            },
            "0960cde31955389a": {
                "code": "div div div div div div div div div div",
                "time": {
                    "$numberLong": "34"
                },
                "correct": "Correct"
            },
            "096ccaaf699480f6": {
                "code": "div:empty",
                "time": {
                    "$numberLong": "36"
                },
                "correct": "Correct"
            },
            "0976f7300062afcd": {
                "code": "003csection003e",
                "time": {
                    "$numberLong": "149"
                },
                "correct": "Incorrect"
            },
            "0a69fc38555dc6b2": {
                "code": "div003ediv003ediv003ediv003ediv003ediv003ediv003ediv003ediv003ediv",
                "time": {
                    "$numberLong": "32"
                },
                "correct": "Correct"
            },
            "0a9dea941704145b": {
                "code": "div003ediv003ediv003ediv003ediv003ediv003ediv003ediv003ediv003ediv",
                "time": {
                    "$numberLong": "49"
                },
                "correct": "Correct"
            },
            "0be05f1edf9ac0c9": {
                "code": "div 003e div 003e div003e div003e div003e div003e div003e div003e div003e div",
                "time": {
                    "$numberLong": "114"
                },
                "correct": "Correct"
            },
            "0c5610ad65714d07": {
                "code": ":empty",
                "time": {
                    "$numberLong": "8"
                },
                "correct": "Correct"
            },
            "0cb7b730eb24cd97": {
                "code": "*:last-of-type",
                "time": {
                    "$numberLong": "123"
                },
                "correct": "Incorrect"
            },
            "0dc9eee89960aa8c": {
                "code": "not( ::after",
                "time": {
                    "$numberLong": "149"
                },
                "correct": "Incorrect"
            },
            "0dcc5ccce8ea8724": {
                "code": ":empty",
                "time": {
                    "$numberLong": "35"
                },
                "correct": "Correct"
            },
            "0e11826c10b3c359": {
                "code": ":not(:first-child)",
                "time": {
                    "$numberLong": "18"
                },
                "correct": "Incorrect"
            },
            "0f62193273f6c54f": {
                "code": ":empty",
                "time": {
                    "$numberLong": "65"
                },
                "correct": "Correct"
            },
            "0f68663169b43508": {
                "code": ":empty",
                "time": {
                    "$numberLong": "4"
                },
                "correct": "Correct"
            },
            "101366111d88b96c": {
                "code": "div 003e div 003e div 003e div 003e div 003e div 003e div 003e div 003e div 003e div ",
                "time": {
                    "$numberLong": "150"
                },
                "correct": "Correct"
            },
            "10878b8d10d2ae2b": {
                "code": "div 003e div 003e div 003e div 003e div 003e div 003e div 003e div 003e div 003e div",
                "time": {
                    "$numberLong": "15"
                },
                "correct": "Correct"
            },
            "10f87b94846c7dd2": {
                "code": "div:empty",
                "time": {
                    "$numberLong": "37"
                },
                "correct": "Correct"
            },
            "11013b79d46cadbc": {
                "code": "div div div div div div div div div div",
                "time": {
                    "$numberLong": "61"
                },
                "correct": "Correct"
            },
            "1291f8effc0fb1e1": {
                "code": "",
                "time": {
                    "$numberLong": "143"
                },
                "correct": "Incorrect"
            },
            "13516a858ed509bc": {
                "code": "div 003e div003e div003e div003e div003e div003e div003e div003e div003e div",
                "time": {
                    "$numberLong": "127"
                },
                "correct": "Correct"
            },
            "13ebc713ecdb0c31": {
                "code": "div:empty",
                "time": {
                    "$numberLong": "11"
                },
                "correct": "Correct"
            },
            "147cd0646fe74c51": {
                "code": "div div div div div div div div div div",
                "time": {
                    "$numberLong": "27"
                },
                "correct": "Correct"
            },
            "14d1d70f31909467": {
                "code": ":empty",
                "time": {
                    "$numberLong": "57"
                },
                "correct": "Correct"
            },
            "15085d8de21f8860": {
                "code": ":empty",
                "time": {
                    "$numberLong": "7"
                },
                "correct": "Correct"
            },
            "15d30689cee2cf3d": {
                "code": ":empty",
                "time": {
                    "$numberLong": "69"
                },
                "correct": "Correct"
            },
            "1662516da39bd248": {
                "code": "div 003e div 003e div 003e div 003e div 003e div 003e div003e div 003e div003e div",
                "time": {
                    "$numberLong": "32"
                },
                "correct": "Correct"
            },
            "167a5b071e75c309": {
                "code": "div:empty",
                "time": {
                    "$numberLong": "25"
                },
                "correct": "Correct"
            },
            "174fb3408368ee14": {
                "code": "div:last-child",
                "time": {
                    "$numberLong": "133"
                },
                "correct": "Incorrect"
            },
            "18a015071bed690d": {
                "code": "div:only-",
                "time": {
                    "$numberLong": "148"
                },
                "correct": "Incorrect"
            },
            "1a001ccb65b08947": {
                "code": "div003ediv003ediv003ediv003ediv003ediv003ediv003ediv003ediv003ediv",
                "time": {
                    "$numberLong": "39"
                },
                "correct": "Correct"
            },
            "1a495818e81cd4fa": {
                "code": ":empty",
                "time": {
                    "$numberLong": "72"
                },
                "correct": "Correct"
            },
            "1b834e64b9e1baf7": {
                "code": "div:empty",
                "time": {
                    "$numberLong": "62"
                },
                "correct": "Correct"
            },
            "1c207b98b51ff73d": {
                "code": ":empty",
                "time": {
                    "$numberLong": "23"
                },
                "correct": "Correct"
            },
            "1c82933fa21c91af": {
                "code": "div:empty",
                "time": {
                    "$numberLong": "37"
                },
                "correct": "Correct"
            },
            "1c93a7a4711bff70": {
                "code": "div003ediv003ediv003ediv003ediv003ediv003ediv003ediv003ediv003ediv",
                "time": {
                    "$numberLong": "95"
                },
                "correct": "Correct"
            },
            "1e349ef8c3bc9f7a": {
                "code": "div003ediv003ediv003ediv003ediv003ediv003ediv003ediv003ediv003ediv",
                "time": {
                    "$numberLong": "30"
                },
                "correct": "Correct"
            },
            "1ea00611e97c6ea6": {
                "code": "",
                "time": {
                    "$numberLong": "145"
                },
                "correct": "Incorrect"
            },
            "201af50fd3b736ba": {
                "code": ":empty",
                "time": {
                    "$numberLong": "6"
                },
                "correct": "Correct"
            },
            "214efb907df65375": {
                "code": ":empty",
                "time": {
                    "$numberLong": "8"
                },
                "correct": "Correct"
            },
            "21b91283c47ddf5e": {
                "code": "div003ediv003ediv003ediv003ediv003ediv003ediv003ediv003ediv003e div",
                "time": {
                    "$numberLong": "121"
                },
                "correct": "Correct"
            },
            "2272f07c112385b1": {
                "code": "",
                "time": {
                    "$numberLong": "147"
                },
                "correct": "Incorrect"
            },
            "24337d34f84c3b29": {
                "code": "div003ediv003ediv003ediv003ediv003ediv003ediv003ediv003ediv003ediv",
                "time": {
                    "$numberLong": "134"
                },
                "correct": "Correct"
            },
            "249db831162d981a": {
                "code": "div003ediv003ediv003ediv003ediv003ediv003ediv003ediv003ediv003ediv",
                "time": {
                    "$numberLong": "48"
                },
                "correct": "Correct"
            },
            "24b339e7f88f73de": {
                "code": ":empty",
                "time": {
                    "$numberLong": "14"
                },
                "correct": "Correct"
            },
            "24b54a457abe06f4": {
                "code": "div :not-nth-child(",
                "time": {
                    "$numberLong": "150"
                },
                "correct": "Incorrect"
            },
            "24b848f155c0b3b7": {
                "code": "",
                "time": {
                    "$numberLong": "125"
                },
                "correct": "Incorrect"
            },
            "24d4763d41328ec4": {
                "code": "div div div div div div div div div div",
                "time": {
                    "$numberLong": "85"
                },
                "correct": "Correct"
            },
            "250e04bcb5fbe4f7": {
                "code": ":empty",
                "time": {
                    "$numberLong": "73"
                },
                "correct": "Correct"
            },
            "25f9ecca44c1cd46": {
                "code": ":empty",
                "time": {
                    "$numberLong": "8"
                },
                "correct": "Correct"
            },
            "2601d4348a0a9688": {
                "code": "div003e :last-child",
                "time": {
                    "$numberLong": "99"
                },
                "correct": "Incorrect"
            },
            "2651ba874a6c8d94": {
                "code": "div003ediv003ediv003ediv003ediv003ediv003ediv003ediv003ediv003ediv",
                "time": {
                    "$numberLong": "24"
                },
                "correct": "Correct"
            },
            "27a619553e988074": {
                "code": "div div div div div div div div div div",
                "time": {
                    "$numberLong": "43"
                },
                "correct": "Correct"
            },
            "27bef6362f6c3153": {
                "code": "div:empty",
                "time": {
                    "$numberLong": "81"
                },
                "correct": "Correct"
            },
            "284a6bf537e9bc4d": {
                "code": "div, div, div,",
                "time": {
                    "$numberLong": "129"
                },
                "correct": "Incorrect"
            },
            "2aced08264036ea8": {
                "code": ":empty",
                "time": {
                    "$numberLong": "58"
                },
                "correct": "Correct"
            },
            "2c5dea2ca5f0d036": {
                "code": "div div div div div div div div div div",
                "time": {
                    "$numberLong": "97"
                },
                "correct": "Correct"
            },
            "2cb5d5d4c8d4b19a": {
                "code": "",
                "time": {
                    "$numberLong": "143"
                },
                "correct": "Incorrect"
            },
            "2cecb227110f5c46": {
                "code": "div div div div div div div div div div",
                "time": {
                    "$numberLong": "131"
                },
                "correct": "Correct"
            },
            "2f201db12c801e85": {
                "code": "div div div div div div div div div div ",
                "time": {
                    "$numberLong": "83"
                },
                "correct": "Correct"
            },
            "2f6a509eafbbb15c": {
                "code": "div div div div div div div div div div",
                "time": {
                    "$numberLong": "33"
                },
                "correct": "Correct"
            },
            "2fe6410a79f03048": {
                "code": ":nth-child(1)",
                "time": {
                    "$numberLong": "144"
                },
                "correct": "Incorrect"
            },
            "30959179ed650cd1": {
                "code": ":last-of-type",
                "time": {
                    "$numberLong": "138"
                },
                "correct": "Incorrect"
            },
            "34a24dd3d6aa750b": {
                "code": "div 003e",
                "time": {
                    "$numberLong": "134"
                },
                "correct": "Incorrect"
            },
            "34a4f2506ce3d182": {
                "code": "",
                "time": {
                    "$numberLong": "150"
                },
                "correct": "Incorrect"
            },
            "350ebb347c1ad556": {
                "code": "div div div div div div div div div div",
                "time": {
                    "$numberLong": "25"
                },
                "correct": "Correct"
            },
            "3549c28b38369744": {
                "code": "div:empty",
                "time": {
                    "$numberLong": "121"
                },
                "correct": "Correct"
            },
            "36cfe6300f509bd5": {
                "code": ":last-child{div}",
                "time": {
                    "$numberLong": "150"
                },
                "correct": "Incorrect"
            },
            "36e8f42039c184db": {
                "code": "div003ediv003ediv003ediv003ediv003ediv003ediv003ediv003ediv003ediv",
                "time": {
                    "$numberLong": "42"
                },
                "correct": "Correct"
            },
            "3720867adefd1d26": {
                "code": "div:empty",
                "time": {
                    "$numberLong": "124"
                },
                "correct": "Correct"
            },
            "37b36e389ab7fe80": {
                "code": "not:(:nth-child(1))",
                "time": {
                    "$numberLong": "151"
                },
                "correct": "Incorrect"
            },
            "39a2e48e45b49980": {
                "code": "div",
                "time": {
                    "$numberLong": "150"
                },
                "correct": "Incorrect"
            },
            "39fe9e521f177219": {
                "code": ":empty",
                "time": {
                    "$numberLong": "7"
                },
                "correct": "Correct"
            },
            "3a562770cb99a7f4": {
                "code": ":empty",
                "time": {
                    "$numberLong": "132"
                },
                "correct": "Correct"
            },
            "3ab170848134a2ff": {
                "code": "div div div div div div div div div div",
                "time": {
                    "$numberLong": "20"
                },
                "correct": "Correct"
            },
            "3c5258124b324a11": {
                "code": "div003ediv003ediv003ediv003ediv003ediv003ediv003ediv003ediv003ediv",
                "time": {
                    "$numberLong": "86"
                },
                "correct": "Correct"
            },
            "3cb038073228740f": {
                "code": "div003ediv003ediv003ediv003ediv003ediv003ediv003ediv003ediv003ediv",
                "time": {
                    "$numberLong": "37"
                },
                "correct": "Correct"
            },
            "3ceec99315a58f1c": {
                "code": "div:nth-child(9)",
                "time": {
                    "$numberLong": "147"
                },
                "correct": "Incorrect"
            },
            "3d63b802d486029c": {
                "code": ":empty",
                "time": {
                    "$numberLong": "9"
                },
                "correct": "Correct"
            },
            "3dc599a7d0323291": {
                "code": "div div div div div div div div div div",
                "time": {
                    "$numberLong": "33"
                },
                "correct": "Correct"
            },
            "3efffe88342c3ee5": {
                "code": "div div div div div div div div div div",
                "time": {
                    "$numberLong": "41"
                },
                "correct": "Correct"
            },
            "4139b7d383e0b65c": {
                "code": "div div div div div div div div div div",
                "time": {
                    "$numberLong": "50"
                },
                "correct": "Correct"
            },
            "418ca735584f1e3a": {
                "code": "div div div div div div div div div div",
                "time": {
                    "$numberLong": "31"
                },
                "correct": "Correct"
            },
            "42d7cc27726e8052": {
                "code": "div:empty",
                "time": {
                    "$numberLong": "19"
                },
                "correct": "Correct"
            },
            "454f621946346eed": {
                "code": "div 003e div 003e div 003e div 003e div 003e div 003e div 003e div 003e div 003e div",
                "time": {
                    "$numberLong": "68"
                },
                "correct": "Correct"
            },
            "4639b56895b8be0c": {
                "code": "div 003e div 003e div 003e div 003e div 003e div 003e div 003e div 003e div 003e div",
                "time": {
                    "$numberLong": "103"
                },
                "correct": "Correct"
            },
            "491d66dad9c08b8c": {
                "code": "div003ediv003ediv003ediv003ediv003ediv003ediv003ediv003ediv003ediv",
                "time": {
                    "$numberLong": "22"
                },
                "correct": "Correct"
            },
            "4c239ebf3cc37c4e": {
                "code": "div:empty",
                "time": {
                    "$numberLong": "48"
                },
                "correct": "Correct"
            },
            "4d9c4a8566aaca2e": {
                "code": "*003e*003e*003e*003e*003e*003e*003e*003e*003e*003e*003e*",
                "time": {
                    "$numberLong": "69"
                },
                "correct": "Correct"
            },
            "4f2d802143f78fdc": {
                "code": "div div div div div div div div div div",
                "time": {
                    "$numberLong": "47"
                },
                "correct": "Correct"
            },
            "50a7d9c3900376d4": {
                "code": "div div div div div div div div div div",
                "time": {
                    "$numberLong": "104"
                },
                "correct": "Correct"
            },
            "50e718838ec3ed69": {
                "code": "*:empty",
                "time": {
                    "$numberLong": "32"
                },
                "correct": "Correct"
            },
            "50f3b5f06c1d21a1": {
                "code": "[*$=div]",
                "time": {
                    "$numberLong": "149"
                },
                "correct": "Incorrect"
            },
            "5154c91bcd705420": {
                "code": "div003ediv003ediv003ediv003ediv003ediv003ediv003ediv003ediv003ediv",
                "time": {
                    "$numberLong": "94"
                },
                "correct": "Correct"
            },
            "52131ae4ea1f02db": {
                "code": "div:nth-last-child",
                "time": {
                    "$numberLong": "151"
                },
                "correct": "Incorrect"
            },
            "57a19a29c66f273a": {
                "code": "div 003e div 003e div",
                "time": {
                    "$numberLong": "142"
                },
                "correct": "Incorrect"
            },
            "597eaca2f80bb597": {
                "code": ":empty",
                "time": {
                    "$numberLong": "44"
                },
                "correct": "Correct"
            },
            "598dc546faccea96": {
                "code": "",
                "time": {
                    "$numberLong": "133"
                },
                "correct": "Incorrect"
            },
            "5cbbd38ec27acc0d": {
                "code": "div ::after",
                "time": {
                    "$numberLong": "148"
                },
                "correct": "Incorrect"
            },
            "5f2b55c93f8dfc50": {
                "code": "div:nth-child[9]",
                "time": {
                    "$numberLong": "122"
                },
                "correct": "Incorrect"
            },
            "5fa0dc84f5366d5d": {
                "code": "div 003e div003e div003ediv 003e div003e div003ediv003e div003ediv003ediv",
                "time": {
                    "$numberLong": "129"
                },
                "correct": "Correct"
            },
            "607b0abda0c50b0c": {
                "code": "",
                "time": {
                    "$numberLong": "138"
                },
                "correct": "Incorrect"
            },
            "608a221e132cfb0e": {
                "code": "div003ediv003ediv003ediv003ediv003ediv003ediv003ediv003ediv003ediv",
                "time": {
                    "$numberLong": "43"
                },
                "correct": "Correct"
            },
            "610358eb6ad04b78": {
                "code": "div:empty",
                "time": {
                    "$numberLong": "105"
                },
                "correct": "Correct"
            },
            "6120442cb00ddf3f": {
                "code": " 003cdiv003e 003e 003cdiv003e 003e 003cdiv003e 003e 003cdiv003e 003e 003cdiv003e 003e 003cdiv003e 003e 003cdiv003e 003e 003cdiv003e 003e 003cdiv003e 003e 003cdiv003e",
                "time": {
                    "$numberLong": "146"
                },
                "correct": "Incorrect"
            },
            "63da271cdd05f72a": {
                "code": "div div div div div div  div div div div",
                "time": {
                    "$numberLong": "51"
                },
                "correct": "Correct"
            },
            "645a56e6b8555c48": {
                "code": "div div div div div div div div div div",
                "time": {
                    "$numberLong": "10"
                },
                "correct": "Correct"
            },
            "6877303d0bc23e9f": {
                "code": "",
                "time": {
                    "$numberLong": "134"
                },
                "correct": "Incorrect"
            },
            "690d4a3fa53cafe6": {
                "code": "div div div div div div div div div div",
                "time": {
                    "$numberLong": "62"
                },
                "correct": "Correct"
            },
            "69a28f1b78baef56": {
                "code": "div:empty",
                "time": {
                    "$numberLong": "105"
                },
                "correct": "Correct"
            },
            "6a6720574c217df1": {
                "code": "div003e003e003e003e003e",
                "time": {
                    "$numberLong": "148"
                },
                "correct": "Incorrect"
            },
            "6ac831e069244801": {
                "code": ":empty",
                "time": {
                    "$numberLong": "71"
                },
                "correct": "Correct"
            },
            "6be274af29d69012": {
                "code": "*: not(*003e",
                "time": {
                    "$numberLong": "145"
                },
                "correct": "Incorrect"
            },
            "6be81d9143dc01ec": {
                "code": "div:empty",
                "time": {
                    "$numberLong": "87"
                },
                "correct": "Correct"
            },
            "6d772a3e4250147a": {
                "code": "div:empty",
                "time": {
                    "$numberLong": "90"
                },
                "correct": "Correct"
            },
            "6fad576453e1183c": {
                "code": "",
                "time": {
                    "$numberLong": "82"
                },
                "correct": "Incorrect"
            },
            "703e792787acb96a": {
                "code": "",
                "time": {
                    "$numberLong": "149"
                },
                "correct": "Incorrect"
            },
            "70c2126a27a7ff92": {
                "code": ":empty",
                "time": {
                    "$numberLong": "23"
                },
                "correct": "Correct"
            },
            "738824e90ee1a521": {
                "code": "",
                "time": {
                    "$numberLong": "50"
                },
                "correct": "Incorrect"
            },
            "758f08ff64d4fbed": {
                "code": "div",
                "time": {
                    "$numberLong": "147"
                },
                "correct": "Incorrect"
            },
            "77bfda6e1e04388a": {
                "code": "div 003e div 003ediv 003e div 003ediv 003e div div 003e div 003e div 003e div ",
                "time": {
                    "$numberLong": "57"
                },
                "correct": "Correct"
            },
            "784e2a35a5f02a51": {
                "code": "div div div div div div div div div div",
                "time": {
                    "$numberLong": "135"
                },
                "correct": "Correct"
            },
            "7876d097648ce241": {
                "code": "div div div div div div div div div div ",
                "time": {
                    "$numberLong": "62"
                },
                "correct": "Correct"
            },
            "7913e18db9805385": {
                "code": "div:empty",
                "time": {
                    "$numberLong": "54"
                },
                "correct": "Correct"
            },
            "79991eac2ed55971": {
                "code": "div ",
                "time": {
                    "$numberLong": "80"
                },
                "correct": "Incorrect"
            },
            "79d3d5a874c0fedb": {
                "code": "div+div",
                "time": {
                    "$numberLong": "107"
                },
                "correct": "Incorrect"
            },
            "7cd8dd365d287663": {
                "code": "",
                "time": {
                    "$numberLong": "117"
                },
                "correct": "Incorrect"
            },
            "7d9ab4e430491d3c": {
                "code": "div:empty",
                "time": {
                    "$numberLong": "40"
                },
                "correct": "Correct"
            },
            "7ef1e4b829e0b3d6": {
                "code": "",
                "time": {
                    "$numberLong": "103"
                },
                "correct": "Incorrect"
            },
            "7f48769c943032b7": {
                "code": "div:nth-of-type()",
                "time": {
                    "$numberLong": "145"
                },
                "correct": "Incorrect"
            },
            "8150b6bbc7717883": {
                "code": "div div div div div div div div div div",
                "time": {
                    "$numberLong": "30"
                },
                "correct": "Correct"
            },
            "8190a67e4972f187": {
                "code": "div003ediv003ediv003ediv003ediv003ediv003ediv003ediv003ediv003ediv",
                "time": {
                    "$numberLong": "97"
                },
                "correct": "Correct"
            },
            "82e8b6c0d88e0003": {
                "code": "div003ediv003ediv003ediv003ediv003ediv003ediv003ediv003ediv003ediv",
                "time": {
                    "$numberLong": "39"
                },
                "correct": "Correct"
            },
            "8373c834e2ac08bd": {
                "code": "",
                "time": {
                    "$numberLong": "147"
                },
                "correct": "Incorrect"
            },
            "85faf02e7002468e": {
                "code": "div div div div div div div div div div",
                "time": {
                    "$numberLong": "23"
                },
                "correct": "Correct"
            },
            "860ce7d23f02e7d3": {
                "code": "div(:nth-child(3))",
                "time": {
                    "$numberLong": "31"
                },
                "correct": "Incorrect"
            },
            "867cfd1b76269046": {
                "code": "div div:last-child",
                "time": {
                    "$numberLong": "148"
                },
                "correct": "Incorrect"
            },
            "8682698b0efcbb49": {
                "code": "*:last-of-type",
                "time": {
                    "$numberLong": "149"
                },
                "correct": "Incorrect"
            },
            "870545b496fb9231": {
                "code": ":empty",
                "time": {
                    "$numberLong": "4"
                },
                "correct": "Correct"
            },
            "8875dc4e9876728e": {
                "code": "div div div div div div div div div div",
                "time": {
                    "$numberLong": "150"
                },
                "correct": "Correct"
            },
            "898447718f00f0c7": {
                "code": "",
                "time": {
                    "$numberLong": "130"
                },
                "correct": "Incorrect"
            },
            "89f7ff1ba54776b9": {
                "code": ":empty",
                "time": {
                    "$numberLong": "79"
                },
                "correct": "Correct"
            },
            "89fb2b288bdbd651": {
                "code": ":empty",
                "time": {
                    "$numberLong": "5"
                },
                "correct": "Correct"
            },
            "8b3e94c6bb875abd": {
                "code": "div003ediv003ediv003ediv003ediv003ediv003ediv003ediv003ediv003ediv",
                "time": {
                    "$numberLong": "31"
                },
                "correct": "Correct"
            },
            "8c9feac04348414f": {
                "code": "div di",
                "time": {
                    "$numberLong": "151"
                },
                "correct": "Incorrect"
            },
            "8ce246e288c504b7": {
                "code": "div003ediv003ediv003ediv003ediv003ediv003ediv003ediv003ediv003ediv",
                "time": {
                    "$numberLong": "64"
                },
                "correct": "Correct"
            },
            "8d0b871a3aac7646": {
                "code": ":only-child",
                "time": {
                    "$numberLong": "118"
                },
                "correct": "Incorrect"
            },
            "8efb6e527bd50aae": {
                "code": "div003ediv003ediv003ediv003ediv003ediv003ediv003ediv003ediv003ediv",
                "time": {
                    "$numberLong": "65"
                },
                "correct": "Correct"
            },
            "92352b0b01aac98b": {
                "code": "div003ediv003ediv003ediv003ediv003ediv003ediv003ediv003ediv003ediv",
                "time": {
                    "$numberLong": "144"
                },
                "correct": "Correct"
            },
            "93e87af5faea4465": {
                "code": "html:root",
                "time": {
                    "$numberLong": "136"
                },
                "correct": "Incorrect"
            },
            "94ae2983d85b56f3": {
                "code": "div div div div div div div div div div",
                "time": {
                    "$numberLong": "25"
                },
                "correct": "Correct"
            },
            "94bac471a8a06f41": {
                "code": "div 003ediv003edivdiv",
                "time": {
                    "$numberLong": "151"
                },
                "correct": "Incorrect"
            },
            "94e6f0f36d96cca7": {
                "code": ":empty",
                "time": {
                    "$numberLong": "83"
                },
                "correct": "Correct"
            },
            "95da8c87fe0966a9": {
                "code": "div:empty",
                "time": {
                    "$numberLong": "18"
                },
                "correct": "Correct"
            },
            "9615130025e3bf23": {
                "code": "",
                "time": {
                    "$numberLong": "119"
                },
                "correct": "Incorrect"
            },
            "96a9d51e700ea6d9": {
                "code": " div 003e div 003e div 003e div 003e div 003e div 003e div 003e div 003e div 003e div",
                "time": {
                    "$numberLong": "60"
                },
                "correct": "Correct"
            },
            "96c9015ae13475fb": {
                "code": "",
                "time": {
                    "$numberLong": "127"
                },
                "correct": "Incorrect"
            },
            "97dbe566f05bad1e": {
                "code": "div div div div div div div div div div",
                "time": {
                    "$numberLong": "34"
                },
                "correct": "Correct"
            },
            "9a1d3ecd70ce4b81": {
                "code": "div003ediv003ediv003ediv003ediv003ediv003ediv003ediv003ediv003ediv",
                "time": {
                    "$numberLong": "42"
                },
                "correct": "Correct"
            },
            "9ba3cd7d2209cdb1": {
                "code": "div +",
                "time": {
                    "$numberLong": "150"
                },
                "correct": "Incorrect"
            },
            "9decf80a3668a04c": {
                "code": "div003ediv003ediv003ediv003ediv003ediv003ediv003ediv003ediv003ediv",
                "time": {
                    "$numberLong": "25"
                },
                "correct": "Correct"
            },
            "9e1ad98e7ed497c0": {
                "code": "",
                "time": {
                    "$numberLong": "67"
                },
                "correct": "Incorrect"
            },
            "9e8ceb488c61bfc6": {
                "code": "div ",
                "time": {
                    "$numberLong": "151"
                },
                "correct": "Incorrect"
            },
            "9eb7f3047b78db41": {
                "code": "div div div div div div div div div div",
                "time": {
                    "$numberLong": "100"
                },
                "correct": "Correct"
            },
            "9f3c76f5aebfad0a": {
                "code": "",
                "time": {
                    "$numberLong": "148"
                },
                "correct": "Incorrect"
            },
            "9f57ba8fbeaabc8f": {
                "code": "div:empty",
                "time": {
                    "$numberLong": "25"
                },
                "correct": "Correct"
            },
            "9f79120ff09e7b32": {
                "code": "div:n-th-child",
                "time": {
                    "$numberLong": "151"
                },
                "correct": "Incorrect"
            },
            "9f98758762638c79": {
                "code": "div:empty",
                "time": {
                    "$numberLong": "9"
                },
                "correct": "Correct"
            },
            "9fc6640ffb5bcf88": {
                "code": "div003ediv003ediv003ediv003ediv003ediv003ediv003ediv003ediv003ediv",
                "time": {
                    "$numberLong": "59"
                },
                "correct": "Correct"
            },
            "a59abf0ef6dd72ee": {
                "code": "",
                "time": {
                    "$numberLong": "141"
                },
                "correct": "Incorrect"
            },
            "a5cff54715b5e728": {
                "code": "div div div div div  div  div  div  div  div",
                "time": {
                    "$numberLong": "40"
                },
                "correct": "Correct"
            },
            "a7faf246f1fec897": {
                "code": "div003ediv003ediv003ediv003ediv003ediv003ediv003ediv003ediv003e*",
                "time": {
                    "$numberLong": "39"
                },
                "correct": "Correct"
            },
            "a82a83d5b2316bbb": {
                "code": "div:empty",
                "time": {
                    "$numberLong": "6"
                },
                "correct": "Correct"
            },
            "a87fa4ebabc2a0ce": {
                "code": "div003ediv003ediv003ediv003ediv003ediv003ediv003ediv003ediv003ediv",
                "time": {
                    "$numberLong": "77"
                },
                "correct": "Correct"
            },
            "ac306151b36609fd": {
                "code": "div div div div div div div div div div",
                "time": {
                    "$numberLong": "33"
                },
                "correct": "Correct"
            },
            "ad1db3469049502b": {
                "code": "",
                "time": {
                    "$numberLong": "148"
                },
                "correct": "Incorrect"
            },
            "add0cf5b0e6f0061": {
                "code": "div003ediv003ediv003ediv003ediv003ediv003ediv003ediv003ediv003ediv",
                "time": {
                    "$numberLong": "26"
                },
                "correct": "Correct"
            },
            "ade8a9fbb5003944": {
                "code": "div",
                "time": {
                    "$numberLong": "151"
                },
                "correct": "Incorrect"
            },
            "ae9e54473d676c54": {
                "code": "div div div div div div div div div div",
                "time": {
                    "$numberLong": "21"
                },
                "correct": "Correct"
            },
            "af5c9cf12b2832c8": {
                "code": ":empty",
                "time": {
                    "$numberLong": "71"
                },
                "correct": "Correct"
            },
            "affe91192214b1ab": {
                "code": "",
                "time": {
                    "$numberLong": "148"
                },
                "correct": "Incorrect"
            },
            "b0963184aa7f246b": {
                "code": "div",
                "time": {
                    "$numberLong": "150"
                },
                "correct": "Incorrect"
            },
            "b1926b5f5e8b806b": {
                "code": ":empty",
                "time": {
                    "$numberLong": "11"
                },
                "correct": "Correct"
            },
            "b1cbf3ca65c56e0d": {
                "code": "div div div div div div div div div div",
                "time": {
                    "$numberLong": "27"
                },
                "correct": "Correct"
            },
            "b278646f280691cb": {
                "code": "*:last-ele",
                "time": {
                    "$numberLong": "138"
                },
                "correct": "Incorrect"
            },
            "b2913665b1d38784": {
                "code": "div003ediv003ediv003ediv003ediv003ediv003ediv003ediv003ediv003ediv",
                "time": {
                    "$numberLong": "43"
                },
                "correct": "Correct"
            },
            "b46b33d779ec951f": {
                "code": "div div div div div div div div div div ",
                "time": {
                    "$numberLong": "53"
                },
                "correct": "Correct"
            },
            "b4e84dc5f950be34": {
                "code": "div:empty",
                "time": {
                    "$numberLong": "25"
                },
                "correct": "Correct"
            },
            "b4f4b5c6dfcb6d07": {
                "code": ":empty",
                "time": {
                    "$numberLong": "69"
                },
                "correct": "Correct"
            },
            "b51a79256e2462a5": {
                "code": "div div div div div div div div div div ",
                "time": {
                    "$numberLong": "114"
                },
                "correct": "Correct"
            },
            "b7037f74a55b1ded": {
                "code": "div:nth-of-type(8)",
                "time": {
                    "$numberLong": "125"
                },
                "correct": "Incorrect"
            },
            "b70e0f3eadc8fa6a": {
                "code": "div003e div003e div003e div003e div003e div003e div003e div003e div003e div",
                "time": {
                    "$numberLong": "59"
                },
                "correct": "Correct"
            },
            "b87bfaa63e377a71": {
                "code": "div:empty",
                "time": {
                    "$numberLong": "20"
                },
                "correct": "Correct"
            },
            "b913aff5711ffd5b": {
                "code": ":empty",
                "time": {
                    "$numberLong": "6"
                },
                "correct": "Correct"
            },
            "b928c37c17806191": {
                "code": "div:empty",
                "time": {
                    "$numberLong": "43"
                },
                "correct": "Correct"
            },
            "b9d1dfe7e37afeb2": {
                "code": "nth-child",
                "time": {
                    "$numberLong": "144"
                },
                "correct": "Incorrect"
            },
            "b9f4eab4145bb27a": {
                "code": "div 003e div 003e div003e div 003e div 003e div003e div 003e div 003e div 003e div",
                "time": {
                    "$numberLong": "55"
                },
                "correct": "Correct"
            },
            "bbe008738217e35f": {
                "code": "div003ediv003ediv003ediv003ediv003ediv003ediv003ediv003ediv003ediv",
                "time": {
                    "$numberLong": "59"
                },
                "correct": "Correct"
            },
            "c1219d67fe1e51c2": {
                "code": "",
                "time": {
                    "$numberLong": "149"
                },
                "correct": "Incorrect"
            },
            "c13f401d134bbdb7": {
                "code": "",
                "time": {
                    "$numberLong": "146"
                },
                "correct": "Incorrect"
            },
            "c18131119872b238": {
                "code": ":only-last-child",
                "time": {
                    "$numberLong": "150"
                },
                "correct": "Incorrect"
            },
            "c3713ba000985baf": {
                "code": "div 003e div 003e div003e div003e div003e div003e div003e div003e div003e div",
                "time": {
                    "$numberLong": "64"
                },
                "correct": "Correct"
            },
            "c486a74f6d914600": {
                "code": "div:empty",
                "time": {
                    "$numberLong": "29"
                },
                "correct": "Correct"
            },
            "c4b129ee6608ab4e": {
                "code": "div003ediv003ediv003ediv003ediv003ediv003ediv003ediv003ediv003ediv",
                "time": {
                    "$numberLong": "116"
                },
                "correct": "Correct"
            },
            "c61f85976fa0f880": {
                "code": "div div div div div div div div div div",
                "time": {
                    "$numberLong": "28"
                },
                "correct": "Correct"
            },
            "c62f6a6327b38df0": {
                "code": "div 003e div 003e div 003e div 003e div 003e div 003e div 003e div 003e div 003e div",
                "time": {
                    "$numberLong": "63"
                },
                "correct": "Correct"
            },
            "c6782ec9fbfacc49": {
                "code": ":empty",
                "time": {
                    "$numberLong": "3"
                },
                "correct": "Correct"
            },
            "c81886dde372d437": {
                "code": "",
                "time": {
                    "$numberLong": "150"
                },
                "correct": "Incorrect"
            },
            "c825ef755969b747": {
                "code": "div003ediv003ediv003ediv003ediv003ediv003ediv003ediv003ediv003ediv",
                "time": {
                    "$numberLong": "136"
                },
                "correct": "Correct"
            },
            "c95463f778ff93ca": {
                "code": "div div div div div div div div div div",
                "time": {
                    "$numberLong": "43"
                },
                "correct": "Correct"
            },
            "ca348e67a411e031": {
                "code": "div div div div div div div div div div",
                "time": {
                    "$numberLong": "132"
                },
                "correct": "Correct"
            },
            "ca60244540ed755d": {
                "code": "div:last-child 003e div:last-child 003e div:last-child 003e div:last-child 003e div:last-child 003e div:last-child 003e div:last-child  003e div:last",
                "time": {
                    "$numberLong": "150"
                },
                "correct": "Incorrect"
            },
            "cab8ee9fdec69ee8": {
                "code": "div003ediv003ediv003ediv003ediv003ediv003ediv003ediv003ediv003ediv",
                "time": {
                    "$numberLong": "28"
                },
                "correct": "Correct"
            },
            "cb0b66dbc547fb22": {
                "code": "div div div div div div div div div div",
                "time": {
                    "$numberLong": "36"
                },
                "correct": "Correct"
            },
            "cb13a1cb1bf89459": {
                "code": "div003ediv003ediv003ediv003ediv003ediv003ediv003ediv003ediv003ediv",
                "time": {
                    "$numberLong": "24"
                },
                "correct": "Correct"
            },
            "cf8643fb83e99e86": {
                "code": ":empty",
                "time": {
                    "$numberLong": "12"
                },
                "correct": "Correct"
            },
            "cfa10e7229340f70": {
                "code": "div",
                "time": {
                    "$numberLong": "150"
                },
                "correct": "Incorrect"
            },
            "d0b031eec85e6911": {
                "code": ":nth-of-type()",
                "time": {
                    "$numberLong": "126"
                },
                "correct": "Incorrect"
            },
            "d1346365de590ccf": {
                "code": "div003ediv003ediv003ediv003ediv003ediv003ediv003ediv003ediv003ediv",
                "time": {
                    "$numberLong": "54"
                },
                "correct": "Correct"
            },
            "d417fd8dd5e48efe": {
                "code": "div div div div div div div div div div",
                "time": {
                    "$numberLong": "67"
                },
                "correct": "Correct"
            },
            "d4a5deb84ce836e9": {
                "code": "div003ediv003ediv003ediv003ediv003ediv003ediv003ediv003ediv003ediv",
                "time": {
                    "$numberLong": "52"
                },
                "correct": "Correct"
            },
            "d52887dab0fb075f": {
                "code": "div:last-child",
                "time": {
                    "$numberLong": "136"
                },
                "correct": "Incorrect"
            },
            "d57163ee2e28e4b2": {
                "code": ":empty",
                "time": {
                    "$numberLong": "2"
                },
                "correct": "Correct"
            },
            "d66e5b11f0731612": {
                "code": "div div div div div div div div div div",
                "time": {
                    "$numberLong": "23"
                },
                "correct": "Correct"
            },
            "d6f6f6c7a9301bbe": {
                "code": "div div div div div div div div div div",
                "time": {
                    "$numberLong": "110"
                },
                "correct": "Correct"
            },
            "d8c54e85ccd5b21c": {
                "code": "div:empty",
                "time": {
                    "$numberLong": "34"
                },
                "correct": "Correct"
            },
            "d9c232089e7ae571": {
                "code": "divfirst-child",
                "time": {
                    "$numberLong": "122"
                },
                "correct": "Incorrect"
            },
            "d9f697ce2a414d53": {
                "code": "div003ediv003ediv003ediv003ediv003ediv003ediv003ediv003ediv003ediv",
                "time": {
                    "$numberLong": "144"
                },
                "correct": "Correct"
            },
            "db9d65f484e4d137": {
                "code": "div003ediv003ediv003ediv003ediv003ediv003ediv003ediv003ediv003ediv",
                "time": {
                    "$numberLong": "20"
                },
                "correct": "Correct"
            },
            "dba3419fda42d93b": {
                "code": "",
                "time": {
                    "$numberLong": "113"
                },
                "correct": "Incorrect"
            },
            "dd7da88658f252c6": {
                "code": "div div div div div div div div div div",
                "time": {
                    "$numberLong": "20"
                },
                "correct": "Correct"
            },
            "dda5b4fc568bd7e7": {
                "code": "div:nth-child(8)",
                "time": {
                    "$numberLong": "143"
                },
                "correct": "Incorrect"
            },
            "de33e71b1fe6587c": {
                "code": "div 003e ",
                "time": {
                    "$numberLong": "148"
                },
                "correct": "Incorrect"
            },
            "e0c2f4026aaf9e95": {
                "code": ":empty",
                "time": {
                    "$numberLong": "7"
                },
                "correct": "Correct"
            },
            "e3dc40112d98c593": {
                "code": ":empty",
                "time": {
                    "$numberLong": "56"
                },
                "correct": "Correct"
            },
            "e4692b2237b13270": {
                "code": "div003ediv003ediv003ediv003ediv003ediv003ediv003ediv003ediv003ediv",
                "time": {
                    "$numberLong": "74"
                },
                "correct": "Correct"
            },
            "e4924b8e7499d2e8": {
                "code": "div003e div003e div 003e div 003e div 003e div 003e div 003e div 003e div 003ediv",
                "time": {
                    "$numberLong": "122"
                },
                "correct": "Correct"
            },
            "e609701dd7bbad52": {
                "code": ":empty",
                "time": {
                    "$numberLong": "26"
                },
                "correct": "Correct"
            },
            "e70b30486b960ca2": {
                "code": "div div div div div div div div div div",
                "time": {
                    "$numberLong": "72"
                },
                "correct": "Correct"
            },
            "e8a0543d60a31174": {
                "code": "div:empty",
                "time": {
                    "$numberLong": "68"
                },
                "correct": "Correct"
            },
            "eaa4e4a573bbdf56": {
                "code": "div div div div div div div div div div",
                "time": {
                    "$numberLong": "54"
                },
                "correct": "Correct"
            },
            "eb3c03ba165df064": {
                "code": ":empty",
                "time": {
                    "$numberLong": "37"
                },
                "correct": "Correct"
            },
            "eb8cc549bad70c0b": {
                "code": "div:empty",
                "time": {
                    "$numberLong": "108"
                },
                "correct": "Correct"
            },
            "ec083ecdf7de4e1e": {
                "code": "div003ediv003ediv003ediv003ediv003ediv003ediv003ediv003ediv003ediv",
                "time": {
                    "$numberLong": "35"
                },
                "correct": "Correct"
            },
            "f060b45c72736520": {
                "code": "div div div div div div div div div div",
                "time": {
                    "$numberLong": "42"
                },
                "correct": "Correct"
            },
            "f1544a9bfe0cd1ad": {
                "code": ":empty",
                "time": {
                    "$numberLong": "22"
                },
                "correct": "Correct"
            },
            "f1c05dde29065cc5": {
                "code": "div 003e div 003e div 003e div 003e div 003e div 003e div 003e div 003e div 003e div",
                "time": {
                    "$numberLong": "77"
                },
                "correct": "Correct"
            },
            "f1d6c124613e4dc3": {
                "code": "div 003ed",
                "time": {
                    "$numberLong": "151"
                },
                "correct": "Incorrect"
            },
            "f271aeb2b417cd7e": {
                "code": ":empty",
                "time": {
                    "$numberLong": "4"
                },
                "correct": "Correct"
            },
            "f3a692ff48114271": {
                "code": "div:empty",
                "time": {
                    "$numberLong": "64"
                },
                "correct": "Correct"
            },
            "f3f8cd8f734b6082": {
                "code": "plocho",
                "time": {
                    "$numberLong": "150"
                },
                "correct": "Incorrect"
            },
            "f47878383710d5dd": {
                "code": "div div div div div div div div div div ",
                "time": {
                    "$numberLong": "124"
                },
                "correct": "Correct"
            },
            "f5e8f96eee818651": {
                "code": "div div div div div div div div div div",
                "time": {
                    "$numberLong": "42"
                },
                "correct": "Correct"
            },
            "f6829fc871613b65": {
                "code": "div003ediv003ediv003ediv003ediv003ediv003ediv003ediv003ediv003ediv003ediv:nth-child(1)",
                "time": {
                    "$numberLong": "150"
                },
                "correct": "Incorrect"
            },
            "f711acd5f09bbdf6": {
                "code": "div div div div div div div div div div",
                "time": {
                    "$numberLong": "82"
                },
                "correct": "Correct"
            },
            "f7b65f853512e069": {
                "code": "div:empty",
                "time": {
                    "$numberLong": "56"
                },
                "correct": "Correct"
            },
            "f881ad2049d118b3": {
                "code": "div+div+div+div+div+div+div+div",
                "time": {
                    "$numberLong": "142"
                },
                "correct": "Incorrect"
            },
            "f8fea8fffdca4d43": {
                "code": "div div div div div div div div div div",
                "time": {
                    "$numberLong": "24"
                },
                "correct": "Correct"
            },
            "f92800e8fbf079ac": {
                "code": "div:empty",
                "time": {
                    "$numberLong": "101"
                },
                "correct": "Correct"
            },
            "f95bda2df3fd514e": {
                "code": "div 003e div 003e div 003e div 003e div 003e div 003e div 003e div 003e div 003e div",
                "time": {
                    "$numberLong": "52"
                },
                "correct": "Correct"
            },
            "fc98beaf678455f7": {
                "code": "div:only-child",
                "time": {
                    "$numberLong": "125"
                },
                "correct": "Incorrect"
            },
            "fcc928c4a2b55a70": {
                "code": "div 003e div 003e div 003e div 003e div 003e div 003e div 003e div 003e div 003e div",
                "time": {
                    "$numberLong": "54"
                },
                "correct": "Correct"
            },
            "fdf286213a36687f": {
                "code": "div003ediv003ediv003ediv003ediv003ediv003ediv003ediv003ediv003ediv",
                "time": {
                    "$numberLong": "140"
                },
                "correct": "Correct"
            },
            "fe5c52f5db2f1cea": {
                "code": "div 003e div 003e div 003e div 003e div 003e div 003e div 003e div 003e div 003e div",
                "time": {
                    "$numberLong": "58"
                },
                "correct": "Correct"
            },
            "fe981eb56e6aa2eb": {
                "code": ":nth-last-child",
                "time": {
                    "$numberLong": "146"
                },
                "correct": "Incorrect"
            },
            "ff32798839089a73": {
                "code": ":empty",
                "time": {
                    "$numberLong": "36"
                },
                "correct": "Correct"
            },
            "ffbc2f2c9e5c74bd": {
                "code": "div div div div div div div div div div",
                "time": {
                    "$numberLong": "82"
                },
                "correct": "Correct"
            }
        }
    }, {
        "puzzleIndex": {
            "$numberLong": "9"
        },
        "startTime": {
            "$date": "2018-11-26T18:53:34.774Z"
        },
        "solutions": {
            "02ef04098b9feadf": {
                "code": "[data-attr = x m l] 003e div",
                "time": {
                    "$numberLong": "150"
                },
                "correct": "Incorrect"
            },
            "044b7810d5b21241": {
                "code": "[data-attr*=j][data-attr*=]",
                "time": {
                    "$numberLong": "151"
                },
                "correct": "Incorrect"
            },
            "0505908ca880da63": {
                "code": "[data-attr*=' '] ",
                "time": {
                    "$numberLong": "151"
                },
                "correct": "Incorrect"
            },
            "0546833d81e75f8e": {
                "code": "[data-attr*=' s' ]",
                "time": {
                    "$numberLong": "141"
                },
                "correct": "Correct"
            },
            "074732b4e4e7f8c2": {
                "code": "di[data-attr=*s*]",
                "time": {
                    "$numberLong": "151"
                },
                "correct": "Incorrect"
            },
            "07a655995e3a34a5": {
                "code": "[data-attr~=s]",
                "time": {
                    "$numberLong": "143"
                },
                "correct": "Correct"
            },
            "0960cde31955389a": {
                "code": "[data-attr*= s]",
                "time": {
                    "$numberLong": "134"
                },
                "correct": "Correct"
            },
            "096ccaaf699480f6": {
                "code": "[data-attr*=s s]",
                "time": {
                    "$numberLong": "147"
                },
                "correct": "Incorrect"
            },
            "0a69fc38555dc6b2": {
                "code": "[data-attr=c s s",
                "time": {
                    "$numberLong": "134"
                },
                "correct": "Incorrect"
            },
            "0a9dea941704145b": {
                "code": "[data-attr*=' s']",
                "time": {
                    "$numberLong": "43"
                },
                "correct": "Correct"
            },
            "0be05f1edf9ac0c9": {
                "code": "",
                "time": {
                    "$numberLong": "149"
                },
                "correct": "Incorrect"
            },
            "0c5610ad65714d07": {
                "code": "[data-attr ~=s]",
                "time": {
                    "$numberLong": "118"
                },
                "correct": "Correct"
            },
            "0cb7b730eb24cd97": {
                "code": "[data-attr$=s]",
                "time": {
                    "$numberLong": "147"
                },
                "correct": "Incorrect"
            },
            "0dc9eee89960aa8c": {
                "code": "[data-attr~=s]",
                "time": {
                    "$numberLong": "70"
                },
                "correct": "Correct"
            },
            "0dcc5ccce8ea8724": {
                "code": "[data-attr~=s]",
                "time": {
                    "$numberLong": "53"
                },
                "correct": "Correct"
            },
            "0f62193273f6c54f": {
                "code": "[data-attr*= s]",
                "time": {
                    "$numberLong": "141"
                },
                "correct": "Correct"
            },
            "0f68663169b43508": {
                "code": "[data-attr~=s] ",
                "time": {
                    "$numberLong": "31"
                },
                "correct": "Correct"
            },
            "101366111d88b96c": {
                "code": "[data-attr*= s]",
                "time": {
                    "$numberLong": "150"
                },
                "correct": "Correct"
            },
            "10878b8d10d2ae2b": {
                "code": "",
                "time": {
                    "$numberLong": "150"
                },
                "correct": "Incorrect"
            },
            "10f87b94846c7dd2": {
                "code": "*[data-attr *= s]",
                "time": {
                    "$numberLong": "134"
                },
                "correct": "Correct"
            },
            "11013b79d46cadbc": {
                "code": "[data-attr*=' s']",
                "time": {
                    "$numberLong": "141"
                },
                "correct": "Correct"
            },
            "1291f8effc0fb1e1": {
                "code": "[data-attr~=s]",
                "time": {
                    "$numberLong": "78"
                },
                "correct": "Correct"
            },
            "13516a858ed509bc": {
                "code": "[data-attr = ]",
                "time": {
                    "$numberLong": "137"
                },
                "correct": "Incorrect"
            },
            "13ebc713ecdb0c31": {
                "code": "[data-attr*=' s']",
                "time": {
                    "$numberLong": "125"
                },
                "correct": "Correct"
            },
            "147cd0646fe74c51": {
                "code": "[data-attr~=s]",
                "time": {
                    "$numberLong": "104"
                },
                "correct": "Correct"
            },
            "14d1d70f31909467": {
                "code": "[data-attr~=s]",
                "time": {
                    "$numberLong": "135"
                },
                "correct": "Correct"
            },
            "15085d8de21f8860": {
                "code": "[data-attr*=' s']",
                "time": {
                    "$numberLong": "106"
                },
                "correct": "Correct"
            },
            "15d30689cee2cf3d": {
                "code": "[data-attr~=s]",
                "time": {
                    "$numberLong": "27"
                },
                "correct": "Correct"
            },
            "1662516da39bd248": {
                "code": "[data-attr]",
                "time": {
                    "$numberLong": "125"
                },
                "correct": "Incorrect"
            },
            "167a5b071e75c309": {
                "code": "[data-attr*=' s",
                "time": {
                    "$numberLong": "49"
                },
                "correct": "Correct"
            },
            "174fb3408368ee14": {
                "code": "span[data-attr] ",
                "time": {
                    "$numberLong": "150"
                },
                "correct": "Incorrect"
            },
            "18a015071bed690d": {
                "code": "[data-attr*= s]",
                "time": {
                    "$numberLong": "89"
                },
                "correct": "Correct"
            },
            "1a001ccb65b08947": {
                "code": "[data-attr*= s",
                "time": {
                    "$numberLong": "99"
                },
                "correct": "Correct"
            },
            "1a495818e81cd4fa": {
                "code": "",
                "time": {
                    "$numberLong": "46"
                },
                "correct": "Incorrect"
            },
            "1b834e64b9e1baf7": {
                "code": "[data-attr*= s]",
                "time": {
                    "$numberLong": "56"
                },
                "correct": "Correct"
            },
            "1c207b98b51ff73d": {
                "code": "[data-attr~=s",
                "time": {
                    "$numberLong": "70"
                },
                "correct": "Correct"
            },
            "1c82933fa21c91af": {
                "code": "[data-attr]",
                "time": {
                    "$numberLong": "134"
                },
                "correct": "Incorrect"
            },
            "1c93a7a4711bff70": {
                "code": "div[data-attr]=s",
                "time": {
                    "$numberLong": "150"
                },
                "correct": "Incorrect"
            },
            "1e349ef8c3bc9f7a": {
                "code": "[data-attr= s ]",
                "time": {
                    "$numberLong": "138"
                },
                "correct": "Incorrect"
            },
            "1ea00611e97c6ea6": {
                "code": "[data-attr~='s']",
                "time": {
                    "$numberLong": "142"
                },
                "correct": "Correct"
            },
            "201af50fd3b736ba": {
                "code": "[data-attr~=s]",
                "time": {
                    "$numberLong": "132"
                },
                "correct": "Correct"
            },
            "214efb907df65375": {
                "code": "[data-attr*= s] ",
                "time": {
                    "$numberLong": "94"
                },
                "correct": "Correct"
            },
            "21b91283c47ddf5e": {
                "code": "[data-attr*= s]",
                "time": {
                    "$numberLong": "101"
                },
                "correct": "Correct"
            },
            "2272f07c112385b1": {
                "code": "*[data-attr~=s]",
                "time": {
                    "$numberLong": "85"
                },
                "correct": "Correct"
            },
            "24337d34f84c3b29": {
                "code": "[data]",
                "time": {
                    "$numberLong": "151"
                },
                "correct": "Incorrect"
            },
            "249db831162d981a": {
                "code": "[data-attr='c s s']",
                "time": {
                    "$numberLong": "149"
                },
                "correct": "Incorrect"
            },
            "24b339e7f88f73de": {
                "code": "[data-attr~=s]",
                "time": {
                    "$numberLong": "29"
                },
                "correct": "Correct"
            },
            "24b54a457abe06f4": {
                "code": "[data-atr^=c s j] ",
                "time": {
                    "$numberLong": "151"
                },
                "correct": "Incorrect"
            },
            "24b848f155c0b3b7": {
                "code": "[data-attr~=s]",
                "time": {
                    "$numberLong": "150"
                },
                "correct": "Correct"
            },
            "24d4763d41328ec4": {
                "code": "[data-attr~=s]",
                "time": {
                    "$numberLong": "47"
                },
                "correct": "Correct"
            },
            "25f9ecca44c1cd46": {
                "code": "[data-attr~=s]",
                "time": {
                    "$numberLong": "31"
                },
                "correct": "Correct"
            },
            "2651ba874a6c8d94": {
                "code": ": c",
                "time": {
                    "$numberLong": "150"
                },
                "correct": "Incorrect"
            },
            "27a619553e988074": {
                "code": "[data-attr*= s]",
                "time": {
                    "$numberLong": "36"
                },
                "correct": "Correct"
            },
            "27bef6362f6c3153": {
                "code": "[data-attr~=s]",
                "time": {
                    "$numberLong": "116"
                },
                "correct": "Correct"
            },
            "284a6bf537e9bc4d": {
                "code": "div[data-attr = 'c s s' 'x]",
                "time": {
                    "$numberLong": "151"
                },
                "correct": "Incorrect"
            },
            "2aced08264036ea8": {
                "code": "[data-attr*=s ]",
                "time": {
                    "$numberLong": "142"
                },
                "correct": "Incorrect"
            },
            "2c5dea2ca5f0d036": {
                "code": "div[data-attr~=s]",
                "time": {
                    "$numberLong": "128"
                },
                "correct": "Incorrect"
            },
            "2cecb227110f5c46": {
                "code": "[data-attr=c s s]",
                "time": {
                    "$numberLong": "140"
                },
                "correct": "Incorrect"
            },
            "2f201db12c801e85": {
                "code": "*[data-attr~=s]",
                "time": {
                    "$numberLong": "132"
                },
                "correct": "Correct"
            },
            "2f6a509eafbbb15c": {
                "code": "[data-attr*=' s']",
                "time": {
                    "$numberLong": "107"
                },
                "correct": "Correct"
            },
            "2fe6410a79f03048": {
                "code": "div[data-attr*=s]",
                "time": {
                    "$numberLong": "145"
                },
                "correct": "Incorrect"
            },
            "30959179ed650cd1": {
                "code": "[data-attr*=' s']",
                "time": {
                    "$numberLong": "50"
                },
                "correct": "Correct"
            },
            "34a24dd3d6aa750b": {
                "code": "[data-attr*= s]",
                "time": {
                    "$numberLong": "36"
                },
                "correct": "Correct"
            },
            "34a4f2506ce3d182": {
                "code": "",
                "time": {
                    "$numberLong": "145"
                },
                "correct": "Incorrect"
            },
            "350ebb347c1ad556": {
                "code": "[data-attr~=s]",
                "time": {
                    "$numberLong": "104"
                },
                "correct": "Correct"
            },
            "3549c28b38369744": {
                "code": "[data-attr*=x][data-attr*=s]",
                "time": {
                    "$numberLong": "134"
                },
                "correct": "Incorrect"
            },
            "36cfe6300f509bd5": {
                "code": "[data-attr=^s]",
                "time": {
                    "$numberLong": "149"
                },
                "correct": "Incorrect"
            },
            "36e8f42039c184db": {
                "code": "[data-attr~=s]",
                "time": {
                    "$numberLong": "68"
                },
                "correct": "Correct"
            },
            "3720867adefd1d26": {
                "code": "",
                "time": {
                    "$numberLong": "149"
                },
                "correct": "Incorrect"
            },
            "37b36e389ab7fe80": {
                "code": "[data-attr='s']",
                "time": {
                    "$numberLong": "144"
                },
                "correct": "Incorrect"
            },
            "39a2e48e45b49980": {
                "code": "['c s s'][j s][j s ]",
                "time": {
                    "$numberLong": "151"
                },
                "correct": "Incorrect"
            },
            "39fe9e521f177219": {
                "code": "[data-attr~=s",
                "time": {
                    "$numberLong": "51"
                },
                "correct": "Correct"
            },
            "3a562770cb99a7f4": {
                "code": "[data-attr]=",
                "time": {
                    "$numberLong": "146"
                },
                "correct": "Incorrect"
            },
            "3ab170848134a2ff": {
                "code": "[data-attr*= s]",
                "time": {
                    "$numberLong": "98"
                },
                "correct": "Correct"
            },
            "3c5258124b324a11": {
                "code": "[data-attr*= s]",
                "time": {
                    "$numberLong": "74"
                },
                "correct": "Correct"
            },
            "3cb038073228740f": {
                "code": "[data-attr ~=s]",
                "time": {
                    "$numberLong": "84"
                },
                "correct": "Correct"
            },
            "3ceec99315a58f1c": {
                "code": "[data-attr]:not([data-attr=soap])",
                "time": {
                    "$numberLong": "151"
                },
                "correct": "Incorrect"
            },
            "3d63b802d486029c": {
                "code": "[data-attr|=' ']",
                "time": {
                    "$numberLong": "149"
                },
                "correct": "Incorrect"
            },
            "3dc599a7d0323291": {
                "code": "[data-attr*=' s']",
                "time": {
                    "$numberLong": "65"
                },
                "correct": "Correct"
            },
            "3efffe88342c3ee5": {
                "code": "[data-attr~=s]",
                "time": {
                    "$numberLong": "47"
                },
                "correct": "Correct"
            },
            "4139b7d383e0b65c": {
                "code": "[data-attr*=s]",
                "time": {
                    "$numberLong": "148"
                },
                "correct": "Incorrect"
            },
            "418ca735584f1e3a": {
                "code": "[data-attr~=s]",
                "time": {
                    "$numberLong": "91"
                },
                "correct": "Correct"
            },
            "42d7cc27726e8052": {
                "code": "[data-attr='c']",
                "time": {
                    "$numberLong": "144"
                },
                "correct": "Incorrect"
            },
            "454f621946346eed": {
                "code": "[data-attr*= s]",
                "time": {
                    "$numberLong": "141"
                },
                "correct": "Correct"
            },
            "4639b56895b8be0c": {
                "code": "[data-attr !=soap]",
                "time": {
                    "$numberLong": "149"
                },
                "correct": "Incorrect"
            },
            "491d66dad9c08b8c": {
                "code": "",
                "time": {
                    "$numberLong": "96"
                },
                "correct": "Incorrect"
            },
            "4c239ebf3cc37c4e": {
                "code": "data-attr[rel~=c s j]",
                "time": {
                    "$numberLong": "150"
                },
                "correct": "Incorrect"
            },
            "4d9c4a8566aaca2e": {
                "code": "[data-attr ~= s]",
                "time": {
                    "$numberLong": "51"
                },
                "correct": "Correct"
            },
            "4f2d802143f78fdc": {
                "code": "[data-attr~=s]",
                "time": {
                    "$numberLong": "66"
                },
                "correct": "Correct"
            },
            "50a7d9c3900376d4": {
                "code": "[data-attr*= s]",
                "time": {
                    "$numberLong": "112"
                },
                "correct": "Correct"
            },
            "50e718838ec3ed69": {
                "code": "[data-attr*= s]",
                "time": {
                    "$numberLong": "42"
                },
                "correct": "Correct"
            },
            "50f3b5f06c1d21a1": {
                "code": "[data-attr^=j s]",
                "time": {
                    "$numberLong": "151"
                },
                "correct": "Incorrect"
            },
            "5154c91bcd705420": {
                "code": "div[name=s];",
                "time": {
                    "$numberLong": "144"
                },
                "correct": "Incorrect"
            },
            "52131ae4ea1f02db": {
                "code": "[data-attr~= j]",
                "time": {
                    "$numberLong": "147"
                },
                "correct": "Incorrect"
            },
            "57a19a29c66f273a": {
                "code": "[data-attr]",
                "time": {
                    "$numberLong": "143"
                },
                "correct": "Incorrect"
            },
            "597eaca2f80bb597": {
                "code": "[data-attr~=s]",
                "time": {
                    "$numberLong": "95"
                },
                "correct": "Correct"
            },
            "598dc546faccea96": {
                "code": "[data-attr]",
                "time": {
                    "$numberLong": "131"
                },
                "correct": "Incorrect"
            },
            "5f2b55c93f8dfc50": {
                "code": "div[data-attr=s]",
                "time": {
                    "$numberLong": "142"
                },
                "correct": "Incorrect"
            },
            "5fa0dc84f5366d5d": {
                "code": "[data-attr*= s]",
                "time": {
                    "$numberLong": "92"
                },
                "correct": "Correct"
            },
            "607b0abda0c50b0c": {
                "code": "[s n]",
                "time": {
                    "$numberLong": "147"
                },
                "correct": "Incorrect"
            },
            "608a221e132cfb0e": {
                "code": "[data-attr*= s]",
                "time": {
                    "$numberLong": "147"
                },
                "correct": "Correct"
            },
            "610358eb6ad04b78": {
                "code": "['c s s']",
                "time": {
                    "$numberLong": "148"
                },
                "correct": "Incorrect"
            },
            "6120442cb00ddf3f": {
                "code": "[data-attr*= s]",
                "time": {
                    "$numberLong": "81"
                },
                "correct": "Correct"
            },
            "63da271cdd05f72a": {
                "code": "[data-attr=_ s _]",
                "time": {
                    "$numberLong": "149"
                },
                "correct": "Incorrect"
            },
            "645a56e6b8555c48": {
                "code": "(-_-)",
                "time": {
                    "$numberLong": "150"
                },
                "correct": "Incorrect"
            },
            "6877303d0bc23e9f": {
                "code": "",
                "time": {
                    "$numberLong": "146"
                },
                "correct": "Incorrect"
            },
            "690d4a3fa53cafe6": {
                "code": "[data-attr= s]",
                "time": {
                    "$numberLong": "149"
                },
                "correct": "Incorrect"
            },
            "69a28f1b78baef56": {
                "code": "[attribute=data-attr] ",
                "time": {
                    "$numberLong": "119"
                },
                "correct": "Incorrect"
            },
            "6a6720574c217df1": {
                "code": "div[data-attr=c s s][data-attr=j s][data-attr=j s o n]",
                "time": {
                    "$numberLong": "148"
                },
                "correct": "Incorrect"
            },
            "6ac831e069244801": {
                "code": "[data-attr*=",
                "time": {
                    "$numberLong": "150"
                },
                "correct": "Incorrect"
            },
            "6be274af29d69012": {
                "code": "*[data-attr ~= s]",
                "time": {
                    "$numberLong": "117"
                },
                "correct": "Correct"
            },
            "6be81d9143dc01ec": {
                "code": "div[data-attr = 'c s s']",
                "time": {
                    "$numberLong": "140"
                },
                "correct": "Incorrect"
            },
            "6d772a3e4250147a": {
                "code": "[data-attr*=' s']",
                "time": {
                    "$numberLong": "74"
                },
                "correct": "Correct"
            },
            "703e792787acb96a": {
                "code": "[sn]",
                "time": {
                    "$numberLong": "150"
                },
                "correct": "Incorrect"
            },
            "70c2126a27a7ff92": {
                "code": "[data-attr~=s]",
                "time": {
                    "$numberLong": "42"
                },
                "correct": "Correct"
            },
            "738824e90ee1a521": {
                "code": "",
                "time": {
                    "$numberLong": "99"
                },
                "correct": "Incorrect"
            },
            "758f08ff64d4fbed": {
                "code": "div[data-attributes=c s s]",
                "time": {
                    "$numberLong": "127"
                },
                "correct": "Incorrect"
            },
            "77bfda6e1e04388a": {
                "code": "[data-attr~=s]",
                "time": {
                    "$numberLong": "79"
                },
                "correct": "Correct"
            },
            "784e2a35a5f02a51": {
                "code": "*[data-attr~=s]",
                "time": {
                    "$numberLong": "131"
                },
                "correct": "Correct"
            },
            "7876d097648ce241": {
                "code": "",
                "time": {
                    "$numberLong": "128"
                },
                "correct": "Incorrect"
            },
            "7913e18db9805385": {
                "code": "[data-attr*=s]",
                "time": {
                    "$numberLong": "145"
                },
                "correct": "Incorrect"
            },
            "79991eac2ed55971": {
                "code": "[data-attr='c s s']",
                "time": {
                    "$numberLong": "129"
                },
                "correct": "Incorrect"
            },
            "79d3d5a874c0fedb": {
                "code": "[data-attr] = s",
                "time": {
                    "$numberLong": "148"
                },
                "correct": "Incorrect"
            },
            "7cd8dd365d287663": {
                "code": "[c s s, j s j s o n]",
                "time": {
                    "$numberLong": "151"
                },
                "correct": "Incorrect"
            },
            "7d9ab4e430491d3c": {
                "code": "[data-attr*= s]",
                "time": {
                    "$numberLong": "45"
                },
                "correct": "Correct"
            },
            "7ef1e4b829e0b3d6": {
                "code": "[data-attr]",
                "time": {
                    "$numberLong": "133"
                },
                "correct": "Incorrect"
            },
            "7f48769c943032b7": {
                "code": "[data-attr]",
                "time": {
                    "$numberLong": "146"
                },
                "correct": "Incorrect"
            },
            "8150b6bbc7717883": {
                "code": "",
                "time": {
                    "$numberLong": "149"
                },
                "correct": "Incorrect"
            },
            "8190a67e4972f187": {
                "code": "[data-attr*=' s']",
                "time": {
                    "$numberLong": "61"
                },
                "correct": "Correct"
            },
            "82e8b6c0d88e0003": {
                "code": "[data-attr~=s]",
                "time": {
                    "$numberLong": "148"
                },
                "correct": "Correct"
            },
            "8373c834e2ac08bd": {
                "code": "",
                "time": {
                    "$numberLong": "119"
                },
                "correct": "Incorrect"
            },
            "85faf02e7002468e": {
                "code": "[data-attr=s]",
                "time": {
                    "$numberLong": "147"
                },
                "correct": "Incorrect"
            },
            "860ce7d23f02e7d3": {
                "code": "[data-attr]",
                "time": {
                    "$numberLong": "138"
                },
                "correct": "Incorrect"
            },
            "867cfd1b76269046": {
                "code": "[data-attr~=s",
                "time": {
                    "$numberLong": "53"
                },
                "correct": "Correct"
            },
            "8682698b0efcbb49": {
                "code": "[data-attr ~= s] ",
                "time": {
                    "$numberLong": "126"
                },
                "correct": "Correct"
            },
            "870545b496fb9231": {
                "code": "[data-attr=s]",
                "time": {
                    "$numberLong": "147"
                },
                "correct": "Incorrect"
            },
            "8875dc4e9876728e": {
                "code": "[data-attr~=s]",
                "time": {
                    "$numberLong": "43"
                },
                "correct": "Correct"
            },
            "898447718f00f0c7": {
                "code": "",
                "time": {
                    "$numberLong": "111"
                },
                "correct": "Incorrect"
            },
            "89f7ff1ba54776b9": {
                "code": "[data-attr~=s]",
                "time": {
                    "$numberLong": "77"
                },
                "correct": "Correct"
            },
            "89fb2b288bdbd651": {
                "code": "[data-attr~=s]",
                "time": {
                    "$numberLong": "77"
                },
                "correct": "Correct"
            },
            "8b3e94c6bb875abd": {
                "code": "div[data-attr='c s s' div[data-attr='c s s']]",
                "time": {
                    "$numberLong": "150"
                },
                "correct": "Incorrect"
            },
            "8c9feac04348414f": {
                "code": "[data-attr $=s]",
                "time": {
                    "$numberLong": "142"
                },
                "correct": "Incorrect"
            },
            "8ce246e288c504b7": {
                "code": "div[data-attr$=s]",
                "time": {
                    "$numberLong": "151"
                },
                "correct": "Incorrect"
            },
            "8d0b871a3aac7646": {
                "code": "",
                "time": {
                    "$numberLong": "107"
                },
                "correct": "Incorrect"
            },
            "8efb6e527bd50aae": {
                "code": "[data-attr=c s]",
                "time": {
                    "$numberLong": "151"
                },
                "correct": "Incorrect"
            },
            "92352b0b01aac98b": {
                "code": "[data-attr]",
                "time": {
                    "$numberLong": "150"
                },
                "correct": "Incorrect"
            },
            "93e87af5faea4465": {
                "code": "[data-attr]",
                "time": {
                    "$numberLong": "125"
                },
                "correct": "Incorrect"
            },
            "94ae2983d85b56f3": {
                "code": "[data-attr~=s]",
                "time": {
                    "$numberLong": "76"
                },
                "correct": "Correct"
            },
            "94bac471a8a06f41": {
                "code": "[data-attr*=js]",
                "time": {
                    "$numberLong": "149"
                },
                "correct": "Incorrect"
            },
            "94e6f0f36d96cca7": {
                "code": "[data-attr*= s]",
                "time": {
                    "$numberLong": "145"
                },
                "correct": "Correct"
            },
            "95da8c87fe0966a9": {
                "code": "*:not([datttr=]",
                "time": {
                    "$numberLong": "150"
                },
                "correct": "Incorrect"
            },
            "9615130025e3bf23": {
                "code": "",
                "time": {
                    "$numberLong": "117"
                },
                "correct": "Incorrect"
            },
            "96a9d51e700ea6d9": {
                "code": "*[data-attr*= s]",
                "time": {
                    "$numberLong": "110"
                },
                "correct": "Correct"
            },
            "96c9015ae13475fb": {
                "code": "[data-attr~=s]",
                "time": {
                    "$numberLong": "98"
                },
                "correct": "Correct"
            },
            "97dbe566f05bad1e": {
                "code": "[data-attr*= s]",
                "time": {
                    "$numberLong": "140"
                },
                "correct": "Correct"
            },
            "9a1d3ecd70ce4b81": {
                "code": "[data-attr*= s]",
                "time": {
                    "$numberLong": "35"
                },
                "correct": "Correct"
            },
            "9ba3cd7d2209cdb1": {
                "code": "*[data-attr!=",
                "time": {
                    "$numberLong": "150"
                },
                "correct": "Incorrect"
            },
            "9decf80a3668a04c": {
                "code": "[data-attr~=s]",
                "time": {
                    "$numberLong": "56"
                },
                "correct": "Correct"
            },
            "9e1ad98e7ed497c0": {
                "code": "[data-attr*= s]",
                "time": {
                    "$numberLong": "120"
                },
                "correct": "Correct"
            },
            "9e8ceb488c61bfc6": {
                "code": "[data-attr ='c']",
                "time": {
                    "$numberLong": "150"
                },
                "correct": "Incorrect"
            },
            "9eb7f3047b78db41": {
                "code": "[data-attr=cs]",
                "time": {
                    "$numberLong": "151"
                },
                "correct": "Incorrect"
            },
            "9f3c76f5aebfad0a": {
                "code": "[data-attr*=s]:",
                "time": {
                    "$numberLong": "150"
                },
                "correct": "Incorrect"
            },
            "9f57ba8fbeaabc8f": {
                "code": "[data-attr*= s]",
                "time": {
                    "$numberLong": "91"
                },
                "correct": "Correct"
            },
            "9f79120ff09e7b32": {
                "code": "[data-attr=j s o n]",
                "time": {
                    "$numberLong": "141"
                },
                "correct": "Incorrect"
            },
            "9f98758762638c79": {
                "code": "[data-attr~=s]",
                "time": {
                    "$numberLong": "92"
                },
                "correct": "Correct"
            },
            "9fc6640ffb5bcf88": {
                "code": "[data-attr~=s]",
                "time": {
                    "$numberLong": "65"
                },
                "correct": "Correct"
            },
            "a59abf0ef6dd72ee": {
                "code": "[data-attr~=s]",
                "time": {
                    "$numberLong": "98"
                },
                "correct": "Correct"
            },
            "a5cff54715b5e728": {
                "code": "[data-attr*=' s']",
                "time": {
                    "$numberLong": "70"
                },
                "correct": "Correct"
            },
            "a7faf246f1fec897": {
                "code": "[data-attr~=s]",
                "time": {
                    "$numberLong": "67"
                },
                "correct": "Correct"
            },
            "a82a83d5b2316bbb": {
                "code": "[data-attr~=s]",
                "time": {
                    "$numberLong": "146"
                },
                "correct": "Correct"
            },
            "a87fa4ebabc2a0ce": {
                "code": "[data-attr~=s]",
                "time": {
                    "$numberLong": "83"
                },
                "correct": "Correct"
            },
            "ac306151b36609fd": {
                "code": "*[data-attr~='s']",
                "time": {
                    "$numberLong": "91"
                },
                "correct": "Correct"
            },
            "ad1db3469049502b": {
                "code": "[data-attr~=s]",
                "time": {
                    "$numberLong": "47"
                },
                "correct": "Correct"
            },
            "add0cf5b0e6f0061": {
                "code": "[data-attr*=j s] ",
                "time": {
                    "$numberLong": "148"
                },
                "correct": "Incorrect"
            },
            "ade8a9fbb5003944": {
                "code": "[data-attr]",
                "time": {
                    "$numberLong": "144"
                },
                "correct": "Incorrect"
            },
            "ae9e54473d676c54": {
                "code": "[data-attr^=' s']",
                "time": {
                    "$numberLong": "140"
                },
                "correct": "Incorrect"
            },
            "af5c9cf12b2832c8": {
                "code": "[data-attr=c j s]",
                "time": {
                    "$numberLong": "147"
                },
                "correct": "Incorrect"
            },
            "affe91192214b1ab": {
                "code": "*[data-attr=s]",
                "time": {
                    "$numberLong": "145"
                },
                "correct": "Incorrect"
            },
            "b0963184aa7f246b": {
                "code": "*[^data-attr=]",
                "time": {
                    "$numberLong": "150"
                },
                "correct": "Incorrect"
            },
            "b1926b5f5e8b806b": {
                "code": "[data-attr~=s",
                "time": {
                    "$numberLong": "75"
                },
                "correct": "Correct"
            },
            "b1cbf3ca65c56e0d": {
                "code": "[data-attr*= s]",
                "time": {
                    "$numberLong": "111"
                },
                "correct": "Correct"
            },
            "b278646f280691cb": {
                "code": "[data-attr*= s]",
                "time": {
                    "$numberLong": "99"
                },
                "correct": "Correct"
            },
            "b2913665b1d38784": {
                "code": "[data-attr~=s]",
                "time": {
                    "$numberLong": "87"
                },
                "correct": "Correct"
            },
            "b46b33d779ec951f": {
                "code": "[data-attr *=  s]",
                "time": {
                    "$numberLong": "63"
                },
                "correct": "Correct"
            },
            "b4e84dc5f950be34": {
                "code": "[data-attr*= s]",
                "time": {
                    "$numberLong": "68"
                },
                "correct": "Correct"
            },
            "b4f4b5c6dfcb6d07": {
                "code": "[data-attr*=' s']",
                "time": {
                    "$numberLong": "141"
                },
                "correct": "Correct"
            },
            "b51a79256e2462a5": {
                "code": "[data-attr ^= c s s]",
                "time": {
                    "$numberLong": "147"
                },
                "correct": "Incorrect"
            },
            "b7037f74a55b1ded": {
                "code": "[data-attr*='s ']",
                "time": {
                    "$numberLong": "149"
                },
                "correct": "Incorrect"
            },
            "b70e0f3eadc8fa6a": {
                "code": "[c s s] [j s] ",
                "time": {
                    "$numberLong": "147"
                },
                "correct": "Incorrect"
            },
            "b87bfaa63e377a71": {
                "code": "[data-attr]",
                "time": {
                    "$numberLong": "144"
                },
                "correct": "Incorrect"
            },
            "b913aff5711ffd5b": {
                "code": "[data-attr~=s]",
                "time": {
                    "$numberLong": "2"
                },
                "correct": "Correct"
            },
            "b928c37c17806191": {
                "code": "[data-attr*= s",
                "time": {
                    "$numberLong": "86"
                },
                "correct": "Correct"
            },
            "b9d1dfe7e37afeb2": {
                "code": "[data-attr*=s]",
                "time": {
                    "$numberLong": "141"
                },
                "correct": "Incorrect"
            },
            "b9f4eab4145bb27a": {
                "code": "[data-attr*= s]",
                "time": {
                    "$numberLong": "113"
                },
                "correct": "Correct"
            },
            "bbe008738217e35f": {
                "code": "[data-attr~=s]",
                "time": {
                    "$numberLong": "125"
                },
                "correct": "Correct"
            },
            "c1219d67fe1e51c2": {
                "code": "[data-attr~='s']",
                "time": {
                    "$numberLong": "109"
                },
                "correct": "Correct"
            },
            "c13f401d134bbdb7": {
                "code": "*[data-attr *= 'j s']",
                "time": {
                    "$numberLong": "149"
                },
                "correct": "Incorrect"
            },
            "c18131119872b238": {
                "code": "[data-attr =c s s i]",
                "time": {
                    "$numberLong": "150"
                },
                "correct": "Incorrect"
            },
            "c3713ba000985baf": {
                "code": "[data-attr~=s]",
                "time": {
                    "$numberLong": "127"
                },
                "correct": "Correct"
            },
            "c486a74f6d914600": {
                "code": "[data-attr~= s]",
                "time": {
                    "$numberLong": "51"
                },
                "correct": "Correct"
            },
            "c4b129ee6608ab4e": {
                "code": "[data-attr=~s]",
                "time": {
                    "$numberLong": "71"
                },
                "correct": "Incorrect"
            },
            "c61f85976fa0f880": {
                "code": "[data-attr *= ' s']",
                "time": {
                    "$numberLong": "82"
                },
                "correct": "Correct"
            },
            "c62f6a6327b38df0": {
                "code": "[attr].['c s",
                "time": {
                    "$numberLong": "151"
                },
                "correct": "Incorrect"
            },
            "c6782ec9fbfacc49": {
                "code": "[data-attr~=s]",
                "time": {
                    "$numberLong": "85"
                },
                "correct": "Correct"
            },
            "c81886dde372d437": {
                "code": "*['data-attr']",
                "time": {
                    "$numberLong": "141"
                },
                "correct": "Incorrect"
            },
            "c825ef755969b747": {
                "code": "[data-attr~=s",
                "time": {
                    "$numberLong": "54"
                },
                "correct": "Correct"
            },
            "c95463f778ff93ca": {
                "code": "",
                "time": {
                    "$numberLong": "87"
                },
                "correct": "Incorrect"
            },
            "ca348e67a411e031": {
                "code": "[data-attr~=s]",
                "time": {
                    "$numberLong": "52"
                },
                "correct": "Correct"
            },
            "ca60244540ed755d": {
                "code": "[data-attr]",
                "time": {
                    "$numberLong": "140"
                },
                "correct": "Incorrect"
            },
            "cab8ee9fdec69ee8": {
                "code": "[data-attr~=s]",
                "time": {
                    "$numberLong": "66"
                },
                "correct": "Correct"
            },
            "cb0b66dbc547fb22": {
                "code": "[data-attr*= s]",
                "time": {
                    "$numberLong": "102"
                },
                "correct": "Correct"
            },
            "cb13a1cb1bf89459": {
                "code": "[data-attr~='s']",
                "time": {
                    "$numberLong": "101"
                },
                "correct": "Correct"
            },
            "cf8643fb83e99e86": {
                "code": "[data-attr~=s]",
                "time": {
                    "$numberLong": "111"
                },
                "correct": "Correct"
            },
            "cfa10e7229340f70": {
                "code": "[data-attr] ",
                "time": {
                    "$numberLong": "140"
                },
                "correct": "Incorrect"
            },
            "d0b031eec85e6911": {
                "code": "[data-attr*= s",
                "time": {
                    "$numberLong": "58"
                },
                "correct": "Correct"
            },
            "d1346365de590ccf": {
                "code": "ne znaju",
                "time": {
                    "$numberLong": "150"
                },
                "correct": "Incorrect"
            },
            "d417fd8dd5e48efe": {
                "code": "[data-attr*= ' s']",
                "time": {
                    "$numberLong": "74"
                },
                "correct": "Correct"
            },
            "d4a5deb84ce836e9": {
                "code": "span",
                "time": {
                    "$numberLong": "134"
                },
                "correct": "Incorrect"
            },
            "d52887dab0fb075f": {
                "code": "[data-attr~=s]",
                "time": {
                    "$numberLong": "108"
                },
                "correct": "Correct"
            },
            "d57163ee2e28e4b2": {
                "code": "[data-attr^=c ]",
                "time": {
                    "$numberLong": "151"
                },
                "correct": "Incorrect"
            },
            "d66e5b11f0731612": {
                "code": "data-attr]",
                "time": {
                    "$numberLong": "117"
                },
                "correct": "Incorrect"
            },
            "d6f6f6c7a9301bbe": {
                "code": "[data-attr~=s]",
                "time": {
                    "$numberLong": "70"
                },
                "correct": "Correct"
            },
            "d8c54e85ccd5b21c": {
                "code": "div[data-attr~=sj ]",
                "time": {
                    "$numberLong": "150"
                },
                "correct": "Incorrect"
            },
            "d9c232089e7ae571": {
                "code": "[data-attr]",
                "time": {
                    "$numberLong": "146"
                },
                "correct": "Incorrect"
            },
            "d9f697ce2a414d53": {
                "code": "[data-attr~='s']",
                "time": {
                    "$numberLong": "124"
                },
                "correct": "Correct"
            },
            "db9d65f484e4d137": {
                "code": "[data-attr ~=s]",
                "time": {
                    "$numberLong": "99"
                },
                "correct": "Correct"
            },
            "dba3419fda42d93b": {
                "code": "",
                "time": {
                    "$numberLong": "68"
                },
                "correct": "Incorrect"
            },
            "dd7da88658f252c6": {
                "code": "[data attr]~",
                "time": {
                    "$numberLong": "146"
                },
                "correct": "Incorrect"
            },
            "dda5b4fc568bd7e7": {
                "code": "[data-attr]",
                "time": {
                    "$numberLong": "144"
                },
                "correct": "Incorrect"
            },
            "de33e71b1fe6587c": {
                "code": "[data-attr~=s",
                "time": {
                    "$numberLong": "37"
                },
                "correct": "Correct"
            },
            "e0c2f4026aaf9e95": {
                "code": "[data-attr~=s]",
                "time": {
                    "$numberLong": "44"
                },
                "correct": "Correct"
            },
            "e3dc40112d98c593": {
                "code": "[data-attr~=s]",
                "time": {
                    "$numberLong": "113"
                },
                "correct": "Correct"
            },
            "e4692b2237b13270": {
                "code": "[data-attr*= ]",
                "time": {
                    "$numberLong": "147"
                },
                "correct": "Incorrect"
            },
            "e4924b8e7499d2e8": {
                "code": "[data-attr~=s]",
                "time": {
                    "$numberLong": "78"
                },
                "correct": "Correct"
            },
            "e609701dd7bbad52": {
                "code": "[data-attr ~= s]",
                "time": {
                    "$numberLong": "97"
                },
                "correct": "Correct"
            },
            "e70b30486b960ca2": {
                "code": "[attribute=css]",
                "time": {
                    "$numberLong": "142"
                },
                "correct": "Incorrect"
            },
            "e8a0543d60a31174": {
                "code": "[data-attr*= s",
                "time": {
                    "$numberLong": "123"
                },
                "correct": "Correct"
            },
            "eaa4e4a573bbdf56": {
                "code": "[c s s]",
                "time": {
                    "$numberLong": "146"
                },
                "correct": "Incorrect"
            },
            "eb3c03ba165df064": {
                "code": "[data-attr*= s]",
                "time": {
                    "$numberLong": "66"
                },
                "correct": "Correct"
            },
            "eb8cc549bad70c0b": {
                "code": "[data-attr/= s] ",
                "time": {
                    "$numberLong": "136"
                },
                "correct": "Incorrect"
            },
            "ec083ecdf7de4e1e": {
                "code": "[data-attr*= s",
                "time": {
                    "$numberLong": "70"
                },
                "correct": "Correct"
            },
            "f060b45c72736520": {
                "code": "[data-attr ~=s",
                "time": {
                    "$numberLong": "39"
                },
                "correct": "Correct"
            },
            "f1544a9bfe0cd1ad": {
                "code": "[data-attr*= s]",
                "time": {
                    "$numberLong": "30"
                },
                "correct": "Correct"
            },
            "f1c05dde29065cc5": {
                "code": "*[data-attr=s]",
                "time": {
                    "$numberLong": "149"
                },
                "correct": "Incorrect"
            },
            "f1d6c124613e4dc3": {
                "code": "[data-attr = c s s]",
                "time": {
                    "$numberLong": "150"
                },
                "correct": "Incorrect"
            },
            "f271aeb2b417cd7e": {
                "code": "[data-attr*= s]",
                "time": {
                    "$numberLong": "80"
                },
                "correct": "Correct"
            },
            "f3a692ff48114271": {
                "code": "[data-attr*= s",
                "time": {
                    "$numberLong": "71"
                },
                "correct": "Correct"
            },
            "f3f8cd8f734b6082": {
                "code": "",
                "time": {
                    "$numberLong": "22"
                },
                "correct": "Incorrect"
            },
            "f47878383710d5dd": {
                "code": "[data-attr~=s]",
                "time": {
                    "$numberLong": "101"
                },
                "correct": "Correct"
            },
            "f5e8f96eee818651": {
                "code": "*data-atr=",
                "time": {
                    "$numberLong": "150"
                },
                "correct": "Incorrect"
            },
            "f6829fc871613b65": {
                "code": "[data-attr=' ']",
                "time": {
                    "$numberLong": "151"
                },
                "correct": "Incorrect"
            },
            "f711acd5f09bbdf6": {
                "code": "[data-attr=%%%]",
                "time": {
                    "$numberLong": "150"
                },
                "correct": "Incorrect"
            },
            "f7b65f853512e069": {
                "code": "[data-attr *= ]",
                "time": {
                    "$numberLong": "150"
                },
                "correct": "Incorrect"
            },
            "f881ad2049d118b3": {
                "code": "[data-attr*=s]",
                "time": {
                    "$numberLong": "150"
                },
                "correct": "Incorrect"
            },
            "f8fea8fffdca4d43": {
                "code": "[data-attr~=s]",
                "time": {
                    "$numberLong": "122"
                },
                "correct": "Correct"
            },
            "f92800e8fbf079ac": {
                "code": "[data-attr~=s]",
                "time": {
                    "$numberLong": "23"
                },
                "correct": "Correct"
            },
            "f95bda2df3fd514e": {
                "code": "[data-attr~='s']",
                "time": {
                    "$numberLong": "62"
                },
                "correct": "Correct"
            },
            "fc98beaf678455f7": {
                "code": "[data-attr*=c j o n]",
                "time": {
                    "$numberLong": "142"
                },
                "correct": "Incorrect"
            },
            "fcc928c4a2b55a70": {
                "code": "",
                "time": {
                    "$numberLong": "131"
                },
                "correct": "Incorrect"
            },
            "fdf286213a36687f": {
                "code": "[data-attr^= s]",
                "time": {
                    "$numberLong": "150"
                },
                "correct": "Incorrect"
            },
            "fe5c52f5db2f1cea": {
                "code": "[data-attr*= s]",
                "time": {
                    "$numberLong": "78"
                },
                "correct": "Correct"
            },
            "fe981eb56e6aa2eb": {
                "code": "[data-attr^=j]",
                "time": {
                    "$numberLong": "146"
                },
                "correct": "Incorrect"
            },
            "ff32798839089a73": {
                "code": "",
                "time": {
                    "$numberLong": "147"
                },
                "correct": "Incorrect"
            },
            "ffbc2f2c9e5c74bd": {
                "code": "[data-attr*= s]",
                "time": {
                    "$numberLong": "122"
                },
                "correct": "Correct"
            }
        }
    }],
    "player_input": {},
    "puzzle_index": {
        "$numberLong": "9"
    },
    "round_phase": "End",
    "start_countdown": {
        "$numberLong": "0"
    },
    "round_countdown": {
        "$numberLong": "0"
    },
    "alias": "rsschool",
    "sync_solutions": {}
}`]