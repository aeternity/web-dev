---
title: Aeternity developers
description: "Aeternity Blockchain : Lightning Smart Contracts. Turing-Complete State-Channels. Oracles."
lang: en-US
advantages:
  - image: /img/No_Scaling_Icon.svg
    text: No scaling limits with built-in trust-less off-chain State Channels
  - image: /img/Security_icon.svg
    text: Highest security standards with a type safe VM and functional Smart Contract Language
  - image: /img/Confirmation_Time_icon.svg
    text: Confirmation times ~3 Seconds
  - image: /img/Low_fees_Icon.svg
    text: Low-fees on-chain due to a highly optimized Consensus, VM and native transaction types
  - image: /img/No_fees_Icon.svg
    text: No-fees off-chain for transactions and Smart Contract executions in State Channels
  - image: /img/Naming_System_icon.svg
    text: Build in Naming System for human readable names
  - image: /img/Private_Transaction_icon.svg
    text: Private transactions and Smart Contracts in State Channels
  - image: /img/Build_in_Oracles_icon.svg
    text: Built-in Oracles for accessing external API’s and real world data
  - image: /img/Highly_Flexible_Icon.svg
    text: Highly flexible Generalized Account model supporting all types of signing options
---

<Section id="header" type="hero">

# Welcome Developer,<br>Node Operator and Miner
This page helps you to get started with æternity.

::: slot buttons

[Get started](#why)

:::

</Section>

<Section id="why">

## The æternity Blockchain is open source, public and permissionless
If you are already familiar with basic blockchain principles and smart contracts, start with learning
about æternity’s unique features. The æternity protocol ships with a rich set of features
and functionality out of the box.

A full specification and documentation of the protocol can be found in the documentation hub and in the white paper. The source code and latest releases of the æternity node are available on [GitHub](https://github.com/aeternity/aeternity).

::: slot buttons

- <a href="https://aeternity.com/documentation-hub/" class="button button--normal">Documentation</a>
- <a href="https://github.com/aeternity/white-paper/blob/master/paper.pdf" class="button button--normal">White Paper </a> 

:::

::: slot footer

[![](./img/view-at-github.svg)](https://github.com/aeternity)

:::

</Section>

<Section id="technical_advantages" type="fancy">

## Technical advantages compared to major platforms

<AdvantagesOrbits />

> ![](./img/Erlang_Icon-alt.svg) 
> 
> Reference implementation written in Erlang by industry experts, the language that powers 90% of today’s world wide web. [Learn more](http://erlang.com)

</Section>

<Include path="sections/protocol" />

<Section id="sophia" type="alt">
<div class="section-content section-content--alt">
    <h2>Safe smart contract development with Sophia</h2>
    <p class="sophia-caption">
        Sophia is a language in the ML family. It is a strongly typed
        and has a restricted mutable state. Sophia is a functional Ocaml like language which syntax most resembles that of Reason.
    </p>
</div>
<div class="sophia-content">
    <div class="sophia-graphic">
        <img src="./img/What_is_Sophia_Graphic.svg" alt="">
    </div>
    <div class="sophia-text">
        <h3>What is Sophia?</h3>
        <p><img src="./img/Sophia_Icon.svg" alt="">
            Sophia is customized for smart contracts, which can be published to a blockchain (the æternity
            BlockChain). Thus some features of conventional languages, such as floating point arithmetics, are
            not present in Sophia, and some blockchain specific primitives, constructions and types have been
            added.
        </p>
        <h3>Links</h3>
        <ul class="sophia-links">
            <li>
                <a href="https://github.com/aeternity/protocol/blob/master/contracts/sophia.md">Documentation</a>
            </li>
            <li>
                <a href="https://github.com/aeternity/aepp-sophia-examples">Examples on GitHub</a>
            </li>
            <li>
                <a href="https://marketplace.visualstudio.com/items?itemName=MilenRadkov.sophia">Code
                    Highlighting</a> for VSCode and other IDE’s
            </li>
        </ul>
        <h3>Educational material</h3>
        <p>
            <img src="./img/Dacade_Icon.svg" alt="">
            <small>
                <a href="https://dacade.org/ae-dev-101/introduction">Online Course from Dacade.org</a><br>
                Check out the highly recommended æternity 101 course on Dacade, a peer learning platform.
                Courses are free, a certificate will be given and you earn 100 AE token on completion.
            </small>
        </p>
        <p>
            <img src="./img/github-logo.svg" alt="">
            <small>
                <a>Tutorials about Sophia</a><br>
                Available on GitHub but might be outdated.
            </small>
        </p>
    </div>
</div>
    
::: slot buttons

- [Get help](https://forum.aeternity.com/c/development/sophia-smart-contracts)

  ![](./img/aeternity-logo-small.svg) in the Forum
- [Chat](https://telegram.me/aeternity)

  ![](./img/aeternity-logo-small.svg) in Telegram

:::

</Section>
<Section id="getting_started" type="fancy">

## Getting started

In order to get started, try out the community developed online IDE or setup your own development enviroment with the local development framework AEproject.

- 
    ### ![](./img/Try_it_in_browser_icon.svg) Try it in the browser
    Just click the link below to launch the FireEditor, a Web-based IDE. Start to write and test Sophia smart contracts instantly.
    - ![](./img/FireEditor_Laptop.svg)

      [FireEditor](http://fireeditor.nikitafuchs.de)

-
    ### ![](./img/Try_it_locally_icon.svg) Try it locally
    Try it locally and setup your development environment in no-time.

    - ![](./img/AEProject_Github.svg)

      Install

          npm i -g aeproject

      ![](./img/AEProject_logo.svg)

      [Documentation](https://github.com/aeternity/aepp-aeproject-js)

::: slot buttons

- [Get help](https://forum.aeternity.com/c/development/sophia-smart-contracts)

  ![](./img/aeternity-logo-small.svg) in the Forum
- [Chat](https://telegram.me/aeternity)

  ![](./img/aeternity-logo-small.svg) in Telegram

:::

</Section>
<section id="developer_tools" class="section section--normal">
    <div class="section-content section-content--normal">
        <h2>Developer tools</h2>
        <p class="developer_tools-caption">
            Programming libraries are available. Any Javascript developer can build a simple æternity app in
            one day. For a quick start and reference SDK it is recommended to use the JavaScript one.
        </p>
    </div>
    <div class="cards counter apis">
        <div class="card api">
            <div class="card-content">
                <img src="./img/Developers_Tools_Section_icons.svg" alt="">
                <h3>Node HTTP API</h3>
                <p>
                    æternity <a href="https://api-docs.aeternity.io">Node API</a>
                </p>
            </div>
        </div>
        <div class="card api">
            <div class="card-content">
                <img src="./img/Developers_Tools_Section_icons.svg" alt="">
                <h3>SDK Frontend APIs</h3>
                <ul class="unstyled">
                    <li>
                        <a href="https://github.com/aeternity/aepp-sdk-js">JavaScript</a> (recommended)
                    </li>
                    <li>
                        <a href="https://github.com/aeternity/aepp-sdk-python">Python</a>
                    </li>
                    <li>
                        <a href="https://github.com/aeternity/aepp-sdk-go">Go</a>
                    </li>
                    <li>
                        <a href="https://github.com/kryptokrauts/aepp-sdk-java">Java</a> (Community Maintained)
                    </li>
                    <li>
                        <a href="https://github.com/aeternity/aepp-sdk-elixir">Elixir SDK</a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="card api">
            <div class="card-content">
                <img src="./img/Developers_Tools_Section_icons.svg" alt="">
                <h3>æternal Backend API</h3>
                <p>
                    The <a href="https://github.com/aeternity/aeternal">æternal</a> is a caching and reporting
                    layer which sits in front of the nodes of the æternity blockchain. Its purpose is to
                    respond to queries faster than the node can do, and to support queries that for reasons of
                    efficiency the node cannot or will not support itself.
                </p>
            </div>
        </div>
        <div class="card api">
            <div class="card-content">
                <img src="./img/Developers_Tools_Section_icons.svg" alt="">
                <h3>CLI - Command Line Client</h3>
                <p>
                    Quickly test all of Aeternity’s blockchain features from your Terminal, you can Install and use
                    our
                    <a href="https://github.com/aeternity/aepp-cli-js">NodeJS CLI</a>!
                </p>
            </div>
        </div>
    </div>
    <div class="section-buttons">
        <ul>
            <li class="section-button">
                <p>
                    <a href="https://forum.aeternity.com/c/aepplications" class="button button--small">Get help</a>
                </p>
                <p class="button-text button-text--logo">in The Forum</p>
            </li>
            <li class="section-button">
                <p>
                    <a href="https://telegram.me/aeternity" class="button button--small">Chat</a>
                </p>
                <p class="button-text button-text--logo">in Telegram</p>
            </li>
        </ul>
    </div>
</section>
<section id="useful" class="section section--alt">
    <div class="section-content section-content--alt">
        <h2>Useful resources</h2>
    </div>
    <div class="cards counter resources">
        <div class="card resource">
            <div class="card-content">
                <h3>Hosted API Server, Public Nodes and Services</h3>
                <p>
                    For convenience reasons, there are hosted services available to quick start the development of
                    æternity blockchain applications on testnet. Even though all services are available for
                    mainnet too, it is not advised to use these services in production. Therefore self-hosting
                    critical infrastructure is recommended.
                </p>
                <ul>
                    <li>
                        Testnet API Gateway Nodes hosted on <a href="https://testnet.aeternity.io/api">https://testnet.aeternity.io</a>
                    </li>
                    <li>
                        Testnet æternal API Server <a href="https://testnet.aeternal.io">https://testnet.aeternal.io</a>
                    </li>
                </ul>
                <p class="faucet">
                    To get some free AE tokens, use the testnet Token Faucet
                    <a href="https://testnet.faucet.aepps.com">https://testnet.faucet.aepps.com</a>
                </p>
            </div>
        </div>
        <div class="card resource">
            <div class="card-content">
                <h3>Resources</h3>
                <ul>
                    <li>
                        <h4>Blockchain Explorers (Testnet/Mainnet)</h4>
                        <ul>
                            <li>
                                <b>æternal Explorer</b>
                                <ul>
                                    <li>
                                        Mainnet <a href="https://aeternal.io">https://aeternal.io</a>
                                    </li>
                                    <li>
                                        Testnet <a href="https://testnet.aeternal.io">https://testnet.aeternal.io</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <b>AEknow</b>
                                <ul>
                                    <li><a href="https://aeknow.org">https://aeknow.org</a></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <h4>Wallets</h4>
                        <ul>
                            <li>
                                Browser Waellet <a href="https://waellet.com">https://waellet.com</a>
                            </li>
                            <li>
                                Mobile Base <a href="https://base.aepps.com">https://base.aepps.com</a>
                            </li>
                            <li>
                                AirGap <a href="https://airgap.it">https://airgap.it</a>
                            </li>
                            <li>
                                TrustWallet <a href="https://trustwallet.com">https://trustwallet.com</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</section>

<Section id="interfaces">

## Interfaces and clients

Three major clients to interact with æternity blockchain applications, sign contract calls and do transactions.

<Cards>

- ### Base iOS/Android/Web Wallet and Browser
  <a href="https://github.com/aeternity/aepp-base" class="button button--small">View on GitHub</a>
- ### Wællet Browser Extension
  <a href="https://github.com/aeternity/aepp-waellet" class="button button--small">View on GitHub</a>
- ### Blockchain Explorers
  - <a href="https://www.aeternal.io">www.aeternal.io</a>
  - <a href="https://www.aeknow.org">www.aeknow.org</a>

</Cards>

A variety of community build wallets are available, such as:
- [![](./img/Air_Gap_Icon.svg) Airgap Vault and Wallet](https://airgap.it)
- [![](./img/Trust_Wallet_Icon.svg) Trust Wallet](https://trustwallet.com)

It is possible to buy æternity tokens on exchanges like Binance, OKex, Huobi, gate.io and many
others. A full list of markets can be found via: <a href="https://coinmarketcap.com">coinmarketcap</a>
- [![](./img/Binance_icon.svg) binance](https://www.binance.com)
- [![](./img/Okex_icon.svg) okex](https://www.okex.com)
- [![](./img/Huobi_icon.svg) huobi](https://www.huobi.com)
- [![](./img/Gateio_icon.svg) gate.io](https://www.gate.io)

</Section>

<section id="run_node" class="section section--alt">
    <div class="section-content section-content--alt">
        <h2>Run your own node and services</h2>
    </div>
    <div class="cards counter howtos">
        <div class="card howto">
            <div class="card-content">
                <img src="./img/Host_a_Node_icon.svg" alt="">
                <h3>How to host a Node</h3>
                <a href="https://docs.aeternity.io/" class="button button--small">View docs</a>
            </div>
        </div>
        <div class="card howto">
            <div class="card-content">
                <img src="./img/API_Server_Icon.svg" alt="">
                <h3>How to host a Middleware API Server</h3>
                <a href="https://github.com/aeternity/aeternal" class="button button--small">View on GitHub</a>
            </div>
        </div>
    </div>
</section>
<section id="miners" class="section section--normal">
    <div class="section-content section-content--normal">
        <h2>For miners, pools and node operators</h2>
        <p>
            To get the latest version of æternity node, please check out the <a
                href="https://github.com/aeternity/aeternity/releases">latest published packages</a> and the <a
                href="https://github.com/aeternity/aeternity/tree/master/docs/release-notes">release notes</a>
        </p>
    </div>
    <div class="cards counter miners">
        <div class="card miner">
            <div class="card-content">
                <h3>Run a node</h3>
                <a href="https://docs.aeternity.io/en/stable/installation/" class="button button--small">View on
                    GitHub</a>
            </div>
        </div>
        <div class="card miner">
            <div class="card-content">
                <h3>Run a mining pool</h3>
                <a href="https://docs.aeternity.io/en/stable/stratum/" class="button button--small">View on
                    GitHub</a>
            </div>
        </div>
        <div class="card miner">
            <div class="card-content">
                <h3>Choose a mining client</h3>
                <a href="https://www.aeknow.org/miner" class="button button--small">Choose</a>
            </div>
        </div>
        <div class="card miner">
            <div class="card-content">
                <h3>Join an existing mining pool</h3>
                <a href="https://www.aeknow.org/miner" class="button button--small">Join</a>
            </div>
        </div>
    </div>
</section>
<section id="community" class="section section--alt">
    <div class="section-content section-content--alt">
        <h2>Join the community</h2>
    </div>
    <ul class="icons communities">
        <li class="icon community">
            <a href="https://www.youtube.com/channel/UCEsM0b7QPazeMR80DxNkzCA">
                <img src="./img/Public_Developers_icon.svg" alt="">
                <span>Youtube</span>
            </a>
        </li>
        <li class="icon community">
            <a href="https://twitter.com/aeternityg">
                <img src="./img/Development_bounties_icon.svg" alt="">
                <span>Twitter</span>
            </a>
        </li>
        <li class="icon community">
            <a href="https://forum.aeternity.com">
                <img src="./img/Forum_icon.svg" alt="">
                <span>Forum</span>
            </a>
        </li>
        <li class="icon community">
            <a href="https://telegram.me/aeternity">
                <img src="./img/Devchat_icon.svg" alt="">
                <span>Telegram</span>
            </a>
        </li>
        <li class="icon community">
            <a href="https://www.aeternity-foundation.org">
                <img src="./img/Development_Grants_icon.svg" alt="">
                <span>Development grants</span>
            </a>
        </li>
    </ul>
</section>
