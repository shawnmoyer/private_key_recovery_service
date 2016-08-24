# Ambisafe encrypted container decryption

Documentation with HOWTO recover private key from encrypted container.

**Follow next steps to decrypt your wallet container:**

1)Download this repository to your local computer by clicking button "Clone or download" > Download ZIP:
![pic](https://github.com/Ambisafe/private_key_recovery_service/tree/master/img/download_help_pic.png)
[[https://github.com/Ambisafe/private_key_recovery_service/tree/master/img/download_help_pic.png|alt=pic]]

2)Extract repository on your local computer and open extracted folder

3)In extracted folder open folder src

4)Find file ***"index.html"*** and open its by your web browser (Try to avoid using IE browsers)

5)Copy encrypted container that was send to you by email:
*please copy all container, how its show on example below*
Example:
```json
{
"public_key": "02f3ec6d3f8a79be1c2de1612e9dbf49a2dc9e9a198d7d6326964ebbe521947dd3", 
"data": "cec39e1493859f948fd99ff9debcb5e49eb3d347320b9f71660fd649b92575a973cafe6ef429c593ffc89293d1365f25", 
"salt": "f93b9730ac8e2c5c43073c5184b9182dbc97d3aa", 
"iv": "9f9855ea48703554b94410f1fe601112"
}
```

6)Paste copied encrypted container (1) and your password (2)(that was last used at your wallet account) in opened by browser page:
![pic](https://github.com/Ambisafe/private_key_recovery_service/tree/master/img/container_paste_helper.png)

7)Press button "Decrypt", the result will be PrivateKey, PublicKey and address.

**Save decrypted data, and be shure not to show anyone your decrypted private key.**

# Using decrypted private key in Mist wallet TODO


