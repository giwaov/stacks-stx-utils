import { callReadOnlyFunction, uintCV, cvToValue } from "@stacks/transactions";
import { StacksMainnet } from "@stacks/network";

async function mathDemo() {
  const pow = await callReadOnlyFunction({
    contractAddress: "SP...",
    contractName: "stx-utils",
    functionName: "pow",
    functionArgs: [uintCV(2), uintCV(10)],
    network: new StacksMainnet(),
    senderAddress: "SP...",
  });
  console.log("2^10 =", cvToValue(pow));
}

mathDemo();
