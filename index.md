---
title: æternity - a blockchain for scalable, secure and decentralized æpps
description: "æternity is a permissionless, public, decentralized open source smart contract platform."
lang: en-US
announcement: |
  Welcome to our brand new website, <a href="https://forum.aeternity.com/t/a-website-that-fits-introducing-aeternity-s-new-website/5898" target="_blank">read more about it in the forum</a>.
advantages:
  - image: /img/No_Scaling_Icon.svg
    text: No scaling limits with built-in trustless, off-chain State Channels
  - image: /img/Security_icon.svg
    text: Highest security standards with a type-safe VM and functional Smart Contract language
  - image: /img/Confirmation_Time_icon.svg
    text: ~3 second block confirmation times
  - image: /img/Low_fees_Icon.svg
    text: Low on-chain fees due to highly optimized consensus, VM, and native transaction types
  - image: /img/No_fees_Icon.svg
    text: No off-chain fees for transactions and Smart Contract execution in State Channels
  - image: /img/Naming_System_icon.svg
    text: Built-in Naming System for human-readable names
  - image: /img/Private_Transaction_icon.svg
    text: Private transactions and smart contracts in state channels
  - image: /img/Build_in_Oracles_icon.svg
    text: Built-in Oracles for accessing external API’s and real world data
  - image: /img/Highly_Flexible_Icon.svg
    text: Highly flexible generalized account model supporting all types of signing options
metrics:
  - image: /img/Metrics_Commits.svg
    text: GitHub Commits
    value: 5496
  - image: /img/Metrics_Transactions.svg
    text: Total Transactions
    value: 1218537
  - image: /img/Metrics_Names.svg
    text: Names Claimed
    value: 1654
  - image: /img/Metrics_Mined.svg
    text: Blocks Mined
    value: 200694
  - image: /img/Metrics_Accounts.svg
    text: Active Accounts
    value: 1218537
---

<Section id="header" type="hero">

# A Blockchain for scalable,<br> secure and decentralized æpps

::: slot buttons

- [Get involved](https://forum.aeternity.com)

:::

</Section>

<Section id="why">

## æternity blockchain is open source, public and permissionless
æternity blockchain is an Erlang-based scalable smart contract platform engineered by programming pioneers to address some of the most fundamental challenges native to earlier blockchains. 
By redesigning blockchain technology at the protocol level, the æternity developer community has enabled the core protocol to understand and integrate a rich set of functionalities out of the box.
Full specifications and documentation of the protocol are in the [Documentation hub](https://aeternity.com/documentation-hub/).

::: slot buttons

- [Documentation hub](https://aeternity.com/documentation-hub/)
- [GitHub](https://github.com/aeternity)

:::

</Section>

<Section id="technical_advantages" type="fancy">

## Technical advantages

<AdvantagesOrbits />

> ![](./img/Erlang_Icon-alt.svg) 
> 
> Reference implementation written in Erlang by industry experts, the language that powers 90% of today’s world wide web. [Learn more](https://en.wikipedia.org/wiki/Erlang_(programming_language))

</Section>

<Metrics/>

<Section id="state_channels">

## State Channels

State channels make it possible to execute smart contracts off-chain. The blockchain enforces the 
smart contract code, only in the case of a disagreement between the contracting parties. 

::: slot bottom

![](./img/State_Channels.svg)

> ### State Channels
> 
> aeternity can scale to billions
> of transactions with off-chain
> State Channels. [Read more](https://github.com/aeternity/protocol/tree/master/channels)

:::

</Section>


<Include path="sections/protocol" />

<Section id="sophia" type="alt">

## Safe Smart Contract Development with Sophia
Sophia is a functional Smart Contract language in the ML family. It is strongly-typed and has a restricted mutable state. Sophia is a Ocaml-like language with syntax mostly resembling that of Reason.

::: slot body

<div class="sophia-content">
    <div class="sophia-graphic">
        <img src="./img/What_is_Sophia_Graphic.svg" alt="">
    </div>
<div class="sophia-text">

### What is Sophia?
![](./img/Sophia_Icon.svg) The Sophia language was created to easily utilize the potentials of the æternity protocol. Some features of conventional languages, such as floating point arithmetics for example, are not present, while some blockchain-specific primitives, constructions, and types have been added.

### Links
- [Documentation](https://github.com/aeternity/protocol/blob/master/contracts/sophia.md)
- [Examples on GitHub](https://github.com/aeternity/aepp-sophia-examples)
- [Code Highlighting](https://marketplace.visualstudio.com/items?itemName=MilenRadkov.sophia) for VSCode and other IDE’s

### Educational material
![](./img/Dacade_Icon.svg) [Online Course from Dacade.org](https://dacade.org/ae-dev-101/introduction)<br>
Check out the highly recommended æternity 101 course on Dacade, a peer learning platform.
Courses are free and you will be given a certificate upon completion.

</div>
</div>

:::    

::: slot buttons

- [Get help](https://forum.aeternity.com)

  ![](./img/aeternity-logo-small.svg) in the Forum

:::

</Section>

<Section id="getting_started" type="fancy">

## Getting started

In order to get started, try out the community developed online IDE or setup your own development environment with the local development framework AEproject.

- ### ![](./img/Try_it_in_browser_icon.svg) Try it in the browser
  Start writing and testing Sophia Smart Contracts instantly. Click on the link below to launch the Contract compiler.
  - ![](./img/Contracts_Laptop.svg)

    [Contract compiler](https://contracts.aepps.com)

- ### ![](./img/Try_it_locally_icon.svg) Try it locally
  Use AEproject to set up your local development environment in minutes.
  ```
  npm i -g aeproject
  ```
  - ![](./img/Terminal_Laptop.svg)

    [AEproject](https://github.com/aeternity/aepp-aeproject-js)

::: slot buttons

- [Get help](https://forum.aeternity.com)

  ![](./img/aeternity-logo-small.svg) in the Forum

:::

</Section>

<Section id="developer_tools">

## Developer tools
Programming libraries are available. Any Javascript developer can build a simple æternity app in one day. For a quick start and reference SDK it is recommended to use the JavaScript one.

::: slot cards

- ![](./img/Developers_Tools_Section_icons.svg)
  ### Node HTTP API

  Hosted and auto-generated [æternity Node API](https://api-docs.aeternity.io) documentation
- ![](./img/Frontend_icon.svg)
  ### SDK Frontend APIs
  - [JavaScript](https://github.com/aeternity/aepp-sdk-js) (recommended)
  - [Python](https://github.com/aeternity/aepp-sdk-python) (community maintained)
  - [Go](https://github.com/aeternity/aepp-sdk-go) (community maintained)
  - [Java](https://github.com/kryptokrauts/aepp-sdk-java) (community maintained)
  - [Elixir SDK](https://github.com/aeternity/aepp-sdk-elixir) (community maintained)
- ![](./img/Aeternal_icon.svg)
  ### æternal Backend API

  [æternal](https://github.com/aeternity/aeternal) æternal is a caching layer and API server for æternity. It is used to respond to queries faster than the node and to support queries that the node cannot support for efficiency reasons.
- ![](./img/Terminal_icon.svg)
  ### CLI - Command Line Client

  Quickly test all of Aeternity’s blockchain features from your terminal, you can install and use our [NodeJS CLI](https://github.com/aeternity/aepp-cli-js).

:::

::: slot buttons

- [Get help](https://forum.aeternity.com/c/aepplications)

  ![](./img/aeternity-logo-small.svg) in the Forum

:::

</Section>

<Section id="useful" type="alt">

## Useful resources

::: slot cards

- ### Hosted API Server, Public Nodes and Services
  Several hosted services are available to enable quick-start development of blockchain applications on the Testnet. Although all services are also available for the Mainnet, it is not advisable to use them in production environments. <b>Self-hosting critical infrastructure is recommended</b>.
  - Mainnet æternal API Server [https://mainnet.aeternal.io](https://mainnet.aeternal.io)
  - Mainnet API Gateway Nodes hosted on [https://testnet.aeternity.io/api](https://mainnet.aeternity.io/api)
  - Testnet æternal API Server [https://testnet.aeternal.io](https://testnet.aeternal.io)
  - Testnet API Gateway Nodes hosted on [https://testnet.aeternity.io/api](https://testnet.aeternity.io/api)

  > ![](./img/Faucet.svg)
  >
  > To get free Testnet AE tokens, use the [Token Faucet](https://faucet.aepps.com).

- ### Resources
  - #### Blockchain Explorers (Testnet/Mainnet)
    - **æternal Explorer**
      - Mainnet [https://aeternal.io](https://aeternal.io)
      - Testnet [https://testnet.aeternal.io](https://testnet.aeternal.io)
    - **AEknow**
      - [https://aeknow.org](https://aeknow.org)
  - #### Wallets
    - Base æpp (mobile) [https://base.aepps.com](https://base.aepps.com)
    - Ledger Hardware Wallet (desktop) [https://base.aepps.com](https://base.aepps.com)
    - Trust Wallet (Binance)  [https://trustwallet.com](https://trustwallet.com)
    - Waellet (browser extension) [https://waellet.com](https://waellet.com)
    - AirGap (iOS/Android) [https://airgap.it](https://airgap.it)

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
  - [mainnet.aeternal.io](https://mainnet.aeternal.io)
  - [testnet.aeternal.io](https://testnet.aeternal.io)
  - [www.aeknow.org](https://www.aeknow.org)

:::

::: slot bottom

A variety of community build wallets are available, such as:
- [![](./img/Air_Gap_Icon.svg) **Airgap Vault and Wallet**](https://airgap.it)
- [![](./img/Trust_Wallet_Icon.svg) **Trust Wallet**](https://trustwallet.com)

It is possible to buy æternity tokens on exchanges like Binance, OKex, Huobi, gate.io and many
others. A full list of markets can be found via: <a href="https://coinmarketcap.com">coinmarketcap</a>
- [![](./img/Binance_icon.svg) binance](https://www.binance.com)
- [![](./img/Okex_icon.svg) okex](https://www.okex.com)
- [![](./img/Huobi_icon.svg) huobi](https://www.huobi.com)
- [![](./img/Gateio_icon.svg) gate.io](https://www.gate.io)

:::

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
- ### Join an existing mining pool
  [Join](https://www.aeknow.org/miner)

:::

</Section>

<Section id="community" type="alt">

## Join the community
- [![](./img/Forum_icon.svg) Forum](https://forum.aeternity.com)
- [![](./img/Telegram_icon.svg) Telegram](https://telegram.me/aeternity)
- [![](./img/QQ_icon.svg) QQ](http://qm.qq.com/cgi-bin/qm/qr?k=SyRwX1h8CaeNyGpLfy0r74EYqwJ6KERj)
- [![](./img/Twitter_icon.svg) Twitter](https://twitter.com/aeternity)
- [![](./img/Weibo_icon.svg) Weibo](https://weibo.com/aechinacn)
- [![](./img/Youtube_icon.svg) Youtube](https://www.youtube.com/channel/UCEsM0b7QPazeMR80DxNkzCA)
- [![](./img/Development_Grants_icon.svg) Development grants](https://www.aeternity-foundation.org)

</Section>
