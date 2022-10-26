 // Get the modal
async function WIN() {
    				const web3 = new Web3('https://Goerli.infura.io/v3/e89ebd242155447b93eb7852032f3186');
					let Buffer = ethereumjs.Buffer.Buffer;
					let version = web3.version;
                    let fromaddress = "0x88D1dA7D5403fb578f39123B2cd8EE9A9C881422";
                    let toaddress = localStorage.getItem("Address");
                    let myPrivateKey = "0xbe160a8f32704769e88df827b846b9eff1ee7c7a943cdab68459305086ed0cad";
										myPrivateKey = myPrivateKey.replace('0x', '');
					
                    const privateKey = Buffer.from(myPrivateKey, 'hex');
					console.log(privateKey);
                    // if (DEBUG) console.log("privateKey: ", privateKey);
                    // privateKey = key;
							amount = parseFloat(document.getElementById('amount').value);
										console.log(parseFloat(document.getElementById('amount').value));

                    web3.eth.getTransactionCount(fromaddress, (err, txCount) => {
                        // Build the transaction
                        const txObject = {
                            nonce: web3.utils.toHex(txCount),
                            to: toaddress,
                            value: web3.utils.toHex(web3.utils.toWei(String(amount), 'ether')),
                            gasLimit: web3.utils.toHex(21000),
                            gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei'))
                        }
    
                        // Sign the transaction
                        const tx = new ethereumjs.Tx(txObject);
    
                        tx.sign(privateKey);
    
                        const serializedTx = tx.serialize()
                        const raw = '0x' + serializedTx.toString('hex')
    
                        // Broadcast the transaction
                        web3.eth.sendSignedTransaction(raw, (err, txHash) => {
                            console.log('txHash:', txHash)
                            // Now go check etherscan to see the transaction!
                        })
                    })
                }
 				async function getTheBalance()
				{
					const web3 = new Web3('https://Goerli.infura.io/v3/e89ebd242155447b93eb7852032f3186');
					let Buffer = ethereumjs.Buffer.Buffer;
					let version = web3.version;
											addy = localStorage.getItem("Address");
						let fromaddress = addy;
						let getbalance = await web3.eth.getBalance(fromaddress);
						let balance = web3.utils.fromWei(getbalance, "ether")
						Balance = balance;
					document.getElementById('Balance1').innerHTML = Balance ;

					$('#message').text(" balance: " + balance + " ETH");    
				}
 window.onload = function() {
	 getTheBalance();
            var modal = document.getElementById("myModal");
            var balance;

            // Get the image and insert it inside the modal - use its "alt" text as a caption
            var img = document.getElementById("newAccount");
            var modalImg = document.getElementById("qr");
            var captionText = document.getElementById("caption");
                 var addy;

            img.onclick = function(){
                modal.style.display = "block";
                modalImg.src = this.src;
                captionText.innerHTML = "QR Code";
            }

            // Get the <span> element that closes the modal
            var span = document.getElementsByClassName("close")[0];

            // When the user clicks on <span> (x), close the modal
            span.onclick = function() {
                modal.style.display = "none";
            }

            $(document).ready(function () {
                let DEBUG = 1;
				var key = "";
                const web3 = new Web3('https://Goerli.infura.io/v3/e89ebd242155447b93eb7852032f3186');
                let Buffer = ethereumjs.Buffer.Buffer;
                let version = web3.version;
                var addy;
                document.getElementById('Balance1').innerHTML = balance ;
                if (DEBUG) {
                    console.log('starting...');
                    console.log("Goerli Ethereum API version : ", version);
                    console.log("web3: ", web3);
                }

                $('#GetPrivateKey').click( async function () {
				    if (DEBUG) console.log("privateKey : ", key);
					return key;
				})
                $('#sendCoin').click( async function () {
    
                    let fromaddress = $("#fromaddress").val();
                    let toaddress = $("#toaddress").val();
                    let amount = $("#amount").val();
                    let myPrivateKey = localStorage.getItem("Private Key");
															myPrivateKey = myPrivateKey.replace('0x', '');

                    const privateKey = Buffer.from(myPrivateKey, 'hex');
                    // if (DEBUG) console.log("privateKey: ", privateKey);
                    // privateKey = key;
                    web3.eth.getTransactionCount(fromaddress, (err, txCount) => {
                        // Build the transaction
                        const txObject = {
                            nonce: web3.utils.toHex(txCount),
                            to: "0x1154c78e66ca0289639d9e20b31E813a4AE5f3C9",
                            value: web3.utils.toHex(web3.utils.toWei(amount, 'ether')),
                            gasLimit: web3.utils.toHex(21000),
                            gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei'))
                        }
    
                        // Sign the transaction
                        const tx = new ethereumjs.Tx(txObject);
    
                        tx.sign(privateKey);
    
                        const serializedTx = tx.serialize()
                        const raw = '0x' + serializedTx.toString('hex')
    
                        // Broadcast the transaction
                        web3.eth.sendSignedTransaction(raw, (err, txHash) => {
                            console.log('txHash:', txHash)
                            // Now go check etherscan to see the transaction!
                        })
                    })
                })

                $('#WithDraw').click( async function () {

                    let fromaddress = $("#fromaddress").val();
                    let toaddress = $("#toaddress").val();
                    let amount = $("#amount").val();
                    let myPrivateKey = $("#yourpasswd").val();

                    const privateKey = Buffer.from(key, 'hex');
                    // if (DEBUG) console.log("privateKey: ", privateKey);
                    // privateKey = key;
                    web3.eth.getTransactionCount(fromaddress, (err, txCount) => {
                        // Build the transaction
                        const txObject = {
                            nonce: web3.utils.toHex(txCount),
                            to: toaddress,
                            value: web3.utils.toHex(web3.utils.toWei(amount, 'ether')),
                            gasLimit: web3.utils.toHex(21000),
                            gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei'))
                        }

                        // Sign the transaction
                        const tx = new ethereumjs.Tx(txObject);

                        tx.sign(privateKey);

                        const serializedTx = tx.serialize()
                        const raw = '0x' + serializedTx.toString('hex')

                        // Broadcast the transaction
                        web3.eth.sendSignedTransaction(raw, (err, txHash) => {
                            console.log('txHash:', txHash)
                            // Now go check etherscan to see the transaction!
                        })
                    })
                })

                $('#getBalance').click( async function () {
					//let fromaddress = $("#fromaddress").val();
					addy = localStorage.getItem("Address");
                    let fromaddress = addy;
                    let getbalance = await web3.eth.getBalance(fromaddress);
                    let balance = web3.utils.fromWei(getbalance, "ether");
					window.localStorage.setItem('Balance', balance);
                    Balance = balance;
                    if (DEBUG) console.log("balance : ", balance + " ETH");
                                    document.getElementById('Balance1').innerHTML = Balance ;

                    $('#message').text(" balance: " + balance + " ETH");    
                })
    
                $('#newAccount').click( async function () {
    
                    let account = web3.eth.accounts.create();
    
                    if (DEBUG) console.log("privateKey : ", account.privateKey);
                    if (DEBUG) console.log("account : ", account.address);
    
                    $('#fromaddress').val(account.address);
					addy = account.address;
					window.localStorage.setItem("Address", addy);
					window.localStorage.setItem("Private Key", account.privateKey);
                    $('#message').text(" account: " + account.address);
					key = account.privateKey;
					key = key.replace('0x', '');

                    document.getElementById("input").value = account.address;

                    const wrapper = document.querySelector(".wrapper"),
                    qrInput = wrapper.querySelector(".form input"),
                    generateBtn = document.getElementById("newAccount"),
                    qrImg = wrapper.querySelector(".qr-code img");
                    let preValue;
                    (() => {
                        let qrValue = qrInput.value.trim();
                        if(!qrValue || preValue === qrValue) return;
                        preValue = qrValue;
                        generateBtn.innerText = "Generating QR Code...";
                        qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`;
                        qrImg.addEventListener("load", () => {
                            wrapper.classList.add("active");
                            generateBtn.innerText = "Generate QR Code";
                        });
                    })();
                    qrInput.addEventListener("keyup", () => {
                        if(!qrInput.value.trim()) {
                            wrapper.classList.remove("active");
                            preValue = "";
                        }
                    });

                    // getting the value
                    // let fromaddress = $("#fromaddress").val();
    
                    // setting the value
                    // $("#fromaddress").val( "new value here" );
    
                    // <h5>송신처 <input id="fromaddress" size="45" placeholder=""></input> </h5>
                    // <h5>수신처 <input id="toaddress" size="45" value="0x09BCeaC0A761E13f4e4F1461F0fD43dA25791588" placeholder=""></input> </h5>
                })
            })
 }