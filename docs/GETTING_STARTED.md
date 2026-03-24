# Getting Started with stacks-stx-utils

## Prerequisites

- [Stacks CLI](https://docs.stacks.co/references/stacks-cli) installed
- Node.js >= 16
- A Stacks wallet (e.g., Leather or Xverse)

## Installation

```bash
git clone https://github.com/giwaov/stacks-stx-utils.git
cd stacks-stx-utils
npm install
```

## Local Development

```bash
clarinet console
```

## Deploying to Testnet

1. Configure your `Clarinet.toml` with your testnet address
2. Run `clarinet deploy --testnet`
3. Verify on the [Stacks Explorer](https://explorer.stacks.co)

## Running Tests

```bash
clarinet test
```
