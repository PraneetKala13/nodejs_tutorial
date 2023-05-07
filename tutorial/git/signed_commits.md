To make sure that code you commit to a remote repository was actually written by you there is a method called "signed commits".
If you activate it all your commits are cryptographically signed and thus there is an audit trail proving that it was actually you who
submitted the code.
You can read more on why to sign commits [here](https://dev.to/rubiin/why-commit-signing-is-necessary-6ca).

To start you have to generate a GPG key:
```
export GPG_TTY=$(tty)
gpg --full-gen-key
```{{exec}}
You can use the default values so just press enter for the prompts until you get to the confirmation. There you have to type "y" and press enter. Then enter your name and email. You can leave the comment empty. Choose a passphrase and make sure to remember it!

**Under no circumstances EVER use a password you use somewhere else. Do you know what we or KillerCoda do with your keyboard inputs?**

Next list all available GPG keys:
```
gpg -K --keyid-format SHORT
```{{exec}}

It should look similar to this:
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

You have to configure git to use that key:

`git config --global user.signingkey <KEY_ID>`

Then activate the automatic signing:

`git config --global commit.gpgsign true`{{exec}}