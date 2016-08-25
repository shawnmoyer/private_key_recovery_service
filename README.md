# Ambisafe encrypted container decryption

This library is developed to make your wallet container decryption as safe as possible. 
You’ll find the detailed HOWTO bellow.

***Security notice: Ambisafe NEVER gets, stores or requests your decrypted data. 
All the decryption happens inside your PC and should NOT be shared with any third parties!***

**Follow the next steps to decrypt your wallet container:**

1)Download this repository to your local computer by clicking button "Clone or download" > Download ZIP:
<img src="/img/download_help_pic.png"/>

2)Extract repository to your local computer and open the extracted folder.

3)In extracted folder open folder ***src***

4)Go to the *src* folder, find file *index.html* and open it with your web browser (avoid using IE browsers).

5)Copy the encrypted container which was emailed to you. 
Please copy all the container the same way as it’s shown at the example below.
Example:
```json
{
"public_key": "02f3ec6d3f8a79be1c2de1612e9dbf49a2dc9e9a198d7d6326964ebbe521947dd3", 
"data": "cec39e1493859f948fd99ff9debcb5e49eb3d347320b9f71660fd649b92575a973cafe6ef429c593ffc89293d1365f25", 
"salt": "f93b9730ac8e2c5c43073c5184b9182dbc97d3aa", 
"iv": "9f9855ea48703554b94410f1fe601112"
}
```

6)Paste your encrypted container (1) and your matching password (2) at the html page (check the screenshot below).

<img src="/img/container_paste_helper.png"/>

7)Press button "Decrypt", the result will be PrivateKey, PublicKey and address.

8)Save this decrypted data and *never share your decrypted private key with any third parties*. 
Keep in mind that the person who has access to your decrypted private key has full control over your assets.

# Using decrypted private key in Mist wallet TODO


