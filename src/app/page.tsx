"use client";
import { defineChain, getContract, prepareContractCall } from "thirdweb";
import { client } from "./client";
import {
  ConnectButton,
  TransactionButton,
} from "thirdweb/react";


export default function Home() {

  const contract = getContract({
    client,
    chain: defineChain(50312),
    address: "0xaa4bfa69d2dd6626226cac6aaffda4caadb49869",
  });
  const transaction = prepareContractCall({
    contract,
    method:
      "function registerUser(string username, string name, string _bio, string _dob, string _location, string _tagline)",
    params: [
      "username",
      "name",
      "_bio",
      "_dob",
      "_location",
      "_tagline",
    ],
  });

  return (
    <main className="min-h-screen p-8 flex flex-col items-center gap-6">
      <h1 className="text-2xl font-bold mb-4">Wallet Connection</h1>

      <div className="flex flex-col items-center gap-4">
        <ConnectButton
          client={client}
          accountAbstraction={{
            chain: defineChain(50312),
            sponsorGas: true
          }}

        />
        <TransactionButton
          transaction={() => {
            // Create a transaction object and return it

            return transaction;
          }}

          onError={(error: any) => {
            console.error("Transaction error", error);
          }}
        >
          Confirm Transaction
        </TransactionButton>
      </div>
    </main>
  );
}


