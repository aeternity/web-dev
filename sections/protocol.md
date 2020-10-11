<section id="protocol" class="section section--normal">
    <div class="section-content section-content--normal">
        <h2>The æternity protocol</h2>
    </div>
    <div class="protocol">
        <div class="protocol-bullets">
            <label for="Universal"></label>
            <label for="Secure"></label>
            <label for="Scalable"></label>
            <label for="Efficient-low-to-no-fees"></label>
            <label for="Interoperable-Oracles"></label>
            <label for="Open-Source"></label>
            <label for="Decentralized"></label>
            <label for="Public-and-Private"></label>
            <label for="User-Friendly"></label>
            <label for="Governance"></label>
            <label for="Development-Sustainability"></label>
        </div>
        <div class="protocol-menu">
            <input type="radio" name="protocol-menu" id="Universal" checked>
            <div class="protocol-menu-item">
                <label for="Universal">Universal</label>
                <div class="protocol-content">
                    <img src="../img/1.universal.svg" alt="">
                    <h3>Universal</h3>
                    <div>
                        <p>
                            The æternity protocol is capable of supporting anything that first-generation Smart Contract platforms can—and more. It can power <b>Games, Payments, Identity Systems, Decentralized Finance, Registries, Token-Economies, Supply Chains, and more</b>. Many of its applications have not even been discovered yet. <b>The future is yours.</b>
                        </p>
                    </div>
                </div>
            </div>
            <input type="radio" name="protocol-menu" id="Secure">
            <div class="protocol-menu-item">
                <label for="Secure">Secure</label>
                <div class="protocol-content">
                    <img src="../img/2.secure.svg" alt="">
                    <h3>Secure</h3>
                    <div>
                        <p>
                            æternity is built with security in mind. The reference implementation is written in Erlang, following all standards of high-quality software engineering. Recurring security audits and intensive property-based testing are part of the protocol developers' daily work.
                        </p>
                        <p>
                            The æternity protocol interacts with a type-safe VM called the Fast æternity Transaction Engine (FATE), engineered to boost efficiency (gas consumption) and security (type-safe). Together with Sophia, a functional smart contract language that supports formal verification, the æternity protocol provides a unique take on blockchain and smart contract security.
                        </p>
                    </div>
                </div>
            </div>
            <input type="radio" name="protocol-menu" id="Scalable">
            <div class="protocol-menu-item">
                <label for="Scalable">Scalable</label>
                <div class="protocol-content">
                    <img src="../img/3.scalable.svg" alt="">
                    <h3>Scalable</h3>
                    <div>
                        <p>
                            To scale to billions of users and transactions, the æternity protocol provides trustless off-chain scaling with <a href="https://github.com/aeternity/protocol/blob/master/channels/README.md">State Channels</a> technology. Without compromising on security, State Channels allow peer-to-peer transactions and Smart Contract execution off-chain. Channels can be opened and closed in parallel, enabling unlimited scalability.
                        </p>
                        <p>
                            æternity's consensus protocol - <a href="https://github.com/aeternity/protocol/blob/128ef275ae8ed956d62eedb240b64c26b714ce85/consensus/bitcoin-ng.md">Bitcoin-NG</a> - is fast. With on-chain speeds reaching 120tx/s, æternity is about 8 times faster than Ethereum and about 15 times faster than Bitcoin. Block confirmation times are as low as 3 seconds, which significantly improves user experience.
                        </p>
                    </div>
                </div>
            </div>
            <input type="radio" name="protocol-menu" id="Efficient-low-to-no-fees">
            <div class="protocol-menu-item">
                <label for="Efficient-low-to-no-fees">Efficient: low-to-no fees</label>
                <div class="protocol-content">
                    <img src="../img/4.lowFees.svg" alt="">
                    <h3>Efficient low-to-no fees</h3>
                    <div>
                        <p>
                            æternity is equipped with dozens of native transaction types for managing <a href="https://github.com/aeternity/protocol/blob/master/channels/README.md">State Channels</a>, <a href="https://github.com/aeternity/protocol/blob/master/oracles/oracles.md">Oracles</a>, and <a href="https://github.com/aeternity/protocol/blob/master/AENS.md">Names</a>, among others. They are all optimized in terms of gas costs.
                        </p>
                        <p>
                            In addition, transactions and Smart Contract executions in State Channels don't incur any fees. On-chain, <a href="https://github.com/aeternity/protocol/blob/128ef275ae8ed956d62eedb240b64c26b714ce85/consensus/bitcoin-ng.md">Bitcoin-NG</a> — the protocol's consensus mechanism, allows for more transactions and smart contract executions per block in comparison to other platforms. This relaxes the fee and gas markets and leads to lower costs.
                        </p>
                        <p>
                            Since all Smart Contracts are executed in the highly efficient <a href="https://github.com/aeternity/protocol/blob/e2940192379916fb21a053b3ab09d1dff2ac76ef/contracts/fate.md">FATE VM</a>, less gas is needed overall. <b>A FATE contract is only 10% of the size of an EVM contract.</b>
                        </p>
                    </div>
                </div>
            </div>
            <input type="radio" name="protocol-menu" id="Interoperable-Oracles">
            <div class="protocol-menu-item">
                <label for="Interoperable-Oracles">Interoperable Oracles</label>
                <div class="protocol-content">
                    <img src="../img/5.oracles.svg" alt="">
                    <h3>Interoperable Oracles</h3>
                    <div>
                        <p>
                            On æternity, <a href="https://github.com/aeternity/protocol/blob/master/oracles/oracles.md">Oracles</a> are managed by special types of transactions. They can be programmed to request and provide data from information providers and APIs.
                        </p>
                        <p>
                            If a Smart Contract requires access to weather data, an Oracle request transaction—including a data schema, is broadcast on-chain. Data providers can respond to such data requests and charge a fee for the response.
                        </p>
                        <p>
                            Oracle providers can register on-chain and start providing any type of data by charging a fee. This allows Smart Contract developers to create applications that interact with information coming from the real-world, enabling Decentralized Finance applications, among many others.
                        </p>
                    </div>
                </div>
            </div>
            <input type="radio" name="protocol-menu" id="Open-Source">
            <div class="protocol-menu-item">
                <label for="Open-Source">Open Source</label>
                <div class="protocol-content">
                    <img src="../img/6.openSource.svg" alt="">
                    <h3>Open Source</h3>
                    <div>
                        <p>
                            The æternity protocol and all essential developer resources are fully open source. There are no proprietary licenses whatsoever. The development process is transparent, and anyone can start contributing via <a href="https://github.com/aeternity">GitHub</a> and <a href="https://forum.aeternity.com">the Forum</a>.
                        </p>
                    </div>
                </div>
            </div>
            <input type="radio" name="protocol-menu" id="Decentralized">
            <div class="protocol-menu-item">
                <label for="Decentralized">Decentralized</label>
                <div class="protocol-content">
                    <img src="../img/7.decentralized.svg" alt="">
                    <h3>Decentralized</h3>
                    <div>
                        <p>
                            With Satoshi’s legacy at its core, the æternity protocol is built to be decentralized. Anyone can host a node and start mining, connect to the Mainnet, and help secure the chain by verifying transactions.
                        </p>
                        <p>
                            The æternity network is operated by a community of node operators. It is fully trustless, with no central authority, no master nodes, or kill-switches.
                        </p>
                        <p>
                            The Proof-of-Work mechanism incorporated in æternity is <a href="https://github.com/tromp/cuckoo">Cuckoo Cycle</a>. It is highly efficient and the first one to rely on graph-theoretic proofs. It is also the most memory-bound, yet with instant verification.
                        </p>
                    </div>
                </div>
            </div>
            <input type="radio" name="protocol-menu" id="Public-and-Private">
            <div class="protocol-menu-item">
                <label for="Public-and-Private">Public and Private Use</label>
                <div class="protocol-content">
                    <img src="../img/8.public-private.svg" alt="">
                    <h3>Public and Private</h3>
                    <div>
                        <p>
                            æternity uses the accounts model which makes all transactions public by default. With the implementation of <a href="https://github.com/aeternity/protocol/blob/master/generalized_accounts/generalized_accounts.md">Generalized Accounts</a>, a unique technological feature, it is possible to sign transactions with a very high degree of flexibility.
                        </p>
                        <p>
                            From a cryptographic point of view, the protocol uses Blake2b (256 bits digest) and ed25519. It also supports Schnorr Signatures. Communication between nodes is encrypted with the Noise Protocol. 
                        </p>
                        <p>
                            <b>Off-chain State Channels transactions and smart contract executions are fully private unless published on-chain.</b>
                        </p>
                        <p>
                            It is trivial to set up a private blockchain network based on the æternity protocol for enterprise or governmental use.
                        </p>
                    </div>
                </div>
            </div>
            <input type="radio" name="protocol-menu" id="User-Friendly">
            <div class="protocol-menu-item">
                <label for="User-Friendly">User Friendly</label>
                <div class="protocol-content">
                    <img src="../img/9.userFriendly.svg" alt="">
                    <h3>User Friendly</h3>
                    <div>
                        <p>
                            The protocol-incorporated æternity Naming System (<a href="https://forum.aeternity.com/t/the-aeternity-blockchain-naming-system-aens-is-here/5157/16">AENS</a>) enables users to point human-readable names to accounts, contracts, oracles, and more.
                        </p>
                        <p>
                            By using the AENS, aeternity.chain can be used instead of the public key <i>ak_2ruXgsLy9jM...BfCsR6qtpQYkektWB</i>.
                        </p>
                        <p>
                            This significantly improves the user experience for both users and developers. Names in the AENS are registered through a <a href="https://chainna.me/">trustless auction process</a>.
                        </p>
                    </div>
                </div>
            </div>
            <input type="radio" name="protocol-menu" id="Governance">
            <div class="protocol-menu-item">
                <label for="Governance">Governance</label>
                <div class="protocol-content">
                    <img src="../img/10.governance.svg" alt="">
                    <h3>Governance</h3>
                    <div>
                        <p>
                            The æternity protocol is governed by miners, AE token users, and developers.
                        </p>
                        <p>
                            Using hardfork signaling, node operators and miner can show their support for consensus-breaking protocol upgrades. <b>AE token users can participate in the protocol's governance on-chain</b> by making use of the weighted, delegated polling mechanism. The mechanism is accessible via a <a href="https://forum.aeternity.com/t/governance-aepp-launch/5281">user-friendly, mobile æpp</a> that interacts with the blockchain. <b>All results are cryptographically verifiable.</b>
                        </p>
                        <p>
                            Anyone is welcome to participate in the off-chain governance process by joining discussions in æternity's communication channels. 
                        </p>
                    </div>
                </div>
            </div>
            <input type="radio" name="protocol-menu" id="Development-Sustainability">
            <div class="protocol-menu-item">
                <label for="Development-Sustainability">Development Sustainability</label>
                <div class="protocol-content">
                    <img src="../img/11.sustainability.svg" alt="">
                    <h3>Development Sustainability</h3>
                    <div>
                        <p>
                            The æternity protocol is robust, reliable, and built to last.
                        </p>
                        <p>
                            Despite that, <b>the æternity crypto foundation is tasked to support the long-term development and maintenance of the core protocol</b> and various essential resources. To fund these efforts, the Foundation receives <a href="https://blog.aeternity.com/block-reward-initiative-voting-results-d6d091f13f64">10.8% of the mining reward</a>. The distribution of funds is made through an open R&D Grant program available at the æternity crypto foundation's <a href="https://www.aeternity-foundation.org/">website</a>. 
                        </p>
                        <p>
                        <a href="https://www.aeternitystarfleet.com">æternity Starfleet</a> by <a href="https://aeventures.io/">æternity Ventures</a> can further support developers and entrepreneurs willing to launch startups on æternity.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
