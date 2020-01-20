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

- [Get started](#why)

:::

</Section>

<Section id="why">

## The æternity Blockchain is open source, public and permissionless
If you are already familiar with basic blockchain principles and smart contracts, start with learning
about æternity’s unique features. The æternity protocol ships with a rich set of features
and functionality out of the box.

A full specification and documentation of the protocol can be found in the documentation hub and in the white paper. The source code and latest releases of the æternity node are available on [GitHub](https://github.com/aeternity/aeternity).

::: slot buttons

- [Documentation](https://aeternity.com/documentation-hub/)
- [White Paper](https://github.com/aeternity/white-paper/blob/master/paper.pdf) 

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
                Courses are free, a certificate will be given and you earn 75 USD on completion.
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
    Install it locally and setup your development environment in no-time:

      npm i -g aeproject

    - ![](./img/AEProject_Laptop.svg)

      [Documentation](https://github.com/aeternity/aepp-aeproject-js)

::: slot buttons

- [Get help](https://forum.aeternity.com/c/development/sophia-smart-contracts)

  ![](./img/aeternity-logo-small.svg) in the Forum
- [Chat](https://telegram.me/aeternity)

  ![](./img/aeternity-logo-small.svg) in Telegram

:::

</Section>

<Section id="developer_tools">

## Developer tools
Programming libraries are available. Any Javascript developer can build a simple æternity app in one day. For a quick start and reference SDK it is recommended to use the JavaScript one.

::: slot cards

- ![](./img/Developers_Tools_Section_icons.svg)
  ### Node HTTP API

  æternity [Node API](https://api-docs.aeternity.io)
- ![](./img/Developers_Tools_Section_icons.svg)
  ### SDK Frontend APIs
  - [JavaScript](https://github.com/aeternity/aepp-sdk-js) (recommended)
  - [Python](https://github.com/aeternity/aepp-sdk-python)
  - [Go](https://github.com/aeternity/aepp-sdk-go)
  - [Java](https://github.com/kryptokrauts/aepp-sdk-java) (Community Maintained)
  - [Elixir SDK](https://github.com/aeternity/aepp-sdk-elixir)
- ![](./img/Developers_Tools_Section_icons.svg)
  ### æternal Backend API

  The [æternal](https://github.com/aeternity/aeternal) is a caching and reporting layer which sits in front of the nodes of the æternity blockchain. Its purpose is to respond to queries faster than the node can do, and to support queries that for reasons of efficiency the node cannot or will not support itself.
- ![](./img/Developers_Tools_Section_icons.svg)
  ### CLI - Command Line Client

  Quickly test all of Aeternity’s blockchain features from your Terminal, you can Install and use our [NodeJS CLI](https://github.com/aeternity/aepp-cli-js).
:::

::: slot buttons

- [Get help](https://forum.aeternity.com/c/aepplications)

  ![](./img/aeternity-logo-small.svg) in the Forum
- [Chat](https://telegram.me/aeternity)

  ![](./img/aeternity-logo-small.svg) in Telegram

:::

</Section>

<Section id="useful" type="alt">

## Useful resources

::: slot cards

- ### Hosted API Server, Public Nodes and Services
  For convenience reasons, there are hosted services available to quick start the development of æternity blockchain applications on testnet. Even though all services are available for mainnet too, it is not advised to use these services in production. Therefore self-hosting critical infrastructure is recommended.
  - Testnet æternal API Server [https://testnet.aeternal.io](https://testnet.aeternal.io)
  - Testnet API Gateway Nodes hosted on [https://testnet.aeternity.io/api](https://testnet.aeternity.io/api)

  > ![](./img/Faucet.svg)
  >
  > To get some free AE tokens, use the testnet Token Faucet [https://testnet.faucet.aepps.com](https://testnet.faucet.aepps.com)

- ### Resources
  - #### Blockchain Explorers (Testnet/Mainnet)
    - **æternal Explorer**
      - Mainnet [https://aeternal.io](https://aeternal.io)
      - Testnet [https://testnet.aeternal.io](https://testnet.aeternal.io)
    - **AEknow**
      - [https://aeknow.org](https://aeknow.org)
  - #### Wallets
    - Browser Waellet [https://waellet.com](https://waellet.com)
    - Mobile Base [https://base.aepps.com](https://base.aepps.com)
    - AirGap [https://airgap.it](https://airgap.it)
    - TrustWallet [https://trustwallet.com](https://trustwallet.com)

:::

</Section>

<Section id="interfaces">

## Interfaces and clients

Three major clients to interact with æternity blockchain applications, sign contract calls and do transactions.

::: slot cards

- ### Base iOS/Android/Web Wallet and Browser
  [View on GitHub](https://github.com/aeternity/aepp-base)
- ### Wællet Browser Extension
  [View on GitHub](https://github.com/aeternity/aepp-waellet)
- ### Blockchain Explorers
  - [aeternal.io](https://aeternal.io)
  - [www.aeknow.org](https://www.aeknow.org)

:::

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

<Section id="run_node" type="alt">

## Run your own node and services

::: slot cards
- ![](./img/Host_a_Node_icon.svg)
  ### How to host a Node
  [View docs](https://docs.aeternity.io)
- ![](./img/API_Server_Icon.svg)
  ### How to host a Middleware API Server
  [View on GitHub](https://github.com/aeternity/aeternal)
:::

</Section>
<Section id="miners">

## For miners, pools and node operators

To get the latest version of æternity node, please check out the [latest published packages](ttps://github.com/aeternity/aeternity/releases) and the [release notes](https://github.com/aeternity/aeternity/tree/master/docs/release-notes).

::: slot cards

- ### Run a node
  [View on GitHub](https://docs.aeternity.io/en/stable/installation/)
- ### Run a mining pool
  [View on GitHub](https://docs.aeternity.io/en/stable/stratum/)
- ### Choose a mining client
  [Choose](https://www.aeknow.org/miner)
- ### Run a node
  [Join](https://www.aeknow.org/miner)

:::


</Section>

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
