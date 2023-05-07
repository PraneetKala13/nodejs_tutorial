As you might have already realized you can set your name and email to whatever you want.
...

Generate GPG key
```
export GPG_TTY=$(tty)
gpg --full-gen-key
```{{exec}}
See GPG keys
```
gpg -K --keyid-format SHORT
```{{exec}}

```
ubuntu $ gpg -K --keyid-format SHORT
gpg: checking the trustdb
gpg: marginals needed: 3  completes needed: 1  trust model: pgp
gpg: depth: 0  valid:   1  signed:   0  trust: 0-, 0q, 0n, 0m, 0f, 1u
/root/.gnupg/pubring.kbx
------------------------
sec   rsa3072/BD4D017B 2023-05-07 [SC]
      0B3DE96ADA93BFF536696B7C24CED9E2BD4D017B
uid         [ultimate] Alan Turing <al@ntur.ing>
ssb   rsa3072/B34B6358 2023-05-07 [E]
```{{}}

The ID of the key in this case is BD4D017B. 

Next configure git to use that key:
`git config --global user.signingkey <KEY_ID>`

Then activate the automatic signing:
`git config --global commit.gpgsign true`{{exec}}